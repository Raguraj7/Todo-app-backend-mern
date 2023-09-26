import express from 'express';
import {
  createController,
  createValidator,
} from './middleware.js';
const router = express.Router();

router.use(createValidator, createController);

export default router;
