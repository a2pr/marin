class DatabaseHandler {
    constructor(connection) {
        this.connection = connection
    }

    makeQuery(query) {
        let queryResult = null;
        this.connect();
        this.connection.query(query, (error, results, fields) => {
            if (error) {
                throw error;
            }
            queryResult = results;
        })

        this.end();

        return queryResult;
    }

    makeInsert(query) {
        this.connect();
        let queryResult;
        this.connection.query(query, (error, results) => {
            if (error) {
                throw error;
            }
            console.info(`Insert new entry ${results.affectedRows}`)
            queryResult = results;
        })

        this.end();

        return queryResult;
    }

    connect() {
        this.connection.connect(function (err) {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
            console.log('connected as id ' + connection.threadId);
        });
    }

    end() {
        this.connection.end();
    }
}