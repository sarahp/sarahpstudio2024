import { Link } from "gatsby";
import "../styles/styles.scss";
import React from 'react';
import logo from '../images/sarahplogo_site.png';
import headshot from '../images/headshot_3.jpg';
import medium from '../images/medium.svg';
import linkedin from '../images/linkedin.svg';
import wasc from '../images/wasc.png';
import upenn from '../images/upenn.png';
import hunter from '../images/hunter.png';
import xepi from '../images/xepi.png';


const IndexPage = () => {
  return (
      <div className='app'>
        <div className='wrapper'>
          <header>
                <div className="logo-image">
                  <a href="/"><img className="headshot"
                    alt="Close up of a woman with red curly hair, and dark navy lipstick."
                                   src={headshot}/> <br></br>
                    <img className="logo" alt="SarahP.Studio logo" src={logo}/></a>
                </div>
              <div className="header-inner">
                  <div className="social-links">
                    <a href="https://www.linkedin.com/in/sarahprasuhn/" target="_blank" rel="noopener noreferrer"><img className="social-img linked-in align-bottom" alt="The Linkedin logo in a custom blue and gray." src={linkedin} /></a>

                    <a href="https://sarahpstudio.medium.com/" target="_blank" rel="noopener noreferrer"><img className="social-img medium align-bottom" src={medium} alt="The Medium.com logo in a custom blue and gray." /></a>

                  </div>
                  <div className="navigation">
                    <ul className="nav">
                      <li className="nav-item"><a href="https://sarahpstudio.s3.amazonaws.com/SarahPeonyPrasuhnResume-2.pdf" target="_blank" rel="noopener noreferrer">Resumé PDF</a></li>

                      <li className="nav-item"><Link to="/resume" target="_blank" rel="noopener noreferrer">Resumé Text</Link></li>
                      <li className="nav-item"><a href="https://github.com/sarahp" target="_blank" rel="noopener noreferrer">Github</a></li>
                      <li className="nav-item"><a href="mailto: me@sarahp.studio" target="_blank" rel="noopener noreferrer">Email me</a></li>
                      <li className="nav-item"><a href="https://catfans.github.io/" target="_blank" rel="noopener noreferrer">#CatFanstheBand</a></li>

                      {/*<li className="nav-item"><NavLink to="/portfolio">Portfolio</NavLink></li>*/}
                    </ul>
                  </div>
              </div>
          </header>

          <section className="content display-project">
            <title>SarahP.studio the Portfolio of Sarah P.</title>

            <div className="frontpage-portfolio">
              <div className="tagline">
                <h3>For over a decade, I've been living my best life programming applications and building stories.</h3>
              </div>

              <div className="fe-header"> <h2>Frontend Developer</h2></div>

              <p>My love of programming started with learning FrontEnd development for a popular CMS. I've since
                built sites for major national brands. Created membership databases, basic retail sites, and beyond.
                Recently I've been digging into React and using it with the MetAPI to explore alternate ways of viewing the collection online.</p>
              <h3>My favorite Frontend Developer Sites</h3>
              <p><a href="https://www.wscuc.org/" target="_blank" rel="noopener noreferrer">WASC</a>. I completely redesigned and built the FrontEnd of this site. Using Bootstrap and Drupal 7. I am proud to say that it has stood the test of time.</p>
              <a href="https://www.wscuc.org/" target="_blank" rel="noopener noreferrer"><img className="portfolio-image" src={wasc} alt="Site example a red and white Non-Profit Organization site."></img></a>


              <p><a href="https://www.curf.upenn.edu/" target="_blank" rel="noopener noreferrer">Upenn Curf</a>. For any site with a heavy CMS and many departments on going maintenance and front end fixes are a constant need. Working for <a href="https://alphex.com/" target="_blank" rel="noopener noreferrer">Alephx</a>, I helped with site fixes and front end development support. I love doing a blend of support and redesign work to keep my skills fresh.</p>
              <a href="https://www.curf.upenn.edu/" target="_blank" rel="noopener noreferrer"><img className="portfolio-image" src={upenn} alt="Site example a blue and white university site."></img></a>

              <p><a href="https://www.hunterboots.com/us/en_us/" target="_blank" rel="noopener noreferrer">Hunter Boots</a>. In a white label collaboration. I managed the tech team, and built the front end. Like WASC this site has stood the test of time. And I'm proud that my work still lives selling my favorite boots.</p>
              <a href="https://www.hunterboots.com/us/en_us/" target="_blank" rel="noopener noreferrer"><img className="portfolio-image" src={hunter} alt="Site example a white and red retail clothing site."></img></a>

              <p><a href="https://www.xepicream.com/" target="_blank" rel="noopener noreferrer">Xepi</a>. Working with Isite, I built the front end of the Xepi site for launch. Making it accessible to the non-developer parts of the team for easy content updates.</p>
              <a href="https://www.xepicream.com/" target="_blank" rel="noopener noreferrer"><img className="portfolio-image" src={xepi} alt="Site example a purple and white pharmaceutical site."></img></a>



            </div>

          </section>

        </div>

        <footer>
          <div className="footer-navigation">
          <div className="navigation">
              <ul className="nav ">
                <li className="nav-item"><a href="https://sarahpstudio.s3.amazonaws.com/SarahPeonyPrasuhnResume-2.pdf" target="_blank" rel="noopener noreferrer">Resumé PDF</a></li>

                <li className="nav-item"><Link to="/resume" target="_blank" rel="noopener noreferrer">Resumé Text</Link></li>                <li className="nav-item"><a href="https://github.com/sarahp" target="_blank" rel="noopener noreferrer">Github</a></li>
                <li className="nav-item"><a href="mailto: me@sarahp.studio" target="_blank" rel="noopener noreferrer">Email me</a></li>
                <li className="nav-item"><a href="https://catfans.github.io/" target="_blank" rel="noopener noreferrer">#CatFanstheBand</a></li>

                {/*<li className="nav-item"><NavLink to="/portfolio">Portfolio</NavLink></li>*/}
              </ul>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/sarahprasuhn/" target="_blank" rel="noopener noreferrer"><img className="social-img linked-in align-bottom" alt="A Linkedin logo in blue and gray." src={linkedin} /></a>
              <a href="https://sarahpstudio.medium.com/" target="_blank" rel="noopener noreferrer"><img className="social-img medium align-bottom" src={medium} alt="A large letter M in blue and gray." /></a>
              {/*<a href="https://www.youtube.com/channel/UCUFeOswQrFcLBjYrEc5w58Q" target="_blank" rel="noopener noreferrer"><img className="social-img youtube align-bottom" alt="A youtube logo in blue and gray." src={youtube} /></a>*/}
            </div>
          </div>
          <div className="copyright">©SarahP.Studio(Sarah Prasuhn)</div>
        </footer>

      </div>

  );
}

export default IndexPage;