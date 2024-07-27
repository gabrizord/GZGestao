package br.com.gabrizord.gzgestao.repository;


import br.com.gabrizord.gzgestao.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserAuthRepository extends JpaRepository<User, UUID> {

    Optional<User> findByUsername(String username);

}
