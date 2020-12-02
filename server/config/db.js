import mongoose from 'mongoose';

const connectDatabase = async () => {
  let dbCon;
  try {
    dbCon = await mongoose.connect(process.env.DATABASE_CLOUD, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (error) {
    console.log(error.message);
  }

  console.log(`Connected to mongodb ${dbCon.connection.host}`);
};

export default connectDatabase;
