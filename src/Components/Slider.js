import React from 'react';
import Slide1 from '../Images/la.jpg';
import Slide2 from '../Images/chicago.jpg';
import Slide3 from '../Images/ny.jpg';

function Slider() {
    return (
        <>
                {/* Carousel */}
                <div id="demo" className="carousel slide" data-bs-ride="carousel">

                    {/* Indicators/dots */}
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    </div>

                    {/* The slideshow/carousel */}
                    <div className="carousel-inner">
                        <div className="vh-100 carousel-item active">
                            <img src={Slide1} alt="Slide 1" className="d-block w-100" />
                        </div>
                        <div className="vh-100 carousel-item">
                            <img src={Slide2} alt="Slide 2" className="d-block w-100" />
                        </div>
                        <div className="vh-100 carousel-item">
                            <img src={Slide3} alt="Slide 3" className="d-block w-100" />
                        </div>
                    </div>

                    {/* Left and right controls/icons */}
                    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>
        </>
    );
}

export default Slider;