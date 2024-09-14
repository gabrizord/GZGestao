package br.com.gabrizord.gzgestao;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class GzGestaoApplication {

    public static void main(String[] args) {
        SpringApplication.run(GzGestaoApplication.class, args);
    }

}
