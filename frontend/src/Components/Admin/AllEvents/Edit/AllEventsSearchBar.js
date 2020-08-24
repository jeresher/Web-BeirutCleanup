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


function AllEventsSearchBar({ panTo }) {

    const { 
      ready, 
      value, 
      suggestions: {status, data }, 
      setValue, 
      clearSuggestions 
    } = usePlacesAutocomplete({
      requestOptions: {
        location: {lat: () => 33.8938, lng: () => 35.5018}, //BEIRUT.
        radius: 10000 // 6 MILES.
      }
    })
  
    return (
      <div className="eventsearchbar">
        <Combobox 
          onSelect={async (address) => {

            setValue(address, false);
            clearSuggestions()

            try {
              const results = await getGeocode({ address });
              const { lat, lng } = await getLatLng(results[0]);
              panTo({ lat, lng});
            } catch(error) {
              console.log(error);
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
  
          <ComboboxPopover 
            style={{
                "listStyleType": "none",
                "zIndex": "9",
                "border": "none",
                "borderBottomLeftRadius": "2px",
                "borderBottomRightRadius": "2px",
                "boxShadow": "0px 1px 2px rgb(190, 190, 190)"
            }}  
          >
            <ComboboxList>
                {status === "OK" && 
                data.map(({ place_id, description }) => (
                <ComboboxOption 
                    value={description} 
                    key={place_id} 
                    style={{
                        "fontSize": "1.5vw",
                        "fontFamily": "'Roboto', sans-serif"
                    }}
                />
                ))}
            </ComboboxList>

          </ComboboxPopover>
  
        </Combobox>
        <button disabled></button>
      </div>
    )
}

export default AllEventsSearchBar;