import {IProduct} from "../types/IProduct";

export class FullProduct {
    id: number;
    name: string;
    image: string;
    price: {
        full: number,
        currency: string
    };
    amount: number;
    constructor(product: IProduct) {
        this.id = product.id;
        this.name = product.name;
        this.price = product.price;
        this.image = product.image;
        this.amount = 0;
    }
}