import {FullProduct} from "../classes/FullProduct";
import React from "react";
import {Box} from "@mui/system";
import {Button, CardMedia, Grid, Typography} from "@mui/material";
import {v4 as uuid} from "uuid";

type Props = {
    item: FullProduct;
    handleAddToCart: (clickedItem: FullProduct) => void;
    handleRemoveFromCart: (id: number) => void;
}

const CartItem: React.FC<Props> = ({item, handleAddToCart, handleRemoveFromCart}) => {
    return (
        <Box component={"div"} style={{marginTop: '20px', marginLeft: '10px', maxHeight: '170px', minHeight: '100px'}}>
            <Grid container justifyContent={"center"}>
                <Grid item key={uuid()} xs={3}>
                    <CardMedia component='img' image={item.image} style={{
                        objectFit: "contain",
                        maxHeight: '50px', width: '100%', maxWidth: '50px', height: '100%'
                    }}/>
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
                  justifyContent="center"
                  spacing={0}
                  alignItems="center"
                  style={{marginTop: '15px'}}>
                <Grid item key={uuid()} xs={5} style={{textAlign: "right"}}>
                    <Button size="small" variant={'outlined'}
                            onClick={() => handleRemoveFromCart(item.id)}>
                        -
                    </Button>
                </Grid>
                <Grid item key={uuid()} xs={2} style={{textAlign: "center"}}>
                    <Typography component={"p"}>{item.amount}</Typography>

                </Grid>
                <Grid item key={uuid()} xs={5} style={{textAlign: "left"}}>
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