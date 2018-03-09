const Sequelize = require("sequelize");

const dbName = process.env.DB || "congregreat";
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT || 5306;

//Setting up the config
const sequelize = new Sequelize(
  dbName,
  dbUser,
  dbPass,
  {
    host: dbHost,
    port: dbPort,
    dialect: 'mysql'
  }
);

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected");
  } catch (err) {
    console.log("Could not connect: ", err);
  }
}

connect();
