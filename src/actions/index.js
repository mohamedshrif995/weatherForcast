import axios from 'axios'

const API_KEY = 'b6dd6af43927307735a5fdbabc6f1636'

const RootURl = `https://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
// type
export const FETCH_WEATHER = 'FETCH_WEATHER'
// first action
export function fetchWeather (city) {
  const url = `${RootURl}&q=${city},us`
  const request = axios.get(url)
  console.log('city', city)
  console.log('request', request)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
