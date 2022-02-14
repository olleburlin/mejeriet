import React from "react"
import InnerHTML from "dangerously-set-html-content"

const html = `
<script async src="https://forms.markethype.io/client/script.v2.js" onload="mhForm.create({formId:'61fa4fca87eac7502c00196c',target:this})"></script>

  `
export default function Markethype() {
  return (
    <div className="form markethype w-full ">
      <InnerHTML html={html} />
    </div>
  )
}
