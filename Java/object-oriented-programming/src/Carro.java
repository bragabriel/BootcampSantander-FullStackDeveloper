/* Classe de exemplo para o exercício */

public class Carro {
	
	//Atributos
	String cor;
	String modelo;
	int capacidadeTanque;
	
	
	//Construtor
	Carro(){
		
	}
	
	//Sobrecarga
	Carro(String cor, String modelo, int capacidadeTanque){
		this.cor = cor;
		this.modelo = modelo;
		this.capacidadeTanque = capacidadeTanque;
	}
	
	
	
	//Métodos
	
	public void setCor(String cor) {
		this.cor = cor;
	}
	
	public String getCor() {
		return cor;
	}
	
	public void setModelo(String modelo) {
		this.modelo = modelo;
	}
	
	public String getModelo() {
		return modelo;
	}
	
	public void setCapacidadeTanque(int capacidadeTanque) {
		this.capacidadeTanque = capacidadeTanque;
	}
	
	public int getCapacidadeTanque() {
		return capacidadeTanque;
	}

	double totalValorTanque(double valorCombustivel) {
		return capacidadeTanque * valorCombustivel;
	}
}
