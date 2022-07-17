import OrderModel from "../Database/models/orderModel.js";
import * as orderRepository from "../Repository/orderRepository.js";

export const getOrders = async (req, res, next) => {

    let orders = await orderRepository.getAllOrders();
    console.log(orders)
    res.status(200).json(orders)
    next();
}

export const getById = (req, res, next) => {
    console.log(`get request by ${req.params.id}`)
    let result = false

    try {
        result = orderRepository.getOrderId(req.body.id)
    } catch (e) {
        console.error(`Something wrong happen ${e}`);
    }

    res.status(result ? 200 : 400).json(
        {
            "result": result
        }
    )
    next();
}

export const getByTitle = (req, res, next) => {
    console.log(`get request by title`)
    let result = false

    try {
        result = orderRepository.getOrdersTitle(req.body.title)
    } catch (e) {
        console.error(`Something wrong happen ${e}`);
    }

    res.status(result ? 200 : 400).json(
        {
            "result": result
        }
    )
    next();
}

export const postNew = (req, res, next) => {
    console.log(`post new`)

    let requestOrder = OrderModel.fromRequest(req.body)
    let result = false;

    try {
        result = orderRepository.insertOrder(requestOrder)
    } catch (e) {
        console.error(`Something wrong happen ${e}`)
    }


    res.status(result ? 200 : 400).json(
        {
            "result": result
        }
    )

    next();
}