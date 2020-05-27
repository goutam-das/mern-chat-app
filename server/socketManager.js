import { io } from './index';

export default (socket) => {
    console.log(`socket id ${socket.id}`);

    socket.on('disconnect', () => {
        console.log('user disconnected');
    })
}