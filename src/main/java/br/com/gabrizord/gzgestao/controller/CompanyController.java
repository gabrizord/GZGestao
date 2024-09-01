package br.com.gabrizord.gzgestao.controller;

import br.com.gabrizord.gzgestao.model.Company;
import br.com.gabrizord.gzgestao.service.CompanyService;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class CompanyController {

    private final CompanyService companyService;

    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @GetMapping("/companies")
    public String viewCompanies(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "12") int size,
            @RequestParam(defaultValue = "id") String sortField,
            @RequestParam(defaultValue = "asc") String sortDirection,
            Model model) {

        Page<Company> companyPage = companyService.getPaginatedCompanies(page, size, sortField, sortDirection);
        model.addAttribute("companyPage", companyPage);

        model.addAttribute("currentPage", page);
        model.addAttribute("totalPages", companyPage.getTotalPages());
        model.addAttribute("totalItems", companyPage.getTotalElements());
        model.addAttribute("sortField", sortField);
        model.addAttribute("sortDirection", sortDirection);
        model.addAttribute("reverseSortDirection", sortDirection.equals("asc") ? "desc" : "asc");
        return "company/company";
    }
}
