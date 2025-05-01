/*
  Ejercicios 9:
  Crear una funcion que reciba como parametro un arreglo de palabras
  e imprima en la consola la palabra mas larga y la palabra mas corta del arreglo
  ejemplo: ["fresa","uva","manzana"] -> "manzana" y "uva"
*/

/*function ejercicio9(parametro){
    let mayor = parametro[0];
    let menor = parametro[0];
    for (let i = 1; i < parametro.length; i++) {
        if(mayor.length < parametro[i].length){
        mayor = parametro[i];
        }
        if(menor.length > parametro[i].length){
        menor = parametro[i];
        }
    }
    console.log(mayor, "y", menor);
}

let lista = ["fresa","uva","manzana"];
// console.log("Arreglo original: ", lista);

ejercicio9(lista);
*/


/*Ejercicios 10:
  Crear una funcion que reciba como parametro un arreglo de numeros
  e imprima en consola el numero mayor del arreglo, 
  si hay dos numeros iguales, que se imprima cualquiera junto con su posicion
  ejemplo: [1,2,3,4,5] -> [5, 4] || [20,45,22,45] -> [45, 1]*/

function ejercicio10(parametro){
    let NumMayor = parametro[0];
    let position = 0;
    for(let i = 1; i < parametro.length; i++){
        if(NumMayor < parametro[i]){
            NumMayor = parametro[i];
            position = i;
        }
    }
    console.log("En este arreglo", parametro, "el numero Mayor y su posicion es:", [NumMayor, position]);
}

let list1 = [1, 2, 3, 4, 5];
let list2 = [20, 45, 22, 45];

ejercicio10(list1);
ejercicio10(list2); 


/*
  Ejercicios 11:
  Crear una funcion que reciba como parametro un arreglo de numeros
  e imprima en consola el numero menor del arreglo, 
  si hay dos numeros iguales, que se imprima cualquiera junto con su posicion
  ejemplo: [1,2,3,4,5] -> [1, 0] || [25,48,22,22] -> [22, [2,3]] o [22, 2]
*/

function ejercicio11(parametro){
    let NumMenor = parametro[0];
    let position = 0;

    for(let i = 1; i < parametro.length; i++){
        if(NumMenor > parametro[i]){
            NumMenor = parametro[i];
            position = i;
        }

    }
    console.log("En este arreglo", parametro, "el numero menor y su posicion es:", [NumMenor,position]);
}

let list3 = [1,2,3,4,5]
let list4 = [25,48,22,22]

ejercicio11(list3)
ejercicio11(list4)


/*
  Ejercicios 12:
  Crear una funcion que reciba como parametro un arreglo de arreglos
  e imprima en consola todos los elementos del arreglo de arreglos
  ejemplo: [[1,2,3],[4,5,6],[7,8,9]] -> [1,2,3,4,5,6,7,8,9]
  Pista: usar un for anidado (for dentro de for)
*/

function ejercicio12(parametro){
    let ListCompl = []

    for(let i = 0; i < parametro.length; i++){
        for(let j = 0; j < parametro[i].length; j++){
            ListCompl.push(parametro[i][j]);
        }
    }
    console.log("De este arreglo de arreglos", parametro, "se unen en un solo arreglo asi:", ListCompl)
}
let listlist = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
ejercicio12(listlist)


/*
  Ejercicios 13:
  Crear una funcion que reciba como parametro un 
  arreglo de frutas
  e imprima el nombre de la fruta mas larga, 
  con la letras en posicion par en mayusculas y 
  con la letras en posicion impar en minusculas
  ejemplo: ["uva","fresa","manzana"] -> "MaNzAnA"
*/

function ejercicio13(parametro){
    let larga = parametro[0]
    let palabra = ""

    for(let i = 1; i < parametro.length; i++){
        if(larga.length < parametro[i].length){
            larga = parametro[i]
        }
    }

    for(let i = 0; i < larga.length; i++){
        if(i % 2 == 0){
            palabra += larga[i].toUpperCase()
        }else{
            palabra += larga[i].toLowerCase()
        }
    }
    console.log("la palabra mas larga es:",palabra)
}
let arreglo = ["uva", "Fresa", "manzana"]
ejercicio13(arreglo)  
  
  /*
    Ejericio 14:
    Crea una funcion que realice el factorial de un numero utilizando ciclos
  */
 function ejercicio14(n){
    if(n<0){
        return "No se puede calcular el factorial de un numero negativo";
    }else if(n == 0){
        return 1;   }
 }
  /*
    Ejericio 15:
    Crea una funcion que realice la sucecion de fibonacci utilizando ciclos
  */
  /*
    Ejericio 16:
    Crea las funciones agregar, eliminar, buscar, actualizar de un arreglo.
    Cada funcion debe recibir como parametro el arreglo y el elemento a agregar, eliminar,
    buscar o actualizar y debe retornar el arreglo modificado. Debes imprimir el arreglo
    modificado en cada funcion para verificar su funcionamiento.
  */