const { getInitials, createSlug, average, createSlugSplitJoin, isPalindrome, createSlugVerify, findPostById } = require("./snacks");


const numbersArr = [2, 3, 6, 9];

const posts = [
    {
        id: 1,
        title: "Tramonto sulla spiaggia di Vieste",
        slug: "tramonto-sulla-spiaggia-di-vieste"
    },
    {
        id: 2,
        title: "Guida alle calette nascoste del Salento",
        slug: "guida-alle-calette-nascoste-del-salento"
    },
    {
        id: 3,
        title: "Cosa portare per una giornata al mare",
        slug: "cosa-portare-per-una-giornata-al-mare"
    }
];


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

//  Snack 6

test("La funzione createSlugVerify lancia un errore se il titolo è vuoto o non valido.", () => {
    expect(() => createSlugVerify("")).toThrow('titolo vuoto o non valido');
    expect(() => createSlugVerify(null)).toThrow('titolo vuoto o non valido')

})

// Snack 7

test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {

    expect(findPostById(posts, 2)).toEqual({
        id: 2,
        title: "Guida alle calette nascoste del Salento",
        slug: "guida-alle-calette-nascoste-del-salento"
    });
});






