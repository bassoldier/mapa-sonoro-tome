import casaPiedra from "./../assets/img/locations/casa_de_piedra.jpg"
import aves from "./../assets/img/locations/aves.jpg"
import esquina from "./../assets/img/locations/esquina.jpg"
import explanada from "./../assets/img/locations/explanada.jpg"
import morro from "./../assets/img/locations/morro.jpg"
import plaza from "./../assets/img/locations/plaza.jpg"



import audio_1 from "./../assets/audio/idea_1.mp3"
import audio_2 from "./../assets/audio/idea_2.mp3"
import TUNELPTADEPARRAMEZCLADO from "./../assets/audio/TUNELPTADEPARRAMEZCLADO.wav"
import LOSTILOSMEZCLADO from "./../assets/audio/LOSTILOSMEZCLADO.wav"
import PLAYABELLAVISTAMEZCLADO from "./../assets/audio/PLAYABELLAVISTAMEZCLADO.wav"
import PLAYAPTADEPARRAMEZCLADO from "./../assets/audio/PLAYAPTADEPARRAMEZCLADO.wav"
import CASADEPIEDRAMEZCLADO from "./../assets/audio/CASADEPIEDRAMEZCLADO.wav"
import ESQUINAREDONDAMEZCLADO from "./../assets/audio/ESQUINAREDONDAMEZCLADO.wav"
import EXPLANADAMEZCLADO from "./../assets/audio/EXPLANADAMEZCLADO.wav"
import PLAYALOSMORROSMEZCLA from "./../assets/audio/PLAYALOSMORROSMEZCLA.wav"
import PLAZATOMEMEZCLA from "./../assets/audio/PLAZATOMEMEZCLA.wav"
import TUNELCENTENARIOMEZCLA from "./../assets/audio/TUNELCENTENARIOMEZCLA.wav"



export const initialMarkers = [
    {
        position: {
            lat: -36.525859,
            lng: -72.9748111
        },
        label: { color: "white", text: "Casa de Piedra" },
        draggable: false,
        image: casaPiedra,
        audio: CASADEPIEDRAMEZCLADO,
        titulo: "Casa de Piedra",
        descripcion: "También conocida como casa Giacaman, la Casa de piedra es una construcción sin terminar, situada en un acantilado en medio de roqueríos cuyo frontis apunta hacia el océano pacífico. Tanto paredes interiores como exteriores están pintadas con grafitis y al interior de esta construcción se pueden ver diferentes habitaciones. En el sector exterior hay dos construcciones de piscinas sin terminar y en los alrededores existe un perímetro delimitado por murallas."
    },
    {
        position: {
            lat: -36.59975,
            lng: -72.95333
        },
        label: { color: "white", text: "Esquina Redonda" },
        draggable: false,
        image: esquina,
        audio: ESQUINAREDONDAMEZCLADO,
        titulo: "Esquina Redonda",
        descripcion: "La esquina redonda es un sector característico de Tomé, principalmente por su llamativo nombre, que reside en la particular forma en la que esta calle fue construida, tiene la característica de ser una de las rutas principales para acercarse a los lugares más periféricos de la comuna, por aquí circula la mayoría del transporte público, siendo la ruta a seguir para llegar a lugares turísticos de Tomé( Dichato, Coliumo y alrededores), cabe destacar la gran congestión que se produce generalmente en este sector durante la temporada de verano y fines de semana. "
    },
    {
        position: {
            lat: -36.62011,
            lng: -72.9584
        },
        label: { color: "white", text: "Explanada" },
        draggable: false,
        image: explanada,
        audio: EXPLANADAMEZCLADO,
        titulo: "Explanada",
        descripcion: "Este sector es uno de los lugares principales en cuanto a gastronomía y turismo, esto debido a su ubicación céntrica y fácil acceso. Es conocido por tener diferentes tipos de locales, tanto de venta de mariscos y pescados , como por tener también restaurantes e incluso hoteles cercanos.. En las cercanías de este sector se puede visitar al Chumpall, dios lafkenche de las aguas, también es de cercano acceso las playas y el muelle, donde suele haber gran cantidad de lobos marinos y aves marinas como gaviotas y pelícanos. "
    },
    {
        position: {
            lat: -36.5269659,
            lng: -72.9622866
        },
        label: { color: "white", text: "Playa los Morros" },
        draggable: false,
        image: morro,
        audio: PLAYALOSMORROSMEZCLA,
        titulo: "Playa los Morros",
        descripcion: "También conocida como Necochea, esta playa tiene la característica de tener una combinación de piedras y arena. En esta playa bajo las condiciones correctas, es una escuela para la gente que practica deportes acuáticos como el bodyboard, también se puede avistar gente que practica la escalada deportiva. Al recorrer esta playa, se puede acceder a distintos miradores, los cuáles están situados en acantilados, geografía típica de esta zona de la costa de Coliumo."
    },
    {
        position: {
            lat: -36.6170591,
            lng: -72.9575007
        },
        label: { color: "white", text: "Plaza de Tomé" },
        draggable: false,
        image: plaza,
        audio: PLAZATOMEMEZCLA,
        titulo: "Plaza de Tomé",
        descripcion: "Esta plaza es una de las únicas en Chile que tiene la característica de no ser simétrica. Su cualidad principal es la fontana que se derrumbó  durante el terremoto del 2010, esta luego fue restaurada, dicha pileta, proviene de la Fundición de Arte de Val d´Osne en Francia, y existen similares en Ciudad de México, Pratola Peligna en Italia y en La Isla Reunión en el océano índico. La plaza de armas de Tomé es uno de los lugares más icónicos, siendo un sector céntrico, donde suele juntarse la gente y los estudiantes, considerada como referencia para la identidad de la comuna. En sus alrededores se pueden encontrar la Municipalidad, el pueblito artesanal, el centro cultural de Tomé, la parroquia Candelaria entre muchos otros lugares."
    },
    {
        position: {
            lat: -36.6711625,
            lng: -72.9853284
        },
        label: { color: "white", text: "Túnel de Punta de Parra" },
        draggable: false,
        image: plaza,
        audio: TUNELPTADEPARRAMEZCLADO,
        titulo: "Túnel de Punta de Parra",
        descripcion: "Este túnel fue inaugurado en el año 1914, y buscaba prolongar la línea ferroviaria de la época uniendo Lirquén y Tomé. En la actualidad, este túnel es un atractivo turístico, debido a su antigüedad y por el hecho de poder cruzarlo. Por encima de este, existe un camino que puede dar a la playa ( Playa Hamburguesa )  que está entre ambos extremos del túnel y que es zona de escalada deportiva, también se puede llegar a los fuertes de Punta de Parra mediante este camino."
    },
    {
       position: {
            lat: -36.646088, 
            lng: -72.944607
        },
        label: { color: "white", text: "Río los Tilos" },
        draggable: false,
        image: plaza,
        audio: LOSTILOSMEZCLADO,
        titulo: "Río Los Tilos",
        descripcion: "El río los tilos, también llamado estero bellavista, es un sector que históricamente ha sido una zona muy visitada en la temporada de verano, esto debido a su fácil acceso. Su nombre radica en que este lugar está rodeado de árboles de tilo además de otras especies, aunque en su mayoría hay pinos. Si se sigue río arriba, se puede llegar al tranque, y puente colgante, este último siendo una caminata de un grado mayor en comparación a las anteriores."
    },
    {
        position: {
            lat: -36.6362544,
            lng: -72.9591435
        },
        label: { color: "white", text: "Playa de Bellavista" },
        draggable: false,
        image: plaza,
        audio: PLAYABELLAVISTAMEZCLADO,
        titulo: "Playa de Bellavista",
        descripcion: "Esta playa puede considerarse como una de las más populares de Tomé, destaca la gran afluencia de gente durante la temporada de verano. Está situada en la entrada de la comuna y está muy cercana a la fábrica Oveja Bellavista Tomé, otro atractivo turístico característico de la zona. En los alrededores destacan los locales de esparcimiento que presentan una variedad de productos para ofrecer."
    },
    {
       position: {
            lat: -36.6694666,
            lng: -72.9948031
        },
        label: { color: "white", text: "Playa del Túnel de Punta de Parra" },
        draggable: false,
        image: plaza,
        audio: PLAYAPTADEPARRAMEZCLADO,
        titulo: "Playa del Túnel de Punta de Parra",
        descripcion: "La playa del túnel de punta de parra está situada en el mismo sector del túnel de esta locación. Su acceso suele ser a pie mediante una caminata de aproximadamente 40 minutos desde el sector de bellavista o en bicicleta, suele ser común ver gente realizando estos 2 tipos de deporte. Es también en la temporada de verano, un lugar donde se puede ver gente acampando. Su paisaje destaca por estar rodeado de bosque de manera muy cercana a la playa misma."
    },
    {
       position: {
            lat: -36.601583,
            lng:  -72.948027
        },
        label: { color: "white", text: "Túnel de Centenario" },
        draggable: false,
        image: plaza,
        audio: TUNELCENTENARIOMEZCLA,
        titulo: "Túnel de Centenario",
        descripcion: "Este túnel fue inaugurado en el año 1914, y buscaba extender la línea ferroviaria de Tomé prolongandose  hacia Coliumo, Dichato y Pingueral. En la actualidad este sector tiene un atractivo turístico, puesto que se puede cruzar e incluso subir. Por arriba del Túnel hay un estero y un sector rodeado de árboles, siendo un lugar comúnmente visitado durante la temporada de verano."
    },

   
	

];
