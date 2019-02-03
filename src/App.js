import React, {Component} from 'react';
import './App.scss';
import {Player} from 'video-react';
import "../node_modules/video-react/dist/video-react.css";
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Forum from "./Forum";
import Body from "./Body";
import Quiz from "./Quiz";
import patronate from "./img/drivingexperience.jpg";
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp, faShareAlt} from '@fortawesome/free-solid-svg-icons';

library.add(faThumbsUp, faShareAlt);

class Header extends Component {


    render() {
        return (
            <Router>
                <div>
                    <div className="headerBlack">
                        <span className="logo">DRV</span>
                        <img className="patronate" src={patronate} alt="patronate"/>
                        <div className="userHeader">
                            <span>user</span>
                            <div><span>points</span> | <a href="#">wyloguj</a></div>
                        </div>
                    </div>
                    <div className="headerChoice">
                        <Link to="/">
                            <button className="tab"><span className="tabText">PORADY</span></button>
                        </Link>
                        <Link to="/forum">
                            <button className="tab">FORUM</button>
                        </Link>
                        <Link to="/quiz">
                            <button className="tab">QUIZ</button>
                        </Link>
                    </div>
                </div>
            </Router>
        );
    }
}


class Footer extends Component {
    render() {
        return (
            <div>
                <div>Zadaj pytanie:
                    <textarea></textarea></div>
                <button>Wyślij</button>
            </div>
        )
    }
}

class Main extends Component {
    render() {
        return (
            <Router>
                <div className="mainComponent">
                    <Header/>
                    <Route exact path="/" component={Body}/>
                    <Route path="/forum" component={Forum}/>
                    <Route path="/quiz" component={Quiz}/>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

class App extends Component {
    render() {
        return <Main/>
    }
}

export default App;
