// import and require express
const express = require('express');

const path = require('path');

const api = require('./routes/apiroute');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extend: true}));

app.use(express.static('public'));

app.use('/api', api);

app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, './public/index.html'))
);

app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, './public/notes.html'))
);

app.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, './public/index.html'))
);

// require('./routes/apiroute')(app);
// require('./routes/htmlroute')(app);

app.listen(PORT, () => 
  console.log(`App listening at http://localhost:${PORT}`)
);