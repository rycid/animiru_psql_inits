// import client from "../connectdb";

async function createUserFollowsTable(client: any) {
    try {
  
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS user_follows (
          id SERIAL PRIMARY KEY,
          follower_id INT NOT NULL,
          following_id INT NOT NULL,
          FOREIGN KEY (follower_id) REFERENCES users (id),
          FOREIGN KEY (following_id) REFERENCES users (id)
        )
        `;
  
      await client.query(createTableQuery);
      console.log("Table 'user_follows' created successfully.");
  
    } catch (error) {
      console.error("Error creating 'user_follows' table:", error);
    } finally {
    //   await client.end();
        console.log("createUserFollowsTable() function finished.");
    }
  }

export default createUserFollowsTable;