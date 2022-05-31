import OrderModel from '../Database/models/orderModel.js'
import DatabaseHandler from '../Database/databaseHandler.js'
import {connection} from "../Database/connection.js";

function processOrder(result) {
    return new OrderModel(
        result['id'],
        result['title'],
        result['chapter_start'],
        result['chapter_finish'],
        result['type'],
        result['dtc']
    )

}

const getOrderId = (id) => {
    let sql = `SELECT *
               FROM ${process.env.DATABASE_CONNECTION}.order
               where id = ${id}`;

    let databaseHandler = new DatabaseHandler(connection())
    let results = databaseHandler.makeQuery(sql);

    if (results === null || results.length) {
        return [];
    }

    return processOrder(results)
}

const getOrdersTitle = (title) => {
    let sql = ` SELECT *
                FROM ${process.env.DATABASE_CONNECTION}.order
                WHERE title like "%${title}%"`;

    let databaseHandler = new DatabaseHandler(connection())
    let results = databaseHandler.makeQuery(sql)

    if (results === null || results.length) {
        return [];
    }

    return results.map((result) => {
        processOrder(result)
    });
}

const getAllOrders = () => {
    let sql = `SELECT *
               FROM ${process.env.DATABASE_CONNECTION}.order`;
    console.log(sql);

    let databaseHandler = new DatabaseHandler(connection())
    let results = databaseHandler.makeQuery(sql);

    if (results === null || results.length) {
        return [];
    }

    return results.map((result) => {
        processOrder(result)
    })
}

const insertOrder = (orderModel) => {
    let sql = `Insert into ${process.env.DATABASE_CONNECTION}.order ('title', 'chapter_start', 'chapter_finish', 'type', 'dtc')
               values (order.title, order.chapter_start, order.chapter_finish, order.type, order.dtc)`


    let databaseHandler = new DatabaseHandler(connection())
    let results = databaseHandler.makeInsert(sql);

    return results.insertId;
}

export {getOrderId, getOrdersTitle, getAllOrders, insertOrder}