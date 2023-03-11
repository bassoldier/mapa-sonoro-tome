import Header from './Header'
import './../App.css'

const Layout =  ({children}) => {
    return(
        <>
            <Header />
            {children}
        </>
    );
}

export default Layout;