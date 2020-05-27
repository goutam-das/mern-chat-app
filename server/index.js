import express from 'express';
import { resolve } from 'path';

const { PORT = 5000 } = process.env;
const app = express();

app.use(express.static(resolve(__dirname, 'client')));

app.get('/*', (req, res) => {
    res.sendFile(resolve(__dirname, 'client', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});