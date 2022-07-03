import java.util.Scanner;

public class ex5_Tabuada {

	public static void main(String[] args) {
		/* 
		 * Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer
		 * número entre 1 e 10. O usuário deve informar de qual número ele deseja ver a tabuada.
		 * A saída eve ser conforme o exemplo abaixo:
		*/
		System.out.println("Insira um número para ver sua tabuada: ");
		Scanner scan = new Scanner(System.in);
		
		int tabuada = scan.nextInt();
		
		System.out.println("Tabuada do número: " + tabuada);
		
		for (int i = 1; i<=10; i++) {
			System.out.println(tabuada + "x" + i + "=" + (tabuada*i));
		}
	}

}
