export type IProduct = {
    id: number;
    name: string;
    image: string;
    price: {
        full: number,
        currency: string
    };
}