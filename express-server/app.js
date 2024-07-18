// Import required libraries
const express = require('express'); // Express framework for building web applications
const morgan = require('morgan'); // Morgan for logging HTTP requests
const bodyParser = require('body-parser'); // Body-parser for parsing request bodies

// Create an instance of an Express application
const app = express();

// Use morgan middleware for logging HTTP requests in the 'dev' format
app.use(morgan('dev'));

// Use body-parser middleware to parse JSON bodies
app.use(bodyParser.json());

// Use body-parser middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Define a GET route for the root URL ('/')
app.get('/', (req, res) => {
  // Respond with a welcome message
  res.send('Hello, welcome to the Express server!');
});

// Define a GET route for the '/about' URL
app.get('/about', (req, res) => {
  // Respond with a description of the server
  res.send('This server is built using Express and demonstrates basic middleware integration.');
});

// Middleware to handle routes not found (404)
app.use((req, res) => {
  // Respond with a 404 status and a message
  res.status(404).send('Route not found');
});

// Define the port number the server will listen on
const PORT = 3000;

// Start the server and listen on the defined port
app.listen(PORT, () => {
  // Log a message indicating the server is running and the port number
  console.log(`Server is running on port ${PORT}`);
});
