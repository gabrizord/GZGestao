package br.com.gabrizord.gzgestao.service;

import br.com.gabrizord.gzgestao.dto.CompanyDTO;
import br.com.gabrizord.gzgestao.model.Company;
import br.com.gabrizord.gzgestao.repository.CompanyRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class CompanyService {

    CompanyRepository companyRepository;

    public CompanyService(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    public Company saveCompany(CompanyDTO companyDTO) {
        companyRepository.findByCnpj(companyDTO.getCnpj())
                .ifPresent(company -> {
                    throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Já existe uma empresa com este CNPJ.");
                });
        return companyRepository.save(companyDTO.convertToEntity());
    }

    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    public Company getCompanyById(Long id) {
        Optional<Company> company = companyRepository.findById(id);
        return company.orElseThrow(() -> new EntityNotFoundException("Empresa não encontrada."));
    }

    public void deleteCompanyById(Long id) {
       Company company = getCompanyById(id);
       companyRepository.delete(company);
    }

    public Page<Company> getPaginatedCompanies(int page, int size, String sortField, String sortDirection) {
        Sort sort = sortDirection.equalsIgnoreCase(Sort.Direction.ASC.name()) ? Sort.by(sortField).ascending() : Sort.by(sortField).descending();
        Pageable pageable = PageRequest.of(page, size, sort);
        return companyRepository.findAll(pageable);
    }
}
