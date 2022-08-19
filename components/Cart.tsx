import CartItem from "./CartItem";
import {FullProduct} from "../classes/FullProduct";
import {Divider, Typography, Grid} from "@mui/material";
import {Box} from "@mui/system";
import React from "react";


type Props = {
    cartItems: FullProduct[];
    handleAddToCart: (clickedItem: FullProduct) => void;
    handleRemoveFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({cartItems, handleAddToCart, handleRemoveFromCart}) => {
    const calculateTotal = (items: FullProduct[]) =>
        items.reduce((prevItem, item) => prevItem + item.amount * item.price.full, 0);
    return (
        <Box component={"div"} style={{maxWidth: '270px', minWidth: '270px'}}>
            <Box component={'div'}
                 style={{position: 'sticky', backgroundColor: '#5C5C5C', top: '0', height: '50px', zIndex: 1}}
                 display="flex"
                 alignItems="center"
                 justifyContent="center">
                {cartItems.length === 0 ?
                    <Typography component={"h1"} fontSize={20} fontWeight={'bold'} color={'white'}> Add something to the
                        cart</Typography> :
                    <Typography component={"h1"} fontSize={20} fontWeight={'bold'} color={'white'}>Total
                        cost: {calculateTotal(cartItems).toFixed(2)} CZK</Typography>}

            </Box>
            {cartItems.map(item => (
                <>
                    <CartItem key={item.id} item={item} handleAddToCart={handleAddToCart}
                              handleRemoveFromCart={handleRemoveFromCart}/>
                    <Divider style={{marginTop: '10px'}}/>
                </>

            ))}

        </Box>
    )
}

export default Cart;