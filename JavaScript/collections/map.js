/*
 Coleção de arrays no formato [chave, valor]
 Pode set iterado por um loop for...of
 */

const myMap = new Map()


/* Métodos: */

myMap.set('apple', 'fruit');
// Map(1) {"apple" => "fruit"}

myMap.get("apple")
// "fruit"

myMap.delete("apple")
// true

myMap.get("apple")
// undefined