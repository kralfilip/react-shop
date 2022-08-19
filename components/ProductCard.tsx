import {Card, CardContent, CardMedia, Typography, Button, Grid} from "@mui/material";
import {FullProduct} from "../classes/FullProduct";
import {v4 as uuid} from "uuid";


type Props = {
    item: FullProduct;
    cartItems: FullProduct[];
    handleAddToCart: (clickedItem: FullProduct) => void;
    handleRemoveFromCart: (id: number) => void;
}


const ProductCard: React.FC<Props> = ({item, cartItems, handleAddToCart, handleRemoveFromCart}) => {
    const cartItem = cartItems.filter(cartItem => cartItem.id === item.id);
    return (
        <Card elevation={4}>
            <CardMedia component='img' image={item.image} style={{
                objectFit: "contain",
                maxHeight: '120px',
                width: '100%',
                maxWidth: '400px',
                height: '100%'
            }}/>
            <CardContent>
                <Typography component='div'>
                    {item.name}
                </Typography>
                <Typography component='div'>
                    {item.price.full} {item.price.currency}
                </Typography>
                <Grid container
                      justifyContent="center"
                      spacing={0}
                      alignItems="center"
                      style={{marginTop: '10px'}}>
                    {cartItem.length > 0 ?
                        <>
                            <Grid item key={uuid()} xs={4} style={{textAlign: "right"}}>
                                <Button size={"small"} variant="outlined" style={{width: '55px'}}
                                        onClick={() => handleRemoveFromCart(item.id)}>-</Button>
                            </Grid>
                            <Grid item key={uuid()} xs={4} style={{textAlign: "center"}}>
                                {cartItem[0].amount}
                            </Grid>
                            <Grid item key={uuid()} xs={4} style={{textAlign: "left"}}>
                                <Button size={"small"} variant="contained"
                                        onClick={() => handleAddToCart(item)}>+</Button>

                            </Grid>

                        </>
                        :
                        <Button size={"small"} variant="outlined" onClick={() => handleAddToCart(item)}>Add to
                            cart</Button>
                    }
                </Grid>

            </CardContent>
        </Card>
    )
}


export default ProductCard
