import client from "./connectdb";

client.connect();

client.query("SELECT * FROM shows", (err: any, res: any) => {
    if (err) {
        console.log(err.stack);
        client.end();
    } else {
        console.log(res.rows[0]);
        client.end();
    }
});

