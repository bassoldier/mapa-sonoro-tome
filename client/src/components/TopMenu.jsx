
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
                    
                <Link to="/">
                    <i className="fas fa-tachometer-alt"></i>
                    <span>Acerca de</span>
                </Link>
                <Link to="/">
                    <i className="fas fa-tachometer-alt"></i>
                    <span>Blog</span>
                </Link>
                <Link to="/">
                    <i className="fas fa-tachometer-alt"></i>
                    <span>About</span>
                </Link>
                <Link to="/">
                    <i className="fas fa-tachometer-alt"></i>
                    <span>RRSS</span>
                </Link>
                
                <div className="dot"></div>
            </nav>
        </>
    
    );
}

export default TopMenu;