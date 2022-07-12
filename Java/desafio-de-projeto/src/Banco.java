import java.util.List;

public class Banco {

	private String nome;
	private List<Conta> contas;

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public List<Conta> getContas() {
		return contas;
	}

	public void setContas(List<Conta> contas) {
		this.contas = contas;
	}
	
	public void imprimirClientes() {
		
		for(int i = 0; i < this.contas.size(); i++) {
			System.out.println(this.contas.get(i).cliente);
		}	
	}
}
