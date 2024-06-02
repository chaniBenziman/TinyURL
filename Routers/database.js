import mongoose from "mongoose";

// Replace the uri string with your connection string.
// const uri =
// "mongodb+srv://<username>:<password>@<host>/<dbname>?retryWrites=true&w=majority";

const uriLocal = "mongodb://127.0.0.1:27017/MongoDBs";

const connectDB = async () => {
  await mongoose.connect(uriLocal);
};
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
})

database.once('connected', () => {
  console.log('Database Connected');
})
mongoose.set('toJSON', {
    virtuals: true,
    transform: (doc, converted) => {
      delete converted._id;
    }
  });
  
export default connectDB;
