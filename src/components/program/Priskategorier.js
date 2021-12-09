import React from "react"

export default function Priskategorier({ prices }) {
  return (
    <div className={`${prices.length > 1 ? "flex-col" : "flex-row"} flex`}>
      <div className="font-heavy">Pris:&nbsp;</div>
      {prices.map(price => {
        return <Priskategori key={price.priceDescription} price={price} />
      })}
    </div>
  )
}

function Priskategori({ price }) {
  return (
    <div className="flex flex-row space-x-2">
      <div>{price.priceDescription},</div>

      <div>{price.price}&nbsp;kr</div>
    </div>
  )
}
