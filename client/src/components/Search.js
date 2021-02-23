import React, {useState} from "react";
import "./Search.scss";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from '@material-ui/core/styles';
import { mergeClasses } from "@material-ui/styles";

// import PlacesAutocomplete, {
//   geocodeByAddress,
//   getLatLng,
// } from 'react-places-autocomplete';
// import cities from "cities.json";
// class Search extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { address: '', latlng:''};
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSelect = this.handleSelect.bind(this);
//   }

//   handleChange(address){
//     this.setState({ address });
//   };

//   handleSelect(address){
//     this.setState({address: address})
//     geocodeByAddress(address)
//       .then(results => {
//         return getLatLng(results[0]);})
//       .then(latLng => {
//         console.log('Success', latLng);
//         this.setState({latlng: latLng})})
//       .catch(error => console.error('Error', error));
//   };

//   render() {
//     return (
//       <PlacesAutocomplete
//         value={this.state.address}
//         onChange={this.handleChange}
//         onSelect={this.handleSelect}
//       >
//         {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//           <div>
//             <input
//               {...getInputProps({
//                 placeholder: 'Search Places ...',
//                 className: 'location-search-input',
//               })}
//             />
//             <div className="autocomplete-dropdown-container">
//               {loading && <div>Loading...</div>}
//               {suggestions.map(suggestion => {
//                 const className = suggestion.active
//                   ? 'suggestion-item--active'
//                   : 'suggestion-item';
//                 // inline style for demonstration purpose
//                 const style = suggestion.active
//                   ? { backgroundColor: 'black', cursor: 'pointer' }
//                   : { backgroundColor: 'black', cursor: 'pointer' };
//                 return (
//                   <div
//                     {...getSuggestionItemProps(suggestion, {
//                       className,
//                       style,
//                     })}
//                   >
//                     <span>{suggestion.description}</span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </PlacesAutocomplete>
//     );
//   }
// }

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    width: 300,
    padding: '30px',
  },
});

const Search = function (props) {
  const classes = useStyles();
  return (
    <>
      <Autocomplete
      className={classes.root}
        id="combo-box-demo"
        options={cities}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField {...params} label="Cities" variant="outlined" />
        )}
        onChange={(event, val) => {
          props.setCity(val);
        }}
      />
    </>
  );
};

const cities = [
  { name: "Vancouver", lat: 49.25, lng: -123.119 },
  { name: "Toronto", lat: 43.7, lng: -79.416 },
  { name: "Calgary", lat: 51.05, lng: -114.085 },
];

export default Search;
