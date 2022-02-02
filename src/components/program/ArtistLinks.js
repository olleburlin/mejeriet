import React from "react"
import Link from "../common/Link"

export default function ArtistLinks({ artistLinks }) {
  const { urlFacebook, urlFacebookevent, urlHomepage, urlSpotify } = artistLinks
  console.log(artistLinks)
  return (
    <div className="flex md:flex-row space-x-4">
      {urlHomepage && (
        <div>
          <Link
            to={urlHomepage}
            className="decoration-brandorange decoration-2 underline"
          >
            Hemsida
          </Link>
        </div>
      )}
      {urlSpotify && (
        <div>
          <Link
            to={urlSpotify}
            className="decoration-brandorange decoration-2 underline"
          >
            Spotify
          </Link>
        </div>
      )}
      {urlFacebook && (
        <div>
          <Link
            to={urlFacebook}
            className="decoration-brandorange decoration-2 underline"
          >
            Facebook
          </Link>
        </div>
      )}
      {urlFacebookevent && (
        <div>
          <Link
            to={urlFacebookevent}
            className="decoration-brandorange decoration-2 underline"
          >
            Facebookevent{" "}
          </Link>
        </div>
      )}
    </div>
  )
}
