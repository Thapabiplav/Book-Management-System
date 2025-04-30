const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(process.env.CS);

sequelize.authenticate()
  .then(() => {
    console.log("Authenticated, connection");
  })
  .catch((err) => {
    console.log("Error" + err);
  });
