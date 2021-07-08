# CHROMIUM

One day group project.
As a team we decided to create a website that has the looks of Chromium browser and consumes 4 diffrent external APIs.

### From the command line

```bash
npm install # to install dependencies
npm run knex migrate:latest # to reset database
npm run knex seed:run # to get seed data
npm run dev # to start the dev server
```

You can find the server running on [http://localhost:3000](http://localhost:3000).


- To view the Programming Jokes API type **jokes** in the search box.
- To view the Weather API type **weather** in the search box.
- To view the Dictionary API type **dictionary** in the search box.
- To view the Holiday Planner API type **planmyholiday** in the search box.



## User interface

Home Page|
------------------------------------|
![Homepage](docs/homePage.PNG)|

Programming Jokes API Page|Dictionary API Page
------------------------------------|------------------------------
![ProgrammingJokesAPIPage](docs/jokesAPI.PNG)|![DictionaryAPIPage](docs/dictionaryAPI.PNG)

Weather API Page|Holiday Planner API Page
------------------------------------|-------------------------------
![WeatherAPIPage](docs/weatherAPI.PNG)|![HolidayPlannerAPIPage](docs/holidayPlanner.PNG)

## Details

## Tech Stack
**Client:** React, Redux, TailwindCSS

**Server:** NodeJS, ExpressJS, KnexJS

## Authors
- Yuan - [@seegg](https://github.com/seegg) - Dictionary API.

- Sina Kakhki - [@sina-kakhki](https://github.com/sina-kakhki) - Programming Jokes API.

- Dmitriy Yegorov - [@Dyegor](https://github.com/Dyegor) - Weather API.

- Kateti Mareko - [@ispeakcode01](https://github.com/ispeakcode01) - Holiday Planner API.

- Johnny Sainsbury - [@johnny-sainsbury](https://github.com/johnny-sainsbury) - Home page and all of the stylings.
