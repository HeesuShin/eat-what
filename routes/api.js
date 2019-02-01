const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('main', { title: '기본페이지', content: '기본페이지입니다.' });
});

module.exports = router;
