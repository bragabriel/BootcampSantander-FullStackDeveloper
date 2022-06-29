function uniqueElements(array) {

	let set = new Set(array);
	return [...set]; //Spread para os elementos do set sejam retornados como Array

}

const Array = [30, 30, 40, 5, 223, 2049, 3034, 5];

console.log(uniqueElements(Array));