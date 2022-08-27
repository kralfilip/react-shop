export interface Product {
    id: number;
    name: string;
    image: string;
    price: {
        full: number,
        currency: string
    };
}