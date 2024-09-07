package br.com.gabrizord.gzgestao.repository;


import br.com.gabrizord.gzgestao.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    Optional<Employee> findByName(String nome);
    Optional<Employee> findByEmail(String email);

    List<Employee> findByNameContainingIgnoreCase(String name);
}
