const connectToMongoose=require('./db')
const express = require('express');
const app = express()
var cors = require('cors')


 
app.use(cors())
const port = 4000

connectToMongoose();

app.use(express.json());

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.use('/api/email',require('./routes/email'))




app.listen(port, () => {
  console.log(`NoteHub backend listening at port http://localhost:${port}`)
})