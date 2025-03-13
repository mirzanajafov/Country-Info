import { Request, Response } from 'express';
import { addHolidaysToCalendar } from '../services/calendar.service';

export const addHolidays = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const { countryCode, year, holidays } = req.body;

        const updatedUser = await addHolidaysToCalendar(userId, countryCode, year, holidays);
        res.json(updatedUser);
    } catch (error) {
        res.status(500).send(error.message);
    }
}