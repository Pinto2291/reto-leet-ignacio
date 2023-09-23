function convertToLeet(text) {
    const leetTable = {
    a: "4",
    b: "8",
    e: "3",
    g: "6",
    l: "1",
    o: "0",
    s: "5",
    t: "7",
    z: "2"
};

    let leetText = "";

for (let i = 0; i < text.length; i++) {
        const char = text[i].toLowerCase();
    if (leetTable.hasOwnProperty(char)) {
        leetText += leetTable[char];
    } else {
        leetText += text[i];
    }
}

    return leetText;
}



let texto = 'texto que hay q pasar a leet';

let finalText = texto.split('').map((letter) => {

    const leetTableLetter = {
        a: "4",
        b: "8",
        e: "3",
        g: "6",
        l: "1",
        o: "0",
        s: "5",
        t: "7",
        z: "2"
    };

    if(leetTableLetter.hasOwnProperty(letter)) {
        return leetTableLetter[letter];
    } else {
        return letter;
    }
})

console.log(finalText.join(''));
console.log(convertToLeet(texto));

