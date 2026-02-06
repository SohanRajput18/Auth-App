const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')  // without cors the frontend cannot request the backend, as it will reject the req bcz the req is coming from diff port
const AuthRouter = require('./routes/AuthRouter')
const ProductRouter = require('./routes/ProductRouter')

require('dotenv').config();
require('./models/db');

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json()) // will conver the json content into javascript object which can be accessed through req.body.___
app.use(cors())  // allows req from diff ports
app.use('/auth', AuthRouter)
app.use('/products', ProductRouter)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
