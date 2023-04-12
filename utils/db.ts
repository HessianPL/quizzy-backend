import { createPool } from "mysql2/promise";
import {config} from "../config/config";


const {dbHost, dbUser, dbPassword, dbDatabase} = config;

export const pool = createPool({
    host: dbHost || 'localhost',
    user: dbUser || 'root',
    password: dbPassword || '',
    database: dbDatabase || 'quizzy',
    namedPlaceholders: true,
    decimalNumbers: true,
});