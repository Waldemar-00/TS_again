"use strict";
class Product {
    constructor(productList) {
        this.productList = productList;
    }
}
class Delivery {
    constructor(delivery) {
        this.delivery = delivery;
    }
}
class Cart {
    constructor(productList, delivery) {
        this.totalPrice = 0;
        this.delivery = delivery;
        this.products = productList;
    }
    addProduct(product) {
        this.products.productList.push(product);
    }
    deleteProduct(id) {
        this.products.productList = this.products.productList.filter((prod) => prod.id !== id);
    }
    getTotalPrice() {
        this.totalPrice = 0;
        this.products.productList.forEach(prod => this.totalPrice += prod.price);
    }
    sendDelivery() {
        if ('id' in this.delivery.delivery)
            return `Send the product in the Store with number: ${this.delivery.delivery.id} on ${this.delivery.delivery.date}`;
        else if (this.delivery.delivery.hasOwnProperty('address'))
            return `Send the product to the Owner on address: ${this.delivery.delivery.address}, on ${this.delivery.delivery.date}`;
    }
    ckechData() {
        if (this.products.productList.length === 0)
            return `You need to put products in the cart!`;
        if (!this.delivery)
            return `You need to add an address!`;
        if (this.products && this.delivery)
            return `All right. We have all the data for making a delivery!`;
    }
}
const prodactsData = [
    {
        id: 77,
        name: 'banana',
        price: 5.45
    },
    {
        id: 121,
        name: 'apple',
        price: 2.93
    },
    {
        id: 987,
        name: 'pineapple',
        price: 7.88
    }
];
const deliveryStore = {
    date: new Date(2025, 0, 6, 15, 0),
    id: 987
};
const deliveryOwner = {
    date: new Date(2024, 11, 30, 17, 45),
    address: 'Mensk'
};
const cart = new Cart(new Product(prodactsData), new Delivery(deliveryStore));
const cart2 = new Cart(new Product(prodactsData), new Delivery(deliveryOwner));
cart.addProduct({
    id: 400,
    name: 'potato',
    price: 1.2
});
cart.getTotalPrice();
console.log(cart.totalPrice);
cart.deleteProduct(77);
console.log(cart.delivery);
console.log(cart.products);
console.log('_________________________');
console.log(cart.ckechData(), cart.sendDelivery());
console.log(cart2.ckechData(), cart2.sendDelivery());
