import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.static(__dirname));

app.get("/api", (req, res) => {
    res.json({
        ok: true
    })
})

const port = process.env.PORT || 3001;

app.listen(port)

module.exports = app