import ProductList from "../components/ProductList";
import FilterBox from "../components/FilterBox";
import Cart from "../components/Cart";
import initialData from "../products.json"
import React, {useEffect, useState} from "react";
import {Drawer, Grid} from "@mui/material";
import {Box} from "@mui/system";
import {FullProduct} from "../classes/FullProduct";
import {rohlikTheme} from "../themes/RohlikTheme";
import {ThemeProvider} from "@mui/material/styles";
import {v4 as uuid} from "uuid";


export default function Home() {

    const products: FullProduct[] = [];
    initialData.map(product => {
        products.push(new FullProduct(product))
    })
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredProducts, setFilteredProducts] = useState<FullProduct[]>(products)

    const [cartItems, setCartItems] = useState<FullProduct[]>([])

    useEffect(() => {
        if (typeof window !== undefined) {
            const productsWithItemCount: FullProduct[] = [];
            products.forEach(element => {
                const localStorageProduct = localStorage.getItem(element.id.toString())
                if (localStorageProduct !== null && localStorageProduct !== '0') {
                    productsWithItemCount.push({...element, amount: parseInt(localStorageProduct)})
                }
            })
            setCartItems(productsWithItemCount)
        }
    }, [])

    const searchInputHandler = (enteredInput: string) => {
        setSearchTerm(enteredInput);
    }
    useEffect(() => {
        if (searchTerm === '') {
            setFilteredProducts(products)
        } else {
            setFilteredProducts(products.filter(product => product.name.toLowerCase().includes(searchTerm)))
        }
    }, [searchTerm])


    const handleAddToCart = (clickedItem: FullProduct) => {
        setCartItems(prev => {
            const isItemInCart = prev.some(item => item.id === clickedItem.id)
            if (isItemInCart) {
                prev.map(item => addItemToLocalStorage(item));
                return prev.map(item => (
                    item.id === clickedItem.id ? {...item, amount: item.amount + 1} : item
                ))
            }
            addItemToLocalStorage(clickedItem)
            return [...prev, {...clickedItem, amount: clickedItem.amount + 1}]
        })
    };

    const addItemToLocalStorage = (item: FullProduct) => {
        localStorage.setItem(item.id.toString(), (item.amount + 1).toString())
    }

    const handleRemoveFromCart = (id: number) => {
        console.log(cartItems)
        setCartItems(prev => (
            prev.reduce((ack, item) => {
                if (item.id === id) {
                    if (item.amount === 1) {
                        localStorage.removeItem(id.toString())
                        return ack;
                    } else {
                        const subtractedItemAmount = item.amount - 1;
                        localStorage.setItem(id.toString(), subtractedItemAmount.toString())
                        return [...ack, {...item, amount: subtractedItemAmount}]
                    }
                } else {
                    return [...ack, item];
                }
            }, [] as FullProduct[])
        ))
        console.log(cartItems)
    };
    return (
        <ThemeProvider theme={rohlikTheme}>
            <Box component={"div"}>
                <Box component={'div'}
                     style={{position: 'sticky', backgroundColor: '#6DA305', top: '0', height: '50px', zIndex: 2}}
                     display="flex"
                     alignItems="center">
                    <Grid container>
                        <Grid item key={uuid()} xs={3} style={{textAlign: 'right'}}>
                            <FilterBox searchTerm={searchTerm} onSearchInput={searchInputHandler}/>
                        </Grid>
                    </Grid>
                </Box>
                <Grid container justifyContent={"center"} style={{marginTop: '50px'}}>
                    <Grid item key={uuid()} xs={9} style={{marginRight: '280px'}}>
                        <ProductList products={filteredProducts} cartItems={cartItems} handleAddToCart={handleAddToCart}
                                     handleRemoveFromCart={handleRemoveFromCart}/>
                    </Grid>
                    <Grid item key={uuid()} xs={3}>
                        <Drawer anchor="right" variant="permanent"
                                style={{maxWidth: '300px', width: '100%', minWidth: '300px'}}>
                            <Cart cartItems={cartItems} handleAddToCart={handleAddToCart}
                                  handleRemoveFromCart={handleRemoveFromCart}/>
                        </Drawer>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>

    )
}
