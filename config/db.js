//server.js
require('dotenv').config();

const mongoose = require('mongoose');
function connectDB() {
    // Database connection 🥳
   mongoose.connect(process.env.MONGO_CONNECTION_URL).then(() => {
  console.log("DB Connected");
});

mongoose.connection.on("error", err => {
 console.log(`DB Connection Error: ${err.message}`);
});
}

// mIAY0a6u1ByJsWWZ

module.exports = connectDB;