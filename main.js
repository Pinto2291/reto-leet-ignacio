// Botones y text area
let textArea = document.getElementById('leetText'); // text area del primer sistema
let buttonLeet = document.getElementById('buttonLeet'); // boton leet para conversion compleja
let buttonLeetSimple = document.getElementById('buttonLeetSimple');
let result = document.getElementById('result'); // boton leet para conversion simple
let reset = document.getElementById('buttonReset'); // boton para resetar los valores

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

function leet_advance(text) {
    let finalResult = [];
    
    text.split('').map((letter) => {
        const leetTableLetter = {
            a: "@",
            b: "8",
            c: "<",
            d: "|>",
            e: "3",
            f: "I=",
            g: "6",
            h: "]-[",
            i: "1",
            j: "¿",
            k: "|<",
            l: "1_",
            m: "|V|",
            n: "[\]",
            o: "()",
            p: "|°",
            q: "9",
            r: 'I2',
            s: "5",
            t: "+",
            u: '|_|',
            v: '\\/',
            w: '\\/\\/',
            x: '><',
            y: 'j',
            z: "2",
        };

        if(leetTableLetter.hasOwnProperty(letter.toLowerCase())) {
            finalResult.push(leetTableLetter[letter.toLowerCase()]);
        } else {
            finalResult.push(letter.toLowerCase())
        }
        
    })
        return finalResult.join('');
};

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

/* segundo sistema de conversion */

let text_area_multiple = document.getElementById('leetTextMultiple'); // 
let multiple_advance = document.getElementById('leet-multiple-advance');
let multiple_simple = document.getElementById('leet-multiple-simple');

let reset_all = document.getElementById('reset_all');

reset_all.addEventListener('click', () => {
    text_area_multiple.value = '';
    multiple_advance.value = '';
    multiple_simple.value = '';
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
        case 'advance':
            return text_area_select_result.value = leet_advance(text_area_select.value);
            break;
        default:
            alert('selecciona una opcion valida');
            break;

    }
    console.log(select_options.value);
})

text_area_multiple.addEventListener('keyup', () => {
    multiple_simple.value = leetConverterSimple(text_area_multiple.value);
    multiple_advance.value = leetConverter(text_area_multiple.value)
})
