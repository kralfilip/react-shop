import {IProduct} from "./ProductCard";
import React from "react";
import {Box} from "@mui/system";
import {Button, Typography} from "@mui/material";

type Props = {
    item: IProduct;
    handleAddToCart: (clickedItem: IProduct) => void;
    handleRemoveFromCart: (id: number) => void;
}

const CartItem:React.FC<Props> = ({item, handleAddToCart, handleRemoveFromCart}) => {
return (
    <Box component={"div"}>
        <Typography component={"h5"}>Shopping cart Image</Typography>
        <Box component={"div"}>
            <Typography component={"h3"}>{item.name}</Typography>
            <Typography component={"p"}>{(item.amount === undefined ? 0 : item.amount * item.price.full).toFixed(2)} {item.price.currency}</Typography>
        </Box>
        <Box component={"div"}>
            <Button size="small"
                    onClick={() => handleRemoveFromCart(item.id)}>
                -
            </Button>
            <Typography component={"p"}>{item.amount}</Typography>
            <Button size="small"
                    onClick={() => handleAddToCart(item)}>
                +
            </Button>
        </Box>
    </Box>
    )
}

export default CartItem;