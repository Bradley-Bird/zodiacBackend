const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { zodiac } = require('../data/zodiac');

describe('zodiacBackend routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/zodiac returns a list of zodiac signs ids and names', async () => {
    const resp = await request(app).get('/zodiac');
    const expected = zodiac.map(({ id, name }) => {
      return {
        id,
        name,
      };
    });
    expect(resp.body).toEqual(expected);
  });

  it('/zodiac/:id should return a detail view of a sign', async () => {
    const resp = await request(app).get('/zodiac/1');
    const aquarius = {
      id: '1',
      name: 'aquarius',
      dates: 'Jan 21 - Feb 19',
      symbol: 'Water Bearer',
    };
    expect(resp.body).toEqual(aquarius);
  });

  afterAll(() => {
    pool.end();
  });
});
