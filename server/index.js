import express from 'express';
import { Server } from 'http';
import socketIo from 'socket.io';
import { resolve } from 'path';
import cors from 'cors';

import socketManager from './socketManager';

const { PORT = 5000 } = process.env;

const expressApp = express();
const app = Server(expressApp);
export const io = socketIo(app);

io.on('connection', socketManager);

expressApp.use(cors());

expressApp.use(express.static(resolve(__dirname, 'client')));
expressApp.get('/*', (req, res) => {
    res.sendFile(resolve(__dirname, 'client', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});