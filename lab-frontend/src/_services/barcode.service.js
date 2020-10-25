import barcodeClient from '../_api/axios'

// Group all services in one exported object

export const barcodeServices = {
    comparePrice
}

// Define endpoint to compare the product and call the RESTapi

async function comparePrice(filters) {
    try {
        const { data } = await barcodeClient.post(`/barcode/compareprice/`, filters)
        return data
    } catch (error) {
        return error
    }
}