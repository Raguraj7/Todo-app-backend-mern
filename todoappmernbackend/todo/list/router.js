import express from 'express';
import { collectionList } from './middleware.js';
const router = express.Router();

router.use(collectionList);

export default router;
