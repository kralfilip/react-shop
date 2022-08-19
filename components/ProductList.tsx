import {v4 as uuid} from "uuid";
import {Grid, Stack} from "@mui/material";
import ProductCard from "./ProductCard"
import {FullProduct} from "../classes/FullProduct";
import React from "react";


const ProductList: React.FC<{products: FullProduct[], cartItems: FullProduct[], handleAddToCart(clickedItem: FullProduct): void, handleRemoveFromCart(clickedItem: number): void}> = (props) => {
    return (
        <Grid justifyContent={"center"} container columnSpacing={3} rowSpacing={3}>
            {props.products
                .map((product) => {
                const key = uuid();
                return (
                    <Grid item key={key} xs={4} sm={3} style={{ display: 'grid' }}>
                        <ProductCard key={product.id} item={product} cartItems={props.cartItems} handleAddToCart={props.handleAddToCart} handleRemoveFromCart={props.handleRemoveFromCart}/>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default ProductList

