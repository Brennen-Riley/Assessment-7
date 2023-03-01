function isPangram(sentence) {
    const alphChars = sentence.toLowerCase().replace(/[^a-z]/g, '')

    const seenLetters = {};

    for (let i = 0; i < alphChars.length; i++) {
        const letter = alphChars[i];

        if (!seenLetters[letter]) {
            seenLetters[letter] = true;
        }
    }
    return Object.keys(seenLetters).length === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"));