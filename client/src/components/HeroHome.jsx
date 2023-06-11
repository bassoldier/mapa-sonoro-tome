
import fondo from './../assets/img/fondo_hero.jpg'
import {ButtonHero} from './../components/Button';

const HeroHome = () => {
    return (
        <section className='heroHome'>
            {/*<img className="bg" src={fondo} alt="" />*/}
            <div>
                <h1 data-aos="fade-up">
                    Places Talks
                </h1>
                <p data-aos="fade-up">
                    Busca tus audífonos y explora paisajes sonoros.
                </p>
                <ButtonHero  text = "Comenzar" isLink={false} link="mapa_principal" />
            </div>
        </section>
    );
};

export default HeroHome;