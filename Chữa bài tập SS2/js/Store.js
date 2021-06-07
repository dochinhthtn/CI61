import Product from "./Product.js";

export default class Store {
    products;
    soldProducts;
    revenue;

    constructor() {
        this.products = [];
        this.soldProducts = [];
        this.revenue = 0;
    }

    import(product) {
        if (product instanceof Product) {
            this.products.push(product);
        } else {
            console.log('Không phải product');
        }
    }

    sell(productId) {
        // tìm product có id là productId
        // let found = null;
        // let index = -1;
        // for (let i = 0; i < this.products.length; i++) {
        //     if (this.products[i].id == productId) {
        //         found = this.products[i];
        //         index = i;
        //         break;
        //     }
        // }

        // nếu tìm thấy => thêm vào soldProducts

        // if(found != null) {
        //     this.soldProducts.push(found);
        //     this.products.splice(index, 1);
        //     this.revenue += found.price * (1 - found.sale);
        // }

        // xóa khỏi products
        // cộng vào revenue


        // findIndex
        //index >= 0 nếu tìm thấy phần từ, = -1 nếu ko tìm thấy
        let index = this.products.findIndex(function (product) {
            return product.id == productId;
        });

        if (index >= 0) {
            let product = this.products[index];
            this.soldProducts.push(product);
            this.products.splice(index, 1);
            this.revenue += product.price * (1 - product.sale);
        }
    }

    checkRevenue() {
        return this.revenue;
    }
}