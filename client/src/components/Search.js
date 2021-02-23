import React from 'react';
import './Search.scss';
// import {getLocations} from '../helpers/selectors';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
// import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
// require('dotenv').config();

// const Search = function(props){

//   const searchProps = {
//     apiKey: process.env.REACT_APP_MAPS_API,
//     minLengthAutocomplete: 2
//   }
//   geocodeByAddress('Montevideo, Uruguay')
//   .then(results => console.log(results));

//   return(
//     <div id="search-container">
//           <GooglePlacesAutocomplete id={'search-bar'} {...searchProps}/>

//     </div>
//   )
// }

// export default Search;
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
 
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
 
  handleChange(address){
    this.setState({ address });
  };
 
  handleSelect(address){
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };
 
  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
               
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}


export default Search;