const mongoose = require('mongoose');

// MongoDB URI
const dbUri = "mongodb://127.0.0.1:27017/scratch";

// Connect to MongoDB using mongoose
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Export the connection object for use in other files
module.exports = mongoose.connection;
