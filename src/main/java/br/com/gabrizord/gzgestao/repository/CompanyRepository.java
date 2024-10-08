package br.com.gabrizord.gzgestao.repository;

import br.com.gabrizord.gzgestao.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {

    Optional<Company> findByCnpj(String cnpj);

    List<Company> findByRazaoSocialContainingIgnoreCase(String name);
}
