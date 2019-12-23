import React, { Component } from 'react';
import { Alert } from 'bootstrap-4-react';

import img1 from '../img/4.jpg';


class Header extends Component {
    render() {
        return (
        	<div class="mster-bg">
            <div class=" container-fluid pr-0 pl-0">
               <img src={img1} class="img-fluid" />
             </div>
             </div>
        );
    }
}

 


export default Header;
 