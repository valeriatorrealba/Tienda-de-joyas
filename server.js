const express = require('express');
const joyas  = require('./data/joyas.js');
const app = express();

const { HATEOAS, filtroCategoria, fieldsSelect, joya, orderValues } = require("./funciones.js")
app.listen(3000, () => console.log('Your app listening on port 3000'))

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Oh wow! this is working =)')
})
//http://localhost:3000/api/v1/joyas
//http://localhost:3000/api/v1/joyas?values=desc
//http://localhost:3000/api/v1/joyas?page=2

app.get('/api/v1/joyas', (req, res) => {
  if ( req.query.values == 'asc') return res.send(orderValues('asc'))
  if ( req.query.values == 'desc') return res.send(orderValues('desc'))
  
    if (req.query.page){
      const page = parseInt(req.query.page)
    const inicio = page * 2 - 2
    const fin = inicio + 2 
    return res.send({joyas: HATEOAS().slice(inicio, fin)})
  }

  res.send({
    joyas: HATEOAS(),
  })  
});

app.get('/api/v1/joyas/categoria/:categoria', (req, res) => {
  const categoria = req.params.categoria;

  res.send({
    Cant: filtroCategoria(categoria).length,
    Joyas: filtroCategoria(categoria),
  })  
});

app.get('/api/v1/joyas/:id', (req, res) => {
  const id = parseInt(req.params.id)
  if(req.query.fields) return res.send(fieldsSelect(joya(id)[0], req.query.fields))
    joya(id)[0]
  ? res.send ({
    joya: joya(id)[0],
  })
  : res.send({
    error: "404 Not",
    message: "La joya que buscas no existe."
  })
});
