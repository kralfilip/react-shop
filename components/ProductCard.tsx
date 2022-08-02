import {Card, CardContent, CardMedia, Typography, Button, Grid} from "@mui/material";
import {useState} from "react";

export type IProduct = {
    id: number;
    name: string;
    image: string;
    amount?: number;
    price: {
        full: number,
        currency: string
    };
}

type Props = {
    item: IProduct;
    cartItems: IProduct[];
    handleAddToCart: (clickedItem: IProduct) => void;
    handleRemoveFromCart: (id: number) => void;
}



const ProductCard: React.FC<Props> = ({item, cartItems, handleAddToCart, handleRemoveFromCart}) => {
    const cartItem = cartItems.filter(cartItem => cartItem.id === item.id);
    return (
        <Card sx={{maxHeight: 350, maxWidth:350}}>
            <CardMedia component='img' height='40%' width='40%' image={item.image} />
            <CardContent>
                <Typography component='div'>
                    {item.name}
                </Typography>
                <Typography component='div'>
                    {item.price.full} {item.price.currency}
                </Typography>
                {cartItem.length > 0 ?
                    <Grid container justifyContent="center">
                        <Button size={"small"} variant="outlined" onClick={() => handleRemoveFromCart(item.id)}>-</Button>
                        {cartItem[0].amount}
                        <Button size={"small"} variant="contained" onClick={() => handleAddToCart(item)}>+</Button>
                    </Grid>
                    :
                    <Grid container justifyContent="center">
                        <Button size={"small"} variant="outlined" onClick={() => handleAddToCart(item)}>Add to cart</Button>
                    </Grid>
                }
            </CardContent>
        </Card>
    )
}


export default ProductCard
