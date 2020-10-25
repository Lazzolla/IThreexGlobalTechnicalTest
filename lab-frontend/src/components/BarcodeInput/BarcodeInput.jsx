import React, { useState, Fragment, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import BarcodeReader from '../BarcodeReader/BarcodeReader'
import useHandleInputs from '../CustomHooks/UseHandleInputs'
import { getProvinces } from '../../helpers/provinces'

export default function BarcodeInput(props) {
  // use a custom hook to handle inputs
    const { filterState, handleChange, setFilterState } = useHandleInputs({ barcode: '', id_provincia: '1', precio: '0' })
    const [showBarcodeReader, setShowBarcodeReader] = useState(false)
    const [showError, setShowError] = useState('')
  
    useEffect(() => {
      // handle error display
      if (showError) {
        setTimeout(() => {
          setShowError('')
        }, 2000)
      }
    }, [showError])

    useEffect(() => {
        setShowBarcodeReader(false)
    }, [filterState.barcode])
  
    const barcodeCheck = (data) => {
      setFilterState(prevState => {
        return {
          ...prevState,
          barcode: data
        }
      })
    }
  
    const handleSubmit = () => {
      if (filterState['barcode'].length === 0) return setShowError('Por favor escanee un codigo de barras antes de comparar precios.')
      if ((filterState['precio'] === '0') || (filterState['precio'] === '')) return setShowError('Por favor ingrese un precio para el producto que desea comparar.')
      props.handleSubmit(filterState)
    }
    return (
        <div>
        {showBarcodeReader
            ? <div className="barcode-container-app">
              <BarcodeReader
                barcodeCheck={barcodeCheck}
              />
              <Button
                onClick={() => setShowBarcodeReader(false)}
                variant="primary"
                className="scan-button-app"
              >
                Cancelar escaneo.
              </Button>
            </div>
            : <Fragment>
              <Card.Title>Lea el codigo de barras del producto que desea comparar</Card.Title>
              {filterState['barcode'].length > 0 &&
                <Card.Text className="mt-3">
                  {'El codigo de barras registrado es: ' + filterState['barcode']}
                </Card.Text>
              }
              <Button
                onClick={() => setShowBarcodeReader(true)}
                variant="primary"
                className="scan-button-app"
              >
                {filterState['barcode'].length > 0 ? 'Escanear de nuevo' : 'Escanear'}
              </Button>
            </Fragment>
          }
          <Card.Text className="mt-3">
            Ingrese el precio del producto seleccionado
      </Card.Text>
          <Form.Control
            name="precio"
            type="number"
            placeholder="Precio del producto"
            value={filterState['precio']}
            onChange={(event) => handleChange(event)}
          />
          <Card.Text className="mt-3">
            ¿En que provincia se encuentra?
      </Card.Text>
          <Form.Control
            as="select"
            custom
            name="id_provincia"
            value={filterState['id_provincia'] || 1}
            onChange={(event) => handleChange(event)}
          >
            {getProvinces().map((province, key) => (
              <option key={key} value={key + 1}>{province}</option>
            ))}
          </Form.Control>
          <Button
            variant={showError ? "danger" : "primary"}
            disabled={showError}
            className="mt-4"
            onClick={() => handleSubmit()}
          >
            {showError ? showError : 'Comparar'}
          </Button>    
        </div>
    )
}
