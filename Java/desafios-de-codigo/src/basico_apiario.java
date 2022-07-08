import java.text.DecimalFormat;
import java.util.Scanner;

public class basico_apiario {

	public static void main(String[] args) {
		/* Seu Júlio é proprietário de um grande apiário situado no interior da Paraíba.
		 *  Todo ano, semestralmente, seu Júlio coleta o mel produzido pelas abelhas da sua propriedade
		 *  e armazena-o em um recipiente de formato CILÍNDRICO para que facilite o transporte do mel
		 *  para os estabelecimentos que encomendam esse produto natural para a comercialização.
	
		Certa vez seu Júlio percebeu que devido a um crescimento na produção do mel,
		 em relação ao semestre anterior, o recipiente que possuia não suportaria o
		 volume de mel produzido por suas abelhas. Seu Júlio precisa agora que você
		 faça um programa que informado o volume de mel em cm3 e o diâmetro da parte
		 interna do recipiente em cm, calcule e mostre:

		- Qual deve ser a altura(em cm) da parte interna do recipiente;

		- A área(em cm2) da boca(entrada) do recipiente.

		Obs.: Considere pi = 3.14
		*/

		Scanner leitor = new Scanner(System.in);
    	DecimalFormat df = new DecimalFormat("0.00");
    	double V, D, R, area, altura;
    	
    	while (leitor.hasNext()) {
    		V = leitor.nextDouble();
    		D = leitor.nextDouble();
    		R = D/2;
    		area = 3.14 * (R*R);
    		altura = V / ((R*R) * 3.14);
    		System.out.println("ALTURA = " + df.format(altura));
    		System.out.println("AREA = " + df.format(area));
    	}
	}
}