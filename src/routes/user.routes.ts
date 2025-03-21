import express from 'express';
import { addHolidays } from '../controllers/user.controller';

const router = express.Router();

router.post('/:userId/calendar/holidays', addHolidays);

export default router;