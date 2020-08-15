import React from 'react';
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng
} from 'use-places-autocomplete';
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption
} from "@reach/combobox";
import "@reach/combobox/styles.css";


function SearchBar({ panTo }) {

    const { 
      ready, 
      value, 
      suggestions: {status, data }, 
      setValue, 
      clearSuggestion 
    } = usePlacesAutocomplete({
      requestOptions: {
        location: {lat: () => 33.8938, lng: () => 35.5018}, //BEIRUT.
        radius: 10000 // 6 MILES.
      }
    })
  
    return (
      <div className="searchbar">
        <Combobox 
          onSelect={async (address) => {
            try {
              const results = await getGeocode({ address });
              const { lat, lng } = await getLatLng(results[0]);
              panTo({ lat, lng});
            } catch(error) {
              console.log("error!");
            }
          }}
        >
  
          <ComboboxInput
            value={value} 
            onChange={(event) => {
              setValue(event.target.value)
            }}
            disabled={!ready}
            placeholder="Enter an address | أدخل عنوانا"
          />
  
          <ComboboxPopover>
            {status === "OK" && 
            data.map(({ place_id, description }) => (
              <ComboboxOption value={description} key={place_id} />
            ))}
          </ComboboxPopover>
  
        </Combobox>
      </div>
    )
}

export default SearchBar;