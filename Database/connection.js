import mysql from 'mysql2';

export function connection() {
    return new mysql.createConnection({
        host: process.env.DATABASE_CONNECTION,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database:process.env.DATABASE_NAME,
        port: 3306
    })
}
