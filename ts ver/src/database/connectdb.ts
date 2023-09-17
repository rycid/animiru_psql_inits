import { Client } from "pg";

const client = new Client({
    host: "localhost",
    port: 5432,
    database: "animiru",
    user: "postgres",
    password: "12345678",
});

// client.connect();


export default client;