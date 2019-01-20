import React, {Component} from 'react';
import './App.scss';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="headerBlack"></div>
                <div className="headerChoice"></div>
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
