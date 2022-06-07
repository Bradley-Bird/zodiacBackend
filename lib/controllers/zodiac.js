const { Router } = require('express');
const { zodiac } = require('../../data/zodiac');

module.exports = Router()
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const signId = zodiac.find((sign) => sign.id === id);
    res.json(signId);
  })
  .get('/', (req, res) => {
    const sign = zodiac.map(({ id, name }) => {
      return { id, name };
    });
    res.json(sign);
  });
