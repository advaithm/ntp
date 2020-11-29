const express = require('express');
const app = express();
const request = require("request")

app.get('/', express.static("../public"))
app.get('/api', (req: any, res: any) => {
    res.json({
        ok: true
    })
})

app.use((err: any, req: any, res: any) => {
    if(err) {
        res.redirect(`https://dothq.co${req.url}`)
    }
});

const port = process.env.PORT || 3000;

app.listen(port)

module.exports = app