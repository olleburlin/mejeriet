import React from "react"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import FeaturedEvent from "../program/FeaturedEvent"

export default function IndexEventFeatured({ posts }) {
  const settings = {
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  const featuredEvents = posts.missaInte.programmpunkt
  console.log(featuredEvents)
  return (
    <div className="relative flex flex-col w-full bg-black mb-4 md:mb-6 text-white">
      <Slider {...settings}>
        {featuredEvents.map(event => {
          return <FeaturedEvent key={event.id} event={event} />
        })}
      </Slider>
    </div>
  )
}
