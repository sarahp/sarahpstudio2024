// import { Link } from "gatsby"
//
// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

import './App.scss';
import React, {Component} from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Admin from './Views/admin_page';
import Portfolio from './Views/portfolio_page';
import logo from './logo.svg';
import './App.scss';
import headshot from './images/headshot.svg';
import medium from './images/medium.svg';
import linkedin from './images/linkedin.svg';
import youtube from './images/youtube.svg';

const IndexPage = () => {
  render() {
    return (
      <HashRouter>
        <div className='app'>
          <div className='wrapper container'>
            <header>
              <div className="wrapper">
                <div className="header-inner row">
                  <div className="logo-image">
                    <a href="/"><img
                      alt="Close up image of woman with red curly hair, and dark navy lipstick."
                      src={headshot}/> <br></br>
                      <img className="logo" alt="SarahP.Studio logo" src={logo}/></a>
                  </div>
                  <div className="info col">
                    <div className="social-links">
                      <a href="https://medium.com/@sarah__p"><img className="social-img medium align-bottom" src={medium} /></a>
                      <a href="https://www.linkedin.com/in/sarahprasuhn/"><img className="social-img linked-in align-bottom" src={linkedin} /></a>
                      <a href="https://www.youtube.com/channel/UCUFeOswQrFcLBjYrEc5w58Q"><img className="social-img youtube align-bottom" src={youtube} /></a>
                    </div>
                    <div className="navigation">
                      <ul className="nav flex-column">
                        <li className="nav-item"><NavLink to="/https://www.dropbox.com/s/gj2n35gi6zy3d74/SarahPrasuhnResume-online.pdf?dl=0">Resume</NavLink></li>
                        <li className="nav-item"><a href="/contact">Contact me</a></li>
                        <li className="nav-item"><NavLink to="/portfolio">Portfolio</NavLink></li>
                      </ul>
                    </div>
                    <div className="tagline">
                      <h3>Turning stories into applications, videos, and more since 2004.</h3>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <section className="content display-project">
              <div className='wrapper'>
                <Route path="/admin" component={Admin}/>
                <Route path="/portfolio" component={Portfolio}/>
              </div>

              <div className="frontpage-portfolio">

              </div>

            </section>

          </div>
        </div>
      </HashRouter>

    )
      ;
  }
}

export default IndexPage;