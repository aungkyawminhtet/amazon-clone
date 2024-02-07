'use client';
import React, { lazy } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
const Banner = () => {
  return (
    <div className='relative'>
      <div className='absolute w-full h-32 bg-gradient-to-t from-white to-transparent bottom-0 z-20' /> 
        <Carousel
        autoPlay
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        interval={5000}
        >
          <div className=''>
            <img loading='lazy' src="https://m.media-amazon.com/images/I/61qa3132IFL._SX3000_.jpg" className='md:h-[400px]' alt='' ></img>
          </div>
          <div className=''>
            <img loading='lazy' src="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg" className='md:h-[400px]' alt='' ></img>
          </div>
          <div className=''>
            <img loading='lazy' src="https://m.media-amazon.com/images/I/61q5Pg3hO8L._SX3000_.jpg" className='md:h-[400px]' alt='' ></img>
          </div>
        </Carousel>
    </div>
  )
}

export default Banner
