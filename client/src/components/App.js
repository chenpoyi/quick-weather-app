import React, {useState} from 'react';
import './App.css';
import Search from './Search';
import Forecast from './Forecast';
import { makeStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core'
import { withTheme } from '@material-ui/styles';

const useStyles = makeStyles({
  button: {
    backgroundColor: 'white',
    margin: '10px'
  }
});

function App() {
  const [city, setCity] = useState();
  const [selectedCity, setSelectedCity] = useState();

  const classes = useStyles();

  const handleClick = ()=>{
    setSelectedCity(city);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Search setCity={setCity}/>
        <Button className={classes.button} onClick={handleClick}>GET WEATHER</Button>
        City:{city ? city.name : ''}
        <Forecast city={selectedCity}/>
      </header>
    </div>
  );
}

export default App;
