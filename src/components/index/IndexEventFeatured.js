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
    <div className="relative flex flex-col w-full bg-gradient-to-t from-brandpink to-brandorange  mb-4 text-white">
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
      {/* <div className="w-full border-transparent border-2  p-2 md:p-4 text-white relative">
        <Link to={`/program/${slug}`}>
          <div className="relative">
            <div className="relative">
              <GatsbyImage
                image={imageData}
                alt={title}
                className="object-cover w-full block relative z-30"
              />
            </div>
            <div>
              <div className="absolute top-0">
                <div className="bg-brandorange  font-bold pr-2 py-1 md:px-3 md:py-3 uppercase text-xs md:text-2xl">
                  Missa inte
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div> */}
      <div className="overflow-hidden p-4 inset-0 h-full  bg-gradient-to-t from-brandpink to-brandorange flex flex-col justify-end   px-4 pb-4 space-y-2 md:text-xl ">
        <div className="relative">
          <div className="relative ">
            <GatsbyImage
              image={imageData}
              alt={title}
              className="object-cover relative "
            />
          </div>

          <div className="absolute inset-0 flex flex-col justify-end z-30 ">
            <div className="relative w-full backdrop-blur-md">
              <div className="relative  p-4">
                <header className="flex flex-col  justify-between">
                  <div className="text-base md:text-xl ">
                    <LongDate dateString={informationProgram.startdatum} />
                  </div>

                  <Link to={`/program/${slug}`}>
                    {" "}
                    <h3 className="uppercase text-2xl text-brandorange md:text-4xl">
                      {title}
                    </h3>
                  </Link>
                </header>
                <p className=" text-base md:text-xl tracking-tight leading-none md:w-10/12 md:leading-normal">
                  {informationProgram.kortInfo}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
