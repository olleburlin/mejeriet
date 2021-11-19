import { useState, useEffect } from "react"

export const useDetectOutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState)

  useEffect(() => {
    const pageClickEvent = e => {
      const elements = Array.isArray(el) ? el : [el]
      let outside = true

      // If the active element exists and is clicked outside of
      elements.forEach(element => {
        if (element.current !== null && element.current.contains(e.target)) {
          outside = false
        }
      })

      if (outside) setIsActive(false)
    }

    // If the item is active (ie open) then listen for clicks
    if (isActive) {
      window.addEventListener("click", pageClickEvent)
    }

    return () => {
      window.removeEventListener("click", pageClickEvent)
    }
  }, [isActive, el])

  return [isActive, setIsActive]
}
