    import mysql from 'mysql2'
    import dotenv from 'dotenv'
    dotenv.config();

    const pool = mysql.createPool({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
    }).promise();

    export async function getQuestions() {
        const [rows] = await pool.query('SELECT * FROM questions');
        return rows;
    }

    export async function sendData(test){
        const [rows] = await pool.query(
        'INSERT INTO questions (question, opt_a, opt_b, opt_c, opt_d, answer) VALUES ?',
        [test]
        );
        return rows;    
    }