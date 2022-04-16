import express from 'express';
const router =express.Router();

// Get 瀏覽器呼叫
router.get('/test', (req, res,next) => {
    res.send('test!');
})

// POST
router.post('/test', express.json(), (req, res, next) => {
    res.send(JSON.stringify(req.body));
  });

//   錯誤處理
  router.get('/error', (req, res, next) => {
    throw 'error page.';
  });


  
  

export default router;