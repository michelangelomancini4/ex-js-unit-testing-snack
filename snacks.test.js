const { getInitials, createSlug } = require("./snacks")

// Snack 1

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials('Luca Cordero')).toBe('LC');
    expect(getInitials('Luca Cordero Di Montezemolo')).toBe('LCDM')
})

//  Snack 2

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug('METAL SLUG')).toBe('metal slug');
    expect(createSlug('METAL SLUG SlAyEr')).toBe('metal slug slayer');
})
