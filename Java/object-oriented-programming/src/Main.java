
public class Main {

	public static void main(String[] args) {

		Carro carro1 = new Carro();
		
		carro1.setCor("Azul");
		carro1.setModelo("BMW i7");
		carro1.setCapacidadeTanque(100);
		
		System.out.println(carro1.getModelo());
		System.out.println(carro1.getCor());
		System.out.println(carro1.getCapacidadeTanque());
		System.out.println(carro1.totalValorTanque(6.54));
		
		
		
		Carro carro2 = new Carro("laranja", "Lamborghini Aventador", 150);
		
		System.out.println(carro2.getModelo());
		System.out.println(carro2.getCor());
		System.out.println(carro2.getCapacidadeTanque());
		System.out.println(carro2.totalValorTanque(6.54));
		
	}

}
