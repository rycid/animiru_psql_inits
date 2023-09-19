// import client from "../connectdb";

async function createEpisodesTable(client: any) {
    try {
  
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS episodes (
          id SERIAL PRIMARY KEY,
          series_id INT NOT NULL,
          season_number INT NOT NULL,
          episode_number INT NOT NULL,
          title VARCHAR(255) NOT NULL,
          description TEXT NOT NULL,
          release_date DATE,
          image VARCHAR(255) NOT NULL,
          video_url VARCHAR(255) NOT NULL,
          views INT DEFAULT 0,
          shares INT DEFAULT 0,
          is_filler BOOLEAN DEFAULT FALSE,
          intro_timestamp INT,
          outro_timestamp INT,
          intro_length INT DEFAULT 90,
          outro_length INT DEFAULT 90,
          is_dubbed BOOLEAN DEFAULT FALSE,
          is_subbed BOOLEAN DEFAULT TRUE,
          scraped_url VARCHAR(255) NOT NULL,
          is_dead_link BOOLEAN DEFAULT FALSE,
          FOREIGN KEY (series_id) REFERENCES series (id)          
        )
        `;
  
      await client.query(createTableQuery);
      console.log("Table 'episodes' created successfully.");
  
    } catch (error) {
      console.error("Error creating 'episodes' table:", error);
    } finally {
    //   await client.end();
        console.log("createEpisodesTable() function finished.");
    }
  }

export default createEpisodesTable;