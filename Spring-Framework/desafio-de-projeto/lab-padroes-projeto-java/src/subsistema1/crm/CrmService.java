package subsistema1.crm;

public class CrmService {
	
	/* Construtor privado -> Garante que quem consumir essa classe vai consumir os métodos
	e não fica instânciando a classe */
	private CrmService() {
		super();
	}
	
	public static void gravarCliente(String nome, String cep, String cidade, String estado) {
		System.out.println("Cliente salvo no sistema de CRM.");
		System.out.println("Nome: " + nome);
		System.out.println("CEP: " + cep);
		System.out.println("Cidade: " + cidade);
		System.out.println("Estado: " + estado);
		System.out.println("");
	}
}
