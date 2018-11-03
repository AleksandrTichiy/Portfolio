// Footer.js
import React, { Component } from 'react';
var image = 'images/logo.png';

class Footer extends Component {
    render() {
        return (
            <div>
                    <div className="row">
                        <div className="col-full">

                            <div className="footer-logo">
                                <a className="footer-site-logo" href="#0"><img src={image} alt="Homepage" /></a>
                            </div>

                            <ul className="footer-social">
                                <li><a href="#0">
                                    <i className="im im-facebook" aria-hidden="true"></i>
                                    <span>Facebook</span>
                                </a></li>
                                <li><a href="#0">
                                    <i className="im im-twitter" aria-hidden="true"></i>
                                    <span>Twitter</span>
                                </a></li>
                                <li><a href="#0">
                                    <i className="im im-instagram" aria-hidden="true"></i>
                                    <span>Instagram</span>
                                </a></li>
                                <li><a href="#0">
                                    <i className="im im-behance" aria-hidden="true"></i>
                                    <span>Behance</span>
                                </a></li>
                                <li><a href="#0">
                                    <i className="im im-pinterest" aria-hidden="true"></i>
                                    <span>Pinterest</span>
                                </a></li>
                            </ul>

                        </div>
                    </div>

                    <div className="row footer-bottom">

                        <div className="col-twelve">
                            <div className="copyright">
                                <span>© Copyright Hola 2017</span>
                                <span>Design by <a href="https://www.styleshout.com/">styleshout</a></span>
                            </div>

                            <div className="go-top">
                                <a className="smoothscroll" title="Back to Top" href="#top"><i className="im im-arrow-up" aria-hidden="true"></i></a>
                            </div>
                        </div>

                    </div>

                <div aria-hidden="true" className="pswp" role="dialog" tabIndex="-1">

                    <div className="pswp__bg"></div>
                    <div className="pswp__scroll-wrap">

                        <div className="pswp__container">
                            <div className="pswp__item"></div>
                            <div className="pswp__item"></div>
                            <div className="pswp__item"></div>
                        </div>

                        <div className="pswp__ui pswp__ui--hidden">
                            <div className="pswp__top-bar">
                                <div className="pswp__counter"></div><button className="pswp__button pswp__button--close" title="Close (Esc)"></button> <button className="pswp__button pswp__button--share" title=
                                "Share"></button> <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button> <button className="pswp__button pswp__button--zoom" title=
                                "Zoom in/out"></button>
                                <div className="pswp__preloader">
                                    <div className="pswp__preloader__icn">
                                        <div className="pswp__preloader__cut">
                                            <div className="pswp__preloader__donut"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                                <div className="pswp__share-tooltip"></div>
                            </div><button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button> <button className="pswp__button pswp__button--arrow--right" title=
                            "Next (arrow right)"></button>
                            <div className="pswp__caption">
                                <div className="pswp__caption__center"></div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default Footer;