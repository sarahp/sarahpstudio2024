import { Link } from "gatsby";
import "../styles/styles.scss";
import React from 'react';
import logo from '../images/sarahplogo_site.png';
import headshot from '../images/headshot_3.jpg';
import medium from '../images/medium.svg';
import linkedin from '../images/linkedin.svg';
import youtube from '../images/youtube.svg';
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
                  <Link href="/"><img
                    alt="Close up of a woman with red curly hair, and dark navy lipstick."
                    src={headshot}/> <br></br>
                    <img className="logo" alt="SarahP.Studio logo" src={logo}/></Link>
                </div>
              <div className="header-inner">
                  <div className="social-links">
                    <Link href="https://sarahpstudio.medium.com/" target="_blank" rel="noopener noreferrer"><img className="social-img medium align-bottom" src={medium} alt="A large letter M in blue and gray." /></Link>
                    <Link href="https://www.linkedin.com/in/sarahprasuhn/" target="_blank" rel="noopener noreferrer"><img className="social-img linked-in align-bottom" alt="A Linkedin logo in blue and gray." src={linkedin} /></Link>
                    <Link href="https://www.youtube.com/channel/UCUFeOswQrFcLBjYrEc5w58Q" target="_blank" rel="noopener noreferrer"><img className="social-img youtube align-bottom" alt="A youtube logo in blue and gray." src={youtube} /></Link>
                  </div>
                  <div className="navigation">
                    <ul className="nav flex-column">
                      <li className="nav-item"><Link to="/https://www.dropbox.com/s/gj2n35gi6zy3d74/SarahPrasuhnResume-online.pdf?dl=0">Resume</Link></li>
                      <li className="nav-item"><a href="/contact">Contact me</a></li>
                      <li className="nav-item"><Link to="https://catfans.github.io/">#CatFanstheBand</Link></li>

                      {/*<li className="nav-item"><NavLink to="/portfolio">Portfolio</NavLink></li>*/}
                    </ul>
                  </div>
              </div>
                  <div className="tagline">
                    <h3>Living my best life programming applications and building stories.</h3>
                  </div>
          </header>

          <section className="content display-project">
            <div className='wrapper'>
            </div>

            <div className="frontpage-portfolio">
              <h3>Reach me LinkedIn. Also, check out #CatFanstheBand (my live coding band)</h3>
              <p>For the last decade, I've been re-imagining data on the web, through front end development work. Before that, I brought stories to life through documentary and film work. Now I am on the search to do my work in both worlds, merging interactive design and development with story-based video work!</p>

              <div className="fe-header"> <h2>Programming</h2></div>

              <p>My love of programming started with learning FrontEnd development for popular CMS. I've since
                built sites for major national brands. Created membership databases, basic retail sites, and beyond.
                Recently I've been digging into React and using it with the MetAPI to explore alternate ways of viewing the collection online.</p>
              <h3>Site examples</h3>
              <h4>WASC Senior</h4>
              <p><Link to="https://www.wscuc.org/" target="_blank" rel="noopener noreferrer">WASC</Link>. I completely redesigned and built the FrontEnd of this site. Using Bootstrap and Drupal 7. I am proud to say that it has stood the test of time.</p>
              <Link to="https://www.wscuc.org/" target="_blank" rel="noopener noreferrer"><img className="portfolio-image" src={wasc}></img></Link>


              <p><Link to="https://www.curf.upenn.edu/" target="_blank" rel="noopener noreferrer">Upenn Curf</Link>. For any site with a heavy CMS and many departments on going maintenance and front end fixes are a constant need. Working for <Link to="https://alphex.com/" target="_blank" rel="noopener noreferrer">Alephx</Link>, I helped with site fixes and front end development support. I love doing a blend of support and redesign work to keep my skills fresh.</p>
              <Link to="https://www.curf.upenn.edu/" target="_blank" rel="noopener noreferrer"><img className="portfolio-image" src={upenn}></img></Link>

              <p><Link to="https://www.hunterboots.com/us/en_us/" target="_blank" rel="noopener noreferrer">Hunter Boots</Link>. In a white label collaboration. I managed the tech team, and built the front end. Like WASC this site has stood the test of time. And I'm proud that my work still lives selling my favorite boots.</p>
              <Link to="https://www.hunterboots.com/us/en_us/" target="_blank" rel="noopener noreferrer"><img className="portfolio-image" src={hunter}></img></Link>

              <p><Link to="https://www.xepicream.com/" target="_blank" rel="noopener noreferrer">Xepi</Link>. Working with Isite, I built the front end of the Xepi site for launch. Making it accessible to the non-developer parts of the team for easy content updates.</p>
              <Link to="https://www.xepicream.com/" target="_blank" rel="noopener noreferrer"><img className="portfolio-image" src={xepi}></img></Link>





              <h2>Leadership</h2>
              <h3>Team Lead</h3>


            </div>

          </section>

        </div>
      </div>

  );
}

export default IndexPage;