// App.js
import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Cta from './components/Cta';
import Stats from './components/Stats';

import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            myData: {}
        };

    }

    render() {

        return (
            <div className="App">
                <Header data={this.state.myData.topmenu} />
                <Home data={this.state.myData.main} />
                <About data={this.state.myData.about} />
                <Portfolio data={this.state.myData.portfolio} />
                <Testimonials />
                <Blog />
                <Cta />
                <Stats />
                <Contacts />
                <Footer />
            </div>
        );
    }

    componentDidMount(){
        this.getdata();

    }

    getdata(){
        $.ajax({
            url: "http://localhost:3000/data.json",
            dataType: "json",
            cache: false,
            success: function(data) {
                this.setState({myData: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err);
                //alert(err);
            }
        });
    }

}

export default App;