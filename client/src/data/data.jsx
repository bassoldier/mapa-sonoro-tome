import casaPiedra from "./../assets/img/locations/casa_de_piedra.jpg"
import aves from "./../assets/img/locations/aves.jpg"

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
        descripcion: "Casa de Piedra el lugar mas hermoso del mundo mundia, quizás sus cretinos cerebrps humanos no alcanzan a dimensionar tal obra magna de la ingeniería"
    },
    {
        position: {
            lat: -36.5453753,
            lng: -72.969430
        },
        label: { color: "white", text: "P1" },
        draggable: false,
        image: aves,
        audio: audio_2,
        titulo: "Punta de Parra",
        descripcion: "Punta de parra tiene el tunel mas hermoso que sus en clenques cerebrelos podr{ian procesar, lo mejor del mundo mundial"
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