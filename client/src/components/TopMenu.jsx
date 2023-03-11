
import {  Link } from "react-router-dom";
import routes from '../routes';

const TopMenu = () => {
    return (
        <>
            <nav className="navMenu">
                {
                    routes.map((route, index) =>{
                        return( 
                            <Link key={index} to={route.path}>
                                <i className="fas fa-tachometer-alt"></i>
                                <span>{route.title}</span>
                            </Link>
                            
                        );
                    })
                }
                <div className="dot"></div>
            </nav>
        </>
    
    );
}

export default TopMenu;