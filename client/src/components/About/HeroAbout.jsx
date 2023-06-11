
import people from './../../assets/img/people.svg'
import {ButtonHero} from '../Button';

const HeroHome = () => {
    return (
        <section className='heroAbout'>
            {/*<img className="bg" src={fondo} alt="" />*/}
            <div class="parrafo-div">
                <h1 data-aos="fade-up">
                    La voz de tu entorno.
                </h1>
                <p data-aos="fade-up">
                    Nace como con el objetivo de mostrar al mundo el contraste sonoro existente en paisajes donde lentamente el crecimiento urbano ha tomado lugar, abriéndose paso en lo que en algún momento fueron zonas naturales. El impacto y la transformación del paisaje no solo puede ser percibido visualmente, los sonidos han ido mutando a medida que nos expandimos como humanos; sin embargo, el cambio no es súbito y aún podemos reconocer puntos geográficos donde se entrelazan nuestros paisajes sonoros. 

                </p>
                
            </div>
            <div className='ilustracion'>
               <img className="bg" src={people} alt="" />
            </div>
        </section>
    );
};

export default HeroHome;