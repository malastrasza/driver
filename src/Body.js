import React, {Component} from 'react';
import './App.scss';
import {Player} from "video-react";
import movie from "./img/crash.mp4";
import moviePoster from "./img/carcrash.jpeg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Body extends Component {

    render() {

        const actualDate = new Date();

        return (
            <div>
                <div className="weekly">
                    <span>Weekly tip</span>
                    <span>{actualDate.toLocaleDateString()}</span>

                </div>
                <div className="weeklyBody">
                    <span className="titleBody">Safe engine brake</span>
                    <Player
                        autoplay
                        poster={moviePoster}
                        src={movie}
                        light
                    />
                    <div className="weeklyText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in magna ut
                        diam facilisis suscipit at ac lectus. Praesent malesuada justo sapien, a commodo ex elementum
                        eu. Donec ut aliquet arcu. Duis fringilla justo at lacus tempus porttitor. Quisque semper sem eu
                        conseq.
                    </div>
                    <div className="buttonCenter">
                    <button className="training">Training</button>
                    </div>
                        <div className="weeklyTags"># <a href="#">safety</a> | <a href="#">brakes</a> | <a href="#">technique</a></div>
                    <div className="weeklyShare">
                        <a href="#"><FontAwesomeIcon icon="share-alt" /></a>
                        <a href="#"><FontAwesomeIcon icon="thumbs-up"/></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;
