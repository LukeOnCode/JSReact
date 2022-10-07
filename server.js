const express = require('express');
const app = express();
const {deleteObjectFile ,change} = require('./utils/object_utils')
const PORT = 5000;
const cors = require('cors');

//Init middleware
app.use(express.json({ extended: false }))
app.use(cors({ origin: '*' }))
app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', require('./routes/api/user'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/post', require('./routes/api/post'))

app.listen(PORT, () => {
    deleteObjectFile();
    console.log(`SERVER ON ${PORT} RUNNING`);
})
