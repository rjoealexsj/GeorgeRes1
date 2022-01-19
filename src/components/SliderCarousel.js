import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from'../hospital/slide1.jpg';
import img2 from'../hospital/slide2.jpg';
import img3 from'../hospital/slide3.jpg';

export default class SliderCarousel extends Component {
    render() {
        return (
            
               <Carousel showArrows={true} >
                <div>
                    <img src={img1} />
                    <p className="legend">Legend 1</p>
                </div>
                
                <div>
                    <img src={img2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Legend 3</p>
                </div>
                
                    
                
            </Carousel>
        )
    }
}
