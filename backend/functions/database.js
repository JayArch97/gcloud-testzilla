    import mysql from 'mysql2'
    import dotenv from 'dotenv'
    import {Connector} from '@google-cloud/cloud-sql-connector'
    dotenv.config();

    const connector = new Connector();
    const clientOptions = await connector.getOptions({
        instanceConnectionName: 'acostajulio-dev:us-central1:gpc-test-db',
        ipType: 'PUBLIC',
    });

    const pool = mysql.createPool({
        ...clientOptions,
        user: 'root',
        password: 'Javascript1997!',
        database: 'gcp_testzilla_db'
    }).promise();

    export async function getData(){
        const [rows] = await pool.query('SELECT * FROM questions');
        return rows;
    }

     export async function getQuestions(contains){
        const [rows] =  await pool.query('SELECT * FROM questions WHERE questions LIKE ?', [contains]);
        return rows;
    }


    export async function getUsers(){
        const [rows] =  await pool.query('SELECT * FROM Users');
        return rows;
    }

    export async function getScores(){
        const [rows] =  await pool.query('SELECT * FROM Scorecard');
        return rows;
    }

    
    export async function sendData(test){
        const [rows] = await pool.query(
        'INSERT INTO questions (questions, opt_a, opt_b, opt_c, opt_d, answer) VALUES ?',
        [test]
        );
        return rows;    
    }