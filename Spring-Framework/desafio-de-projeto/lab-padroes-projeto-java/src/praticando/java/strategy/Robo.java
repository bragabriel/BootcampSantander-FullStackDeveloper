package praticando.java.strategy;

public class Robo {
	
	private IComportamento comportamento;
	//						strategy

	public void setComportamento(IComportamento comportamento) {
		this.comportamento = comportamento;
	}
	
	public void mover() {
		comportamento.mover();
		//comportamento atribuido para o robo -> fazendo ele se mover
	}

}
