const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('O sistema de entrega está online!');
});

app.post('/criar-pedido', (req, res) => {
    const novoPedido = req.body;
    console.log("Pedido recebido:", novoPedido);
    res.status(201).json({ message: "Pedido recebido!", pedido: novoPedido });
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
