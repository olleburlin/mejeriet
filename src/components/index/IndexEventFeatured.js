import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LongDate from "../common/LongDate"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
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
    <div className="relative flex flex-col w-full bg-gradient-to-t from-brandpink to-brandorange  mb-4 md:mb-6 text-white">
      <Slider {...settings}>
        {featuredEvents.map(event => {
          return <FeaturedEvent key={event.id} event={event} />
        })}
      </Slider>
    </div>
  )
}

function FeaturedEvent({ event }) {
  const { title, informationProgram, featuredImage, slug } = event
  const imageData = getImage(featuredImage.node.localFile)
  return (
    <>
      <div className="p-2 md:p-6  inset-0 h-full  bg-gradient-to-t from-brandpink to-brandorange flex flex-col justify-end    space-y-2 md:text-xl ">
        <div className="">
          <div className="relative">
            <div className="">
              <GatsbyImage
                image={imageData}
                alt={title}
                className="object-cover relative "
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-between ">
              <div className="">
                <div className="relative inset-0 bg-brandorange inline-block">
                  <div className="">
                    <div className=" pt-1 pb-1 md:pt-2 md:pb-3 pl-1 pr-2 2 md:pr-3 md:pl-2 leading-loose text-sm md:text-xl uppercase font-bold">
                      Missa inte
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-full bg-gradient-to-t from-gray-900 to-transparent">
                <div className="relative space-y-2 p-2 md:p-4">
                  <div className="text-base md:text-xl ">
                    <LongDate dateString={informationProgram.startdatum} />
                  </div>
                  <Link to={`/program/${slug}`}>
                    {" "}
                    <h2 className="uppercase text-xl text-brandorange md:text-6xl">
                      {title}
                    </h2>
                  </Link>
                  <p className=" text-base md:text-xl  md:w-10/12">
                    {informationProgram.kortInfo}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
