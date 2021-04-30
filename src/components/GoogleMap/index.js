import React from 'react';
import PropTypes from 'prop-types';

import GoogleMapReact from 'google-map-react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Cursor = ({ lat, lng }) => (
  <>
    <a href={`https://www.google.fr/maps/@${lat},${lng},18.25z`} target="blank">
      <FaMapMarkerAlt color="red" size="1.5rem" style={{ cursor: 'pointer' }} />
    </a>
  </>
);

const GoogleMap = ({ lat, lng }) => {
  const defaultProps = {
    center: {
      lat: lat,
      lng: lng,
    },
    zoom: 17.25,
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
        <Cursor lat={defaultProps.center.lat} lng={defaultProps.center.lng} />
      </GoogleMapReact>
    </div>
  );
};

GoogleMap.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
};

GoogleMap.defaultProps = {
  lat: 48.85837,
  lng: 2.294481,
};

export default GoogleMap;
