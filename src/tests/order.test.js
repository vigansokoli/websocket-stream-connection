import rest from '../con/rest';

describe('Create a spot order', () => {
  it('should return getKey', async () => {
    await expect(rest.spotOrder()).resolves.toBeDefined();
  });
});