let str = "Amardeep";

function vowelsCount(str) {
    str = str.toLowerCase();
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (vowels.indexOf(char) != -1) {
            vowelCount++;
        }
    }
    console.log(vowelCount);
}

vowelsCount(str)

// or
function vowelsCount2(str) {
    let vowelcount = 0;
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        const vowel = str[i];
        if (vowel == 'a' || vowel == 'e' || vowel == 'i' || vowel == 'o' || vowel == 'u') {
            vowelcount++;
        }
    }
    console.log(vowelcount);
}
vowelsCount2(str)

// or
function vowelsCount3(str) {
    str = str.toLowerCase();
    let vowelcount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u') {
            vowelcount++;
        }
    }
    console.log(vowelcount);
}
vowelsCount3(str)