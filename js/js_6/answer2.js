let str = "abcdabcdefgggh";

function extractUniqueCharacters(str){
    let chars = "";
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if (chars.indexOf(element) == -1) {
            chars += element;
        }
    }
    console.log(chars);
}
extractUniqueCharacters(str)