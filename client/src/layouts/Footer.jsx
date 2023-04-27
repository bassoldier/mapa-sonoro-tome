
import logoDuoc from './../assets/duoc.svg'
import pablito from './../assets/img/diego.jpg'

const Header = () => {
    return (
        <footer>
            <img className="logo" src={logoDuoc} alt="" />
            <div className="items">
                <p>Powered By</p>
                <div className="cards">
                    <div className="card">
                        <div className="foto-profile">
                            <img className="bg-profile" src={pablito} alt="" />
                            
                        </div>
                        <div className="info-card">
                            <p>Pablo Fuentes</p>
                            <p className="mail-p">pablo100notsober@gmail.com</p>  
                        </div>
                    </div>
                    <div className="card">
                    <div className="foto-profile">
                            <img className="bg-profile" src={pablito} alt="" />
                            
                        </div>
                        <div className="info-card">
                            <p>Diego Sanhueza</p>
                            <p className="mail-p">diegocontacto1996@gmail.com</p>  
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Header;

