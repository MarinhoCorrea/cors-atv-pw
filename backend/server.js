const express = require('express');
const app = express();
const PORT = 8000;

app.get('/api/mensagens', (req,res) =>{
    res.json({data:"Mensagem secreta da API em 8000"})
});

app.listen(PORT,() =>{
    console.log(`API Backend rodando em : http://localhost: ${PORT}`);
})