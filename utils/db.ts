import { createPool } from "mysql2/promise";
const { DBHOST, DBUSER, DBNAME } = process.env;

export const pool = createPool({
    host: DBHOST || 'localhost',
    user: DBUSER || 'dbuser',
    // password: DBPASSWORD || 'yourpasshere',
    database: DBNAME || 'quizzy',
    namedPlaceholders: true,
    decimalNumbers: true,
});