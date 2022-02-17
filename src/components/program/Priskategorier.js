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
    <div className="flex flex-row space-x-2">
      <div>
        {price.priceDescription + ":"}
        {price.price && ""}
      </div>

      <div>{price.price ? price.price + "kr" : "fri entré"}</div>
    </div>
  )
}
