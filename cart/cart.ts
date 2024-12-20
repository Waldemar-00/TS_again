interface IDelivery
{
    store: {
        date: Date
        id: number
    };
    owner: {
        date: Date
        address: string
    }
}
interface IProduct
{
    id: number,
    name: string,
    price: number
}
class Product
{
    productList: IProduct[]
    constructor ( productList: IProduct[] )
    {
        this.productList = productList
    }
}
class Delivery
{
    delivery: IDelivery
    constructor ( delivery: IDelivery )
    {
        this.delivery = delivery
    }
}
class Cart
{
    productList: Product
    delivery: Delivery
    constructor (productList: Product, delivery: Delivery)
    {
        this.delivery = delivery;
        this.productList = productList;
    }
}
const prodactsData: IProduct[] = [
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
]
const deliveryData: IDelivery = {
    store: {
        date: new Date(),
        id: 987
    },
    owner: {
        date: new Date(),
        address: 'Mensk'
    }
}
const cart = new Cart( new Product( prodactsData ), new Delivery( deliveryData ) )
console.log( cart.delivery )
console.log( cart.productList )
