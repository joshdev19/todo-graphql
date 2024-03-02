import mysql from 'mysql2/promise';

export const performDataConnection = async (stmt: any, value: string) => {

    const pool = mysql.createPool({
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        host: process.env.MYSQL_HOST,
        queueLimit: 0,
        connectionLimit: 5,
        waitForConnections: true
    });

    try {
        const connection = await pool.getConnection();
        const [ row, field ] = await connection.query(stmt, value);
        return row
    } catch (error) {
        return {
            error: {
                error
            }
        }
    }

};