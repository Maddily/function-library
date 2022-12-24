function capitalize(string) {
    let firstChar = string.substr(0, 1);
    let newStr = string.toLowerCase().replace(firstChar, firstChar.toUpperCase());
    return newStr;
}