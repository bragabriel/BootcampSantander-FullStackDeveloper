package subsistema2.cep;

public class CepApi {
	
	private static CepApi instancia = new CepApi();
	//Criando instância dele mesmo (Singleton)

	//método privado para garantir que ninguém vai instanciar ele fora da classe
	private CepApi() {
		super();
	}
	
	//garantindo que a instância vai ser exposta para quem for chamar
	public static CepApi getInstancia() {
		//		tipo do retorno
	
		return instancia;
	}
	
	public String recuperarCidade(String cep) {
		return "Campinas";
	}
	
	public String recuperarEstado(String cep) {
		return "SP";
	}
	
}
