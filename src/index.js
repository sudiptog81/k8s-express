const os = require('os');
const express = require('express');
const app = express();

app.set('json spaces', 2)

app.get('/', (req, res) => {
    const ifaces = os.networkInterfaces();
    // res.status(200).json({ data: ifaces });
    res.status(200).json({ data: '1.0.2' });
});

app.listen(3000, () => console.log("Listening on PORT 3000..."));
