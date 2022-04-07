import React from "react"
import { Listbox, Transition, Fragment } from "@headlessui/react"
import { SelectorIcon } from "@heroicons/react/solid"
import LostAndFound from "../../components/forms/LostAndFound"
import GenerellKontakt from "./GenerellKontakt"
import Ovrigt from "./Ovrigt"

export default function FormSelector() {
  const forms = [
    { id: 1, name: "Övriga frågor", slug: "ovrigt" },
    { id: 2, name: "Jobba hos oss", slug: "generell" },
    { id: 3, name: "Borttappat", slug: "borttappat" },
  ]
  const [selectedForm, setSelectedForm] = React.useState(forms[0])

  return (
    <div className="">
      <div className="w-72 mb-8">
        <Listbox value={selectedForm} onChange={setSelectedForm}>
          <Listbox.Label>Välj ärende:</Listbox.Label>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-brandpurple text-base tracking-wide cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500">
              <span className="block truncate   text-white">
                {selectedForm.name}
              </span>
              <span className="absolute  inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="w-5 h-5 text-white"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute w-full  overflow-auto bg-brandpurple bg-opacity-95  ring-1 ring-brandpurple ring-opacity-5 focus:outline-none">
                {forms.map((form, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `${active ? "text-brandpurple bg-white" : "text-white"}
                          cursor-pointer select-none relative py-2 pl-3 pr-4 uppercase  font-heavy list-none`
                    }
                    value={form}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`${selected ? "" : ""} block truncate`}
                        >
                          {form.name}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
      <div>{selectedForm.slug === "generell" && <GenerellKontakt />}</div>
      <div>{selectedForm.slug === "borttappat" && <LostAndFound />}</div>
      <div>{selectedForm.slug === "ovrigt" && <Ovrigt />}</div>
    </div>
  )
}
