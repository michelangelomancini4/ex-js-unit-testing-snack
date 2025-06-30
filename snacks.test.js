const { getInitials, createSlug, average, createSlugSplitJoin, isPalindrome } = require("./snacks");


const numbersArr = [2, 3, 6, 9];

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

//  Snack 3

test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(average(numbersArr)).toBe(5)
})

//  Snack 4

test("La funzione createSlugSplitJoin sostituisce gli spazi con -.", () => {
    expect(createSlugSplitJoin('metal slug')).toBe('metal-slug');
    expect(createSlugSplitJoin('la foresta in fondo')).toBe('la-foresta-in-fondo')
})

// Snack 5

test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome("i topi nipoti")).toBe(true)
    expect(isPalindrome("Salas")).toBe(true)
})






