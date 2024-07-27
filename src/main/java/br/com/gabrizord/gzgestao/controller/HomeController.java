package br.com.gabrizord.gzgestao.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String root() {
        return "redirect:/home"; // Redireciona a raiz para /home
    }

    @GetMapping("/home")
    public String home() {
        return "home";
    }
}
