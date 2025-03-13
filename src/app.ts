import express from 'express';
import countryRoutes from './routes/country.routes';
import holidayRoutes from './routes/user.routes';
import connectDB from './config/db';

connectDB();
const app = express();

app.use(express.json());

app.use('/countries', countryRoutes);
app.use('/users', holidayRoutes);

export default app;