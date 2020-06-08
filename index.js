const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./endpoints/index');
app.use('/craft', routes);
app.use(bodyParser.json({urlencoded: true}));
const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`server listening on port ${server.address().port}`);
});