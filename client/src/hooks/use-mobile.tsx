import * as React from "react"

const MOBILE_BREAKPOINT = 768

/**
 * Custom hook to determine if the current viewport width indicates a mobile device.
 *
 * Uses `window.matchMedia` to listen for changes in the viewport width.
 * The breakpoint is set to 768px.
 *
 * @returns {boolean} `true` if the viewport width is less than the mobile breakpoint, `false` otherwise.
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
