const express = require('express');
const app = express();
const request = require("request")

app.get('/', express.static("../public"))
app.get('/api', (req: any, res: any) => {
    res.json({
        ok: true
    })
})

app.use((req: any, res: any) => {
    res.status(400);
    res.json({
        ok: false,
        statusCode: 404
    })
});
   
app.use((req: any, res: any) => {
    res.status(500);
    res.json({
        ok: false,
        statusCode: 500
    })
});

const port = process.env.PORT || 3000;

app.listen(port)

module.exports = app