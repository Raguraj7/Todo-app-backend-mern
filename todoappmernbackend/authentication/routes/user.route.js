import express from 'express';
const router = express.Router();

router.get('/signup',(req,res)=>{
    res.json({message:'Api is working'})
})

export default router;