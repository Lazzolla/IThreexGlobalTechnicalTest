module.exports = {
    // Compare price from client
    comparePrice(req, res) {
        console.log(req.body)
        const { precio } = req.body
        // Create a random price to simulate fetch
        const randomPrice = Math.floor((Math.random() * 100) + 1)
        // Compare de client price with the random price between a range and return specified response
        if (parseInt(precio.replace(/^0+/, '')) < randomPrice - 10) return res.json({ precio: randomPrice, mensaje: 'barato' })
        if (parseInt(precio.replace(/^0+/, '')) > randomPrice + 10) return res.json({ precio: randomPrice, mensaje: 'caro' })
        return res.json({ precio: randomPrice, mensaje: 'en precio' })
    }
}