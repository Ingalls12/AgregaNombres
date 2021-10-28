//Desarrollar  un programa con una función que, agregando cualquier cantidad de amigos, permita ordenarlos alfabéticamente. Utilizar arrays para solucionar el problema.
var abecedario = "a, b, c, d, e, f, g, h, i, j, k, l, m, n, ñ, o, p, q, r, s, t, u, v, w, x, y, z".split(", ");
//Creo diccionario y lo lleno con keys del abecedario
var nombres = {};
for(let letra = 0;letra<abecedario.length;letra++){
    nombres[abecedario[letra]]=[];
}
//Agrego amigos
var salir = true;
while(salir){
    let nombreIntroducido = prompt("Escribe el nombre de tu amigo:\n(Escribre 'salir' para terminar dejar de agregar)");
    if(nombreIntroducido=="salir"){
        salir = false;
    }else{
        let inicial = nombreIntroducido.trim().toLocaleLowerCase()[0];
        nombres[inicial].push(nombreIntroducido);
    }
}
//Muestro los valores que hay en cada letra ordenados
for(let i in nombres){
    nombres[i].sort()
    console.log(i + ": "+nombres[i]);
}