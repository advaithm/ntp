import express from 'express';
import axios from 'axios';

const app = express();

app.use(express.static(__dirname));

const backgrounds = []



app.get("/api", (req, res) => {
    res.json({
        ok: true
    })
})

const port = process.env.PORT || 3001;

app.listen(port)

module.exports = app