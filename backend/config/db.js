const mongoose = require("mongoose");
const connection = async () => {
  try {
    await mongoose.connect(
      process.env.DB_URL,
      () => {
        console.log(`Connection Sucessfull`);
      },
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (error) {
    console.log(`Connection to Db fail`);
    console.log(error);
    process.emit(1);
  }
};
module.exports = connection;
