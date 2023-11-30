import express from 'express';
import { completedList } from './middleware.js';
const router = express.Router();

router.use(completedList);

export default router;