import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../img/1.jpg';
import img2 from '../img/2.png';
import img3 from '../img/3.jpg';
import img4 from '../img/4.jpg';

console.log(img2); 
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={img1}/>
                    // <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img4} />
                </div>
            </Carousel>
        );
    }
}

 


export default DemoCarousel;
 