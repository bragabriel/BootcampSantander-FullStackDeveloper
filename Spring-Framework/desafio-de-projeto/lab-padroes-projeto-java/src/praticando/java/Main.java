package praticando.java;

import singleton.SingletonEager;
import singleton.SingletonLazy;
import singleton.SingletonLazyHolder;

public class Main {

	public static void main(String[] args) {
		
		/* Testes relacionados ao Design Pattern Singleton */
		
		/*
		 Padrões de projeto:
		 - Criacionais: ... Singleton;
		 
		 Singleton: O Padrão Singleton tem como definição garantir
		  que uma classe tenha apenas uma instância de si mesma
		  e que forneça um ponto global de acesso a ela.
		  Ou seja, uma classe gerencia a própria instância dela
		  além de evitar que qualquer outra classe crie uma instância dela.
		 */
		
		SingletonLazy lazy = SingletonLazy.getInstancia();
		System.out.println(lazy);
		lazy = SingletonLazy.getInstancia();
		System.out.println(lazy);

		SingletonEager eager = SingletonEager.getInstancia();
		System.out.println(eager);
		eager = SingletonEager.getInstancia();
		System.out.println(eager);

		SingletonLazyHolder lazyHolder = SingletonLazyHolder.getInstancia();
		System.out.println(lazyHolder);
		lazyHolder = SingletonLazyHolder.getInstancia();
		System.out.println(lazyHolder);
	}

}
