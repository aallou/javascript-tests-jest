import * as myModule from './mock-method2'

test('adds 1 + 2 to equal 3', () => {
  myModule.bonus = jest.fn(() => 10);
  expect(myModule.sum(1, 2)).toBe(13);
  expect(myModule.bonus).toHaveBeenCalledTimes(1);
});