import React from "react";
import GoogleMapReact from "google-map-react";
import mark from "../AskForAFavor/batman.svg";
import PropTypes from "prop-types";

const Marker = ({ children }) => children;
const GoogleMap = (props) => {
  //const [zoom, setZoom] = useState(11);
  //  const [bounds, setBounds] = useState(null);
  let code = null;
  let centerLat = 4.711;
  let centerLon = -74.0721;
  if (props.favors) {
    if (props.favors.length > 0) {
      centerLat = props.favors[0].lat;
      centerLon = props.favors[0].lon;
    }

    code = props.favors.map((favor) => {
      return (
        <Marker key={favor._id} lat={favor.lat} lng={favor.lon} id="marker">
          <img src={mark} alt="you're here" height="50px" width="50px" />
        </Marker>
      );
    });
    return (
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLEKEY }}
          center={{ lat: centerLat, lng: centerLon }}
          zoom={13}
        >
          {code}
        </GoogleMapReact>
      </div>
    );
  }
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.GOOGLEKEY }}
      defaultCenter={{ lat: 4.711, lng: -74.0721 }}
      defaultZoom={10}
    ></GoogleMapReact>
  );
};

GoogleMap.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

export default GoogleMap;
