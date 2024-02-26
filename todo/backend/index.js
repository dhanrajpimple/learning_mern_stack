import express from 'express';
import connectDB from './database.js';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes.js';

dotenv.config({ path: './.env' });

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.json());
connectDB();

app.use('/api', router);

app.listen(3001, () => {
  console.log(`⚙️ Server is running at port: ${process.env.PORT}`);
});
