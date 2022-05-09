// import and require express
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extend: true}));

app.use(express.static('public'));

require('./routes/apiroutes')(app);
require('./routes/htmlroutes')(app);

app.listen(PORT, () => 
  console.log(`App listening at http://localhost:${PORT}`)
);