import Header from './Header'
import Footer from './Footer'
import './../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import React,{useEffect} from "react";

const Layout =  ({children}) => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])

    return(
        <>
            <Header />
            {children}
            <Footer/>
        </>
    );
}

export default Layout;