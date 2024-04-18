const express = require('express');
const app = express();
const port = 3000;

//app.use(express.json());
app.use(express.urlencoded({extended: true}))

// arrow (=>) function ou callback
 
// app.get('/', (request, response) => { 
//   response.send(`Hello Anelleeeeeee!`)
// });

app.post('/salvar',(request, response) =>{
  let data = request.body.data;
  console.log(data)
  response.send(`${data}`)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
