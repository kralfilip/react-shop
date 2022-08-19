import CartItem from "./CartItem";
import {FullProduct} from "../classes/FullProduct";
import {Divider, Typography} from "@mui/material";
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
        <Box component={"div"} style={{maxWidth:'270px', minWidth:'270px'}}>
            {cartItems.length === 0 ? <Typography component={"p"}> No items in cart</Typography> : null}
            {cartItems.map(item => (
                <>
                    <CartItem key={item.id} item={item} handleAddToCart={handleAddToCart}
                              handleRemoveFromCart={handleRemoveFromCart}/>
                    <Divider style={{marginTop:'10px'}}/>
                </>

            ))}
            <Box component={"div"} style={{width:'100%'
            }}>
                <Typography component={"h2"}>Total cost: {calculateTotal(cartItems).toFixed(2)} CZK</Typography>
            </Box>
        </Box>
    )
}

export default Cart;