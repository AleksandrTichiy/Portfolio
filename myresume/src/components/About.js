// About.js
import React, { Component } from 'react';

class About extends Component {
    render() {
        if(this.props.data){
            var about = this.props.data.about,
                description = this.props.data.description,
                resume = this.props.data.resume,
                resume1 = this.props.data.resume1,
                resume2 = this.props.data.resume2,
                resume3 = this.props.data.resume3,
                resume4 = this.props.data.resume4,
                skill = this.props.data.skills,
                downloadText = this.props.data.downloadText,
                downloaLink = this.props.data.downloaLink,
                hireText = this.props.data.hireText,
                expTitle = this.props.data.expTitle,
                moreabout = this.props.data.moreabout,
                i = 0;

            var skils = this.props.data.skillsInNumeral.map(function(elem) {
                return <li key={elem.name}> <div className="progress percent{elem.numeral}"><span>{elem.numeral}%</span></div> <strong>{elem.name}</strong> </li>
            });

            function array_chunk( input, size ) {	// Split an array into chunks
                //
                // +   original by: Carlos R. L. Rodrigues

                for(var x, i = 0, c = -1, l = input.length, n = []; i < l; i++){
                    (x = i % size) ? n[c][x] = input[i] : n[++c] = [input[i]];
                }

                return n;
            }

            const rows = array_chunk(this.props.data.exp, 2);

            /*
            var expLeft = rows.map((row) => (
                <div className="row">
                    {
                        row.map((col) => (
                            <div className="col">{col.date}</div>
                        ))
                    }
                </div>
            ));
*/
            var exp = rows.map((row) => (
                <div className="col-six tab-full left" key={i++}>
                    <div className="timeline">
                    {
                        row.map((exp) => (
                            <div className="timeline__block" key={exp.title}>
                                <div className = "timeline__bullet"></div>
                                <div className = "timeline__header">
                                    <p className = "timeline__timeframe">{exp.date}</p>
                                    <h3>{exp.title}</h3>
                                    <h5>{exp.smallTitle}</h5>
                                </div>
                                <div className ="timeline__desc">
                                    <p>{exp.text}</ p >
                                </div>

                                {exp.sites.length>0 ?
                                <div className ="timeline__sites clear">
                                    <div className="siteLinks">
                                        <span>{this.props.data.h5Title}: </span>
                                        <ul>
                                            {
                                                exp.sites.map((exp2) => (
                                                    exp2.link ? <li key={exp2.title}><a href={exp2.link} title={exp2.title} target="_blank">{exp2.title}</a> </li> : ''
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                                : ''}

                            </div>
                        ))
                    }
                    </div>
                </div>
            ));

            /*
            function splitTo( arr, n) {
                var plen = Math.ceil(arr.length / n);

                return arr.reduce( function( p, c, i, a) {
                    if(i%plen === 0) p.push({});
                    p[p.length-1][i] = c;
                    return p;
                }, []);
            }

           var expLeft = this.props.data.skillsInNumeral.map(function(elem) {
                return <li key={elem.name}> <div className="progress percent{elem.numeral}"><span>{elem.numeral}%</span></div> <strong>{elem.name}</strong> </li>
            });
            console.log(value.date);

            var array = this.props.data.exp.map(function(exp) {
                //return <div className="timeline__block"> < div className = "timeline__bullet"></div> < div className = "timeline__header"> < p className = "timeline__timeframe">{exp.date}</p> < h3 > {exp.title }</h3> < h5 > {exp.smallTitle}</h5> < / div > < div className ="timeline__desc"> <p>{exp.text}</ p > < / div > < div className ="timeline__sites"> <p>{exp.text}</ p > < / div > </ div >
                return exp
            });

            var result=splitTo(array, 2);
            var expLeft='';
            // переберём объект result
            $.each(result[0], function( key, value ) {

                // действия, которые будут выполняться для каждого свойства объекта
                // key - текущее имя свойства массива
                // value - значение текущего свойства объекта

                // выведем имя свойства и его значение в консоль
                //console.log( 'Свойство: ' +key + '; Значение: ' + value );
                //console.log(value.date);
                expLeft+='<div className="timeline__block"><div className = "timeline__bullet"></div><div className = "timeline__header"><p className = "timeline__timeframe">'+value['date']+'</p> <h3>'+value['title']+'</h3> <h5>'+value['smallTitle']+'</h5> </div> <div className ="timeline__desc"> <p>'+value['text']+'</p> </div> <div className ="timeline__sites"> <p>'+value['text']+'</p> </div> </div>';
            });

            //var expLeft=;
*/
        }
        return (
            <div>
                <section id="about" className="s-about target-section">
                    <div className="row narrow section-intro has-bottom-sep">
                        <div className="col-full text-center">
                            <h3>{about}</h3>
                            <h1>{moreabout}</h1>
                            <p className="lead">{description}</p>
                        </div>
                    </div>
                    <div className="row about-content">
                        <div className="col-six tab-full left">
                            <h3>{resume}</h3>
                            <p>{resume1}</p>
                            <p>{resume2}</p>
                            <p>{resume3}</p>
                            <p>{resume4}</p>
                        </div>

                        <div className="col-six tab-full right">
                            <h3>{skill}</h3>

                            <ul className="skill-bars">
                                {skils}
                            </ul>
                        </div>

                    </div>

                    <div className="row about-content about-content--buttons">

                        <div className="col-six tab-full left">
                            <a href={downloaLink} className="btn btn--primary full-width">{downloadText}</a>
                        </div>
                        <div className="col-six tab-full right">
                            <a href="#0" className="btn full-width">{hireText}</a>
                        </div>

                    </div>

                    <div className="row about-content about-content--timeline">

                        <div className="col-full text-center">
                            <h3>{expTitle}</h3>
                        </div>

                        {exp}

                    </div>

                </section>
            </div>
        );
    }
}

export default About;