import React, { useEffect, useState, Fragment } from 'react'
import BarcodeScannerComponent from "react-webcam-barcode-scanner"
import useMediaQuery from '../CustomHooks/UseMediaQuery'

export default function BarcodeReader({ barcodeCheck }) {
  // use a custom Hook to manage responsiveness of Barcode Reader
  const [size] = useMediaQuery()
  const [data, setData] = useState(false)

  useEffect(() => {
    // Check for Barcode catch and pass data
    let mounted = true
    if (mounted) {
      if (data) {
        barcodeCheck(data)
      }
    }
    return () => {
      mounted = false
    }
  }, [data, barcodeCheck])

  return (
    <Fragment>
      <BarcodeScannerComponent
        width={size}
        height={size}
        onUpdate={(err, result) => {
          if (result) setData(result.text)
          else setData(false)
        }}
      />
      <p>{data}</p>
    </Fragment>
  )
}