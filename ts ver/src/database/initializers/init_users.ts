// import client from "../connectdb";

async function createUsersTable(client: any) {
    try {
  
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          username VARCHAR(255) NOT NULL,
          display_name VARCHAR(255) NOT NULL,
          password_hash VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          email_verified BOOLEAN DEFAULT FALSE,
          discord_id VARCHAR(255) NOT NULL,
          twitter_id VARCHAR(255) NOT NULL,
          facebook_id VARCHAR(255) NOT NULL,
          google_id VARCHAR(255) NOT NULL,
          profile_pic VARCHAR(255) NOT NULL,
          banner_pic VARCHAR(255) NOT NULL,
          bio VARCHAR(255) NOT NULL,
          location VARCHAR(255) NOT NULL,
          timezone VARCHAR(255) NOT NULL,
          join_date TIMESTAMP DEFAULT NOW(),
          last_login TIMESTAMP DEFAULT NOW(),
          last_online TIMESTAMP DEFAULT NOW(),
          is_online BOOLEAN DEFAULT FALSE,
          is_premium BOOLEAN DEFAULT FALSE,
          is_admin BOOLEAN DEFAULT FALSE,
          watcher_exp INT DEFAULT 0,
          watcher_tier INT DEFAULT 1,
          twofactor_enabled BOOLEAN DEFAULT FALSE,
          twofactor_secret VARCHAR(255) NOT NULL,
          twofactor_backup_codes VARCHAR(255) NOT NULL,
          is_suspended BOOLEAN DEFAULT FALSE,
          is_banned BOOLEAN DEFAULT FALSE,
          is_deleted BOOLEAN DEFAULT FALSE,
          is_beta_tester BOOLEAN DEFAULT FALSE
        )`;
  
      await client.query(createTableQuery);
      console.log("Table 'users' created successfully.");
  
    } catch (error) {
      console.error("Error creating 'users' table:", error);
    } finally {
    //   await client.end();
        console.log("createUsersTable() function finished.");
    }
  }

export default createUsersTable;