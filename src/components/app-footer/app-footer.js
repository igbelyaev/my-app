import './app-footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_menu">
                <a href="#" className="footer_menu_logo">Coffee house</a>
                <a href="#" className="footer_menu_item">Our coffee</a>
                <a href="#" className="footer_menu_item">For your pleasure</a>
            </div>
            <img className='beans' src="./icons/beans_logo.png" alt="beans" />
        </footer>
    )
}

export default Footer;