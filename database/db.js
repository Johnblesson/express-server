const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/express-server', {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
});

// const db = mongoose.connection;
mongoose.connection.on('error', (error) => console.error(error));
mongoose.connection.once('open', () => console.log('Connected to database'))