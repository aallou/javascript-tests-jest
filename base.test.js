import {sum} from './base' 

describe('scenario 1', () => {
    it('test1', () => {
        const a = 2
        expect(a).toBe(2)
    })

    it('test2', () => {
        expect(sum(2, 3)).toBe(5)
    })
})