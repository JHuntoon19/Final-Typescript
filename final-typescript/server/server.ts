import express, { Request, Response } from 'express';
import sqlite3 from 'sqlite3';
import path from 'path';
//import middle ware
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const compression = require('compression')
const helmet = require('helmet')
const cors = require('cors')
//Create express app
const app = express();

const port = process.env.PORT || 5000;
//implement middleware
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(bodyParser.json())
// Serve static files from the React app
// app.use(express.static(path.join(__dirname, '../build')));
// Handle all other routes and return the React app
app.get("/", (req: Request, res: Response) => {

  res.send("Welcome to our backedn!");
  // res.sendFile(path.join(__dirname, '../build', 'index.html'));

});

app.listen(port, () => {

  console.log(`Server is running on port ${port}`);

});
//Connect to database
const db = new sqlite3.Database('../db/fastFood.db', (err) => {

  if (err) {

    console.error('Error opening database:', err.message);

  } else {

    console.log('Connected to the SQLite database.');

  }

});
app.get('/api/data', (req: Request, res: Response) => {
  console.log("APID DATA")
  db.all('SELECT * FROM Restuarants', [], (err, rows) => {

    if (err) {

      res.status(400).json({ error: err.message });

      return;

    }

    res.json(rows);

  });
});