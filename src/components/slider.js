import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import code1 from '../Assets/slider/code-1.webp'
import AI from '../Assets/slider/pexels-tara-winstead-8386440.webp'
import security from '../Assets/slider/pexels-pixabay-60504.webp'

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Slider() {
    return (
        <div>
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={2500}
                className="slider"
            >
                <div data-src={code1} />
                <div data-src={AI} />
                <div data-src={security} />
            </AutoplaySlider>
            <div className="slider-mask">
            </div>
        </div>
    );
}

export default Slider