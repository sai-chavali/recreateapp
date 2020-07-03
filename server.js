// Importing Modules
const { Client } = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// importing files
const routes = require('./routes');

// Define Global Variables
const app = express();
const log = console.log;
const PORT = process.env.PORT || 8080; // Step 1

// Step 2
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});

// Configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);

// Step 3
if (process.env.NODE_ENV === 'production') {
  app.use(express.static( 'client/build' ));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html')); // relative path
  });
}

app.listen(PORT, () => {
  log(`Server is starting at PORT: ${PORT}`);
});
