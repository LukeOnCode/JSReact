const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;
//Init middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.send('API running'));

// Define Routes
app.use('/api/users', require('./routes/api/user'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))

app.listen(PORT, () => {
    console.log(`SERVER ON ${PORT} RUNNING`);
})

