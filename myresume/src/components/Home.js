// Header.js
import React, { Component } from 'react';
var image = 'images/hero-bg.jpg';

class Home extends Component {

    render() {
        if(this.props.data){
            var name = this.props.data.name,
                hello = this.props.data.hello,
                description = this.props.data.description,
                latest = this.props.data.latest,
                moreabout = this.props.data.moreabout,
                scroll = this.props.data.scroll,
                whoiam = this.props.data.whoiam;

            var social = this.props.data.social.map(function(menu) {
                return <li key={menu.name}><a href={menu.url}><i className={menu.className + ' im'} aria-hidden="true"></i><span>{menu.name}</span></a> </li>
            });

        }

        return (
            <div>
                <section id="home" className="s-home page-hero target-section" data-parallax="scroll" data-image-src={image} data-natural-width='3000' data-natural-height='2000' data-position-y='center'>

                <div className="overlay"></div>
                <div className="shadow-overlay"></div>

                <div className="home-content">

                    <div className="row home-content__main">

                        <h3>{hello}</h3>

                        <h1> {whoiam} {name}.</h1>
                        <h2>{description}</h2>

                        <div className="home-content__buttons">
                            <a href="#works" className="smoothscroll btn btn--stroke">
                                {latest}
                            </a>
                            <a href="#about" className="smoothscroll btn btn--stroke">
                                {moreabout}
                            </a>
                        </div>

                        <div className="home-content__scroll">
                            <a href="#about" className="scroll-link smoothscroll">
                                <span>{scroll}</span>
                            </a>
                        </div>

                    </div>

                </div>

                <ul className="home-social">
                    {social}
                </ul>

                </section>

    </div>
    );
    }
    }

    export default Home;