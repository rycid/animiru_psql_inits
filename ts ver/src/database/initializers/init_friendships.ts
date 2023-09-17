// import client from "../connectdb";

async function createFriendshipsTable(client: any) {
    try {
  
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS friendships(
          id SERIAL PRIMARY KEY,
          user1_id INT NOT NULL,
          user2_id INT NOT NULL,
          FOREIGN KEY (user1_id) REFERENCES users (id),
          FOREIGN KEY (user2_id) REFERENCES users (id),
          CHECK (user1_id < user2_id)
        )
        `;
  
      await client.query(createTableQuery);
      console.log("Table 'friendships' created successfully.");
  
    } catch (error) {
      console.error("Error creating 'friendships' table:", error);
    } finally {
    //   await client.end();
        console.log("createFriendshipsTable() function finished.");
    }
  }

export default createFriendshipsTable;