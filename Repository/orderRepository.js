import OrderModel from '../Database/models/orderModel.js'
import DatabaseHandler from '../Database/databaseHandler.js'

export default class OrderRepository {
    constructor(connection) {
        this.databaseHandler = new DatabaseHandler(connection)
    }

    getOrderId(id) {
        let sql = `SELECT *
                   FROM tracker.order
                   where id = ${id}`;
        let results = this.databaseHandler.makeQuery(sql);

        if (!results.length) {
            return [];
        }

        return this.processOrder(results)
    }

    getOrdersTitle(title) {
        let sql = ` SELECT * 
                    FROM tracker.order
                    WHERE title like "%${title}%"`;
        let results = this.databaseHandler.makeQuery(sql)

        if (!results.length) {
            return [];
        }

        return results.map((result) => {
            this.processOrder(result)
        });
    }

    getOrders() {
        let sql = `SELECT *
                   FROM tracker.order`;
        let results = this.databaseHandler.makeQuery(sql);

        if (!results.length) {
            return [];
        }

        return results.map((result) => {
            this.processOrder(result)
        })
    }

    insertOrder(orderModel) {
        let sql = `Insert into tracker.order ('title', 'chapter_start', 'chapter_finish', 'type', 'dtc')
                   values (order.title, order.chapter_start, order.chapter_finish, order.type, order.dtc)`

        let results = this.databaseHandler.makeInsert(sql);

        return results.insertId;

    }

    processOrder(result) {
        return new OrderModel(
            result['id'],
            result['title'],
            result['chapter_start'],
            result['chapter_finish'],
            result['type'],
            result['dtc']
        )

    }
}