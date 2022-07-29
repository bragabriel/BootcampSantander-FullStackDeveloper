package singleton;

/*
  Singleton 'preguiçoso'.
  - não disponibiliza a instância para o usuário no primeiro momento
*/
public class SingletonLazy {
	
	private static SingletonLazy instancia;
	//Criando instância dele mesmo (Singleton)

	
	//método privado para garantir que ninguém vai instanciar ele fora da classe
	private SingletonLazy() {
		super();
	}
	
	//garantindo que a instância vai ser exposta para quem for chamar
	public static SingletonLazy getInstancia() {
		//		tipo do retorno
		
		if(instancia == null) {
			instancia = new SingletonLazy();
		}
		return instancia;
	}
}
