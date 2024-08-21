package br.com.gabrizord.gzgestao.config;

import br.com.gabrizord.gzgestao.enums.RoleName;
import br.com.gabrizord.gzgestao.model.User;
import br.com.gabrizord.gzgestao.repository.UserAuthRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;

@Component
public class DataLoader implements CommandLineRunner {

    private final UserAuthRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public DataLoader(UserAuthRepository userRepository, PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) {
        if (userRepository.count() == 0) {
            User adminUser = new User();
            adminUser.setId(UUID.randomUUID());
            adminUser.setUsername("admin");
            adminUser.setEmail("admin@example.com");
            adminUser.setPassword(passwordEncoder.encode("password"));
            adminUser.setRoles(List.of(RoleName.ADMIN.name(), RoleName.BASIC.name()));

            User basicUser = new User();
            basicUser.setId(UUID.randomUUID());
            basicUser.setUsername("user");
            basicUser.setEmail("user@example.com");
            basicUser.setPassword(passwordEncoder.encode("password"));
            basicUser.setRoles(List.of(RoleName.BASIC.name()));
            userRepository.saveAll(List.of(adminUser, basicUser));
        }
    }
}
