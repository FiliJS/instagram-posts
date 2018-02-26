
/* Operador rest */

/*
    Los operadores rest o parámetros rest nos permiten
    representar un número indefinido de argumentos y
    que este sea un arreglo.
*/

function instagram(...myArgs) {
    console.log(myArgs.length);
}

instagram("Text", 20, 43, 43); // 4


/* Operador rest vs arguments */

/*
    Las diferencias entre el "operador rest" y "arguments" son
    varias, pero la principal es que el "operador rest" es una
    instancia de Array, esto nos permitiría usar ciertos 
    métodos directamente.
*/

function multiply(...myArgs) {
    return myArgs.map((element) => element * element);
}

multiply(5, 10, 3, 2); // [25, 100, 9, 4]



/* Con arguments */
function withArgs() {
    let args = Array.prototype.slice.call(arguments);
    // También puedes usar:
    let args2 = Array.from(arguments);

    return args.map((element) => element + 1);
}

withArgs(2, 4, 6, 7); // [3, 5, 7, 8]

/* Con el operador rest */
function withOpRest(...myArgs) {
    return myArgs.map((element) => element + 1);
}

withOpRest(2, 4, 6, 7); // [3, 5, 7, 8]






