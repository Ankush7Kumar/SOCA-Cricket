import React from 'react';
import { Slide, Fade } from '@material-ui/core';

import Carousel from 'react-bootstrap/Carousel'

const CarouselView = () => {

    return (
        <>
 

            <Carousel fade interval="3000" style={{width: '100%', height: '700px'}}  >
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={require('./../../assets/images/ground1.jpeg')}
                        alt="First slide"
                        style={{height: '700px', width: '100%', objectFit:'cover'}}
                         
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('./../../assets/images/batsman1.jpeg')}
                        alt="Second slide"
                        
                        style={{height: '700px', width: '100%', objectFit:'cover'}}               
                    />

                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('./../../assets/images/sunrisephoto.jpg')}
                        alt="Third slide"

                        style={{height: '700px', width: '100%', objectFit:'cover'}}                   
                        
                    />

                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('./../../assets/images/cricketground.jpeg')}
                        alt="Third slide"

                        style={{height: '700px', width: '100%', objectFit:'cover'}}                   
                        
                    />

                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('./../../assets/images/gagandeepsingh.jpeg')}
                        alt="Third slide"

                        style={{height: '700px', width: '100%', objectFit:'cover'}}                   
                        
                    />

                    <Carousel.Caption>
                        <h3></h3>
                        <p>Coach Gagandeep Singh with Yuvraj Singh</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>




        </>
    );
}

export default CarouselView; 