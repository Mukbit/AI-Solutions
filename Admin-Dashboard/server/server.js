require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const cors = require("cors");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

const app = express();
app.use(cors());


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Failed to connect to MongoDB:", error));

// Apollo Server setup
const server = new ApolloServer({ typeDefs, resolvers });

// Start the Apollo Server and apply middleware
const startServer = async () => {
  await server.start(); // Ensure server starts before applying middleware
  server.applyMiddleware({ app }); // Apply GraphQL middleware to Express app

  // Start the Express server
  app.listen(5001, console.log("Server is running on PORT "));
  app.use("/", (req, res) => {
    res.send("Server running");
    console.log("Server running on http://localhost:5001");
  });
};

// Initialize the server
startServer();