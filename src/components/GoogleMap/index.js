import React from 'react';
import GoogleMapReact from 'google-map-react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const AnyReactComponent = ({ text }) => (
  <>
    <a href="https://www.google.fr/maps/@43.2241038,2.3594958,16.75z" target="blank">
      <FaMapMarkerAlt color="red" size="1.5rem" style={{ cursor: 'pointer' }} />
    </a>
  </>
);

const GoogleMap = () => {
  const defaultProps = {
    center: {
      lat: 43.18,
      lng: 2.41,
    },
    zoom: 16,
  };

  return (
    // Important! Always set the container height explicitly
    <div
      style={{ height: '400px', width: '400px', border: '2px solid #0368A3', borderRadius: '10px' }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAjvkpmOBJm_ekOQDNI_7EjK9y4BNWJpLs' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
          text="L'établissement"
        />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
