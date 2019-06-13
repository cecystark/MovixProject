import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './myStyles.css';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel showThumbs={false} infiniteLoop autoPlay swipeable={false} showIndicators={false} width="100%" showStatus={false} centerMode>
                <div className="carousel">
                    <img alt="" src="https://as01.epimg.net/meristation/imagenes/2018/01/22/reportaje/1516604400_722996_1531823096_sumario_normal.jpg"/>
                   
                </div>
              
                <div className="carousel">
                    <img  alt="" src="https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2018/12/22/peliculas_2019.jpg?itok=XZZZt4wu" />
                   
                </div>
            </Carousel>
        );
    }
};
 
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
export default DemoCarousel; 
