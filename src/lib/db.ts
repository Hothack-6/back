import mongoose from 'mongoose';

const { DB_URI } = process.env;

class DatabaseNew {
  connection = mongoose.connection;

  constructor() {
    this.connection
      .on('open', console.info.bind(console, `Connected to database: ${DB_URI}`))
      .on('close', console.info.bind(console, 'Database connection: close'))
      .on('disconnected', console.info.bind(console, 'Database connection: disconnecting'))
      .on('disconnected', console.info.bind(console, 'Database connection: disconnected'))
      .on('reconnected', console.info.bind(console, 'Database connection: reconnected'))
      .on('error', console.error.bind(console, 'MongoDB connection: error:'));
  }

  connect = async () => {
    try {
      await mongoose.connect(DB_URI!, {
        maxPoolSize: 5,
      });
    } catch (e) {
      console.error(e);
    }
  };
}

const DB = new DatabaseNew();

export default DB;
