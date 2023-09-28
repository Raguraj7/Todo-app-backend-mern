import cors from 'cors';
import env from 'dotenv';
import express from 'express';
import TodoRouter from './todoappmernbackend/todo/routes.js';

env.config();
const app = express();
const port = process.env.PORT || 8001;
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});
app.use(TodoRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
