// services/locationService.js
export const getStatesAndTowns = (country) => {
  const data = {
    Nigeria: {
      states: ['Lagos', 'Abuja', 'Kano'],
      towns: {
        Lagos: ['Ikeja', 'Lekki', 'Yaba'],
        Abuja: ['Garki', 'Maitama', 'Wuse'],
        Kano: ['Fagge', 'Nassarawa', 'Gwale'],
      },
    },
    Kenya: {
      states: ['Nairobi', 'Mombasa', 'Kisumu'],
      towns: {
        Nairobi: ['Westlands', 'Karen', 'Kilimani'],
        Mombasa: ['Nyali', 'Mvita', 'Likoni'],
        Kisumu: ['Nyalenda', 'Manyatta', 'Milimani'],
      },
    },
    // Add more countries, states, and towns as needed
  };

  return data[country] || { states: [], towns: {} };
};
