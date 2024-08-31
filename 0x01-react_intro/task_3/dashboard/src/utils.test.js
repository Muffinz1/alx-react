import { render } from '@testing-library/react';
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utils functions', () => {
  test('getFullYear returns the correct year', () => {
    const year = new Date().getFullYear();
    expect(getFullYear()).toBe(year);
  });

  test('getFooterCopy returns the correct string', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });

  test('getLatestNotification returns the correct string', () => {
    const expectedString = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(getLatestNotification()).toBe(expectedString);
  });
});
