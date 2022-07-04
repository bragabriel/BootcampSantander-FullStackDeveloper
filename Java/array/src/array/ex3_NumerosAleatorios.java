package array;

import java.util.Random;

public class ex3_NumerosAleatorios {

	public static void main(String[] args) {
		
		/* Faça um programa que leia 20 números inteiros aleatórios entre 0 e 100, armazene-os em um vetor.
		 * Ao final, mostre os números e seus sucessores 
		*/

		Random random = new Random();
		//Classe para gerar números aleatórios

		int[] numerosAleatorios = new int[20];
		
		for(int i=0; i<numerosAleatorios.length; i++) {
			int numero = random.nextInt(100);
			numerosAleatorios[i] = numero;
		}
	
		System.out.println("Números aleatórios: ");
		for (int num : numerosAleatorios) {
			System.out.print(num + " ");
		}
		System.out.println("");

		System.out.println("Sucessores dos números aleatórios: ");
		for (int num : numerosAleatorios) {
			System.out.print((num+1) + " ");
		}
		System.out.println("");
		
		System.out.println("Antecessor dos números aleatórios: ");
		for (int num : numerosAleatorios) {
			System.out.print((num-1) + " ");
		}
	}
}