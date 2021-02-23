import React, {useState, useEffect} from "react";
import {getForecast} from '../helpers/selectors';
const Forecast = function(props) {
  const [forecast, setForecast] = useState('');
  useEffect(()=>{
    console.log('props city: ',props.city);
    props.city && (
      getForecast(props.city.lat, props.city.lng).then(response => {
        setForecast(response)
      })
    );
  },[props.city])
  return(
    <>
      {props.city && props.city.name}
      Forecast:
      {forecast.current && forecast.current.weather[0].main}
    </>
  )
};

export default Forecast;