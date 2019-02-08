import React, {Component} from 'react';
import './App.scss';
import {Player, BigPlayButton} from "video-react";
import movie from "./img/crash.mp4";
import moviePoster from "./img/carcrash.jpeg";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ScrollMenu from 'react-horizontal-scrolling-menu';

const list = [
    {name: 'item1', description: 'Lorem'},
    {name: 'item2', description: 'ipsum'},
    {name: 'item3', description: 'sripsum'},
    {name: 'item4', description: 'dipsum'},
    {name: 'item5', description: 'Lorum'},
    {name: 'item6', description: 'Loremus'},
    {name: 'item7', description: 'Loremal'},
    {name: 'item8', description: 'Loremiko'},
];

const MenuItem = ({text, description, selected}) => {
    return (
        <div className="menu-item">
            <div className="upperChoice">{text}</div>
            <div className="lowerChoice">{description}</div>
        </div>
    );
};

const Menu = (list) => list.map((named, description) => {
    const {name} = named;
    const {dsc} = description;

    return (
        <MenuItem
            text={name}
            description={dsc}
            key={name}
        />
    );
});

const Arrow = ({text, className}) => {
    return (
        <div
            className={className}
        >{text}</div>
    )
};

const ArrowLeft = Arrow({text: '<', className: 'arrow-prev'});
const ArrowRight = Arrow({text: '>', className: 'arrow-next'});


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
            selected: 'item1'
        }
    }

    onSelect = key => {
        this.setState({selected: key});
    };

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        })
    }

    render() {

        const {selected} = this.state;
        const menu = Menu(list, selected);

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
                    <ScrollMenu
                        data={menu}
                        arrowLeft={ArrowLeft}
                        arrowRight={ArrowRight}
                        selected={selected}
                        onSelect={this.onSelect}
                        scrollToSelected={true}
                        transition={1}
                        hideSingleArrow={true}
                    />
                </div>
            </div>
        )
    }
}


export default Body;
export {Popup};
