import {v4 as uuid} from "uuid";
import {Grid, Stack} from "@mui/material";
import ProductCard, {IProduct} from "./ProductCard"
import React from "react";


const ProductList: React.FC<{products: IProduct[], cartItems: IProduct[], handleAddToCart(clickedItem: IProduct): void, handleRemoveFromCart(clickedItem: number): void}> = (props) => {
    return (
        <Grid container rowSpacing={1} columnSpacing={{xs: 12, sm: 2, md: 3}}>
            {props.products
                .map((product) => {
                const key = uuid();
                return (
                    <Grid item key={key} xs={12} sm={4}>
                        <ProductCard key={product.id} item={product} cartItems={props.cartItems} handleAddToCart={props.handleAddToCart} handleRemoveFromCart={props.handleRemoveFromCart}/>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default ProductList

