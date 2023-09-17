// import client from "../connectdb";

async function createActivityPostsTable(client: any) {
    try {
  
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS activity_posts (
          id SERIAL PRIMARY KEY,
          user_id INT NOT NULL,
          body TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          likes INT DEFAULT 0,
          is_reply BOOLEAN DEFAULT FALSE,
          is_deleted BOOLEAN DEFAULT FALSE,
          is_edited BOOLEAN DEFAULT FALSE,
          is_spoiler BOOLEAN DEFAULT FALSE,
          reports INT DEFAULT 0,
          FOREIGN KEY (user_id) REFERENCES users (id)
        )`;
  
      await client.query(createTableQuery);
      console.log("Table 'activity_posts' created successfully.");
  
    } catch (error) {
      console.error("Error creating 'activity_posts' table:", error);
    } finally {
    //   await client.end();
        console.log("createActivityPostsTable() function finished.");
    }
  }

export default createActivityPostsTable;