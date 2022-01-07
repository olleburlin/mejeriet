import React from "react"
import { Disclosure } from "@headlessui/react"
import { ChevronUpIcon } from "@heroicons/react/solid"

export default function PersonalKategorier({ personalKategorier }) {
  return (
    <div className="space-y-4">
      {personalKategorier.map(kategori => {
        return (
          <>
            <Disclosure as="div" className=" space-y-4 ">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex flex-row items-center justify-between w-full bg-brandorange text-white  px-4 py-2 hover:bg-opacity-80">
                    <span>{kategori.namnPaKategori}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 `}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel>
                    <div
                      dangerouslySetInnerHTML={{ __html: kategori.innehall }}
                    />
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </>
        )
      })}
    </div>
  )
}
