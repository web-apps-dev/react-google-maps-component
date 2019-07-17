import React from 'react';
import GoogleMapReact from 'google-map-react';

import {placeStyle} from './place_style.js';

const locTwycross = {lat: 52.637499, lng: -1.510500};

const MarkerComp = ( {text} ) => <div style={placeStyle}>{text}</div>;

function UpdatingLocationMap() {
  return (
    <div style={{ height: '600px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAFk9EuHG4OQ2P6sjVIj6Ye_1ZjNm_BHtY' }}
        defaultCenter={locTwycross}
        defaultZoom={14}
      >

      <MarkerComp 
        lat={52.628995}
        lng={-1.493562}
        text="Drv-01"
      />
      </GoogleMapReact>
    </div>
  );
}

export default UpdatingLocationMap;