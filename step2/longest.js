function findLongestWord(words) {
    let longestLength = 0;

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (word.length > longestLength) {
            longestLength = word.length;
        }
    }
    return longestLength;
}

console.log(findLongestWord(["hi", "hello"]));