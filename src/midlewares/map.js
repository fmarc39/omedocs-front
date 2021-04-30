import Geocode from 'react-geocode';

import { FETCH_LAT_LNG, saveCoordonates } from 'src/actions/map';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_LAT_LNG:
      {
        const { address } = action;
        Geocode.setRegion('fr');
        Geocode.fromAddress(address, 'AIzaSyAjvkpmOBJm_ekOQDNI_7EjK9y4BNWJpLs').then((response) => {
          const { lat, lng } = response.results[0]?.geometry?.location;
          store.dispatch(saveCoordonates(lat, lng));
        });
      }

      return next(action);

    default:
      return next(action);
  }
};
