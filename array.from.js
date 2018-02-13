// Array.from()

/* 
   Este método nos ayuda a crear una nueva instancia de
   Array a partir de un objeto iterable (Array-like, nodos).
*/

// 1. NODOS A ARRAY
let elements = document.getElementsByClassName("fili");
Array.from(elements);
// Array[0,1,2,3], cada elemento con clase "fili"

// 2. ARGUMENTOS A ARRAY
function instagram() {
    let args = Array.from(arguments);
    // Array["texto", 6, {}]
}

instagram("texto", 6, {});

// 3. STRING A ARRAY
Array.from("Instagram");
// ["I", "n", "s", "t", "a", "g", "r", "a", "m"]

