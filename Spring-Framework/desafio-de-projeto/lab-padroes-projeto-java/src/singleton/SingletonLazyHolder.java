package singleton;

/*
  Singleton Lazy Holder.
*/
public class SingletonLazyHolder {
	
	private static class InstanceHolder{
		//Encapsulando a instancia em uma classe interna estatica (Holder)
		public static SingletonLazyHolder instancia = new SingletonLazyHolder();	
	}
	
	//método privado para garantir que ninguém vai instanciar ele fora da classe
	private SingletonLazyHolder() {
		super();
	}
	
	//garantindo que a instância vai ser exposta para quem for chamar
	public static SingletonLazyHolder getInstancia() {
		return InstanceHolder.instancia;
	}
}
