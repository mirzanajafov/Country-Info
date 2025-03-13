import { Request, Response } from 'express';
import { getCountries, getCountryInfo, getPopulationInfoByCountry, getFlagByCountry } from '../services/country.service';

export const fetchCountries = async (req: Request, res: Response) => {
    try {
        const countries = await getCountries();
        res.json(countries);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const fetchCountryInfo = async (req: Request, res: Response) => {
    try {
        const { countryCode } = req.params;
        const countryInfo = await getCountryInfo(countryCode);
        const populationInfo = await getPopulationInfoByCountry(countryInfo.commonName);
        const countryFlag = await getFlagByCountry(countryCode);
        const response = {
            listOfBOrderCountries: countryInfo.borders,
            populationData: populationInfo.populationCounts,
            flagUrl: countryFlag.flag
        }
        res.json(response);
    } catch (error) {
        res.status(500).send(error.message);
    }
}