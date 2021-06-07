import Product from "./Product.js";

export default class Household extends Product {
    durability;

    constructor(id, name, price, manufacturer, durability, importedDate) {
        super(id, name, price, manufacturer, 0.1, importedDate);
        this.durability = durability;
    }
}