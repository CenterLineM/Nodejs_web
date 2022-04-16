import mongoose from 'mongoose';

export const Database = {
    connect: () => {
        mongoose.connect('mongodb://localhost:27017/myapp')
            .then(() => console.log('Database is connected.'))
            .catch(err => console.log(err));
    }
};