require('dotenv').config();

const endpoints = {
  city: (city) => `${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`,
};

const getCityCurrentWeather = async (req, res, next) => {
  const { city } = req.body;

  try {
    if (typeof city !== 'string' || city.trim() === '') {
      throw new Error('City is required');
    }

    const response = await fetch(
      process.env.WEATHER_DOMAIN + endpoints.city(city)
    );

    if (!response.ok) {
      const error = await response.json();
      console.error(error);

      const errorToThrow = new Error();

      if (response.status === 404 || response.status === 400) {
        // Handle the case where the city is not found
        errorToThrow.status = 404;
        errorToThrow.message = 'City not found'
      } else {
        errorToThrow.status = 500;
        errorToThrow.message = "Our servers went bonkers. Please try again later"
      }

      throw errorToThrow;
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

module.exports = getCityCurrentWeather;