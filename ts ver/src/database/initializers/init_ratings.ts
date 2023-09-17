// import client from "../connectdb";

async function createRatingsTable(client: any) {
    try {
  
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS ratings (
          id SERIAL PRIMARY KEY,
          user_id INT NOT NULL,
          series_id INT NOT NULL,
          rating INT NOT NULL,
          progress_at_review INT NOT NULL,
          is_preliminary BOOLEAN NOT NULL,
          review TEXT,
          created_at TIMESTAMP DEFAULT NOW(),
          likes INT DEFAULT 0,
          dislikes INT DEFAULT 0,
          reports INT DEFAULT 0,
          FOREIGN KEY (user_id) REFERENCES users (id),
          FOREIGN KEY (series_id) REFERENCES series (id)
        )
        `;
  
      await client.query(createTableQuery);
      console.log("Table 'ratings' created successfully.");
  
    } catch (error) {
      console.error("Error creating 'ratings' table:", error);
    } finally {
    //   await client.end();
        console.log("createRatingsTable() function finished.");
    }
  }

export default createRatingsTable;