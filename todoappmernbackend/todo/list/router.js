import express from 'express';
import { collectionList } from './middlerware.js';
const router = express.Router();

router.use(collectionList);

export default router;
