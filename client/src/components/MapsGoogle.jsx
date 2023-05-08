
import React, { useState } from "react";
import { GoogleMap, InfoWindow, LoadScript, MarkerF } from "@react-google-maps/api";
import ModalInfo from './../components/ModalInfo'
import { initialMarkers } from "../data/data";


const MapComponent = ({id_name}) => {
    const [info, setInfo] = useState({"active" : false, "id_marker": null, "descripcion": "Descripcion test", "imagen": "", "audio": "", "titulo": ""});
    const [center, setCenter] = useState({
        lat: -36.6181625,
        lng: -72.9964699
    });


    
    const [activeInfoWindow, setActiveInfoWindow] = useState("");
    const [markers, setMarkers] = useState(initialMarkers);

    const containerStyle = {
        width: "100%",
        height: "600px",
        disableDefaultUI: false,
        mapTypeId: "hybrid",
        

    }

    /*const center = {
        lat: -36.5453753,
        lng: -72.979461,
    }*/

    const mapClicked = (event) => { 
        //setInfo([true, "test", "texto3"]);
        console.log("map clicked");
        console.log(event.latLng.lat(), event.latLng.lng()); 
        setInfo({"active" : false, "id_marker": null, "descripcion": "", "imagen": ""});
    }

    const markerClicked = (marker, index, event) => {  
        if(info.id_marker == index) {
            setInfo({"active" : false, "id_marker": null, "descripcion": "", "imagen": "", "audio": "", "titulo": ""});
        }
        else{
            setInfo({"active" : true, "id_marker": index, "descripcion": marker.descripcion, "imagen": marker.image, "audio": marker.audio, "titulo": marker.titulo});
        }
        setCenter({
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
        })
        
        console.log("Marker clicked");
        //setActiveInfoWindow(index)
        console.log(event.latLng, index) 
        console.log(event.latLng.lat())
        console.log(event.latLng.lng())
        console.log(marker.image)
    }

    const markerDragEnd = (event, index) => { 

        setInfo([true, index, "texto4"]);
        console.log("Marker dragged");
        console.log(event.latLng.lat())
        console.log(event.latLng.lng())
    }

    return (
        <div className="map-container"  data-aos="fade-down">

                
                <GoogleMap 
                    id = {id_name}
                    mapContainerStyle={containerStyle} 
                    center={center} 
                    zoom={11.7}
                    onClick={mapClicked}
                >
                    
                    {markers.map((marker, index) => (
                        console.log(marker.image),
                        <MarkerF 
                            key={index} 
                            position={marker.position}
                            label={marker.label}
                            draggable={marker.draggable}
                            onDragEnd={event => markerDragEnd(event, index)}
                            onClick={event => markerClicked(marker, index, event)} 
                        >
                            {
                                (activeInfoWindow === index)
                                &&
                                <InfoWindow position={marker.position}>
                                    <b>{marker.position.lat}, {marker.position.lng}</b>
                                </InfoWindow>
                            }  
                        </MarkerF>
                    ))}
                </GoogleMap>
            <div className="etiqueta-map">
                <p>Presiona sobre las ubicaciones marcadas para escuchar</p>
            </div>
            {
                info.active && <ModalInfo 
                    foto = {info.imagen}
                    audio={info.audio}
                    nombre={info.titulo}
                    descripcion={info.descripcion}
                />
            }
            
                
        </div>
        
    );
};

export default MapComponent;