package br.com.gabrizord.gzgestao.repository;

import br.com.gabrizord.gzgestao.enums.RoleName;
import br.com.gabrizord.gzgestao.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

    Optional<Role> findByName(RoleName name);
}

