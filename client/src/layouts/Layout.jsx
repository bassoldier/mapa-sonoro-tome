import Header from './Header'
import './../App.css'

const Layout =  ({children}) => {
    return(
        <>
            <Header />
            <main>{children}</main>
        </>
    );
}

export default Layout;