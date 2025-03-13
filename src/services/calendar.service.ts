import axios from "axios";
import { CalendarEvent, ICalendarEvent } from "../models/CalendarEvent.model";

const BASE_URL = "https://date.nager.at/api/v3";

export const addHolidaysToCalendar = async (userId: string, countryCode: string, year: number, holidays?: string[]): Promise<ICalendarEvent> => {
    const response = await axios.get(`${BASE_URL}/PublicHolidays/${year}/${countryCode}`);
    const countryHolidays = response.data;

    const selectedHolidays = holidays ? countryHolidays.filter((holiday: any) => holidays.includes(holiday.name)) : countryHolidays;

    const calendarEvent = new CalendarEvent({
        userId,
        countryCode,
        year,
        holidays: selectedHolidays.map((holiday: any) => holiday.name)
    });
    
    await calendarEvent.save();

    return calendarEvent;
}