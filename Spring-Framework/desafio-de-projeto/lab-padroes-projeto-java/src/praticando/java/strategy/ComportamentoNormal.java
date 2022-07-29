package praticando.java.strategy;

public class ComportamentoNormal implements IComportamento{

	@Override
	public void mover() {
		System.out.println("Movendo-se normalmente...");
	}
	
}
