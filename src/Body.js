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
                    <span>Porada tygodnia</span>
                    <span>{actualDate.toLocaleDateString()}</span>

                </div>
                <div className="weeklyBody">
                    <span>Bezpieczne hamowanie silnikiem</span>
                    <Player
                        autoplay
                        poster={moviePoster}
                        src={movie}
                    />
                    <div className="weeklyText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in magna ut
                        diam facilisis suscipit at ac lectus. Praesent malesuada justo sapien, a commodo ex elementum
                        eu. Donec ut aliquet arcu. Duis fringilla justo at lacus tempus porttitor. Quisque semper sem eu
                        consequat tincidunt. Sed rutrum interdum massa, non fringilla urna fermentum in. Pellentesque ut
                        velit congue, rhoncus dui non, tempor purus.
                    </div>
                    <button>Trening</button>
                    <div className="weeklyTags"><a href="#">bezpieczeństwo</a> | hamowanie | technika</div>
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
