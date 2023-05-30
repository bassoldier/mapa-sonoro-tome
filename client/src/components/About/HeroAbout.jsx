
import people from './../../assets/img/people.svg'
import {ButtonHero} from '../Button';

const HeroHome = () => {
    return (
        <section className='heroAbout'>
            {/*<img className="bg" src={fondo} alt="" />*/}
            <div class="parrafo-div">
                <h1 data-aos="fade-up">
                    Tomé Talks
                </h1>
                <p data-aos="fade-up">
                    Escucha cada rincón, reconoce sus sonidos y experimenta las emociones
                </p>
                
            </div>
            <div className='ilustracion'>
               <img className="bg" src={people} alt="" />
            </div>
        </section>
    );
};

export default HeroHome;