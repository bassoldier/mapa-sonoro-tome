import casaPiedra from "./../assets/img/locations/casa_de_piedra.jpg"
import aves from "./../assets/img/locations/aves.jpg"
import esquina from "./../assets/img/locations/esquina.jpg"
import explanada from "./../assets/img/locations/explanada.jpg"
import morro from "./../assets/img/locations/morro.jpg"
import plaza from "./../assets/img/locations/plaza.jpg"

import audio_1 from "./../assets/audio/idea_1.mp3"
import audio_2 from "./../assets/audio/idea_2.mp3"


export const initialMarkers = [
    {
        position: {
            lat: -36.525859,
            lng: -72.9748111
        },
        label: { color: "white", text: "Casa de Piedra" },
        draggable: false,
        image: casaPiedra,
        audio: audio_1,
        titulo: "Casa de Piedra",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"
    },
    {
        position: {
            lat: -36.59975,
            lng: -72.95333
        },
        label: { color: "white", text: "Esquina Redonda" },
        draggable: false,
        image: esquina,
        audio: audio_2,
        titulo: "Esquina Redonda",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"
    },
    {
        position: {
            lat: -36.62011,
            lng: -72.9584
        },
        label: { color: "white", text: "Explanada" },
        draggable: false,
        image: explanada,
        audio: audio_1,
        titulo: "Explanada",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"
    },
    {
        position: {
            lat: -36.6170887,
            lng: -72.963467
        },
        label: { color: "white", text: "Los Morros" },
        draggable: false,
        image: morro,
        audio: audio_2,
        titulo: "Los Morros",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"
    },
    {
        position: {
            lat: -36.6170591,
            lng: -72.9575007
        },
        label: { color: "white", text: "Plaza de Tomé" },
        draggable: false,
        image: plaza,
        audio: audio_1,
        titulo: "Plaza de Tomé",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"
    },

];