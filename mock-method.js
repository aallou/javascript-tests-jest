export const sumWithBonus = (a, b, bonus) => {
    return a + b + bonus()
}

export const bonus = () => {
    return Math.random();
} 

