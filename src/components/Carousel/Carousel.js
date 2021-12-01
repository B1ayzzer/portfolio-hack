import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'


const MainCarousel = () => {
  return (
    <Carousel showThumbs={false} infiniteLoop={true}>
      <div>
        <img src='https://istore.kg/media/mainpageslider/Wide-Slide-13_uGzhrrH.webp' alt="React Logo" />
      </div>
      <div>
        <img src='https://istore.kg/media/mainpageslider/Wide-Slide-13_uGzhrrH.webp' alt="Html Logo" />
      </div>
      <div>
        <img src='https://istore.kg/media/mainpageslider/Wide-Slide-13_uGzhrrH.webp' alt="jQuery logo" />
      </div>
    </Carousel>
  )
}

export default MainCarousel


