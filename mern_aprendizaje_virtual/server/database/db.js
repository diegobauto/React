import { createPool } from 'mysql2/promise'

//Credenciales de la base de datos de mysql
export const pool = createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '', 
    database: 'aprendizaje_virtual_db' //Nombre de la base de datos
})