import Product from "./Product.js";

export default class Food extends Product {
    taste;

    constructor(id, name, price, manufacturer, taste, importedDate) {
        super(id, name, price, manufacturer, 0.02, importedDate);
        this.taste = taste;
    }
}