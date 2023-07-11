/* eslint-disable no-console */
const mongoose = require('mongoose');

const connectDb = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(
    `MongoDb Database Successfully Connected with HOST: ${conn.connection.host}`,
  );
};
// const connectDb = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI_LOCAL, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//       useUnifiedTopology: true,
//     });
//     console.log(
//       `MongoDb Database Successfully Connected with HOST: ${conn.connection.host}`,
//     );
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// };

module.exports = connectDb;
