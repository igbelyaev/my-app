import './app-header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="header_menu">
                <a href="#" className="header_menu_logo">Coffee house
                    {/* <img src="./icons/Logo.png" alt="logo" className="header_menu_logo" /> */}
                </a>
                <a href="#" className="header_menu_item">Our coffee</a>
                <a href="#" className="header_menu_item">For your pleasure</a>
            </div>
            <h1 className="header_header">Our Coffee</h1>
        </div>
    )
}

export default Header;