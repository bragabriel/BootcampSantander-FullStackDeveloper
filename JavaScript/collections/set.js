/* Coleção com valores únicos, que não se repetem */

const myArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 9, 10]

const mySet = new Set(myArray);

console.log(mySet)


/* Métodos: */
mySet.add(1)
mySet.add(5)

mySet.has(1)
//true

mySet.has(12);
//false

mySet.delete(5)