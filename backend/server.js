const app = require("./app.js");
const dotenv = require("dotenv");
const { connect } = require("http2");
const path = require("path");
const connectDatabase = require("./config/database.js");

dotenv.config({ path: path.join(__dirname, "config/config.env") });
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `SERVER LISTING TO THE PORT ${process.env.PORT} IN ${process.env.NODE_ENV}`
  );
});

process.once("unhandledRejection", (err) => {
  console.log(`Error : ${err.message}`);
  console.log("Shutting down the server due to databae not connected");
  server.close(() => {
    process.exit(1);
  });
});

process.on("uncaughtException", (err) => {
  console.log(`Error : ${err.message}`);
  console.log("Shutting down the server due to uncaughet Error");
  server.close(() => {
    process.exit(1);
  });
});
// console.log(a)
