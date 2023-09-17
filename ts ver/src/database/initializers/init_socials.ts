// import client from "../connectdb";

async function createSocialsTable(client: any) {
    try {
  
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS socials (
          id SERIAL PRIMARY KEY,
          user_id INT NOT NULL,
          platform VARCHAR(50) NOT NULL,
          handle VARCHAR(255) NOT NULL,
          hidden BOOLEAN DEFAULT FALSE,
          is_verified BOOLEAN DEFAULT FALSE,
          FOREIGN KEY (user_id) REFERENCES users (id)
        )
        `;
  
      await client.query(createTableQuery);
      console.log("Table 'socials' created successfully.");
  
    } catch (error) {
      console.error("Error creating 'socials' table:", error);
    } finally {
    //   await client.end();
        console.log("createSocialsTable() function finished.");
    }
  }

export default createSocialsTable;