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

const ORDER_TABLE = "`order`"
const DATABASE_FOR_QUERY = `\`${process.env.DATABASE_NAME}\``;

const getOrderId = (id) => {
    let sql = `SELECT *
               FROM ${DATABASE_FOR_QUERY}.${ORDER_TABLE}
               WHERE id = ${id}`;

    let databaseHandler = new DatabaseHandler(connection())
    let results = databaseHandler.makeQuery(sql);

    if (results === null || results.length) {
        return [];
    }

    return processOrder(results)
}

const getOrdersTitle = (title) => {
    let sql = ` SELECT *
                FROM ${DATABASE_FOR_QUERY}.${ORDER_TABLE}
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
    let sql = `SELECT * FROM ${DATABASE_FOR_QUERY}.${ORDER_TABLE}`;
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
    console.log(orderModel)
    let sql = `Insert into ${DATABASE_FOR_QUERY}.${ORDER_TABLE} (\`title\`, \`chapter_start\`, \`chapter_finish\`, \`type\`, \`dtc\`) values ("${orderModel._title}", "${orderModel._chapterStart}", "${orderModel._chapterFinish}", "${orderModel._type}", CURRENT_TIMESTAMP)`;

    console.log(sql);
    let databaseHandler = new DatabaseHandler(connection())
    let results = databaseHandler.makeInsert(sql);

    return results;
}

export {getOrderId, getOrdersTitle, getAllOrders, insertOrder}