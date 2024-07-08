// components/CountryDropdown.js
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { getAfricanCountries } from './countryService';

const CountryDropdown = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      const countriesData = await getAfricanCountries();
      setCountries(countriesData);

      // Set Nigeria as the default country
      const defaultCountry = countriesData.find(country => country.label === 'Nigeria');
      setSelectedCountry(defaultCountry);
    };
    fetchCountries();
  }, []);

  const customStyles = {
    control: (provided) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
      borderRadius: '0.625rem', // Tailwind's rounded-md equivalent
      borderColor: '#E0E0E0', // Tailwind's border-gray-300 equivalent
      padding: '0.5rem',
    }),
    option: (provided, state) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
      backgroundColor: state.isFocused ? '#6A1B9A' : 'white',
      color: state.isFocused ? 'white' : 'black',
      padding: '0.5rem',
    }),
  };

  const formatOptionLabel = ({ label, flag }) => (
    <div className="flex items-center">
      <img src={flag} alt={`${label} flag`} className="w-6 h-4 mr-2 rounded-lg" />
      <span>{label}</span>
    </div>
  );

  return (
    <Select
      options={countries}
      styles={customStyles}
      formatOptionLabel={formatOptionLabel}
      placeholder="Select a country"
      value={selectedCountry} // Set the selected country
      onChange={setSelectedCountry} // Update the selected country on change
    />
  );
};

export default CountryDropdown;
