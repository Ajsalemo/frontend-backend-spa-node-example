const express = require('express');
const path = require('path');
const app = express();
const port = process.env.port || 8080;

app.use(express.static(path.join(__dirname, './frontend/build')));
app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, './frontend/build/index.html'));
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});