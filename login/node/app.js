import express from 'express'; // Import express
import detect from 'detect-port'; // Import detect-port
import cors from 'cors'; // Import cors
import db from './database/bd.js'; // Import database
import dotenv from 'dotenv'; // Import dotenv
import authRouter from './routes/authRoutes.js'; // Import routes

dotenv.config(); // Load environment variables from .env file

const DEFAULT_PORT = process.env.PORT || 5000; // Define default app port

// Function to start the server
const startServer = async () => {
  // Connect to the database
  try {
    await db.authenticate();
    console.log('Successful connection to the database');
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
    process.exit(1); // Exit the process if the database fails to connect
  }

  // Check and use available port
  try {
    const port = await detect(DEFAULT_PORT);

    const app = express(); // Create an express instance

    // Middlewares
    app.use(cors()); // Enable Cross-Origin Resource Sharing
    app.use(express.json()); // Parse incoming JSON requests

    // Define routes
    app.use('/auth', authRouter);

    // Start server
    app.listen(port, () =>
      console.log(`Server running at http://localhost:${port}`)
    );
  } catch (error) {
    console.error(`Error detecting port: ${error.message}`);
  }
};

// Start the server
startServer();
