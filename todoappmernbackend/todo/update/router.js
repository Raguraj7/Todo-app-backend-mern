import express from 'express';
import { Updatelist } from './middleware.js';
const router = express.Router();

router.use(Updatelist);

export default router;
