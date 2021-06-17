import axios from 'axios';
import rest from '../con/rest';

describe('Get the key', () => {
  it('should return getKey', async () => {
    await expect(rest.getKey()).resolves.toBeDefined();
  });
});
