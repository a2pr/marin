import OrderModel from "../Database/models/orderModel.js";
import * as orderRepository from "../Repository/orderRepository.js";

export const getOrders = (req, res, next) => {

    let orders = orderRepository.getAllOrders();
    console.log(orders)
    res.status(200).json()
    next();
}

export const getById = (req, res, next) => {
    console.log(`get request by ${req.params.id}`)

    res.status(200).json(
        orderRepository.getOrderId(req.body.id)
    )

    next();
}

export const getByTitle = (req, res, next) => {
    console.log(`get request by title`)

    res.status(200).json(
        orderRepository.getOrdersTitle(req.body.title)
    )
    next();
}

export const postNew = (req, res, next) => {
    console.log(`post new`)

    let requestOrder = OrderModel.fromRequest(req.body)
    res.status(200).json(
        orderRepository.insertOrder(requestOrder)
    )
    next();
}