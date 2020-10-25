import { useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import barcodeClient from '../../_api/axios'

const useHandleErrors = () => {
    const [error, setError] = useState(null)
    const [showError, setShowError] = useState(false)
    const [showResponse, setShowResponse] = useState(false)
    const [displaySpinner, setDisplaySpinner] = useState(false)

    const handleResponse = (displayResponse, displayError) => {
        setShowResponse(displayResponse)
        if(displayError !== undefined) setShowError(displayError)
    }

// Intercepts every HHTP request and response in the app to handle Errors

    barcodeClient.interceptors.request.use((request) => {
        setDisplaySpinner(true)
        setShowError(false)
        return request
    }, (error) => {
        setError(error)
        setShowError(true)
        return Promise.reject(error)
    })

    barcodeClient.interceptors.response.use((response) => {
        setDisplaySpinner(false)
        return response
    }, (error) => {
       if(error.response === undefined) {
           setError('502')
       } else {
        setError(error.response.status)
    }
        setDisplaySpinner(false)
        setShowError(true)
        return Promise.reject(error)
    })

    function DisplayError() {
        return (
            <Alert variant="danger">
                <Alert.Heading>{`Hemos recibido un error ${error}.`}</Alert.Heading>
                <p>
                    {`Es probable que esto se deba a que no se a configurado correctamente la url de la REST api. La aplicacion espera recibir la url a traves de la variable de entorno llamada < REACT_APP_API >.
                        La app esta preseteada para conectarse con el backend suministrado. El endpoint es < /barcode/compareprice >. Si desea modificarlo puede hacerlo desde desde _services/barcode.service.js`}
                </p>
                <Button
                    variant="primary"
                    className="mt-4"
                    onClick={() => handleResponse(false)}
                >
                    Intentar de nuevo.
                </Button>
            </Alert>
        )
    }
    
// Return a component to display any error and boolean options to conditional mount components.

    return [DisplayError, showError, showResponse, handleResponse, displaySpinner]
}
export default useHandleErrors