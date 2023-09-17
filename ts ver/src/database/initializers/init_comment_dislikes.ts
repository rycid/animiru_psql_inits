// import client from "../connectdb";

async function createCommentDislikesTable(client: any) {
    try {
  
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS comment_dislikes (
          id SERIAL PRIMARY KEY,
          user_id INT NOT NULL,
          comment_id INT NOT NULL,
          timestamp TIMESTAMP DEFAULT NOW(),
          FOREIGN KEY (user_id) REFERENCES users (id),
          FOREIGN KEY (comment_id) REFERENCES comments (id)
        )
        `;
  
      await client.query(createTableQuery);
      console.log("Table 'comment_dislikes' created successfully.");
  
    } catch (error) {
      console.error("Error creating 'comment_dislikes' table:", error);
    } finally {
    //   await client.end();
        console.log("createCommentDislikesTable() function finished.");
    }
  }

export default createCommentDislikesTable;