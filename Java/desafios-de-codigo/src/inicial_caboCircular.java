import java.util.Scanner;

public class inicial_caboCircular {

	public static void main(String[] args) {
		/* Você tem em mãos dois cabos circulares de energia. 
		 * O primeiro cabo tem raio R1 e o segundo raio R2.
		 * Você precisa comprar um conduite circular de maneira a passar os dois cabos por dentro dele:
	    
	    Qual o menor raio do conduite que você deve comprar?
		 Em outras palavras, dado dois círculos, qual 
		 o raio do menor círculo que possa englobar ambos os dois?
		 * */

		Scanner scan = new Scanner(System.in);
			int T = scan.nextInt();
		    
		for (int i = 0; i < T; i++) {
			int R1 = scan.nextInt();
		    int R2 = scan.nextInt();
		    System.out.println(((R1+R1) + (R2+R2)) / 2);
		}
	}
}