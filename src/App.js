import React, {Component} from 'react';
import './App.scss';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="headerBlack">
                    <span className="roundCircle"></span>
                </div>
                <div className="headerChoice">
                    <button className="tab">PORADY</button>
                    <button className="tab">FORUM</button>
                    <button className="tab">QUIZ</button>
                </div>
            </div>
        );
    }
}

class Main extends Component {
    render() {
        return (<div className="mainComponent">
                <Header/>
            </div>
        );
    }
}

class App extends Component {
    render() {
        return <Main/>
    }
}

export default App;
