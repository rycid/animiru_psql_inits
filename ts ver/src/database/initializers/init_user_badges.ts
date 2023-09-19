// import client from "../connectdb";

async function createUserBadgesTable(client: any) {
    try {
  
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS user_badges (
          id SERIAL PRIMARY KEY,
          user_id INT NOT NULL,
          badge_id INT NOT NULL,
          date_earned TIMESTAMP NOT NULL DEFAULT NOW(),
          FOREIGN KEY (user_id) REFERENCES users (id),
          FOREIGN KEY (badge_id) REFERENCES badges (id)
        )
        `;
  
      await client.query(createTableQuery);
      console.log("Table 'user_badges' created successfully.");
  
    } catch (error) {
      console.error("Error creating 'user_badges' table:", error);
    } finally {
    //   await client.end();
        console.log("createUserBadgesTable() function finished.");
    }
  }

export default createUserBadgesTable;