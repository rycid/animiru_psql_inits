// import client from "../connectdb";

async function createGenresTable(client: any) {
    try {
  
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS genres (
          id SERIAL PRIMARY KEY,
          name VARCHAR(50) NOT NULL,
          description VARCHAR(255) NOT NULL,
          image VARCHAR(255) NOT NULL
        )
        `;
  
      await client.query(createTableQuery);
      console.log("Table 'genres' created successfully.");
  
    } catch (error) {
      console.error("Error creating 'genres' table:", error);
    } finally {
    //   await client.end();
        console.log("createGenresTable() function finished.");
    }
  }

export default createGenresTable;