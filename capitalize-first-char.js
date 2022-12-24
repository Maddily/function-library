function capitalize(string) {
    let firstChar = string.charAt(0);
    let newStr = string.toLowerCase().replace(firstChar, firstChar.toUpperCase());
    return newStr;
}