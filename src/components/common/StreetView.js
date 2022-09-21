import React from "react"

export default function StreetView() {
  const html = `<iframe src="https://www.google.com/maps/embed?pb=!4v1663592341631!6m8!1m7!1sCAoSLEFGMVFpcE9xSVZCSjZkaHFCWVc4djNaNmxxem10RWFNQnB5MUxfXzRxVDBL!2m2!1d55.69609699999999!2d13.188529!3f0.1!4f0!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  return (
    <div>
      <p>Gå runt hos oss i Google Street View</p>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className="embed-container"
      />
    </div>
  )
}
