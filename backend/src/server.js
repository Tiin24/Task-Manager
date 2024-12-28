const app = require('./app');
const { connectDB, syncDB } = require('./config/db');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const FORCE_SYNC = process.env.FORCE_SYNC === 'falce'; // si es true dropea los datos, si es falce persiste

const startServer = async () => {
  await connectDB();
  await syncDB(FORCE_SYNC);

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
