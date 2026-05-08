const fs = require("fs");
const path = require("path");

const logDirectory = path.join(__dirname, "userlogs");

if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

const accessLogStream = fs.createWriteStream(
  path.join(logDirectory, "access.log"),
  { flags: "a" }
);

module.exports = accessLogStream;