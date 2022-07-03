import java.util.Scanner;

/*
 * Faça um programa que peça N números inteiros, calcule e mostre a quantidade
 * de números pares e a quantidade de números ímpares*/

public class ex4_ParEImpar {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
		int qtdNumeros;
		int numero;
		int qtdPares = 0;
		int qtdImpares = 0;
		
		System.out.println("Quantida de números: ");
		qtdNumeros = scan.nextInt();
		
		int count = 0;
		
		do {
			System.out.println("Número: ");
			numero = scan.nextInt();
			
			if(numero % 2 == 0) {
				qtdPares++;
			}
			else {
				qtdImpares++;
			}
			
			count++;
			
		}while(count < qtdNumeros);
		
		System.out.println("Quantida de números pares: " + qtdPares);
		System.out.println("Quantida de números ímpares: " + qtdImpares);
	}

}
