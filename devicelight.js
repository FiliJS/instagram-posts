

// devicelight

/*
    "devicelight" es un evento que tenemos con JS y nos permite acceder
    al sensor de luz ambiental de un dispositivo.
*/

/*
    Soporte: 
        Firefox: ✅ (parcial)
        Edge: ✅ WTF?

    https://caniuse.com/ambient-light
*/

window.addEventListener("devicelight", function(e){ 
    console.log(e.value); // El nivel de luz se imprime cada vez que este cambia
});





