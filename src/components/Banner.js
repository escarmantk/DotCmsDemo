import React, { useState, useEffect } from 'react';
import '../styles.css'
import slide from '../assets/adventure-boat-exotic-1371360.jpg'
import slide2 from '../assets/2000x1080_jpg-2022_LakeLouise_Canoe_TravelAlberta_RothandRamberg.jpg'
import slide3 from '../assets/father-and-son-kayaking-1920x960-1.jpg'

const imageList = [
    slide,
    slide2,
    slide3,
  ];

  const Carousel = ({ items, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
     // Automatically advance slides ---- if manual buttons needed add method to manually set state
    useEffect(() => {
      const slideInterval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
      }, interval);
  
      return () => clearInterval(slideInterval); // Cleanup on unmount
    }, [items.length, interval]);
  
    return (
      <div className="carousel">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentIndex ? 'active' : ''
            }`}
          >
            <img src={item} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    );
  };
function Banner() {
  return (
    <>
    <Carousel items={imageList}/>
    <div className='banner-text-container'>
        <p className='banner-text-h1'>Explore the World</p>
        <p className='banner-text-h2'>--- Look Great Doing it. Stock up on New Apparel!! ---</p>
        <button className='banner-action-button' href='#'>20% OFF - SHOP NOW</button>
    </div>
    </>
  )
}

export default Banner