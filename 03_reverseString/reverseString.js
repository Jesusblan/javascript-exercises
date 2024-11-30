const reverseString = function(string) {
    let newString = ""
    for (let i = 0; i < string.length; ){
        newString = newString + string.slice(-1)
        string = string.slice(0, -1)
    }
    return newString

};

// Do not edit below this line
module.exports = reverseString;
