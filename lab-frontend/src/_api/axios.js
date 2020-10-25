import axios from "axios"

// Create an Axios Client to manage all HTTP request

let barcodeClient = axios.create({
  baseURL: process.env.REACT_APP_API
})

export default barcodeClient

