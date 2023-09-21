import express from 'express';
import {
  createController,
  createMiddleware,
  createValidator,
} from './middleware.js';
const router = express.Router();

router.use(createValidator, createMiddleware, createController);

export default router;
