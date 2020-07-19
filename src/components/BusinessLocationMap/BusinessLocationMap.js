import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  marginLeft: 0,
  border: "1px solid #00a79d",
  borderRadius: "0.8em",
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

function BusinessLocationMap({ lat, lng }) {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}>
      <div
        style={{
          height: 350,
          width: "100%",
          display: "flex",
          flexFlow: "row nowrap",
          justifyContent: "center",
          padding: 0,
        }}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{
            lat,
            lng,
          }}
          zoom={16}
          useStaticMap={true}
          options={options}
        >
          {<Marker position={{ lat, lng }} />}
          <></>
        </GoogleMap>
      </div>
    </LoadScript>
  );
}

export default React.memo(BusinessLocationMap);
