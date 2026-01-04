function concatenateStrings(str1, str2, index = 0) {
    if (index >= str2.length) {
        return str1;
    } else {
        const newStr1 = str1 + str2[index];
        return concatenateStrings(newStr1, str2, index + 1);
    }
}

const concatenatedString = concatenateStrings('ABC', 'DEF');
console.log(concatenatedString);