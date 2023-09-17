// import client from "../connectdb";

async function createMessagesTable(client: any) {
    try {
  
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS messages (
          id SERIAL PRIMARY KEY,
          sender_id INT NOT NULL,
          receiver_id INT NOT NULL,
          body TEXT NOT NULL,
          date_sent TIMESTAMP NOT NULL,
          is_read BOOLEAN NOT NULL,
          is_deleted BOOLEAN NOT NULL,
          FOREIGN KEY (sender_id) REFERENCES users (id),
          FOREIGN KEY (receiver_id) REFERENCES users (id)
        )
        `;
  
      await client.query(createTableQuery);
      console.log("Table 'messages' created successfully.");
  
    } catch (error) {
      console.error("Error creating 'messages' table:", error);
    } finally {
    //   await client.end();
        console.log("createMessagesTable() function finished.");
    }
  }

export default createMessagesTable;