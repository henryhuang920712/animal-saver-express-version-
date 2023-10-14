const { MongoClient } = require("mongodb");

const express = require("express");

// Global variable
let db;

// Connect function
async function connectToDB() {
  try {
    // Connection string
    const uri =
      "mongodb+srv://hamburgerhenry13:mondrole20116@web-app.mjvkbro.mongodb.net/animal-saver?retryWrites=true&w=majority";

    // Database options
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    // Create a new MongoClient
    const client = new MongoClient(uri, options);

    // Connect the client to the server
    await client.connect();

    // Assign the connection to the global variable
    db = client.db();
  } catch (err) {
    console.error(err);
  }
}

// Create an Express app
const app = express();

// Use JSON middleware
app.use(express.json());

app.use(express.static("public"));

// Start the server on port 3000
app.listen(3000, function () {
  console.log("Server is running on http://localhost:3000");
  connectToDB();
});

// Define a route to serve your HTML file
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/html/main.html");
});

app.get("/instruction", function (req, res) {
  res.sendFile(__dirname + "/html/instruction.html");
});

app.get("/form", function (req, res) {
  res.sendFile(__dirname + "/html/form.html");
});

app.get("/preTest", function (req, res) {
  res.sendFile(__dirname + "/html/preTest.html");
});

app.get("/questions", function (req, res) {
  res.sendFile(__dirname + "/html/questions.html");
});

app.get("/result", function (req, res) {
  res.sendFile(__dirname + "/html/result.html");
});

app.get("/answers", function (req, res) {
  res.sendFile(__dirname + "/html/answers.html");
});

// Create a route to get all documents from the collection
app.get("/posts", async (req, res) => {
  try {
    // Get all documents from the collection
    const posts = await db.collection("questions").find().toArray();

    // Send a success response with the posts array
    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    // Send an error response with the error message
    res.status(500).json({ success: false, error: err.message });
  }
});
