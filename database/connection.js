const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(process.env.CS);

sequelize.authenticate()
  .then(() => {
    console.log("Authenticated, connection");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

  const db = {}
  db.Sequelize = Sequelize
  db.sequelize = sequelize

  db.books= require('./models/book.model')(sequelize,DataTypes)

  sequelize.sync({alter:false}).then(()=>{
    console.log("Migration done successfully");
  })
  module.exports = db
