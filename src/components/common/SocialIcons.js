import React from "react"
import { SocialIcon } from "react-social-icons"

function SocialLinks({ fill }) {
  return (
    <div>
      <nav className="">
        {[
          {
            url: `https://www.facebook.com/mejeriet`,
          },
          {
            url: `https://www.instagram.com/mejerietilund/`,
          },
        ].map(link => (
          <SocialIcon
            className="block text-white md:inline-block w-2"
            key={link.title}
            url={link.url}
            network={link.network}
            fgColor={fill}
            bgColor="transparent"
            style={{ height: 40, width: 40 }}
            target="_blank"
            rel="noreferrer noopener"
          >
            {link.title}
          </SocialIcon>
        ))}
      </nav>
    </div>
  )
}

export default SocialLinks
