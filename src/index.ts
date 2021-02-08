const add = (...x: number[]): number => x.reduce((sum, v) => sum + v, 0);

export { add, add as sum };
