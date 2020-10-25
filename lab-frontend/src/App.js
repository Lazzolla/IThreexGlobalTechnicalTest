import React, { useState, Fragment } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import BarcodeInput from './components/BarcodeInput/BarcodeInput';
import CompareResult from './components/CompareResult/CompareResult'
import useHandleErrors from './components/CustomHooks/useHandleErrors';
import { barcodeServices } from './_services/'
import './app.scss';

function App() {
  const [DisplayError, showError, showResponse, handleResponse, displaySpinner] = useHandleErrors()
  const [response, setResponse] = useState({})
  const [currentPrice, setCurrentPrice] = useState(null)

  const handleSubmit = async (filters) => {
    // Save current price for compare
    setCurrentPrice(filters.precio)
    const response = await barcodeServices.comparePrice(filters)
    setResponse(response)
    handleResponse(true)
  }

  return (
    <div className="container-app">
      {displaySpinner
        ? <Spinner animation="border" className="spinner-app"/>
        : <Card className="card-app">
          <Card.Header className="text-center">Compare su precio!</Card.Header>
          <Card.Body className="cardBody-app">
            {showResponse
              ? showError
                ? <DisplayError />
                : <Fragment>
                  <CompareResult
                    currentPrice={currentPrice}
                    price={response.precio}
                    message={response.mensaje}
                  />
                  <Button
                    variant="primary"
                    className="mt-4"
                    onClick={() => handleResponse(false, false)}
                  >
                    Comparar otro producto
              </Button>
                </Fragment>
              : <BarcodeInput
                handleSubmit={handleSubmit}
              />
            }

          </Card.Body>
        </Card>
      }
    </div>
  );
}

export default App;
