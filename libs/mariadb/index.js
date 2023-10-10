// const mariadb = require("mariadb");

// const conn = await mariadb.createConnection({
//   host: "127.0.0.1",
//   user: "brighter87",
//   password: "1234",
//   database: "pfwebsite",
//   port: 3306,
// });

// module.exports = conn;

const mariadb = require("mariadb");

export async function connectDB() {
  return await mariadb.createConnection({
    host: "127.0.0.1",
    user: "brighter87",
    password: "1234",
    database: "pfwebsite",
    port: 3306,
  });
}
