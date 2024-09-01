package br.com.gabrizord.gzgestao.controller;

import br.com.gabrizord.gzgestao.model.Company;
import br.com.gabrizord.gzgestao.service.CompanyService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class CompanyController {

    private final CompanyService companyService;

    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @GetMapping("/companies")
    public String viewCompanies(Model model) {
        List<Company> companies = companyService.getAllCompanies();
        model.addAttribute("companies", companies);
        return "company/company";
    }
}
