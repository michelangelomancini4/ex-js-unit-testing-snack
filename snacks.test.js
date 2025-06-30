function somma(x, y) {
    return x + y;
}

test('somma', () => {
    const res = somma(1, 1);
    expect(res).toBe(2);
})