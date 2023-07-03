import React, { useState } from "react";
import "./Distributors.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useJsApiLoader, GoogleMap, MarkerF } from "@react-google-maps/api";
import { getDistributors } from "../actions/action";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import customMarkerIcon from "../assets/pin.png";

const Distributors = () => {
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const dispatch = useDispatch();

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBLQSJcaTQHHsQ8N6k1takZ-WbvtiW3s98",
    // libraries: ['places']
  });

  const center = { lat: 24.966, lng: 67.06718 };

  const [distributors, setDistributors] = useState([]);

  useEffect(() => {
    const gettingDistributors = async () => {
      const distribs = await dispatch(getDistributors());
      //   console.log("Distributors:", distribs);

      const transformedDistribs = distribs.map((distrib) => {
        const [lat, lng] = distrib.location.split(",");
        console.log("Lat:", lat, "Lng:", lng);
        return {
          ...distrib,
          location: {
            lat: parseFloat(lat),
            lng: parseFloat(lng),
          },
        };
      });

      setDistributors(transformedDistribs);
      console.log("Transformed Distributors:", transformedDistribs);
    };
    gettingDistributors();
    console.log("Distributors:", distributors);
  }, []);

  function mapset(map) {
    map.panTo(center);
    return setMap(map);
  }

  if (!isLoaded) {
    return <p>Hi I'm Loading!</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="DistributorMain">
        <GoogleMap
          center={center}
          //   onClick={directionResponse}
          zoom={12}
          mapContainerStyle={{
            position: "absolute",
            width: "100vw",
            height: "85vh",
          }}
          options={{
            zoomControl: true,
            fullscreenControl: false,
            mapTypeControl: false,
          }}
          onLoad={(map) => mapset(map)}
        >
          {distributors.map((distributor) => (
            <MarkerF
              animation={2}
              key={distributor.id}
              position={distributor.location}
              title={distributor.name}
              icon={
                {
                  // url: customMarkerIcon,
                  // scaledSize: new window.google.maps.Size(40, 40), // Adjust the size as needed
                }
              }
              label={{
                text: distributor.name,
                className: "markerLabel",
                color: "black",
                fontWeight: "600",
              }}
            />
          ))}
        </GoogleMap>
      </div>
      <Footer />
    </div>
  );
};

export default Distributors;
