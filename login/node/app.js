import express from 'express' // import express
import detect from 'detect-port'// detect-port import
import cors from 'cors' // cors import
import db from './database/bd.js' // database import
import dotenv from 'dotenv' // dotevn import

dotenv.config(); // Load environment variables from .env file

const DEFAULT_PORT = process.env.PORT || 5000; // handle the app port

//database connection
try {
  await db.authenticate();
  console.log('Succesful connection to database');
} catch (error) {
  console.log(`The connection error is: ${error}`);
}


detect(DEFAULT_PORT).then(port => {

  const app = express() //express instance
  app.use(cors)
  app.use(express.json)




  app.listen(port, () => console.log(`Server running at http://localhost:${port}`))

}).catch(err => {
  console.error(`Error detecting port: ${err.message}`);
});


