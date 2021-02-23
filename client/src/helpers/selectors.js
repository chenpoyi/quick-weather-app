import axios from 'axios';


const part = 'minutely,daily,hourly,alerts';
// const APIkey = 'b5bee86e1ad180be2b9fd80e0afbf22d';


export const getForecast = function(lat, lng){
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=${part}&appid=${process.env.REACT_APP_WEATHER_API}`
  console.log('Lat: ', lat, 'Lng: ', lng);
  return axios.get(url).then((res)=>{
    console.log(res.data) 
    return res.data;
  })
}