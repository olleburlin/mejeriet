import React from "react"

export default function Priskategorier({ prices }) {
  return (
    <div className="flex flex-col">
      <div className="font-heavy">Pris</div>
      {prices.map(price => {
        return <Priskategori key={price.priceDescription} price={price} />
      })}
    </div>
  )
}

function Priskategori({ price }) {
  return (
    <div className="flex flex-row ">
      <div className="space-x-2">
        <span>
          {price.priceDescription ? price.priceDescription + ": " : ""}
        </span>
        <span>{price.price && ""}</span>
      </div>

      <div>{price.price ? price.price + "kr" : "Fri entré"}</div>
    </div>
  )
}
