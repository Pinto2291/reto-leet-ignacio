// Botones y text area
let textArea = document.getElementById('leetText');
let buttonLeet = document.getElementById('buttonLeet');
let buttonLeetSimple = document.getElementById('buttonLeetSimple');
let result = document.getElementById('result');
let reset = document.getElementById('buttonReset');

let text_area_multiple = document.getElementById('leetTextMultiple');

let convert = document.getElementById('button-conversion-multiple');

// Funcion para pasar a leet complejo

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

        if(leetTableLetter.hasOwnProperty(letter.toLowerCase())) {
            finalResult.push(leetTableLetter[letter.toLowerCase()]);
        } else {
            finalResult.push(letter.toLowerCase())
        }
        
    })
        return finalResult.join('');
}

// Funcion para pasar a leet simple

function leetConverterSimple(text) {

     let finalResult = [];

     text.split('').map((letter) => {
        const leetTableLetter = {
            a: "4",
            b: "8",
            e: "3",
            g: "6",
            l: "1",
            o: "0",
            s: "5",
            t: "7",
            z: "2",
        };

        if(leetTableLetter.hasOwnProperty(letter.toLowerCase())) {
            finalResult.push(leetTableLetter[letter.toLowerCase()]);
        } else {
            finalResult.push(letter.toLowerCase())
        }
        
    })
        return finalResult.join('');;
}

buttonLeet.addEventListener('click', () => {
    result.value = leetConverter(textArea.value);
})

buttonLeetSimple.addEventListener('click', () => {
    result.value = leetConverterSimple(textArea.value);
})

reset.addEventListener('click', () => {
    result.value = '';
    textArea.value = '';
})

let multiple_advance = document.getElementById('leet-multiple-advance');
let multiple_simple = document.getElementById('leet-multiple-simple');

convert.addEventListener('click', () => {
    multiple_simple.value = leetConverterSimple(text_area_multiple.value);
    multiple_advance.value = leetConverter(text_area_multiple.value)
})

let reset_all = document.getElementById('button-reset-multiple');

reset_all.addEventListener('click', () => {
    multiple_simple.value = '';
    multiple_advance.value = '';
    text_area_multiple.value = '';
})

let select_options = document.getElementById('select_options');
let button_select = document.getElementById('button_select');
let text_area_select = document.getElementById('text_area_select');
let text_area_select_result = document.getElementById('text_area_select_result');

select_options.addEventListener('change', () => {
    console.log(select_options.value);
})

button_select.addEventListener('click', () => {
    
    switch(select_options.value){
        case 'basic':
            return text_area_select_result.value = leetConverterSimple(text_area_select.value);
            break;
        case 'medium':
            return text_area_select_result.value = leetConverter(text_area_select.value);
            break;

    }
    console.log(select_options.value);
})