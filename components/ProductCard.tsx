import {Card, CardContent, CardMedia, Typography, Button, Grid} from "@mui/material";
import {FullProduct} from "../interfaces/FullProduct";
import {v4 as uuid} from "uuid";
import styles from '../styles/ProductCard.module.css'

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
            <CardMedia component='img' image={item.image} className={styles.cardMedia}/>
            <CardContent>
                <Typography component='div'>
                    {item.name}
                </Typography>
                <Typography component='div'>
                    {item.price.full} {item.price.currency}
                </Typography>
                <Grid container
                      spacing={0}
                      className={styles.buttonGrid}>
                    {cartItem.length > 0 ?
                        <>
                            <Grid item key={uuid()} xs={4} className={styles.gridButtonMinus}>
                                <Button size={"small"} variant="outlined"
                                        onClick={() => handleRemoveFromCart(item.id)}>-</Button>
                            </Grid>
                            <Grid item key={uuid()} xs={4} className={styles.gridAmountCenter}>
                                {cartItem[0].amount}
                            </Grid>
                            <Grid item key={uuid()} xs={4} className={styles.gridButtonPlus}>
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
