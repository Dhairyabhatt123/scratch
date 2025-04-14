const mongoose = require('mongoose');
const config = require('config');
const dbgr = require('debug')("development: mongoose")

// Connect to MongoDB using mongoose
mongoose.connect(`${config.get("MONGODB_URI")}/scratch`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    dbgr('MongoDB connected successfully');
  })
  .catch((err) => {
    dbgr('Error connecting to MongoDB:', err);
  });

// Export the connection object for use in other files
module.exports = mongoose.connection;
