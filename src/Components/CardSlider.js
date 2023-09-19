import React from 'react'
import Slide1 from '../Images/la.jpg';
import Slide2 from '../Images/chicago.jpg';
import Slide3 from '../Images/ny.jpg';
import Card from './Card';
import Subtitle from './Subtitle';
import Title from './Title';
import Pera from './Pera';
function CardSlider() {
    return (
        <>
            <Subtitle subtitle={"COZYSTAY GENERAL KEY FEATURES"} />
            <Title title={"Get a Proper Head Start on Your Website"} />
            <Pera peragraph={"CozyStay provides you with WYSIWYG interactive design tools and numerous customization options to help you easily build the website of your dreams."} />
            {/* Carousel */}
            <div id="demo1" className="carousel slide" data-bs-ride="carousel">

                {/* Indicators/dots */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo1" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo1" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo1" data-bs-slide-to="2"></button>
                </div>

                {/* The slideshow/carousel */}
                <div class="container my-5">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className='cardWrapper d-flex justify-content-between'>
                                <Card image={Slide1} />
                                <Card image={Slide2} />
                                <Card image={Slide3} />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='cardWrapper d-flex justify-content-between'>
                                <Card image={Slide1} />
                                <Card image={Slide2} />
                                <Card image={Slide3} />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='cardWrapper d-flex justify-content-between'>
                                <Card image={Slide1} />
                                <Card image={Slide2} />
                                <Card image={Slide3} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Left and right controls/icons */}
                <button className="carousel-control-prev" type="button" data-bs-target="#demo1" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo1" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>

            </div>
        </>
    )
}

export default CardSlider
