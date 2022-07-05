package collections_framework;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Scanner;

public class ex1_temperatura {

	public static void main(String[] args) {

		/*
		 * Faça um programa que receba a temperatura média dos 6 primeiros meses do ano
		 * e armazene-as em uma lista. Após isto, calcule a média semestral das
		 * temperaturas e mostre todas as temperaturas acima desta média, e em que mês
		 * elas ocorreram (mostrar o mês por extenso 1-Janeiro, etc...)
		 */

		Scanner scan = new Scanner(System.in);
		List<Double> temperaturasSemestral = new ArrayList<Double>();
		double soma = 0.0;
		for (int i = 1; i <= 6; i++) {
			System.out.print("Qual a temperatura do mês " + i + ": ");
			double temp = scan.nextDouble();
			temperaturasSemestral.add(temp);
			soma += temp;
		}
		double mediaTemperaturasSemenstral = soma / temperaturasSemestral.size();
		System.out.println("Temperaturas Semestral: " + temperaturasSemestral);
		System.out.println("Média temperaturas Semestral: " + mediaTemperaturasSemenstral + "c");
		System.out.println("----------");
		for (Double temp : temperaturasSemestral) {
			if (temp > mediaTemperaturasSemenstral) {
				int index = temperaturasSemestral.indexOf(temp);
				switch (index) {
				case 0:
					System.out.println((index + 1) + " - JANEIRO: " + temp + " c");
					break;
				case 1:
					System.out.println((index + 1) + " - FEVEREIRO: " + temp + " c");
					break;
				case 2:
					System.out.println((index + 1) + " - MARÇO: " + temp + " c");
					break;
				case 3:
					System.out.println((index + 1) + " - ABRIL: " + temp + " c");
					break;
				case 4:
					System.out.println((index + 1) + " - MAIO: " + temp + " c");
					break;
				case 5:
					System.out.println((index + 1) + " - JUNHO: " + temp + " c");
					break;
				default:
					break;
				}
			}
		}
	}
}