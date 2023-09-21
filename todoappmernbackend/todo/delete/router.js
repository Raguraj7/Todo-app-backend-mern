import express from 'express';
import { deleteOneTODO } from './middleware.js';

const router = express.Router();

router.use(deleteOneTODO);

export default router;
