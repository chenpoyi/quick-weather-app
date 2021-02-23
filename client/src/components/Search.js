// import PlacesAutocomplete from 'react-places-autocomplete';


// const Search = function(props){

//   return (
//     <>
//     </>
//   )
// };


import React from 'react';
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
      <>
      </>
    );
  }
}

export default Search;
