const express = require('express');
const bodyParser = require('body-parser')
const apiRoute = require('./app/routing/apiRoutes');
const htmlRoute = require('./app/routing/htmlRoutes');

// create express app
const app = express();
// define listening port use env if present
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json());
// have express use api as the base route
app.use('/api', apiRoute);
// have express use html as the base route 
app.use('/html', htmlRoute);

//create a server
app.listen(PORT, ()=>{
  console.log('Server listening on port ' + PORT);
})