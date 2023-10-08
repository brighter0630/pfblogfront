const mariadb = require("mariadb");

export default async function executeQuery(query) {
  const conn = await mariadb.createConnection({
    host: "127.0.0.1",
    user: "brighter87",
    password: "1234",
    database: "pfwebsite",
    port: 3306,
  });
  try {
    const res = await conn.query(query);
    console.log("Query Succeeded!!");
    return res;
  } catch (error) {
    throw new Error(error);
  }
}
