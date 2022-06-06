const { Router } = require('express');
const { zodiac } = require('../../data/zodiac');

module.exports = Router().get('/', (req, res) => {
  const sign = zodiac.map(({ id, name }) => {
    return { id, name };
  });
  res.json(sign);
});
