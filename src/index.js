import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import fetchCountriesAPI from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const refs = {
  searchInputEl: document.querySelector('input#search-box'),
  countryListEl: document.querySelector('.country-list'),
  countryInfoEl: document.querySelector('.country-info'),
};

refs.searchInputEl.addEventListener(
  'input',
  debounce(fetchCountry, DEBOUNCE_DELAY)
);

function fetchCountry(e) {
  const nameCountry = e.target.value.trim();

  if (nameCountry.length === 0) {
    cleaningScreen();
    return;
  }

  cleaningScreen();

  fetchCountriesAPI(nameCountry)
    .then(CheckingNumberOfCountries)
    .catch(error => {
      cleaningScreen();

      Notify.failure('Oops, there is no country with that name');
    });
}

function CheckingNumberOfCountries(countryArr) {
  if (countryArr.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
  } else if (countryArr.length >= 2 && countryArr.length <= 10) {
    refs.countryListEl.insertAdjacentHTML(
      'afterbegin',
      renderListCountries(countryArr)
    );
  } else if (countryArr.length === 1) {
    refs.countryInfoEl.insertAdjacentHTML(
      'afterbegin',
      renderCountry(countryArr)
    );
  }
}

function renderListCountries(countryArr) {
  cleaningScreen();

  let delayAnim = 0;

  return countryArr
    .map(({ name, flags }) => {
      const strCountry = `<li class="country__item" style="animation-delay: ${delayAnim}ms">
      <img src="${flags.svg}"  alt="${name.official}" style="margin-right: 10px"  width="50"/>
      <p style="font-weight: 700">${name.official}</p>
        </li>`;

      delayAnim += 200;

      return strCountry;
    })
    .join('');
}

function renderCountry(countryArr) {
  cleaningScreen();

  let delayAnim = 0;
  const { name, capital, population, languages, flags } = countryArr[0];
  let updatePopulation = updateNumToDelimitedString(population);
  const languagesString = changeObjToString(languages);

  return `<div><img src="${flags.svg}" alt="${
    name.official
  }" width="50" style="margin-right: 10px">
  <h1 style="margin: 0">${name.official}</h1></div>
<p style="animation-delay: ${(delayAnim = 100)}ms""><span>Capital:</span> ${capital}</p>
<p style="animation-delay: ${(delayAnim = 200)}ms" class="population"><span>Population:</span> ${updatePopulation}</p>
<p style="animation-delay: ${(delayAnim = 300)}ms""><span >Languages:</span> ${languagesString}</p>`;
}

function updateNumToDelimitedString(num) {
  return String(num).replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ');
}

function changeObjToString(obj) {
  const objValues = Object.values(obj);

  return objValues.join(', ');
}

function cleaningScreen() {
  refs.countryListEl.innerHTML = '';
  refs.countryInfoEl.innerHTML = '';
}
