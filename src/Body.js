import React, {Component} from 'react';
import './App.scss';
import {Player} from "video-react";
import movie from "./img/crash.mp4";
import moviePoster from "./img/carcrash.jpeg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                    <div className="weeklyTags">bezpieczeństwo | hamowanie | technika</div>
                    <div className="weeklyShare">
                        <FontAwesomeIcon icon="share-alt" />
                        <FontAwesomeIcon icon="thumbs-up"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;