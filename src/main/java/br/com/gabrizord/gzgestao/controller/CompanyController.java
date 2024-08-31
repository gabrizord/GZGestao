package br.com.gabrizord.gzgestao.controller;

import br.com.gabrizord.gzgestao.service.CompanyService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CompanyController {

    private final CompanyService companyService;

    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @GetMapping("/companies")
    public String viewCompanies() {
        return "company/company";
    }
}
