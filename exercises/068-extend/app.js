let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};


function extend(obj1, obj2) {
    // your code here
  for (val in obj2) { // miramos las propuedades el obj2, que son las que queremos añadir
    if (obj1.hasOwnProperty(val)){ // miramos si en el obj1 ya existe la propiedad 
        console.log("prop exists") // si existe, mostramos el mensaje en consola
    } else {
      obj1[val] = obj2[val] // de no existir, la añadimos a nuestro objeto
    }}
  return obj1 // retornamos el obj1 modificado 
 }
console.log(extend(obj1, obj2)) // ejecutamos la funcion