import OrderRepository from "../Repository/orderRepository.js";
import OrderModel from "../Database/models/orderModel.js";

export default class OrderController {
    constructor(connection) {
        this.orderRepository = new OrderRepository(connection);
    }

    get(req, res, next) {
        res.status(200).json(this.orderRepository.getOrders())
        next();
    }

    getById(req, res, next) {
        console.log(`get request by ${req.params.id}`)

        res.status(200).json(
            this.orderRepository.getOrderId(req.body.id)
        )

        next();
    }

    getByTitle(req, res, next) {
        console.log(`get request by title`)

        res.status(200).json(
            this.orderRepository.getOrdersTitle(req.body.title)
        )
        next();
    }

    postNew(req, res, next) {
        console.log(`post new`)

        let requestOrder = OrderModel.fromRequest(req.body)
        res.status(200).json(
            this.orderRepository.insertOrder(requestOrder)
        )
        next();
    }
}