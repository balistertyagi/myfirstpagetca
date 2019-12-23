import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from '../img/icon.jpg';
import img2 from '../img/icon.jpg';
import img3 from '../img/icon.jpg';
import img4 from '../img/icon.jpg';

// console.log(img2); 
class Gallery extends Component {
    render() {
       const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 1,
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 1,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 1,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
            },
          };
        return (
          <div class=" mster-bg padd-top">
            <div class="container">     
          <Carousel responsive={responsive}>
            <div><img src={img1} class="img-fluid" /><p class="gallery-cap">Lorem Ipsum is simply dummy text of the 
            printing and typesetting industry. Lorem Ipsum
            <br/>when an unknown printer took a galley </p>
            <h4 class="icon-name">Aayush</h4></div>
            <div><img src={img2} class="img-fluid" /><p class="gallery-cap">Lorem Ipsum is simply dummy text of the 
            printing and typesetting industry. Lorem Ipsum
            <br/>when an unknown printer took a galley </p>
            <h4 class="icon-name">Neelam</h4></div>
            <div><img src={img3} class="img-fluid" /><p class="gallery-cap">Lorem Ipsum is simply dummy text of the
             printing and typesetting industry. Lorem Ipsum<br/>when an unknown printer took a galley </p>
             <h4 class="icon-name">Ankit</h4></div>
            <div><img src={img4} class="img-fluid" /><p class="gallery-cap">Lorem Ipsum is simply dummy text of the
             printing and typesetting industry. Lorem Ipsum<br/>when an unknown printer took a galley </p>
             <h4 class="icon-name">Vijay</h4></div>
          </Carousel>
          </div>
          </div>
        );
    }
}
export default Gallery;
 