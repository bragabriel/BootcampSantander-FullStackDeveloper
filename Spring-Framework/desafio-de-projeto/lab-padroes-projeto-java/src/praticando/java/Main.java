package praticando.java;

import praticando.java.facade.Facade;
import praticando.java.singleton.SingletonEager;
import praticando.java.singleton.SingletonLazy;
import praticando.java.singleton.SingletonLazyHolder;
import praticando.java.strategy.ComportamentoAgressivo;
import praticando.java.strategy.ComportamentoDefensivo;
import praticando.java.strategy.ComportamentoNormal;
import praticando.java.strategy.IComportamento;
import praticando.java.strategy.Robo;

public class Main {

	public static void main(String[] args) {
		
		/* *********************************************** */
		/* Testes relacionados ao Design Pattern Singleton */
		/* *********************************************** */
		
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
		
		System.out.println();
		System.out.println();
		
		
		
		/* *********************************************** */
		/* Testes relacionados ao Design Pattern Strategy */
		/* *********************************************** */
		
		/*
		 Padrões de projeto:
		 - Comportamentais: ... Strategy;
		 
		 Strategy: O Strategy é um padrão de projeto comportamental
		  que transforma um conjunto de comportamentos em objetos
		  e os torna intercambiáveis dentro do objeto de contexto original.
		  O objeto original, chamado contexto, mantém uma referência a
		  um objeto strategy e o delega a execução do comportamento.
		 */
		
		IComportamento normal = new ComportamentoNormal();
		IComportamento defensivo = new ComportamentoDefensivo();
		IComportamento agressivo= new ComportamentoAgressivo();
		
		Robo robo = new Robo();
		robo.setComportamento(normal);
		
		robo.mover();
		robo.mover();
		
		robo.setComportamento(defensivo);
		
		robo.mover();
		
		robo.setComportamento(agressivo);
		
		robo.mover();
		robo.mover();
		robo.mover();
		
		System.out.println();
		System.out.println();
		
		
		
		/* *********************************************** */
		/* Testes relacionados ao Design Pattern Facade */
		/* *********************************************** */
		
		/*
		 Padrões de projeto:
		 - Estruturais: ... Facade;
		 
		 Facade: O Facade é um padrão de projeto estrutural que
		  fornece uma interface simplificada (mas limitada) para
		  um sistema complexo de classes, biblioteca, ou framework.
		  Embora o Facade diminua a complexidade geral do aplicativo,
		  também ajuda a mover dependências indesejadas para um só local.
		 */
		
		Facade facade = new Facade();
		facade.migrarCliente("Gabriel", "14801788");
	}

}
