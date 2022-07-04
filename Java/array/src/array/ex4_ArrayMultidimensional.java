package array;

import java.util.Random;

public class ex4_ArrayMultidimensional {

	public static void main(String[] args) {
		/* Gere e imprima uma matriz M 4x4 com valores
		 * aleatórios entre 0-9.
		*/

		Random random = new Random();
		
		int[][] M = new int[4][4];
		
		int i = 0;
		int j = 0;
		
		for(i=0; i<M.length; i++) {
			for(j=0; j<M[i].length; j++) {
				M[i][j] = random.nextInt(9);
			}
		}
		
		//Exibindo a matriz
		for (int l = 0; l < M.length; l++)  {  
		    for (int c = 0; c < M[0].length; c++)     { 
		        System.out.print(M[l][c] + " "); //imprime caracter a caracter
		    }  
		    System.out.println(" "); //muda de linha
		}  
		
		System.out.println("aaaaaa");
		int num = 5, count = 1;
        do {
            num += count;
            System.out.println(num);
        } while (count <= 3);


	}

}
