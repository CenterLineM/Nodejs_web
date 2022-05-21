// Promise
const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try {
        // 檔案讀取
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'),'utf8');
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'),'\n\nNice to meet you. ');
        // 改名新建檔案
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname,'files', 'promiseComplete.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname, 'files',  'promiseComplete.txt'), 'utf8');
        console.log(newData);

    } catch (e) {
        console.error(err);
    }
}

fileOps();

// 檔案讀取
/* 
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data)
})
 */
// console.log('Hello...');

// 檔案寫入
/* 
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you.', (err) => {
    if (err) throw err;
    console.log('Write complete');

    // 附加寫入
    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes it is.', (err) => {
        if (err) throw err;
        console.log('Append complete')
        // 改名
        fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt') ,  (err) => {
            if (err) throw err;
            console.log('Rename complete')
        })

    })
})
 */

// exit on uncaught errors
process.on('uncaughtException', err=> {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})
