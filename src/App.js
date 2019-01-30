import React, {Component} from 'react';
import './App.scss';

class Header extends Component {
    render() {
        return (
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
                    <button className="tab">PORADY</button>
                    <button className="tab">FORUM</button>
                    <button className="tab">QUIZ</button>
                </div>
            </div>
        );
    }
}

class Body extends Component {
    render() {
        return (
            <div>
                <div className="weekly">
                    <span>Porada tygodnia</span>
                    <span>date</span>
                </div>
                <div className="weeklyBody">
                    <span>Bezpieczne hamowanie silnikiem</span>
                    <video></video>
                    <div className="weeklyText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in magna ut
                        diam facilisis suscipit at ac lectus. Praesent malesuada justo sapien, a commodo ex elementum
                        eu. Donec ut aliquet arcu. Duis fringilla justo at lacus tempus porttitor. Quisque semper sem eu
                        consequat tincidunt. Sed rutrum interdum massa, non fringilla urna fermentum in. Pellentesque ut
                        velit congue, rhoncus dui non, tempor purus.
                    </div>
                    <button>Trening</button>
                    <div className="weeklyTags">bezpieczeństwo | hamowanie | technika</div>
                    <div className="weeklyShare"></div>
                </div>
            </div>
        )
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
        return (<div className="mainComponent">
                <Header/>
                <Body/>
                <Footer/>
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
