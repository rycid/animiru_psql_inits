// import client from "../connectdb";

async function createCommentLikesTable(client: any) {
    try {
  
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS comment_likes (
          id SERIAL PRIMARY KEY,
          user_id INT NOT NULL,
          comment_id INT NOT NULL,
          timestamp TIMESTAMP DEFAULT NOW(),
          FOREIGN KEY (user_id) REFERENCES users (id),
          FOREIGN KEY (comment_id) REFERENCES comments (id)
        )
        `;
  
      await client.query(createTableQuery);
      console.log("Table 'comment_likes' created successfully.");
  
    } catch (error) {
      console.error("Error creating 'comment_likes' table:", error);
    } finally {
    //   await client.end();
        console.log("createCommentLikesTable() function finished.");
    }
  }

export default createCommentLikesTable;