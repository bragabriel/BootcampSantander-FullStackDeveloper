package array;

public class ex1_OrdemInversa {

	/* Crie um vetor de 6 números inteiros. 
	 * Exiba o vetor na ordem correta, e depois na ordem inversa.
	*/
	
	public static void main(String[] args) {

		int[] vetor = {-5, -6, 15, 50, 8, 4};

		int count = 0;
		
		//Exibindo o vetor
		System.out.println("Vetor: ");
		while(count < vetor.length) {
			System.out.print(vetor[count] + " ");
			count++;
		}
		
		//Vetor na ordem inversa
		System.out.println("\n\n Vetor inverso: ");
		for(int i=(vetor.length - 1); i >= 0; i--) {
			System.out.print(vetor[i] + " ");
		}
	}
}