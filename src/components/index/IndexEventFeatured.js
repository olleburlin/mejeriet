import React from "react"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import FeaturedEvent from "../program/FeaturedEvent"
import { getCurrentDate } from "../../utils/getCurrentDate"

export default function IndexEventFeatured({ posts, featuredPosts }) {
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

  let array =
    featuredPosts?.length > 0
      ? featuredPosts
      : posts
          .filter(post => post.informationProgram.startdatum > getCurrentDate())
          .slice(0, 3)

  return (
    <div className="relative flex flex-col w-full bg-black mb-4 md:mb-6 text-white">
      <Slider {...settings}>
        {array.map(event => {
          return <FeaturedEvent key={event.id} event={event} />
        })}
      </Slider>
    </div>
  )
}
