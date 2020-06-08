const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./endpoints/index');
app.use(bodyParser.json({urlencoded: true}));
app.use('/craft', routes);
const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`server listening on port ${server.address().port}`);
});