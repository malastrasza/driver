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


class Header extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="headerBlack">
                        <span className="roundCircle">DRV</span>
                        <div className="patron">Patronat: Driving Experience</div>
                        <div className="userHeader">
                            <span>user</span>
                            <span>points | wyloguj</span>
                        </div>
                    </div>
                    <div className="headerChoice">
                        <Link to="/">
                            <button className="tab">PORADY</button>
                        </Link>
                        <Link to="/forum">
                            <button className="tab">FORUM</button>
                        </Link>
                        <button className="tab">QUIZ</button>
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
