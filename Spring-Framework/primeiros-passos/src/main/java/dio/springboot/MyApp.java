package dio.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class MyApp implements CommandLineRunner {

    //Quando inicializar, cria um component calculadora
    @Autowired //injeção de dependencias para o componente
    private Calculadora calculadora; //Declarando calculadora

    @Override
    public void run(String... args) throws Exception {
        System.out.println("O resultado é: " + calculadora.somar(4, 6));
    }
}
