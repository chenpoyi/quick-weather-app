import React, {useState, useEffect} from "react";
import {getForecast} from '../helpers/selectors';
const Forecast = function(props) {
  const [forecast, setForecast] = useState();
  useEffect(()=>{
    console.log('props city: ',props.city);
    getForecast(props.city.lat, props.city.lng);
  },)
  return(
    <>
      {props.city && props.city.name}
    </>
  )
};

export default Forecast;