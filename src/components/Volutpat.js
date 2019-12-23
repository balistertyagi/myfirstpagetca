import React, { Component } from 'react';
import img5 from '../img/cap.jpg';
import img6 from '../img/bursh.jpg';


class Lectus extends Component {
    render() {
        return (
            <div class="clr-bg">
            <div class="container">
            <div class="padd-top">
            <div class="col-sm-12 txt-left">
               <h2 class="section-heading ">Lorem Ipsum</h2>
               </div>
                <div class="row ">
                    <div class="col-sm-3">
                     <div class="">
                            <img src={img6} class="img-fluid" />  
                        </div>
                    </div>
                    <div class="col-sm-3">
                     <div class="">
                     <h5>Multifaceted amenities</h5>
                        <p >It is a long established fact</p>
                    </div>
                    </div>
                    <div class="col-sm-3">
                     <div class="">
                        <img src={img6} class="img-fluid" />
                    </div>
                    </div>
                     <div class="col-sm-3">
                     <div class="">
                     <h5>Multifaceted amenities</h5>
                        <p >It is a long established fact</p>
                    </div>
                    </div>
              </div>
             
                    </div>
             </div>
             </div>
        );
    }
}

 


export default Lectus;
 