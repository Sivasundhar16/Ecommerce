const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URI, {
      // patser means collectiong ingo from link
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(`Mongodb is connected to the host : ${con.connection.host} `);
    });
};
module.exports = connectDatabase;
