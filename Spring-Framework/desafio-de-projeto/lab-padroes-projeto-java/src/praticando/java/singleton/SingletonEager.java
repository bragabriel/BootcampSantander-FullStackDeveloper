package praticando.java.singleton;

/*
  Singleton 'apressado'.
  - no momento em que a classe for acionada, ela vai será retornada
*/
public class SingletonEager {
	
	private static SingletonEager instancia = new SingletonEager();
	//Criando instância dele mesmo (Singleton)

	
	//método privado para garantir que ninguém vai instanciar ele fora da classe
	private SingletonEager() {
		super();
	}
	
	//garantindo que a instância vai ser exposta para quem for chamar
	public static SingletonEager getInstancia() {
		//		tipo do retorno
		
		return instancia;
	}
}
