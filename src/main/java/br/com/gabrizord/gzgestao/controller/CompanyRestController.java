package br.com.gabrizord.gzgestao.controller;

import br.com.gabrizord.gzgestao.dto.CompanyDTO;
import br.com.gabrizord.gzgestao.dto.CompanyUpdateDTO;
import br.com.gabrizord.gzgestao.model.Company;
import br.com.gabrizord.gzgestao.service.CompanyService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/company")
public class CompanyRestController {

    private final CompanyService companyService;

    public CompanyRestController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @PostMapping
    public ResponseEntity<Company> createCompany(@Valid @RequestBody CompanyDTO companyDTO) {
        Company createdCompany = companyService.saveCompany(companyDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCompany);
    }

    @GetMapping
    public ResponseEntity<List<Company>> getAllCompanies() {
        List<Company> companies = companyService.getAllCompanies();
        return ResponseEntity.ok(companies);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Company> getCompanyById(@PathVariable Long id) {
        return ResponseEntity.ok(companyService.getCompanyById(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCompany(@PathVariable Long id) {
        companyService.deleteCompany(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Company> updateCompany(@PathVariable Long id, @Valid @RequestBody CompanyUpdateDTO companyDTO) {
        Company updatedCompany = companyService.updateCompany(id, companyDTO);
        return ResponseEntity.ok(updatedCompany);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Company>> searchCompanies(@RequestParam("name") String name) {
        List<Company> companies = companyService.findByNameContainingIgnoreCase(name);
        return ResponseEntity.ok(companies);
    }
}
