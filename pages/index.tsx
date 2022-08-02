import ProductList from "../components/ProductList";
import FilterBox from "../components/FilterBox";
import Cart from "../components/Cart";
import initialData from "../products.json"
import {useEffect, useState} from "react";
import ProductCard, {IProduct} from "../components/ProductCard";
import {Drawer} from "@mui/material";
import {Box} from "@mui/system";

export default function Home() {

    const products = initialData;
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredProducts, setFilteredProducts] = useState<IProduct[]>(initialData)
    const [cartItems, setCartItems] = useState<IProduct[]>([])

    const searchInputHandler = (enteredInput: string) => {
        setSearchTerm(enteredInput);
    }
    useEffect(() => {
        if (searchTerm === '') {
            setFilteredProducts(products)
        } else {
            console.log('useeffect searchterm' + searchTerm);
            setFilteredProducts(products.filter(product => product.name.toLowerCase().includes(searchTerm)))
        }
    },[searchTerm])

    const handleAddToCart = (clickedItem: IProduct) => {
        setCartItems(prev => {
            const isItemInCart = prev.find(item => item.id === clickedItem.id)

            if (isItemInCart) {
                return prev.map(item => (
                    item.id === clickedItem.id ? { ...item, amount: item.amount === undefined ? item.amount = 1 : item.amount + 1} : item
                ))
            }
            return [...prev, { ...clickedItem, amount: 1}]
        })
    };
    const handleRemoveFromCart = (id: number) =>  {
        setCartItems(prev => (
            prev.reduce((ack, item) => {
                if (item.id === id) {
                    if (item.amount === 1) {
                        return ack;
                    } else {
                        return [...ack, {...item, amount: item.amount === undefined ? item.amount = 0 : item.amount - 1}]
                    }
                } else {
                    return [...ack, item];
                }
            }, [] as IProduct[])
        ))
    };
    return (
        <Box component={"div"}>
            <FilterBox searchTerm={searchTerm} onSearchInput={searchInputHandler}/>
            <ProductList products={filteredProducts} cartItems={cartItems} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart}/>
            <Drawer anchor="right" variant="permanent">
                <Cart cartItems={cartItems} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart}/>
            </Drawer>
        </Box>
)
}
