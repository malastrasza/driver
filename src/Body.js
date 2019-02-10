import React, {Component} from 'react';
import './App.scss';
import {Player, BigPlayButton} from "video-react";
import movie from "./img/crash.mp4";
import moviePoster from "./img/carcrash.jpeg";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

// import ComponentSlider from "@kapost/react-component-slider";


const big = {
    width: '50px',
    height: '50px'
}

class Popup extends Component {
    render() {
        return (
            <div className="outerPop" onClick={this.props.closePopup}>
                <div className="innerPop">
                    <span>{this.props.text}</span>
                </div>
            </div>
        )
    }
}

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false,
            style: 'card',
            styleUp: 'scrolling-wrapper',
            styleMid: 'block'
        }
    }


    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        })
    }

    enlargeDiv() {
        if (this.state.style == 'card') {
            this.setState({
                style: 'cardLarge',
                styleUp: 'scrolling-wrapper-up',
                styleMid: 'unBlock'
            })
        }
        else if (this.state.style == 'cardLarge') {
            this.setState({
                style: 'card',
                styleUp: 'scrolling-wrapper',
                styleMid: 'block'
            })
        }
    }



    render() {

        const actualDate = new Date();

        return (
            <div>
                <div className="weekly">
                    <span>Weekly tip</span>
                    <span>{actualDate.toLocaleDateString()}</span>

                </div>
                <div className="weeklyBody">
                    <span className="titleBody">Safe engine braking</span>
                    <div className="playerReact">
                        <Player
                            autoplay
                            poster={moviePoster}
                            src={movie}
                            light
                        >
                            <BigPlayButton position="center"/>
                        </Player>
                    </div>
                    <div className="weeklyText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in magna ut
                        diam facilisis suscipit at ac lectus. Praesent malesuada justo sapien, a commodo ex elementum
                        eu. Donec ut aliquet arcu. Duis fringilla justo at lacus tempus porttitor. Quisque semper sem eu
                        conseq.
                    </div>
                    <div className="buttonCenter">
                        <button className="training" onClick={this.togglePopup.bind(this)}>Training</button>
                    </div>
                    <div className="weeklyTags"># <a href="#">safety</a> | <a href="#">braking</a> | <a
                        href="#">technique</a></div>
                    <div className="weeklyShare">
                        <a href="#"><FontAwesomeIcon icon="share-alt"/></a>
                        <a href="#"><FontAwesomeIcon icon="thumbs-up"/></a>
                    </div>
                </div>
                {this.state.showPopup ? <Popup
                    text="Feature not available yet"
                    closePopup={this.togglePopup.bind(this)}/> : null}

                <div className="moreTips">
                    <div className={this.state.styleUp}>
                        <div className={this.state.styleMid}>
                        <div className={this.state.style}>
                            <div className="menu-item">
                                <div className="menuColumn" >
                                    <span className="titleMenu">Hill starting</span>
                                    <button value="BIG" style={big} onClick={this.enlargeDiv.bind(this)}/>
                                    <a href="https://placeholder.com"><img
                                        src="https://via.placeholder.com/140x150.png?text=1"/></a>
                                    <div className="descriptionMenu">Ut accumsan erat ac nunc blandit, at malesuada ex
                                        laoreet. Sed pretium maximus egestas. Nulla porta erat ut volutpat pulvinar.
                                        Nulla
                                        tincidunt erat augue. Curabitur et bibendum risus. Pellentesque sit amet risus
                                        quis
                                        lectus semper interdum nec in massa.
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="card">
                            <div className="menu-item">
                                <div className="menuColumn">
                                    <span className="titleMenu">Clutch control</span>
                                    <a href="https://placeholder.com"><img
                                        src="https://via.placeholder.com/140x150.png?text=2"/></a>
                                    <div className="descriptionMenu">Curabitur et bibendum risus. Pellentesque sit amet
                                        risus quis
                                        lectus semper interdum nec in massa. Nulla porta erat ut volutpat pulvinar.
                                        Nulla
                                        tincidunt erat augue. Curabitur et bibendum risus. Pellentesque sit amet risus
                                        quis
                                        lectus semper interdum nec in massa.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="menu-item">
                                <div className="menuColumn">
                                    <span className="titleMenu">Rain drive</span>
                                    <a href="https://placeholder.com"><img
                                        src="https://via.placeholder.com/140x150.png?text=3"/></a>
                                    <div className="descriptionMenu">Nulla porta erat ut volutpat pulvinar. Nulla
                                        tincidunt erat augue. Nulla porta erat ut volutpat pulvinar. Nulla
                                        tincidunt erat augue. Curabitur et bibendum risus. Pellentesque sit amet risus
                                        quis
                                        lectus semper interdum nec in massa.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="menu-item">
                                <div className="menuColumn">
                                    <span className="titleMenu">Parking</span>
                                    <a href="https://placeholder.com"><img
                                        src="https://via.placeholder.com/140x150.png?text=4"/></a>
                                    <div className="descriptionMenu">Pellentesque sit amet risus quis
                                        lectus semper interdum nec in massa.. Nulla porta erat ut volutpat pulvinar.
                                        Nulla
                                        tincidunt erat augue. Curabitur et bibendum risus. Pellentesque sit amet risus
                                        quis
                                        lectus semper interdum nec in massa.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="menu-item">
                                <div className="menuColumn">
                                    <span className="titleMenu">Hazard perception</span>
                                    <a href="https://placeholder.com"><img
                                        src="https://via.placeholder.com/140x150.png?text=5"/></a>
                                    <div className="descriptionMenu">Sed pretium maximus egestas, at malesuada ex
                                        laoreet. Sed pretium maximus egestas. Nulla porta erat ut volutpat pulvinar.
                                        Nulla
                                        tincidunt erat augue. Curabitur et bibendum risus. Pellentesque sit amet risus
                                        quis
                                        lectus semper interdum nec in massa.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="menu-item">
                                <div className="menuColumn">
                                    <span className="titleMenu">Roundabouts</span>
                                    <a href="https://placeholder.com"><img
                                        src="https://via.placeholder.com/140x150.png?text=6"/></a>
                                    <div className="descriptionMenu">Semper interdum nec in massa., at malesuada ex
                                        laoreet. Sed pretium maximus egestas. Nulla porta erat ut volutpat pulvinar.
                                        Nulla
                                        tincidunt erat augue. Curabitur et bibendum risus. Pellentesque sit amet risus
                                        quis
                                        lectus semper interdum nec in massa.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Body;
export {Popup};
