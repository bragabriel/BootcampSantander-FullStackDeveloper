package functional_interface;

public class functional_interface {

	public static void main(String[] args) {
		/* Qualquer interface com um SAM (Single Abstract Method) é uma
		 * interface funcional e sua implementação pode ser tratada como
		 * expressões lambda*/
		
		@FunctionalInterface
		public interface Comparator<T>{
			@Contract(pure=true) int compare(T var1, T var2);
		}
	}

}
