export default class Product {
    id;
    name;
    price;
    manufacturer;
    sale;
    importedDate;

    constructor(id, name, price, manufacturer, sale, importedDate) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.manufacturer = manufacturer;
        this.sale = sale;
        this.importedDate = importedDate;
    }
}