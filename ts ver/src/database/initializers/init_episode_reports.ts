// import client from "../connectdb";

async function createEpisodeReportsTable(client: any) {
    try {
  
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS episode_reports (
          id SERIAL PRIMARY KEY,
          user_id INT NOT NULL,
          episode_id INT NOT NULL,
          report_type VARCHAR(255) NOT NULL,
          report_description VARCHAR(255) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (user_id) REFERENCES users (id),
          FOREIGN KEY (episode_id) REFERENCES episodes (id)         
        )
        `;
  
      await client.query(createTableQuery);
      console.log("Table 'episode_reports' created successfully.");
  
    } catch (error) {
      console.error("Error creating 'episode_reports' table:", error);
    } finally {
    //   await client.end();
        console.log("createEpisodeReportsTable() function finished.");
    }
  }

export default createEpisodeReportsTable;