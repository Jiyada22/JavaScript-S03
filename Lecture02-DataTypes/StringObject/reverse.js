function reverseString(value) {
    let reverseString = "";

    value.split("").forEach((char) => {
        reversedValue = char + reversedValue;
    });
    return reversedValue;
}

console.log(reverseString("Reverse Me"));