package br.com.gabrizord.gzgestao.service;

import br.com.gabrizord.gzgestao.dto.CompanyDTO;
import br.com.gabrizord.gzgestao.dto.CompanyUpdateDTO;
import br.com.gabrizord.gzgestao.model.Company;
import br.com.gabrizord.gzgestao.repository.CompanyRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.function.Consumer;

@Service
public class CompanyService {

    CompanyRepository companyRepository;

    public CompanyService(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    public Company saveCompany(CompanyDTO companyDTO) {
        companyRepository.findByCnpj(companyDTO.getCnpj())
                .ifPresent(company -> {
                    throw new IllegalArgumentException("CNPJ já está em uso.");
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

    public void deleteCompany(Long id) {
       Company company = getCompanyById(id);
       companyRepository.delete(company);
    }

    public Company updateCompany(Long id, CompanyUpdateDTO companyDTO) {
        Company existingCompany = getCompanyById(id);

        if (shouldUpdateCnpj(companyDTO, existingCompany)) {
            validateCnpjChange(existingCompany, companyDTO.getCnpj());
            existingCompany.setCnpj(companyDTO.getCnpj());
        }

        updateCompanyFields(existingCompany, companyDTO);
        return companyRepository.save(existingCompany);
    }

    private boolean shouldUpdateCnpj(CompanyUpdateDTO companyDTO, Company existingCompany) {
        return companyDTO.getCnpj() != null && !companyDTO.getCnpj().equals(existingCompany.getCnpj());
    }

    private void updateCompanyFields(Company existingCompany, CompanyUpdateDTO companyDTO) {
        updateFieldIfNecessary(companyDTO.getRazaoSocial(), existingCompany.getRazaoSocial(), existingCompany::setRazaoSocial);
        updateFieldIfNecessary(companyDTO.getNomeFantasia(), existingCompany.getNomeFantasia(), existingCompany::setNomeFantasia);
        updateFieldIfNecessary(companyDTO.getInscricaoEstadual(), existingCompany.getInscricaoEstadual(), existingCompany::setInscricaoEstadual);
        updateFieldIfNecessary(companyDTO.getStreet(), existingCompany.getStreet(), existingCompany::setStreet);
        updateFieldIfNecessary(companyDTO.getNumber(), existingCompany.getNumber(), existingCompany::setNumber);
        updateFieldIfNecessary(companyDTO.getNeighborhood(), existingCompany.getNeighborhood(), existingCompany::setNeighborhood);
        updateFieldIfNecessary(companyDTO.getCity(), existingCompany.getCity(), existingCompany::setCity);
        updateFieldIfNecessary(companyDTO.getState(), existingCompany.getState(), existingCompany::setState);
        updateFieldIfNecessary(companyDTO.getPostalCode(), existingCompany.getPostalCode(), existingCompany::setPostalCode);
        updateFieldIfNecessary(companyDTO.getStateRegistrationIndicator(), existingCompany.getStateRegistrationIndicator(), existingCompany::setStateRegistrationIndicator);
        updateFieldIfNecessary(companyDTO.getMunicipalityCode(), existingCompany.getMunicipalityCode(), existingCompany::setMunicipalityCode);
        updateFieldIfNecessary(companyDTO.getPhoneNumber(), existingCompany.getPhoneNumber(), existingCompany::setPhoneNumber);
        updateFieldIfNecessary(companyDTO.getEmail(), existingCompany.getEmail(), existingCompany::setEmail);
    }

    private <T> void updateFieldIfNecessary(T newValue, T currentValue, Consumer<T> setter) {
        if (newValue != null && !newValue.equals(currentValue)) {
            setter.accept(newValue);
        }
    }

    private void validateCnpjChange(Company existingCompany,  String cnpj) {
        if (!existingCompany.getCnpj().equals(cnpj)) {
            companyRepository.findByCnpj(cnpj).ifPresent(company -> {
                if (!company.getId().equals(existingCompany.getId())) {
                    throw new IllegalArgumentException("CNPJ já está em uso.");
                }
            });
        }
    }

    public Page<Company> getPaginatedCompanies(int page, int size, String sortField, String sortDirection) {
        Sort sort = sortDirection.equalsIgnoreCase(Sort.Direction.ASC.name()) ? Sort.by(sortField).ascending() : Sort.by(sortField).descending();
        Pageable pageable = PageRequest.of(page, size, sort);
        return companyRepository.findAll(pageable);
    }

    public List<Company> findByNameContainingIgnoreCase(String name) {
        return companyRepository.findByRazaoSocialContainingIgnoreCase(name);
    }
}
