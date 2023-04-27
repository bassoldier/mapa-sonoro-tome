import TopMenu from './../components/TopMenu';
import logo from './../assets/logo.svg'

const Header = () => {
    return (
        <header className="header">
            <img data-aos="fade-down" className="logo" src={logo} alt="" />
            <TopMenu  />
        </header>
    );
}

export default Header;