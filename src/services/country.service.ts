import axios from "axios";

const BASE_URL_NAGER = "https://date.nager.at/api/v3";
const BASE_URL_COUNTRIESNOW = "https://countriesnow.space/api/v0.1";

export const getCountries = async () => {
  const response = await axios.get(`${BASE_URL_NAGER}/AvailableCountries`);
  return response.data;
};

export const getCountryInfo = async (countryCode: string) => {
    const response = await axios.get(`${BASE_URL_NAGER}/CountryInfo/${countryCode}`);
    return response.data;
}

export const getPopulationInfoByCountry = async (countryName: string) => {
    const response = await axios.post(`${BASE_URL_COUNTRIESNOW}/countries/population`, {
        country: countryName
    });
    return response.data.data;
}

export const getFlagByCountry = async (countryCode: string) => {
    const response = await axios.post(`${BASE_URL_COUNTRIESNOW}/countries/flag/images`, {
        iso2: countryCode
    });
    return response.data.data;
}