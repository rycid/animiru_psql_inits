// import client from "../connectdb";

async function createActivityPostsTable(client: any) {
    try {
  
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS activity_posts (
          id SERIAL PRIMARY KEY,
          author_id INT NOT NULL,
          body TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          likes INT DEFAULT 0,
          is_reply BOOLEAN DEFAULT FALSE,
          parent_id INT,
          is_deleted BOOLEAN DEFAULT FALSE,
          is_edited BOOLEAN DEFAULT FALSE,
          is_spoiler BOOLEAN DEFAULT FALSE,
          reports INT DEFAULT 0,
          FOREIGN KEY (author_id) REFERENCES users (id),
          FOREIGN KEY (parent_id) REFERENCES activity_posts (id)
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