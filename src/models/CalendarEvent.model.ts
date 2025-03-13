import {Schema, model, Document} from "mongoose";

export interface ICalendarEvent extends Document {
    userId: string;
    countryCode: string;
    year: number;
    holidays: string[];
    createdAt: Date;
}

const CalendarEventSchema = new Schema<ICalendarEvent>({
    userId: {
        type: String,
        required: true
    },
    countryCode: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    holidays: {
        type: [String],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


export const CalendarEvent = model<ICalendarEvent>('CalendarEvent', CalendarEventSchema);