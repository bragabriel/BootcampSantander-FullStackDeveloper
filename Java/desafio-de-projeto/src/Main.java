
public class Main {

	public static void main(String[] args) {
		
		Cliente Gabriel = new Cliente();
		Gabriel.setNome("Gabriel");

		ContaCorrente contaCorrente1 = new ContaCorrente(Gabriel);
		contaCorrente1.depositar(100);
		
		ContaPoupanca contaPoupanca1 = new ContaPoupanca(Gabriel);
		
		contaCorrente1.imprimirExtrato();
		contaPoupanca1.imprimirExtrato();
		

		contaCorrente1.transferir(100, contaPoupanca1);
		contaCorrente1.imprimirExtrato();
		contaPoupanca1.imprimirExtrato();
		
		//Desafio de Projeto: Lista de Clientes
		//contaCorrente1.imp
	}

}
