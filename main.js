const http = require("http");
const fs = require("fs");
const path = require("path");

const filePath = process.argv[2] || __filename;

if (!filePath) {
  process.exit(1);
}

const absolutePath = path.resolve(filePath);

const server = http.createServer((req, res) => {
  fs.readFile(absolutePath, "utf8", (err, data) => {
    if (err) {
      res.write(err.toString());
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = server;
