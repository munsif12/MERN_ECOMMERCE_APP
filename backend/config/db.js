// require("dotenv").config(); agr ya  na b likho to chally ga bcoz main server wali file ma likh deya h
const mongoose = require("mongoose");
const connection = async () => {
  try {
    await mongoose
      .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log(`Connection to MongoDb Atlas Success`))
      .catch((error) => {
        console.error(`Connection to Db fail`);
        console.error(error);
        process.exit(1);
      });
  } catch (error) {
    console.error(`Connection to Db fail`);
    console.error(error);
    process.exit(1);
  }
};
module.exports = connection;
