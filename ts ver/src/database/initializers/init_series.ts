// import client from "../connectdb";

async function createSeriesTable(client: any) {
    try {
  
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS series (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          description VARCHAR(255) NOT NULL,
          status VARCHAR(255) NOT NULL,
          image VARCHAR(255) NOT NULL,
          type VARCHAR(255) NOT NULL,
          series_id VARCHAR(255) UNIQUE NOT NULL,
          views INT DEFAULT 0,
          likes INT DEFAULT 0,
          watchers INT DEFAULT 0,
          average_rating INT DEFAULT 0,
          release_date DATE NOT NULL,
          last_updated DATE NOT NULL,
          age_rating VARCHAR(255) NOT NULL,
          studio VARCHAR(255) NOT NULL,
          episode_count INT DEFAULT 0,
          video_player_image VARCHAR(255) NOT NULL
        )
        `;
  
      await client.query(createTableQuery);
      console.log("Table 'series' created successfully.");
  
    } catch (error) {
      console.error("Error creating 'series' table:", error);
    } finally {
    //   await client.end();
        console.log("createSeriesTable() function finished.");
    }
  }

export default createSeriesTable;