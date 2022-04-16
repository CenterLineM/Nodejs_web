import express from 'express';
import path from 'path';

// 路由
import appRouter from './app/app.routing';


const app = express();

app.get('/', (req, res, next) => {
    res.send('你好程序!!');
});

// 程序路由
app.use('/', appRouter);






app.listen(3000, () => console.log('http server is running at port 3000.'));


