// import client from "../connectdb";

async function createWatchlistsTable(client: any) {
    try {
  
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS watchlists (
          id SERIAL PRIMARY KEY,
          user_id INT NOT NULL,
          series_id INT NOT NULL,
          FOREIGN KEY (user_id) REFERENCES users (id),
          FOREIGN KEY (series_id) REFERENCES series (id)
        )`;
  
      await client.query(createTableQuery);
      console.log("Table 'watchlists' created successfully.");
  
    } catch (error) {
      console.error("Error creating 'watchlists' table:", error);
    } finally {
    //   await client.end();
        console.log("createWatchlistsTable() function finished.");
    }
  }

export default createWatchlistsTable;