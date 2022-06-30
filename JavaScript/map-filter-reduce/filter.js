/* filtra os elementos do array */

const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi'];

frutas.filter((fruta) => fruta.includes('maçã')) 
//                      .include() = se inclui a palavra * na string
//retorno: ['maçã fuji', 'maçã verde']