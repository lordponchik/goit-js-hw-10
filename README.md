<h1 id="home">Homework :clipboard:</h1>

## goit-js-hw-10


* 🇺🇸 [English](#en)
* 🇺🇦 [Ukrainian](#uk)
* 🇷🇺 [Russian](#ru)

--- 

<h3 id="en">📚 EN 📚</h3>

# Acceptance criteria

- `goit-js-hw-10` repository created.
- In your submitted homework, there are two links: One to your source files and one to your working page on `GitHub Pages`.
- During live page visits, there are no errors or warnings generated in the console.
- Project built with [parcel-project-template](https://github.com/goitacademy/parcel-project-template).
- Code formatted with `Prettier`.

## Start files

In the [src folder](./src), you will find start files. Copy them to your project completely, replacing the `src` folder in [parcel-project-template](https://github.com/goitacademy/parcel-project-template). To do this, download this entire repository as an archive or use the [DownGit service](https://downgit.github.io/) to download a separate folder from the repository.

## Task - country search

Create a front-end part of the application to search for information about countries by their partial or full names. Check out the [demo video](https://user-images.githubusercontent.com/17479434/131147741-7700e8c5-8744-4eea-8a8e-1c3d4635248a.mp4) of the app.

### HTTP requests

Use the public API [Rest Countries](https://restcountries.com/), namely [resource name](https://restcountries.com/#api-endpoints-v3-name), which returns an array of country objects that match the search criteria. Add at least some decoration to the interface elements.

Write a function, `fetchCountries(name)`, that makes an HTTP request to [resource name](https://restcountries.com/#api-endpoints-v3-name) and returns a promise with an array of countries - the result of your request. Move it to a separate file called `fetchCountries.js` and make a named export.

### Field filtering

The back-end returns objects with some properties most of which you do not need. To reduce the amount of data transferred, add a string of request parameters - this is how this back-end implements field filtering. Check out the [filter syntax documentation](https://restcountries.com/#filter-response).

You only need the following properties:

- `name.official` - full name of the country
- `capital` - capital
- `population` - population
- `flags.svg` - link to flag images
- `languages` - array of languages

### Search box

The user enters the name of the country to search for in the `input#search-box` text field. HTTP requests are made by typing the country name, that is, on the `input` event. However, you cannot make a request every time a key is pressed, since many requests will be made at the same time, and they will be executed in an unpredictable order.

It is necessary to use the `Debounce` technique on the event handler and make an HTTP request `300ms` after the user has stopped typing text. Use the [lodash.debounce](https://www.npmjs.com/package/lodash.debounce) package.

If the user clears the search box completely, the HTTP request is not executed, and the country list markup or country information disappears.

Sanitize the entered line using the `trim()` method, which will solve the problem when there are only spaces in the input field or at the beginning/end of the line.

### Interface

If the back-end returns more than 10 countries, a notification appears in the interface saying that the name should be more specific. For notifications, use the [notiflix library](https://github.com/notiflix/Notiflix#readme) and display this line: `"Too many matches found. Please enter a more specific name."`.

![Too many matches alert](https://raw.githubusercontent.com/goitacademy/javascript-homework/main/v2/10/preview/too-many-matches.png)

If the back-end returns from 2 to 10 countries, a list of found countries is displayed under the text field. Each list item consists of a flag and country name.

![Country list UI](https://raw.githubusercontent.com/goitacademy/javascript-homework/main/v2/10/preview/country-list.png)

If the request results in an array with one country, the interface displays the card markup with information about the country: flag, name, capital, population and languages.

![Country info UI](https://raw.githubusercontent.com/goitacademy/javascript-homework/main/v2/10/preview/country-info.png)

> ⚠️ It is enough for the app to work for most countries. Some countries, such as `Sudan`, can be problematic because the name of the country is part of the name of another country, `South Sudan`. Do not worry about these exceptions.

## Error handling

If the user enters the name of a country that does not exist, the back-end will return not an empty array, but an error with the status code `404` - not found. If you do not handle this, the user will never know that the search has not returned any results. Add a notification, "Oops, there is no country with that name"`, in case of an error using the [notiflix library](https://github.com/notiflix/Notiflix#readme).

![Error alert](https://raw.githubusercontent.com/goitacademy/javascript-homework/main/v2/10/preview/error-alert.png)

> ⚠️ Remember that `fetch` does not treat 404 as an error, so you need to explicitly reject the promise in order to catch and handle the error.

---
---

<h3 id="uk">📚 UK 📚 <a href="#home">⬆ Home ⬆</a></h3> 			

# Критерії прийому

- Створено репозиторій `goit-js-hw-10`.
- При здачі домашньої роботи є два посилання: на вихідні файли та робочу
 сторінку на `GitHub Pages`.
- При відвідуванні живої сторінки завдання, в консолі немає помилок та попереджень.
- Проект зібраний за допомогою
 [parcel-project-template](https://github.com/goitacademy/parcel-project-template).
- Код відформатовано `Prettier`.

## Стартові файли

[Скачай стартові файли](https://downgit.github.io/#/home?url=https://github.com/goitacademy/javascript-homework/tree/main/v2/10/src)
з базовою розміткою та стилями завдання. Скопіюй їх собі в проект, повністю
замінивши папку `src` у
[parcel-project-template](https://github.com/goitacademy/parcel-project-template).

## Завдання - пошук країн

Створи фронтенд частину програми пошуку даних про країну за її частковим або
повного імені. Подивися демо відео роботи програми.

https://user-images.githubusercontent.com/17479434/131147741-7700e8c5-8744-4eea-8a8e-1c3d4635248a.mp4

<!-- Подивися
[демо відео](https://user-images.githubusercontent.com/17479434/131147741-7700e8c5-8744-4eea-8a8e-1c3d4635248a.mp4)
роботи програми. -->

### HTTP-запити

Використовуй публічний API [Rest Countries](https://restcountries.com/), а саме
[ресурс name](https://restcountries.com/#api-endpoints-v3-name), що повертає
масив об'єктів країн, що задовольнили критерій пошуку. Додай мінімальне
оформлення елементів інтерфейсу.

Напиши функцію `fetchCountries(name)` яка робить HTTP-запит на
[ресурс name](https://restcountries.com/#api-endpoints-v3-name) та повертає
проміс з масивом країн – результатом запиту. Винеси її в окремий файл
`fetchCountries.js` та зроби іменований експорт.

### Фільтрування полів

У відповіді від бекенда повертаються об'єкти, більшість властивостей яких тобі не
стане в нагоді. Щоб скоротити обсяг даних, що передаються, додай рядок параметрів
запиту – так цей бекенд реалізує фільтрацію полів. Ознайомся з
[документацією синтаксису фільтрів](https://restcountries.com/#filter-response).

Тобі потрібні лише такі властивості:

- `name.official` - повне ім'я країни
- `capital` - столиця
- `population` - населення
- `flags.svg` - посилання на зображення прапора
- `languages` - масив мов

### Поле пошуку

Назву країни для пошуку користувач вводить у текстове поле
`input#search-box`. HTTP-запити виконуються при наборі імені країни, тобто
події `input`. Але робити запит при кожному натисканні клавіші не можна, так як
одночасно вийде багато запитів і вони виконуватимуться у непередбачуваному
порядку.

Необхідно застосувати прийом `Debounce` на обробнику події та робити
HTTP-запит через '300мс' після того, як користувач перестав вводити текст.
Використовуй пакет
[lodash.debounce](https://www.npmjs.com/package/lodash.debounce).

Якщо користувач повністю очищає поле пошуку, HTTP-запит не виконується,
а розмітка списку країн чи інформації про країну пропадає.

Виконай санітизацію введеного рядка методом `trim()`, це вирішить проблему коли
у полі введення тільки пробіли або є на початку і в кінці рядка.

### Інтерфейс

Якщо у відповіді бекенд повернув більше 10 країн, в інтерфейсі з'являється
повідомлення про те, що ім'я має бути більш специфічним. Для повідомлень
використовуй [бібліотеку notiflix](https://github.com/notiflix/Notiflix#readme) та
виводь такий рядок
`"Too many matches found. Please enter a more specific name."`.

![Too many matches alert](https://raw.githubusercontent.com/goitacademy/javascript-homework/main/v2/10/preview/too-many-matches.png)

Якщо бекенд повернув від 2-х до 10-х країн, під тестовим полем відображається список
знайдених країн. Кожен елемент списку складається з прапора та імені країни.

![Country list UI](https://raw.githubusercontent.com/goitacademy/javascript-homework/main/v2/10/preview/country-list.png)

Якщо результат запиту є масивом з однією країною, в інтерфейсі відображається
розмітка картки з даними про країну: прапор, назва, столиця, населення та
мови.

![Country info UI](https://raw.githubusercontent.com/goitacademy/javascript-homework/main/v2/10/preview/country-info.png)

> ⚠️ Достатньо, щоб програма працювала для більшості країн. Деякі
> країни, такі як `Sudan`, можуть створювати проблеми, оскільки назва країни
> є частиною назви іншої країни, `South Sudan`. Не треба турбуватися
> про ці винятки.

### Обробка помилки

Якщо користувач ввів ім'я країни якої немає, бекенд поверне не порожній
масив, а помилку зі статусом кодом `404` - не знайдено. Якщо це не обробити, то
Користувач ніколи не дізнається про те, що пошук не дав результатів. Додай
повідомлення `"Oops, the is no country with that name"` у разі помилки
використовуючи [бібліотеку notiflix](https://github.com/notiflix/Notiflix#readme).

![Error alert](https://raw.githubusercontent.com/goitacademy/javascript-homework/main/v2/10/preview/error-alert.png)

> ⚠️ Не забувай про те, що `fetch` не вважає 404 помилкою, тому необхідно
> явно відхилити проміс щоб можна було зловити та обробити помилку.

---
---

<h3 id="ru">📚 RU 📚 <a href="#home">⬆ Home ⬆</a></h3> 

# Критерии приема

- Создан репозиторий `goit-js-hw-10`.
- При сдаче домашней работы есть две ссылки: на исходные файлы и рабочую
  страницу на `GitHub Pages`.
- При посещении живой страницы задания, в консоли нету ошибок и предупреждений.
- Проект собран с помощью
  [parcel-project-template](https://github.com/goitacademy/parcel-project-template).
- Код отформатирован `Prettier`.

## Стартовые файлы

[Скачай стартовые файлы](https://downgit.github.io/#/home?url=https://github.com/goitacademy/javascript-homework/tree/main/v2/10/src)
с базовой разметкой и стилями задания. Скопируй их себе в проект, полностью
заменив папку `src` в
[parcel-project-template](https://github.com/goitacademy/parcel-project-template).

## Задание - поиск стран

Создай фронтенд часть приложения поиска данных о стране по её частичному или
полному имени. Посмотри демо видео работы приложения.

https://user-images.githubusercontent.com/17479434/131147741-7700e8c5-8744-4eea-8a8e-1c3d4635248a.mp4

<!-- Посмотри
[демо видео](https://user-images.githubusercontent.com/17479434/131147741-7700e8c5-8744-4eea-8a8e-1c3d4635248a.mp4)
работы приложения. -->

### HTTP-запросы

Используй публичный API [Rest Countries](https://restcountries.com/), а именно
[ресурс name](https://restcountries.com/#api-endpoints-v3-name), возвращающий
массив объектов стран удовлетворивших критерий поиска. Добавь минимальное
оформление элементов интерфейса.

Напиши функцию `fetchCountries(name)` которая делает HTTP-запрос на
[ресурс name](https://restcountries.com/#api-endpoints-v3-name) и возвращает
промис с массивом стран - результатом запроса. Вынеси её в отдельный файл
`fetchCountries.js` и сделай именованный экспорт.

### Фильтрация полей

В ответе от бэкенда возвращаются объекты, большая часть свойств которых тебе не
пригодится. Чтобы сократить объем передаваемых данных добавь строку параметров
запроса - так этот бэкенд реализует фильтрацию полей. Ознакомься с
[документацией синтаксиса фильтров](https://restcountries.com/#filter-response).

Тебе нужны только следующие свойства:

- `name.official` - полное имя страны
- `capital` - столица
- `population` - население
- `flags.svg` - ссылка на изображение флага
- `languages` - массив языков

### Поле поиска

Название страны для поиска пользователь вводит в текстовое поле
`input#search-box`. HTTP-запросы выполняются при наборе имени страны, то есть по
событию `input`. Но, делать запрос при каждом нажатии клавиши нельзя, так как
одновременно получится много запросов и они будут выполняться в непредсказуемом
порядке.

Необходимо применить приём `Debounce` на обработчике события и делать
HTTP-запрос спустя `300мс` после того, как пользователь перестал вводить текст.
Используй пакет
[lodash.debounce](https://www.npmjs.com/package/lodash.debounce).

Если пользователь полностью очищает поле поиска, то HTTP-запрос не выполняется,
а разметка списка стран или информации о стране пропадает.

Выполни санитизацию введенной строки методом `trim()`, это решит проблему когда
в поле ввода только пробелы или они есть в начале и в конце строки.

### Интерфейс

Если в ответе бэкенд вернул больше чем 10 стран, в интерфейсе пояляется
уведомление о том, что имя должно быть более специфичным. Для уведомлений
используй [библиотеку notiflix](https://github.com/notiflix/Notiflix#readme) и
выводи такую строку
`"Too many matches found. Please enter a more specific name."`.

![Too many matches alert](https://raw.githubusercontent.com/goitacademy/javascript-homework/main/v2/10/preview/too-many-matches.png)

Если бэкенд вернул от 2-х до 10-х стран, под тестовым полем отображается список
найденных стран. Каждый элемент списка состоит из флага и имени страны.

![Country list UI](https://raw.githubusercontent.com/goitacademy/javascript-homework/main/v2/10/preview/country-list.png)

Если результат запроса это массив с одной страной, в интерфейсе отображается
разметка карточки с данными о стране: флаг, название, столица, население и
языки.

![Country info UI](https://raw.githubusercontent.com/goitacademy/javascript-homework/main/v2/10/preview/country-info.png)

> ⚠️ Достаточно чтобы приложение работало для большинства стран. Некоторые
> страны, такие как `Sudan`, могут создавать проблемы, поскольку название страны
> является частью названия другой страны, `South Sudan`. Не нужно беспокоиться
> об этих исключениях.

### Обработка ошибки

Если пользователь ввёл имя страны которой не существует, бэкенд вернёт не пустой
массив, а ошибку со статус кодом `404` - не найдено. Если это не обработать, то
пользователь никогда не узнает о том, что поиск не дал результатов. Добавь
уведомление `"Oops, there is no country with that name"` в случае ошибки
используя [библиотеку notiflix](https://github.com/notiflix/Notiflix#readme).

![Error alert](https://raw.githubusercontent.com/goitacademy/javascript-homework/main/v2/10/preview/error-alert.png)

> ⚠️ Не забывай о том, что `fetch` не считает 404 ошибкой, поэтому необходимо
> явно отклонить промис чтобы можно было словить и обработать ошибку.
