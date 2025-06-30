// snack 1
function getInitials(fullName) {
    return fullName
        .split(" ")
        .map(word => word[0].toUpperCase())
        .join("");
};

// snack 2
function createSlug(fullName) {
    return fullName.toLowerCase()
}
// snack 3
function average(array) {
    const sum = array.reduce((acc, curr) => acc + curr, 0);
    return sum / array.length;
}

// snack 4
function createSlugSplitJoin(str) {
    return str.split(" ").join("-");
}
// snack 5
function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/\s+/g, "");
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

// snack 6
function createSlugVerify(title) {
    if (!title) {
        throw new Error("titolo vuoto o non valido");

    }
    return title.toLowerCase().replaceAll("", "-");
}

function findPostById(posts, id) {
    return posts.find(post => post.id === id);
}


module.exports = { getInitials, createSlug, average, createSlugSplitJoin, isPalindrome, createSlugVerify, findPostById }