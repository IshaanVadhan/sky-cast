# SkyCast

SkyCast is a sleek and user-friendly weather forecast application, built using Next.js, that provides detailed weather information for various localities across India. It leverages Zomato's Weather Union API to fetch accurate weather data, including temperature, wind speed, wind direction, and rain accumulation.

## Features

- **Real-time Weather Data**: Get the latest weather updates for Indian localities.
- **Temperature Display**: Shows the current temperature in degrees Celsius.
- **Wind Information**: Provides wind speed in meters per second and wind direction in degrees.
- **Rain Data**: Displays rain accumulation in millimeters for the day.
- **Responsive Design**: Optimized for both mobile and desktop views.

## Installation

To get started with ThoughtLane, follow these steps:

1. **Clone the Repository**

   `git clone https://github.com/IshaanVadhan/sky-cast.git`

2. **Setup the App**

   Navigate to the `sky-cast` directory:

   ```
   cd sky-cast
   ```

   Create a `.env` file and add the following key:

   ```
   NEXT_PUBLIC_API_BASE_URL=https://www.weatherunion.com/gw/weather/external/v0
   NEXT_PUBLIC_API_KEY=your_weather_union_api_key

   ```

   Install the dependencies:

   ```
   npm install
   ```

## Running the Application

Navigate to the `sky-cast` directory and start the development server:

```
npm run dev
```

## Contact

For any questions or issues, please contact [ishaanvadhan2001@gmail.com](mailto:ishaanvadhan2001@gmail.com).
