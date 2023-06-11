
import logoDuoc from './../assets/duoc.svg'
import pablito from './../assets/img/pablito.jpg'
import diego from './../assets/img/diego.jpg'
import {  Link } from "react-router-dom";

const Header = () => {
    return (
        <footer>
            <img className="logo" src={logoDuoc} alt="" />
            <div className="items">
                <p>Powered By</p>
                <div className="cards">
                    <div className="card">
                        <div className="foto-profile">
                            <img className="bg-profile-pablo" src={pablito} alt="" />
                            
                        </div>
                        <div className="info-card">
                            <Link   to='#' onClick={(e) => {
                                window.open("https://www.instagram.com/not_boy___pablo/", "_blank");
                                e.preventDefault();
                            }}>
                                <p>Pablo Fuentes</p>
                            </Link>
                            <Link   to='#' onClick={(e) => {
                                window.open ="mailto:pablo100notsober@gmail.com";
                                e.preventDefault();
                            }}>
                                <p className="mail-p">pablo100notsober@gmail.com</p>  
                            </Link>
                            
                        </div>
                    </div>
                    <div className="card">
                    <div className="foto-profile">
                            <img className="bg-profile" src={diego} alt="" />
                            
                        </div>
                        <div className="info-card">
                            <Link   to='#' onClick={(e) => {
                                window.open("https://www.instagram.com/diegosan.music/", "_blank");
                                e.preventDefault();
                            }}>
                                <p>Diego Sanhueza</p>
                            </Link>
                            <Link   to='#' onClick={(e) => {
                                window.location.href ="mailto:diegocontacto1996@gmail.com";
                                e.preventDefault();
                            }}>
                                <p className="mail-p">diegocontacto1996@gmail.com</p>  
                            </Link>
                             
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Header;

