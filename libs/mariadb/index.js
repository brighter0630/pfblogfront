const mariadb = require("mariadb");

export async function connectDB() {
  return await mariadb.createConnection({
    host: process.env.MARIAHOST,
    user: process.env.MARIADBID,
    password: process.env.MARIADBPASSWD,
    database: "pfwebsite",
    port: 3306,
  });
}
