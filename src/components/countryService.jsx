import axios from 'axios';

export const getAfricanCountries = async () => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/region/africa');
    return response.data.map(country => ({
      label: country.name.common,
      value: country.cca2,
      flag: country.flags.png,
    }));
  } catch (error) {
    console.error("Error fetching countries", error);
    return [];
  }
};
