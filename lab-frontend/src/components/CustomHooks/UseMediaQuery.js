import { useState, useEffect } from 'react'

const useMediaQuery = () => {
    const [size, setSize] = useState(500)

    // A hook to handle media queries all around the App.

    useEffect(() => {
        const changeSize = (media) => {
            if (media.media === "(min-width: 402px)") {
                if (media.matches) {
                    setSize(400)
                } else {
                    setSize(320)
                }
            }
            if (media.media === "(min-width: 602px)") {
                if (media.matches) {
                    setSize(500)
                }
            }
        }
        const media602 = window.matchMedia("(min-width: 602px)")
        const media402 = window.matchMedia("(min-width: 402px)")
        changeSize(media602)
        changeSize(media402)
        media602.addListener(changeSize)
        media402.addListener(changeSize)
        return () => {
            media602.removeListener(changeSize)
            media402.removeListener(changeSize)
        }
    }, [])

    return [size]
}
export default useMediaQuery