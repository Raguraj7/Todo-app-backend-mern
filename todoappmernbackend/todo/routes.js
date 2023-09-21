import express from 'express';
const router = express.Router();
import CreateRouter from './create/router.js';
import ListRouter from './list/router.js';
import UpdateRouter from './update/router.js';
import DeleteRouter from './delete/router.js';

router.post('/create', CreateRouter);
router.get('/list', ListRouter);
router.post('/update', UpdateRouter);
router.delete('/delete', DeleteRouter);

export default router;
