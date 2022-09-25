import './app-about.scss';

const About = () => {
    return (
        <section className="about">
            <div className="about_wrapper">
                <div className="about_wrapper_item">
                    <img className='about_picture' src="./img/girl-865304_1920.jpg" alt="coffee time" />
                </div>
                <div className="about_wrapper_item flex">
                    <div className="about_header">About our beans</div>
                    <img className='beans' src="./icons/beans_logo.png" alt="beans" />
                    <div className="about_descr">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    <br/>
                    <br/>
                    Afraid at highly months do things on at. Situation recommend objection do intention <br/>
                    so questions. <br/>
                    As greatly removed calling pleased improve an. Last ask him cold feel <br/>
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.</div>
                </div>
            </div>
            <div className="about_line"></div>
        </section>
    )
}

export default About;