const addToZero = nums => {
    let seen = new Set();
    for (let num of nums) {
        if (seen.has(-num)) {
            return true;
        } else {
            seen.add(num);
        }
    }
    return false;
}

console.log(addToZero([1, 2, 3]));

console.log(addToZero([1]));

console.log(addToZero([]));

console.log(addToZero([1, 2, 3, -2]));

