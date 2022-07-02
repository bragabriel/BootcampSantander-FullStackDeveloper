/* Import */

//Named exports
import {funcao, variavel, classe} from './export.js'


//Default exports
import valorDefault from './export.js'


//Usando alias
import {arquivo as Apelido} from './export.js'
Apelido.metodo();


//Importando todos os métodos do arquivo
import * as INFOS from './export.js'
INFOS.metodoA()


//Vinculando no HTML:
/* 
<script type="module" src="./export.js"</script>
*/