import React from "react";
import Admin from "./admin_page";

class Portfolio extends Admin {

    render(){
        return (
            <div className='portfolio_page'>
            <div className='portfolio-list'>
                <section className='display-project row'>
                    <div className='wrapper'>
                        <ul>
                            {this.state.projectInfo.map((info) => {
                                return (
                                    <li key={info.id}>
                                            {/*<ul className="">*/}
                                            {/*    <li className="slide">*/}
                                            {/*        <img className="img-fluid" src={info.imageURL} alt={info.imageAlt} />*/}
                                            {/*    </li>*/}
                                            {/*</ul>*/}

                                            {info.imageURL &&
                                            info.imageURL.map(item => {
                                                return (
                                                    <li className="portfolio-slideshow slide flex-container">
                                                        <img className="img-fluid" src={item} alt={info.imageAlt} />
                                                    </li>
                                                );
                                            })}


                                        <div className='title-info'>
                                            <h2>{info.projectTitle}</h2>
                                            <br/>
                                            <h4>Created by {info.user}</h4>
                                            {info.client}
                                            <br/>
                                            <a href={info.projectLink}>{info.projectLink}</a>
                                            <br/>
                                            {info.description}
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </section>
            </div>
            </div>
        )
    }

}

export default Portfolio;
