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
        this.delivery = delivery;
        this.productList = productList;
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
const deliveryData = {
    store: {
        date: new Date(),
        id: 987
    },
    owner: {
        date: new Date(),
        address: 'Mensk'
    }
};
const cart = new Cart(new Product(prodactsData), new Delivery(deliveryData));
console.log(cart.delivery);
console.log(cart.productList);
