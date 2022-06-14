package metodos;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
		//Exercício Hora
		
		Scanner scan = new Scanner(System.in);
		
		int z;

		System.out.println("Digite a hora: ");
		z = scan.nextInt();
		
		hora.obterHora(z);
		
		
		//Exercício Emprestimo
		emprestimo.calcular(1000, emprestimo.getDuasParcelas());
		emprestimo.calcular(1000, emprestimo.getTresParcelas());
		emprestimo.calcular(1000, 5);

	}

}
