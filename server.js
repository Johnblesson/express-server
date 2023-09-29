const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('./database/db')
const postRoute = require('./routes/route');

app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1/', postRoute);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
