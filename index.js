const express = require('express');
const app = express();

app.get('/asdf', (req, res) => {
    res.send({ hi: 'there'});
});

//test
const PORT = process.env.PORT || 5000;
app.listen(PORT);

