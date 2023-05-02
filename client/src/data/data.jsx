import casaPiedra from "./../assets/img/locations/casa_de_piedra.jpg"
import aves from "./../assets/img/locations/aves.jpg"
export const initialMarkers = [
    {
        position: {
            lat: -36.525859,
            lng: -72.9748111
        },
        label: { color: "white", text: "Casa de Piedra" },
        draggable: false,
        image: casaPiedra
    },
    {
        position: {
            lat: -36.5453753,
            lng: -72.969430
        },
        label: { color: "white", text: "P1" },
        draggable: false,
        image: aves
    },
    {
        position: {
            lat: 28.625293,
            lng: 79.817926
        },
        label: { color: "black", text: "P2" },
        draggable: false,
        image: casaPiedra
    },
    {
        position: {
            lat: 28.625182,
            lng: 79.81464
        },
        label: { color: "white", text: "P3" },
        draggable: true,
        image: casaPiedra
    },
];