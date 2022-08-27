import CartItem from "./CartItem";
import {FullProduct} from "../interfaces/FullProduct";
import {Divider, Typography} from "@mui/material";
import {Box} from "@mui/system";
import React from "react";
import styles from '../styles/Cart.module.css'


type Props = {
    cartItems: FullProduct[];
    handleAddToCart: (clickedItem: FullProduct) => void;
    handleRemoveFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({cartItems, handleAddToCart, handleRemoveFromCart}) => {
    console.log(cartItems)
    const calculateTotal = (items: FullProduct[]) =>
        items.reduce((prevItem, item) => prevItem + item.amount * item.price.full, 0);
    return (
        <Box component={"div"} className={styles.main}>
            <Box component={'div'}
                 className={styles.priceBar}>
                {cartItems.length === 0 ?
                    <Typography component={"h1"} className={styles.priceText}> Add something to the
                        cart</Typography> :
                    <Typography component={"h1"} className={styles.priceText}>Total
                        cost: {calculateTotal(cartItems).toFixed(2)} CZK</Typography>}
            </Box>
            {cartItems.map(item => (
                <Box key={item.id}>
                    <CartItem key={item.id} item={item} handleAddToCart={handleAddToCart}
                              handleRemoveFromCart={handleRemoveFromCart}/>
                    <Divider className={styles.divider}/>
                </Box>
            ))}
        </Box>
    )
}

export default Cart;