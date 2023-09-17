// import client from "../connectdb";

async function createBadgesTable(client: any) {
    try {
  
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS badges (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          description VARCHAR(255) NOT NULL,
          image VARCHAR(255) NOT NULL,
          type VARCHAR(255) NOT NULL,
          info_url VARCHAR(255) NOT NULL
        )
        `;
  
      await client.query(createTableQuery);
      console.log("Table 'badges' created successfully.");
  
    } catch (error) {
      console.error("Error creating 'badges' table:", error);
    } finally {
    //   await client.end();
        console.log("createBadgesTable() function finished.");
    }
  }

export default createBadgesTable;