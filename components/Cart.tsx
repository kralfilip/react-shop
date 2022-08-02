import CartItem from "./CartItem";
import {IProduct} from "./ProductCard"
import {Typography} from "@mui/material";
import {Box} from "@mui/system";

type Props = {
    cartItems: IProduct[];
    handleAddToCart: (clickedItem: IProduct) => void;
    handleRemoveFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({cartItems, handleAddToCart, handleRemoveFromCart}) => {
    return (
        <Box component={"div"}>
            <Typography component={"h2"}>Your shopping cart</Typography>
            {cartItems.length === 0 ? <Typography component={"p"}> No items in cart</Typography> : null }
            {cartItems.map(item => (
                <CartItem key={item.id} item={item} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} />
            ))}
        </Box>
    )
}

export default Cart;