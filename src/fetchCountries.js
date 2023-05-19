let countriesName = '';
const urlAPI = 'https://restcountries.com/v3.1/name/';
const fields = 'name,capital,population,flags,languages';

export default function fetchCountries(countriesName) {
  return fetch(`${urlAPI}${countriesName}?fields=${fields}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => data);
}
