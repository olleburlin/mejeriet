import React from "react"
import Link from "../common/Link"

export default function ArtistLinks({ artistLinks }) {
  const { urlFacebook, urlFacebookevent, urlHomepage, urlSpotify } = artistLinks
  console.log(artistLinks)
  return (
    <div className="flex md:flex-row space-x-4">
      {urlHomepage && (
        <div className="  decoration-brandorange decoration-2 underline">
          <Link to={urlHomepage}>Hemsida</Link>
        </div>
      )}
      {urlSpotify && (
        <div className="  decoration-brandorange decoration-2 underline">
          <Link to={urlSpotify}>Spotify</Link>
        </div>
      )}
      {urlFacebook && (
        <div className="  decoration-brandorange decoration-2 underline">
          <Link to={urlFacebook}>Facebook</Link>
        </div>
      )}
      {urlFacebookevent && (
        <div className="  decoration-brandorange decoration-2 underline">
          <Link to={urlFacebookevent}>Facebookevent </Link>
        </div>
      )}
    </div>
  )
}
