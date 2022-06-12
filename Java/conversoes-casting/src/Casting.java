
public class Casting {

	public static void main(String[] args) {
		
		/* Tipos:
		 * Upcast(implícito) -> vai de uma variável com menor capacidade de armazenamento para uma maior
		 * Downcast(explícito) -> vai de uma como maior capacidade, para uma de menor capacidade
		 * 
		 * Upcast ex: 
		 * 	double d;
		 * 	float f;
		 *  d = f  //implícito
		 *  
		 * Downcast ex:
		 * 	int i;
		 *  float f;
		 *  f = float(i) //explícito
		*/
		
		byte b1;
		short s1 = 1000; //tem capacidade maior que de um byte
		b1 = (byte) s1; //Downcast (colocando o short no byte -> falta espaço)
		
		long l1;
		int i1 = 10; 
		l1 = i1; //Upcast (colocando o int no long -> está sobrando espaço)

		int i2;
		long l2 = 1000000000000000L;
		i2 = (int) l2; //Downcast
		
		int i3;
		long l3 = 10000L;
		i3 = (int) l3; //Downcast (mas não houve perda de informação, pois o valor do long cabe no nosso int
		
		double d1;
		float f1 = 10.5f;
		d1 = f1; //Upcast (float para double)
		
		float f2;
		float f3;
		double d2 = 10000.58d;
		f2 = (float) d2;
		double d3 = 10000.588888888888888888888888888888888888888d;
		f3 = (float) d3;
		
		int i4;
		float f4 = 11.5697f;
		i4 = (int) f4;
		
		System.out.println("b1: " + b1);
		System.out.println("l1: " + l1);
		System.out.println("i2: " + i2);
		System.out.println("i3: " + i3);
		System.out.println("d1: " + d1);
		System.out.println("f2: " + f2);
		System.out.println("f3: " + f3);
		System.out.println("i4: " + i4);
		
		b1 = (byte) d3;
		
		System.out.println("b1: " + b1);
		
		int QUANTIDADE_$_OPCOES;
	}
}