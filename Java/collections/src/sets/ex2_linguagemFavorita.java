package sets;

import java.util.Arrays;
import java.util.Comparator;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Objects;
import java.util.Set;
import java.util.TreeSet;

public class ex2_linguagemFavorita {

	public static void main(String[] args) {
		/*
		 * Crie uma classe LinguagemFavorita que possua os atributos nome, anoDeCriacao
		 * e IDE. Em seguida, crie um conjunto com 3 linguagens e fa�a um programa que
		 * ordene esse conjunto por: a) Ordem de inser��o; b) Ordem natural(nome); c)
		 * IDE; d) Ano de cria��o e nome; e) Nome, ano de cria��o e IDE; Ao final, exiba
		 * as linguagens no console, um abaixo da outra.
		 */

		Set<LinguagemFavorita> minhasLinguagensFavoritas = new HashSet<>();
		minhasLinguagensFavoritas.add(new LinguagemFavorita("Python", 1991, "Pycharm"));
		minhasLinguagensFavoritas.add(new LinguagemFavorita("JavaScript", 1995, "IntelliJ"));
		minhasLinguagensFavoritas.add(new LinguagemFavorita("Java", 1991, "Visual Studio Code"));

		System.out.println("--------\tOrdem de Inser��o\t--------");
		Set<LinguagemFavorita> minhasLinguagensFavoritas1 = new LinkedHashSet<>(Arrays.asList(
				new LinguagemFavorita("Python", 1991, "Pycharm"), new LinguagemFavorita("JavaScript", 1995, "IntelliJ"),
				new LinguagemFavorita("Java", 1991, "Visual Studio Code")));
		for (LinguagemFavorita linguagem : minhasLinguagensFavoritas1)
			System.out.println(linguagem);

		System.out.println("--------\tOrdem Natural: Nome\t--------");
		Set<LinguagemFavorita> minhasLinguagensFavoritas2 = new TreeSet<>(minhasLinguagensFavoritas);
		for (LinguagemFavorita linguagem : minhasLinguagensFavoritas2)
			System.out.println(linguagem);

		System.out.println("--------\tOrdem IDE\t--------");
		Set<LinguagemFavorita> minhasLinguagensFavoritas3 = new TreeSet<LinguagemFavorita>(new ComparatorIde());
		minhasLinguagensFavoritas3.addAll(minhasLinguagensFavoritas);
		for (LinguagemFavorita linguagem : minhasLinguagensFavoritas3)
			System.out.println(linguagem);

		System.out.println("--------\tOrdem Ano de Criacao e Nome\t--------");
		Set<LinguagemFavorita> minhasLinguagensFavoritas4 = new TreeSet<LinguagemFavorita>(
				new ComparatorAnoDeCriacaoENome());
		minhasLinguagensFavoritas4.addAll(minhasLinguagensFavoritas);
		for (LinguagemFavorita linguagem : minhasLinguagensFavoritas4)
			System.out.println(linguagem);

		System.out.println("--------\tOrdem Nome - Ano de Criacao - IDE\t--------");
		Set<LinguagemFavorita> minhasLinguagensFavoritas5 = new TreeSet<LinguagemFavorita>(
				new ComparatorNomeAnoDeCriacaoIde());
		minhasLinguagensFavoritas5.addAll(minhasLinguagensFavoritas3);
		for (LinguagemFavorita linguagem : minhasLinguagensFavoritas5)
			System.out.println(linguagem);

	}
}

class LinguagemFavorita implements Comparable<LinguagemFavorita> {
	public String nome;
	public Integer anoDeCriacao;
	public String ide;

	public LinguagemFavorita(String nome, Integer anoDeCriacao, String ide) {
		this.nome = nome;
		this.anoDeCriacao = anoDeCriacao;
		this.ide = ide;
	}

	@Override
	public String toString() {
		return "{" + "nome='" + nome + '\'' + ", anoDeCriacao=" + anoDeCriacao + ", ide='" + ide + '\'' + '}';
	}

	@Override
	public int compareTo(LinguagemFavorita linguagemFavorita) {
		return this.nome.compareTo(linguagemFavorita.nome);
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;
		LinguagemFavorita that = (LinguagemFavorita) o;
		return nome.equals(that.nome);
	}

	@Override
	public int hashCode() {
		return Objects.hash(nome);
	}
}

class ComparatorIde implements Comparator<LinguagemFavorita> {

	@Override
	public int compare(LinguagemFavorita lf1, LinguagemFavorita lf2) {
		return lf1.ide.compareToIgnoreCase(lf2.ide);
	}
}

class ComparatorAnoDeCriacaoENome implements Comparator<LinguagemFavorita> {

	@Override
	public int compare(LinguagemFavorita lf1, LinguagemFavorita lf2) {
		int anoDeCriacao = Integer.compare(lf1.anoDeCriacao, lf2.anoDeCriacao);
		if (anoDeCriacao != 0)
			return anoDeCriacao;
		return lf1.nome.compareToIgnoreCase(lf2.nome);
	}
}

class ComparatorNomeAnoDeCriacaoIde implements Comparator<LinguagemFavorita> {

	@Override
	public int compare(LinguagemFavorita lf1, LinguagemFavorita lf2) {
		int nome = lf1.nome.compareToIgnoreCase(lf2.nome);
		int anoDeCriacao = Integer.compare(lf1.anoDeCriacao, lf2.anoDeCriacao);
		if (nome != 0)
			return nome;
		if (anoDeCriacao != 0)
			return anoDeCriacao;
		return lf1.ide.compareToIgnoreCase(lf2.ide);
	}

}
