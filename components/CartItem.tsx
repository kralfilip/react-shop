import {FullProduct} from "../interfaces/FullProduct";
import React from "react";
import {Box} from "@mui/system";
import {Button, CardMedia, Grid, Typography} from "@mui/material";
import {v4 as uuid} from "uuid";
import styles from '../styles/CartItem.module.css'

type Props = {
    item: FullProduct;
    handleAddToCart: (clickedItem: FullProduct) => void;
    handleRemoveFromCart: (id: number) => void;
}

const CartItem: React.FC<Props> = ({item, handleAddToCart, handleRemoveFromCart}) => {
    return (
        <Box component={"div"} className={styles.main}>
            <Grid container justifyContent={"center"}>
                <Grid item key={uuid()} xs={3}>
                    <CardMedia component='img' image={item.image}
                               className={styles.cartMedia}/>
                </Grid>
                <Grid item key={uuid()} xs={9}>
                    <Box component={"div"}>
                        <Typography component={"h3"}>{item.name}</Typography>
                        <Typography
                            component={"p"}>{(item.amount * item.price.full).toFixed(2)} {item.price.currency}</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container
                  spacing={0}
                  className={styles.buttonGrid}>
                <Grid item key={uuid()} xs={5} className={styles.gridButtonMinus}>
                    <Button size="small" variant={'outlined'}
                            onClick={() => handleRemoveFromCart(item.id)}>
                        -
                    </Button>
                </Grid>
                <Grid item key={uuid()} xs={2} className={styles.gridAmountCenter}>
                    <Typography component={"p"}>{item.amount}</Typography>

                </Grid>
                <Grid item key={uuid()} xs={5} className={styles.gridButtonPlus}>
                    <Button size="small" variant={"contained"}
                            onClick={() => handleAddToCart(item)}>
                        +
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default CartItem;