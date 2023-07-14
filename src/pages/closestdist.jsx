import React, { useState, useEffect } from 'react';
import { GoogleMap, InfoWindow, LoadScript, Marker,Circle,MARKER_LAYER } from "@react-google-maps/api";
import { getDistributors } from '../actions/action';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Circles } from 'react-loader-spinner';

const MapComponent = () => {
  const [userLocation, setUserLocation] = useState({ latitude: 0.0, longitude: 0.0 });
  const [distributors, setDistributors] = useState([]);
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.centralStore);
  const [activeInfoWindow, setActiveInfoWindow] = useState("");
  const mapClicked = (event) => { 

}
const navigate=useNavigate()
const markerClicked = (marker, index) => {  
    setActiveInfoWindow(index)
}

const markerDragEnd = (event, index) => { 

}
  const fetchData = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setUserLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude });
      });
    
    const distributorData = await dispatch(getDistributors());
  
    setDistributors(distributorData);
  };}
  useEffect(() => {

    fetchData();
  }, []);

  const containerStyle = {
    height: "100vh",
  };

  if (isLoading && distributors.length === 0) {
    return (  
      <div className="container" style={{ width: "10px", margin: "auto" }}>
        <Circles
          height="80"
          width="80"
          color="#2c9fe6"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  return (
    // <LoadScript googleMapsApiKey='AIzaSyBLQSJcaTQHHsQ8N6k1takZ-WbvtiW3s98'>
    <div>
 <h1 className='shadow shadow-md text-center font-bold text-5xl bg-slate-200 my-2'>Select Distributor</h1>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: userLocation.latitude, lng: userLocation.longitude }}
        zoom={15}
      >
        {distributors.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: parseFloat(marker.location.split(",")[0]), lng: parseFloat(marker.location.split(",")[1]) }}

            // visible={true}
            // draggable={marker.draggable}
                        // onDragEnd={event => markerDragEnd(event, index)}
                        onClick={()=>{
                          localStorage.setItem("lpgDistributor",JSON.stringify(marker));
navigate("/paymentPage")
alert("lkl")
}} 
>

                          {  <div  style={{backgroundColor:"red", color: "white", cursor: "pointer" }}>
                              <InfoWindow position={{ lat: parseFloat(marker.location.split(",")[0]), lng: parseFloat(marker.location.split(",")[1]) }}  zIndex={10} >
                            <b
                  style={{backgroundColor:"lightblue", color: "black", cursor: "pointer" }}
                  onClick={() => {
                    navigate("/paymentPage", { replace: true });
                    localStorage.setItem("lpgDistributor", JSON.stringify(marker));
                  }}
                >
                  {marker.name}
                </b>
                            </InfoWindow>
                              </div> 
                            }
                          
                          
                            )
          </Marker>         
        )
        
        )
        
        }
        <Circle 
        center={{lat:userLocation.latitude,lng:userLocation.longitude}} visible={true} radius={1000} ></Circle>
       
        
      </GoogleMap>
        </div>
    // </LoadScript>
  );
};

export default MapComponent;
