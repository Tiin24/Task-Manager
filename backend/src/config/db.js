const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  }
};

const syncDB = async (force = false) => {
  if (force) {
    try {
      await mongoose.connection.dropDatabase();
      console.log('Database dropped and resynchronized');
    } catch (err) {
      console.error('Error dropping database:', err.message);
      process.exit(1);
    }
  }
};

module.exports = { connectDB, syncDB };
