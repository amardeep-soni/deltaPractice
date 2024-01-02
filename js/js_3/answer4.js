let str = "Amardeep";
let charIndex = 5;

let charCodeAt = str.charCodeAt(charIndex);
if (charCodeAt >= 97 && charCodeAt <= 122) {
    console.log("Character is in lowercase");
} else{
    console.log("Character is in uppercase");
}

// or

if (str[charIndex] == str[charIndex].toLowerCase()) {
    console.log("Character is in lowercase");
} else{
    console.log("Character is in uppercase");
}