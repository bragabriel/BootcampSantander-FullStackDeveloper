package array;

import java.util.Scanner;

public class ex2_Consoantes {

	public static void main(String[] args) {
		
		/*Faça um programa que leia um vetor de 6 caracteres, e diga
		 * quantas consoantes foram lidas, imprima as consoantes*/
		
		Scanner scan = new Scanner(System.in);

		String[] consoantes = new String[6];
		
		int qtdConsoantes = 0;
		int count = 0;		
		
		do {
			System.out.println("Letra: ");
			String letra = scan.next();
			
			if(!(letra.equalsIgnoreCase("a") |
			    letra.equalsIgnoreCase("e") |
				letra.equalsIgnoreCase("i") |
				letra.equalsIgnoreCase("o") |
				letra.equalsIgnoreCase("u"))) {
				
				consoantes[count] = letra;
				qtdConsoantes++;
			}

			count++;
			
		}while(count < consoantes.length);
		
		//exibindo o conteúdo do vetor
		System.out.println("\nConsoantes: ");
		for (String consoante : consoantes) {
			if(consoante != null) {
				System.out.print(consoante + " ");
			}
		}
		System.out.println("\n Quantidade de consoantes: " + qtdConsoantes);
		
		scan.close();
	}
}