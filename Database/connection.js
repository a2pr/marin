import mysql from 'mysql';

export function connection() {
    return mysql.createConnection({
        host: process.env.DATABASE_CONNECTION,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD
    })
}
