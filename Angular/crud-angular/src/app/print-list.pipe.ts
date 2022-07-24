import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'printList',
  pure: false /* Pipe Impuro, fica atualizando toda hora. Vem como default Puro: true */
})
export class PrintListPipe implements PipeTransform {

  transform(value: String[], ...args: unknown[]): unknown {
    /* Recebe um array de String */

    let returnStr = '';

    /* Se veio algo no value */
    if(value.length){
      value.forEach(val => {
        returnStr = returnStr + ' ' + val;
      })
    }
    return returnStr;
  }

}
