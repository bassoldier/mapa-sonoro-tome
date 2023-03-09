
import {  Link } from "react-router-dom";
import routes from '../routes';

const TopMenu = () => {
    return (
        <>
            <nav class="navMenu">
                {
                    routes.map((route, index) =>{
                        return(
                            
                            <Link to="/">
                                <i className="fas fa-tachometer-alt"></i>
                                <span>{route.title}</span>
                            </Link>
                            
                        );
                    })
                }
                    
                <Link to="/">
                    <i className="fas fa-tachometer-alt"></i>
                    <span>Home2</span>
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
                
                <div class="dot"></div>
            </nav>
        </>
    
    );
}

export default TopMenu;