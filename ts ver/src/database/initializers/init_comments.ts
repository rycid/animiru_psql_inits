// import client from "../connectdb";

async function createCommentsTable(client: any) {
    try {
  
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS comments (
          id SERIAL PRIMARY KEY,
          user_id INT NOT NULL,
          episode_id INT NOT NULL,
          body TEXT NOT NULL,
          likes INT DEFAULT 0,
          dislikes INT DEFAULT 0,
          reports INT DEFAULT 0,
          created_at TIMESTAMP DEFAULT NOW(),
          updated_at TIMESTAMP DEFAULT NOW(),
          is_deleted BOOLEAN DEFAULT FALSE,
          is_edited BOOLEAN DEFAULT FALSE,
          is_spoiler BOOLEAN DEFAULT FALSE,
          status VARCHAR(255),
          is_nsfw BOOLEAN DEFAULT FALSE,  
          FOREIGN KEY (user_id) REFERENCES users (id),
          FOREIGN KEY (episode_id) REFERENCES episodes (id)
        )        
        `;
  
      await client.query(createTableQuery);
      console.log("Table 'comments' created successfully.");
  
    } catch (error) {
      console.error("Error creating 'comments' table:", error);
    } finally {
    //   await client.end();
        console.log("createCommentsTable() function finished.");
    }
  }

export default createCommentsTable;