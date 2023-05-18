import './css/styles.css';

const DEBOUNCE_DELAY = 300;

import fetchCountriesAPI from './fetchCountries';

fetchCountriesAPI('ar');

const refs = {
    searchInput = document.querySelector("#search-box"),
}