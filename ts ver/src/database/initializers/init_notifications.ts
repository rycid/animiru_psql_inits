// import client from "../connectdb";

async function createNotificationsTable(client: any) {
    try {
  
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS notifications (
          id SERIAL PRIMARY KEY,
          user_id INT NOT NULL,
          notification_type VARCHAR(255) NOT NULL,
          series_id INT,
          message TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT NOW(),
          is_read BOOLEAN DEFAULT FALSE,
          FOREIGN KEY (user_id) REFERENCES users (id),
          FOREIGN KEY (series_id) REFERENCES series (id)
        )
        `;
  
      await client.query(createTableQuery);
      console.log("Table 'notifications' created successfully.");
  
    } catch (error) {
      console.error("Error creating 'notifications' table:", error);
    } finally {
    //   await client.end();
        console.log("createNotificationsTable() function finished.");
    }
  }

export default createNotificationsTable;