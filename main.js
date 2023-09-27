let textArea = document.getElementById('leetText');
let buttonLeet = document.getElementById('buttonLeet');
let result = document.getElementById('result');

function leetConverter(text) {

    let finalResult = [];
    
    text.split('').map((letter) => {
        const leetTableLetter = {
            a: "4",
            b: "13",
            c: "(",
            d: "[)",
            e: "3",
            f: "|=",
            g: "6",
            h: "|-|",
            i: "|",
            j: ".]",
            k: "|<",
            l: "1",
            m: "|Y|",
            n: "/\/",
            o: "0",
            p: "|>",
            q: "0,",
            r: '|2',
            s: "5",
            t: "7",
            u: '[_]',
            v: 'V',
            w: '\v/',
            x: '}{',
            y: '`/',
            z: "2",
        };

        if(leetTableLetter.hasOwnProperty(letter)) {
            finalResult.push(leetTableLetter[letter.toLowerCase()]);
        } else {
            finalResult.push(letter.toLowerCase())
        }
        
    })
        return finalResult.join('');
}

buttonLeet.addEventListener('click', () => {
    result.innerText = leetConverter(textArea.value);
})