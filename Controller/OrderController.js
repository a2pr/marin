import OrderRepository from '../Repository/orderRepository'

export default class OrderController{
    constructor(connection) {
        this.orderRepository = new OrderRepository(connection);
    }

    get(req, res, next) {
        console.log(`get request`)
        next();
    }

    getById(req, res, next) {
        console.log(`get request by ${req.params.id}`)
        next();
    }

    getByTitle(req, res, next) {
        console.log(`get request by title`)
        next();
    }

    postNew(req, res, next) {
        console.log(`post new`)
        next();
    }
}