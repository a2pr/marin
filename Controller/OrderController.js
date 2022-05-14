import OrderModel from "../Database/models/orderModel.js";

export default class OrderController {
    constructor(orderRepo) {
        this.orderRepository = orderRepo;
        console.log(this.orderRepository);
    }

    getOrders(req, res, next) {
        /**@todo not working
         *
         */
        console.log(this)
        let orders = orderRepository.getOrders();
        console.log(orders)
        res.status(200).json()
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