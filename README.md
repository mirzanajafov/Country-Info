# Country Info App - Backend

This is a Node.js-based backend application that provides information about countries and allows users to add national holidays to their calendar.

## Tech Stack

- Node.js (Express.js)
- TypeScript
- MongoDB (Mongoose)
- Axios (for API requests)
- dotenv (for environment variables)

## Features

- Retrieve a list of available countries.
- Fetch detailed information about a specific country (borders, population, flag).
- Add national holidays of a country to a user's calendar.

## Installation

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/mirzanajafov/Country-Info.git
   cd country-info-app
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```env
   PORT
   MONGO_URI
   ```

4. Start the application:

   ```sh
   npm run dev
   ```


## API Endpoints

### 1. Get Available Countries

- **Endpoint:** `GET /countries`
- **Description:** Fetches the list of available countries.
- **External API Used:** `https://date.nager.at/api/v3/AvailableCountries`

### 2. Get Country Info

- **Endpoint:** `GET /countries/:countryCode`
- **Description:** Retrieves country details including border countries, population, and flag.
- **External APIs Used:**
  - Borders: `https://date.nager.at/api/v3/CountryInfo/{countryCode}`
  - Population: `https://countriesnow.space/api/v0.1/countries/population`
  - Flag: `https://countriesnow.space/api/v0.1/countries/flag/images`

### 3. Add National Holidays to User Calendar

- **Endpoint:** `POST /users/:userId/calendar/holidays`
- **Description:** Saves national holidays to a user's calendar.
- **Request Body:**
  ```json
  {
    "countryCode": "US",
    "year": 2025,
    "holidays": ["New Year's Day", "Independence Day"]
  }
  ```
- **External API Used:** `https://date.nager.at/api/v3/PublicHolidays/{year}/{countryCode}`

## Code Structure

```
📂 country-info-app
├── 📂 src
│   ├── 📂 config
│   │   ├── db.ts    
│   ├── 📂 controllers
│   │   ├── country.controller.ts
│   │   ├── user.controller.ts
│   ├── 📂 models
│   │   ├── calendarEvent.model.ts
│   ├── 📂 routes
│   │   ├── country.routes.ts
│   │   ├── user.routes.ts
│   ├── 📂 services
│   │   ├── calendar.service.ts
│   │   ├── country.service.ts
│   ├── app.ts
│   ├── server.ts
├── .env
├── package.json
├── README.md
├── tsconfig.json
```



## License

This project is licensed under the MIT License.

