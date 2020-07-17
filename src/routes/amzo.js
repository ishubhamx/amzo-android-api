import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
    console.log(req.body);
  return res.json({'data':"somedata"});
});
router.get('/', (req, res) => {
    console.log(req.body);
  return res.json({'data':"somedata"});
});

export default router;