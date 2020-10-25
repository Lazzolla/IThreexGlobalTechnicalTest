import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'

export default function CompareResult({ currentPrice, price, message }) {
    const [messageColor, setMessageColor] = useState('')

useEffect(() => {
    // Choose a text color for each message
    if (message) {
        switch (message) {
            case 'caro': setMessageColor('text-danger')
                break
            case 'barato': setMessageColor('text-success')
                break
            default: setMessageColor('')
                break
        }
    }
}, [message])

return (
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>Su precio</th>
                <th>Nuestro Precio</th>
                <th>Relación</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><h3>{currentPrice.replace(/^0+/, '')}</h3></td>
                <td><h3>{price}</h3></td>
                <td className={messageColor}>
                    <h3>{message}</h3>
                </td>
            </tr>
        </tbody>
    </Table>
)
}
