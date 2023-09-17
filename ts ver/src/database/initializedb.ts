import client from "./connectdb";

// initializers
import createActivityPostsTable from "./initializers/init_activity_posts";
import createBadgesTable from "./initializers/init_badges";
import createCommentDislikesTable from "./initializers/init_comment_dislikes";
import createCommentLikesTable from "./initializers/init_comment_likes";
import createCommentsTable from "./initializers/init_comments";
import createEpisodeReportsTable from "./initializers/init_episode_reports";
import createEpisodesTable from "./initializers/init_episodes";
import createFriendshipsTable from "./initializers/init_friendships";
import createGenresTable from "./initializers/init_genres";
import createMessagesTable from "./initializers/init_messages";
import createNotificationsTable from "./initializers/init_notifications";
import createRatingsTable from "./initializers/init_ratings";
import createSeriesTable from "./initializers/init_series";
import createSocialsTable from "./initializers/init_socials";
import createUserBadgesTable from "./initializers/init_user_badges";
import createUsersTable from "./initializers/init_users";
import createWatchlistsTable from "./initializers/init_watchlists";

async function createTables() {
    try {
        await client.connect();
    
        await createUsersTable(client);  
        await createBadgesTable(client);
        await createGenresTable(client);
        await createSeriesTable(client);
        await createEpisodesTable(client);
        await createRatingsTable(client);
        await createCommentsTable(client);
        await createActivityPostsTable(client);
        await createWatchlistsTable(client);
        await createSocialsTable(client);
        await createFriendshipsTable(client);
        await createNotificationsTable(client);
        await createMessagesTable(client);
        await createUserBadgesTable(client);
        await createEpisodeReportsTable(client);
        await createCommentLikesTable(client);
        await createCommentDislikesTable(client);


    } catch (error) {
      console.error("Error creating tables:", error);
    } finally {
      await client.end();
    }
}

createTables();