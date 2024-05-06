import "./styles/styles.scss";
import React from "react";
import Image from "next/image";
import logo from "./images/sarahplogo_site.png";
import headshot from "./images/headshot_3.png";
import medium from "./images/medium.svg";
import linkedin from "./images/linkedin.svg";
import lit from "./images/lit.png";
import react from "./images/react.png";
import upenn from "./images/upenn.png";
import hunter from "./images/hunter.png";
import xepi from "./images/xepi.png";

const IndexPage = () => {
  return (
    <div className="app">
      <div className="wrapper">
        <header>
          <div className="logo-image">
            <a href="/"><Image className="headshot"
              alt="Close up of a woman with red curly hair, and dark navy lipstick."
              src={headshot.src} /><br />
              <Image className="logo" alt="SarahP.Studio logo" src={logo.src} /></a>
          </div>
          <div className="header-inner">
            <div className="social-links">
              <a href="https://www.linkedin.com/in/sarahpeony/" target="_blank" rel="noopener noreferrer"><Image
                className="social-Image linked-in align-bottom" alt="The Linkedin logo in a custom blue and gray."
                src={linkedin.src} /></a>

              <a href="https://sarahpstudio.medium.com/" target="_blank" rel="noopener noreferrer"><Image
                className="social-Image medium align-bottom" src={medium.src}
                alt="The Medium.com logo in a custom blue and gray." /></a>

            </div>
            <div className="navigation">
              <ul className="nav">

                <li className="nav-item"><a href="https://sarahpeony.com/" target="_blank"
                  rel="noopener noreferrer">The Peony Art Experience</a></li>
                <li className="nav-item"><a href="https://github.com/sarahp/peonythemet" target="_blank"
                  rel="noopener noreferrer">The Peony Art Experience Code</a></li>
                <li className="nav-item"><a href="https://sarahpstudio.s3.amazonaws.com/SarahPeonyResume.pdf"
                  target="_blank" rel="noopener noreferrer">Resumé PDF</a></li>
                <li className="nav-item"><a href="https://github.com/sarahp" target="_blank"
                  rel="noopener noreferrer">Github</a></li>
                <li className="nav-item"><a href="mailto: lovesarahinc@gmail.com" target="_blank" rel="noopener noreferrer">Email
                  me</a></li>
                <li className="nav-item"><a href="https://catfans.github.io/" target="_blank"
                  rel="noopener noreferrer">#CatFanstheBand</a></li>
              </ul>
            </div>
          </div>
        </header>

        <main>
          <section className="content display-project">
            <div className="frontpage-portfolio">
              <div className="tagline">
                <h1>For over a decade, I&aposve been living my best life programming applications and building stories.</h1>
              </div>

              <div className="fe-header"><h2>Frontend Developer</h2></div>

              <p>My love of programming started with learning FrontEnd development. I&aposve since
                built sites for major national brands. Created membership databases, basic retail sites, and beyond.
                Recently I&aposve been digging into React and using it with the MetAPI to explore alternate ways of viewing
                the collection online. Checkout my code walkthrough below to see <a
                  href="https://sarahpeony.com/" target="_blank" rel="noopener noreferrer">The Peony
                  Art Experience</a> and the <a href="https://metmuseum.github.io/" target="_blank"
                    rel="noopener noreferrer">theMetAPI</a> in action.</p>
              <div id="video-player">
                <iframe title="Code Walk Through of the Peony Art Experience" width="560" height="315" src="https://www.youtube.com/embed/duvf_QdQpkk" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
              </div>
              <h3>My favorite Frontend Technologies</h3>
              <p><a href="https://lit.dev/" target="_blank" rel="noopener noreferrer">Lit</a>.
                During my tenure at Phase2, I immersed myself in the world of web components using Lit, a TypeScript-based framework comparable to React, which I found particularly compelling for enhancing web aesthetics. Our work involved crafting elegant and reusable UI elements, contributing to visually appealing and functional user experiences for internationally recognized enterprise clients. Utilizing Storybook as our platform, we housed Lit web components and design systems, allowing us to efficiently develop and showcase our creations. This experience not only honed my skills in web development but also provided valuable insights into creating scalable and maintainable design systems for large-scale projects.
              </p><a href="https://lit.dev/docs/v1/lit-html/introduction/" target="_blank" rel="noopener noreferrer"><Image
                className="portfolio-image" src={lit.src}
                alt="Image of the frontpage of the Lit website."></Image></a>

              <p><a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">React/NextJS</a>.
                When it comes to my personal projects, React via Next.js has become my go-to framework. Currently, I&aposm immersed in the development of Neurospicy Chores, a project aimed at enhancing productivity, particularly for neurodiverse individuals. Leveraging the power of React and integrating OpenAI and Firebase technologies, I&aposm crafting a user-friendly interface and robust functionality to simplify chore management. Next.js provides the perfect ecosystem for this endeavor, offering server-side rendering, routing, and other features that facilitate rapid development and seamless user experiences. Through this project, I&aposm not only expanding my skills in React development but also exploring innovative ways to tackle real-world challenges through technology. In the meantime, you can explore my past personal projects like the <a href="https://github.com/sarahp/peonythemet">Peony Art Experience</a>, the <a href="https://github.com/sarahp/perpay-dashboard">User Dashboard</a>, and more recently <a href="https://github.com/sarahp/sarahpstudio2024">this site</a> to get a sense of how I work with React and build engaging user interfaces.
              </p><a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer"><Image
                className="portfolio-image" src={react.src}
                alt="Image of the frontpage of the NextJS website."></Image></a>

              <h3>My favorite Site Examples</h3>
              <p><a href="https://www.curf.upenn.edu/" target="_blank" rel="noopener noreferrer">Upenn CURF</a>. For any
                site with a heavy CMS and many departments on going maintenance and front end fixes are a constant need.
                Working for <a href="https://alphex.com/" target="_blank" rel="noopener noreferrer">Alephx</a>, I helped
                with site fixes and front end development support. I love doing a blend of support and redesign work to
                keep my skills fresh.</p>
              <a href="https://www.curf.upenn.edu/" target="_blank" rel="noopener noreferrer"><Image
                className="portfolio-image" src={upenn.src} alt="Site example a blue and white university site."></Image></a>

              <p><a href="https://www.hunterboots.com/us/en_us/" target="_blank" rel="noopener noreferrer">Hunter
                Boots</a>. In a white label collaboration. I managed the tech team, and built the front end. This site has stood the test of time. And I&aposm proud that my work still lives selling my favorite boots.
              </p>
              <a href="https://www.hunterboots.com/us/en_us/" target="_blank" rel="noopener noreferrer"><Image
                className="portfolio-image" src={hunter.src} alt="Site example a white and red retail clothing site."></Image></a>

              <p><a href="https://www.xepicream.com/" target="_blank" rel="noopener noreferrer">Xepi</a>. Working with
                Isite, I built the front end of the Xepi site for launch. Making it accessible to the non-developer
                parts of the team for easy content updates.</p>
              <a href="https://www.xepicream.com/" target="_blank" rel="noopener noreferrer"><Image
                className="portfolio-image" src={xepi.src} alt="Site example a purple and white pharmaceutical site."></Image></a>

            </div>
          </section>
        </main>
      </div>


      <footer>
        <div className="footer-navigation">
          <div className="navigation">
            <ul className="nav ">
              <li className="nav-item"><a href="https://sarahpstudio.s3.amazonaws.com/SarahPeonyResume.pdf" target="_blank"
                rel="noopener noreferrer">Resumé PDF</a></li>
              <li className="nav-item"><a href="https://github.com/sarahp" target="_blank"
                rel="noopener noreferrer">Github</a></li>
              <li className="nav-item"><a href="mailto: lovesarahinc@gmail.com" target="_blank" rel="noopener noreferrer">Email
                me</a></li>
              <li className="nav-item"><a href="https://catfans.github.io/" target="_blank"
                rel="noopener noreferrer">#CatFanstheBand</a></li>

              {/*<li className="nav-item"><NavLink to="/portfolio">Portfolio</NavLink></li>*/}
            </ul>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/sarahpeony/" target="_blank" rel="noopener noreferrer"><Image
              className="social-Image linked-in align-bottom" alt="A Linkedin logo in blue and gray."
              src={linkedin.src} /></a>
            <a href="https://sarahpstudio.medium.com/" target="_blank" rel="noopener noreferrer"><Image
              className="social-Image medium align-bottom" src={medium.src} alt="A large letter M in blue and gray." /></a>
            {/*<a href="https://www.youtube.com/channel/UCUFeOswQrFcLBjYrEc5w58Q" target="_blank" rel="noopener noreferrer"><Image className="social-Image youtube align-bottom" alt="A youtube logo in blue and gray." src={youtube} /></a>*/}
          </div>
        </div>
        <div className="copyright">©SarahP.Studio(Sarah Peony formerly Prasuhn)</div>
      </footer>
    </div>
  );
}

export default IndexPage;
