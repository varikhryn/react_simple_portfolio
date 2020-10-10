import React from 'react';
import './Main.css';
import brain_img from './brain.png';
import glasses_img from './glasses.png';
import clock_img from './clock.png';

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="main_wrapper">
                    <div className="main_item">
                        <img src={brain_img} alt="item-1" />
                        <p>HTML / CSS / JavaScript / JQuery / Figma / Photoshop </p>
                    </div>

                    <div className="main_item">
                        <img src={glasses_img} alt="item-1" />
                        <p>I studied at the "KPI"</p>
                    </div>

                    <div className="main_item">
                        <img src={brain_img} alt="item-1" />
                        <p>I am working Junior Front end Developer one years</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Main;