import express from 'express';
import { Updatelist, updateValidator } from './middleware.js';
const router = express.Router();

router.use(updateValidator,Updatelist);

export default router;
