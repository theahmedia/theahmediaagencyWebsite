import express from 'express';
import dash from '../../frend/src/dashboard/dash.jsx';

const router = express.Router();

router.get('/', (req, res) => {
    dash
});

export default router;