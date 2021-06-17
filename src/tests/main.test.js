import axios from 'axios';
import rest from '../con/rest';
import timing from '../helper/isEventResponseDelayed'

describe('Get the key', () => {
  it('should return getKey', async () => {
    await expect(rest.getKey()).resolves.toBeDefined();
  });
});

describe('check if delay 0 return false', () => {
  it('should return getKey', async () => {
      expect(timing({ e:"executionReport", "i": 1234, "E": 12345}, "12345")).toBe(false)
  });
});

describe('check if delay >0 returns true', () => {
  it('should return getKey', async () => {
      expect(timing({ e:"executionReport", "i": 12346, "E": 12346}, 12345)).toBe(true)
  });
});