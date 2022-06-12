
public class OperadoresAritmeticos {

	public static void main(String[] args) {
		
		/* Tipos
		 * pós-fixado: i++ ou i--
		 * pré-fixado: ++i ou --i
		 * aritmético: +, -, *, /, %
		 * atribuição: =, +=, -=, *=, /= e %=
		
		 * Precedência de execução
		 * pós-fixado
		 * pré-fixado
		 * multiplicativo (*, /, %)
		 * aditivo (+, -)
		 * Atribuição (=, +=, -=, *=, /=, %=)
		 */ 

		/* Criar um projeto em que as expressoes e precedencias influenciem no resultado */
		System.out.println("PrePos");
		prePos();
		System.out.println("\nAritmético");
		aritmetico();
		System.out.println("\nAtribuição");
		atribuicao();
		System.out.println("\nPrecedência");
		precedencia();
	}
	
	private static void prePos() {
		int k = 10;
		
		int i = ++k;
		int j = k--;
		int x = k;
		
		System.out.println("i: " + i);
		System.out.println("j: " + j);
		System.out.println("k: " + k);
	}
	
	private static void aritmetico() {
		int a = 10;
		int b = 20;
		int c = 30;
		int d = 40;
		int e = 50;
		
		int r1 = a+b;
		int r2 = c+a;
		int r3 = d*b;
		int r4 = e/a;
		int r5 = c%b;
		
		System.out.println("a+b: " + r1);
		System.out.println("c+a: " + r2);
		System.out.println("d*b: " + r3);
		System.out.println("e/a: " + r4);
		System.out.println("c%b: " + r5);
	}
	
	private static void atribuicao() {
		int i = 1500;
		short j = 15;
		long l = 500L;
		int k = 35;
		float f = 3.5f;
		double d = f;
		
		System.out.println("d: " + d);
		
		i += 5;
		j -= 3;
		d /= 2.7d;
		l *= 3;
		k %= 2;
		
		System.out.println("i: " + i);
		System.out.println("j: " + j);
		System.out.println("d: " + d);
		System.out.println("l: " + k);
		System.out.println("k: " + k);
		
		i = k = j;
		
		System.out.println("k: " + k);
		System.out.println("i: " + i);
	}
	
	private static void precedencia() {
		int i = 10;
		int j = 20;
		int k = 30;
		
		int a = i++ + --j * k; // 10 + 19 * 30 -> 10 + 510 -> 580
		System.out.println("i++ + --j * k: " + a);
		
		int b = k / --i % 3 + 1; // 30 / 10 % 3 + 1 -> 1
		System.out.println("k / --i % 3 + 1: " + b);
		
		System.out.println("i: " + i); // 10
		
		int c = 2;
		
		c *= i += 5; //c = 2 * 1; i = 1 * 5 -> c = 2 * 1; i = 10 * 5; -> c = 2 * 15; -> c = 2 * 15; c = 30
		System.out.println("c *= i += 5: " + c);
	}
}