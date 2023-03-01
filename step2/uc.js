function hasUniqueChars(word) {
    const seenChars = {};

    for (let i = 0; i < word.length; i++) {
        const char = word[i];

        if (seenChars[char]) {
            return false;
        }
        seenChars[char] = true;
    }
    return true;
}

console.log(hasUniqueChars("Monday"))
console.log(hasUniqueChars("Moonday"))