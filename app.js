const express = require('express');

const path = require('path'); 

const app = express();

app.use(express.static('public'))
app.use(express.static('views'))

/*app.listen(3001, () => {
    console.log('Servidor corriendo en el puerto 3001')
});*/
const port = process.env.PORT || 3001;
app.listen(port, () => console.log('Servidor corriendo en el puerto ${port}'));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/home.html'));
});
