package retorno;

public class Main {

	public static void main(String[] args) {
		
		//Utilizando sobrecarga de métodos + Retorno:
		double retornoQuadrado = quadrilatero_retorno.area(4);
		double retornoRetangulo = quadrilatero_retorno.area(5, 5);
		double retornoTrapezio = quadrilatero_retorno.area(7, 6, 9);

		System.out.println("Área do quadrado: " + retornoQuadrado);

		System.out.println("Área do retângulo: " + retornoRetangulo);	
	
		System.out.println("Área do trapézio: " + retornoTrapezio);
	}
}