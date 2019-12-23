import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div class="container right">
              <nav class="fixed-top" id="mainNav">
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="navbar navbar-expand-md p-0">
          <a class="navbar-brand js-scroll-trigge " href="#page-top">
           <h4 class="text-center">LALAPEDEN</h4>
          </a>
          <button class="navbar-toggler navbar-toggler-right bg-primary text-white" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav text-uppercase ml-auto">
              <li class="nav-item"> <a class="nav-link js-scroll-trigger" href="#about" title="Test About">About</a>
              </li>
               <li class="nav-item "> <a class="nav-link js-scroll-trigger" href="#amenities" title="Test Amenities">Amenities</a>
              </li>
              <li class="nav-item"> <a class="nav-link js-scroll-trigger" href="#Gallery" title="Test Gallery">Gallery</a>
              </li>
               <li class="nav-item"> <a class="nav-link js-scroll-trigger" href="#floorplan" title="Test Floor Plan">FloorPlan</a>
              </li>
              <li class="nav-item"> <a class="nav-link js-scroll-trigger pr-0 border-0" href="#location" title="Test Location">Location</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
             </div>
        );
    }
}

export default Menu;
 