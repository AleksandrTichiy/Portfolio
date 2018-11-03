// Portfolio.js
import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import $ from 'jquery'
import './lightgallery/css/lightgallery.css'
import 'picturefill'
import 'lightgallery'
import 'lg-autoplay'
import 'lg-zoom'
import 'lg-share'
import 'lg-pager'
import 'lg-fullscreen'
import 'lg-hash'
import 'lg-video'
import 'video.js'
//import 'lg-thumbnail'


const masonryOptions = {
    transitionDuration: 0
};

const lightGalleryOptions = {
    /*selector: '.thumb-link',
    selectWithin: '.thumb-img',
    controls:true,
    mousewheel:true,
    download:true,
    fullScreen:true,
    pager:true,
    zoom:true,
    hash:true,
    share:true,
    videojs: true,
    video: true,*/
    //thumbnail: true,
    //animateThumb: true,
    //autoplayFirstVideo:true
    //videojs: true,
    selector:'.item-folio',
    mousewheel:true,
    videoMaxWidth:'90%'
};

class Portfolio extends Component {

    onLightGallery = node => {
        this.lightGallery = node;
        $(node).lightGallery(lightGalleryOptions);
    }

    componentWillUnmount() {
        $(this.lightGallery).data('lightGallery').destroy(true);
    }

    componentDidMount() {
        $(document).on('click',".item-folio",function (e) {
            //$('#ightgallery').lightGallery(lightGalleryOptions);
        });
    }
    render() {

        if(this.props.data){



            var pfSmallTitle = this.props.data.pfSmallTitle,
                pfBigTitle = this.props.data.pfBigTitle,
                prLink = this.props.data.prLink,
                pfDescription = this.props.data.pfDescription,
                link = null,
                adit = null,
                lg = this.onLightGallery,
                lg1 = this.onLightGallery,
                lg2 = this.onLightGallery,
                lg3 = this.onLightGallery,
                lg4 = this.onLightGallery,
                lg5 = this.onLightGallery,
                lg6 = this.onLightGallery,
                lg7 = this.onLightGallery,
                lg8 = this.onLightGallery,
                lg9 = this.onLightGallery,
                additional = null,
                portfolio = this.props.data.projects.map(function(elem,i) {

                    additional = elem.screens.map(function(elem2) {
                        if (elem2.src) {
                            adit=<a href={elem2.src} className='item-folio' style={{display:'none'}} data-html={'#video' + i}>
                                    <img src={elem2.src} className="thumb-img" />
                                </a>
                        }
                        return adit
                    });
                    if (elem.mainScreenVideo) {
                        link = <a data-poster={elem.mainScreenImg} className='item-folio' data-size="1050x700" data-html={'#video' + i}>
                            <img src={elem.mainScreenThumb} className="thumb-img" alt=""/>
                            <span className="shadow-overlay"></span>
                            {elem.description ? <span className="itemFullDescription"><p>{elem.description}</p><p>...</p></span> : <div className="itemFullDescription">...</div>}
                        </a>
                    } else {
                        link = <a href={elem.mainScreen} className='item-folio' data-size="1050x700" data-html={'#video' + i}>
                            <img src={elem.mainScreenThumb} className="thumb-img" alt=""/>
                            <span className="shadow-overlay"></span>
                            {elem.description ? <span className="itemFullDescription"><p>{elem.description}</p><p>...</p></span> : <div className="itemFullDescription">...</div>}
                        </a>
                    }

                return <div className="masonry__brick" key={elem.name}>
                    <div className="item-folio">
                        {switch(i) {
                            case '1':
                            return 'bar';
                            default:
                            return 'foo';
                        }}
                        <div className="item-folio__thumb" id={"lightgallery" + i} ref={lg}>
                            {elem.mainScreenVideo ? <div style={{display:'none'}} id={'video' + i}>
                                <video className="lg-video-object lg-html5" controls preload="none">
                                    <source src={elem.mainScreen} type="video/mp4" />
                                    Your browser does not support HTML5 video.
                                </video>
                                {additional}
                            </div> : null}
                            {link}

                        </div>
                        <div className="item-folio__text">
                            <h3 className="item-folio__title">
                                {elem.name}
                            </h3>
                            {elem.smallDescription ? <p className="item-folio__cat"> {elem.smallDescription} </p> : null}
                        </div>
                        {elem.link ? <a href={elem.link} target="_blank" className="item-folio__project-link" title={prLink}><i className="im im-link"></i></a> : null}
                        <div className="item-folio__caption">
                            <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                        </div>
                    </div>
                </div>

            });

        }
        return (
        <div className="buttonContainer" ref="buttonContainer">
            <section id="works" className="s-works target-section">

                <div className="row narrow section-intro has-bottom-sep">
                    <div className="col-full">
                        <h3>{pfSmallTitle}</h3>
                        <h1>{pfBigTitle}</h1>

                        <p className="lead">{pfDescription}</p>
                    </div>
                </div>

                <div className="row masonry-wrap">
                    <div className="masonry">
                        <Masonry
                            className={'my-gallery-class'}
                            elementType={'ul'}
                            options={masonryOptions}
                        >
                            {portfolio}
                        </Masonry>


                    </div>
                </div>

            </section>

        </div>


        );
    }
}


export default Portfolio;