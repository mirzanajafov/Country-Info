import express from 'express';
import { fetchCountries, fetchCountryInfo } from '../controllers/country.controller';

const router = express.Router();

router.get('/', fetchCountries);
router.get('/:countryCode', fetchCountryInfo);

export default router;