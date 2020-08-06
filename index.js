require('dotenv').config()
const express = require("express");
const massive = require('massive')
const ctrl = require('./controller')


const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then(db => {
  app.set("db", db)
}).catch(err => console.log(err))

app.use(express.json());

app.get('/api/airplanes', ctrl.getAirplanes)
app.get('/api/airplanes/:id', ctrl.getAirPlaneById)
app.put('api/airpl')


app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
