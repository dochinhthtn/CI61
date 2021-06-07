import Product from "./Product.js";

export default class Cloth extends Product {
    original;
    material;

    constructor(id, name, price, manufacturer, orginal, material, importedDate) {
        super(id, name, price, manufacturer, 0.05, importedDate);
        this.original = orginal;
        this.material = material;
    }
}