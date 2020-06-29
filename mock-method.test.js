import {sumWithBonus} from './mock-method' 

describe('scenario 1', () => {

    it('test', () => {
        const bonusMock = jest.fn(() => 10);
        expect(sumWithBonus(2, 3, bonusMock)).toBe(15)
        expect(bonusMock).toHaveBeenCalledTimes(1);
    })
})