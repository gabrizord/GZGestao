package br.com.gabrizord.gzgestao.config;

import br.com.gabrizord.gzgestao.enums.RoleName;
import br.com.gabrizord.gzgestao.model.Role;
import br.com.gabrizord.gzgestao.model.User;
import br.com.gabrizord.gzgestao.repository.RoleRepository;
import br.com.gabrizord.gzgestao.repository.UserAuthRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Component
public class AdminUserInitializer implements CommandLineRunner {

    private final UserAuthRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;

    public AdminUserInitializer(UserAuthRepository userRepository, BCryptPasswordEncoder passwordEncoder, RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {
        Optional<User> admin = userRepository.findByUsername("admin");
        Optional<Role> adminRole = roleRepository.findByName(RoleName.ADMIN);
        if (admin.isEmpty() && adminRole.isPresent()) {
            User adminUser = new User();
            adminUser.setUsername("admin");
            adminUser.setEmail("admin@example.com");
            adminUser.setPassword(passwordEncoder.encode("password"));
            adminUser.setRoles(Collections.singleton(adminRole.get()));
            userRepository.save(adminUser);
        }
    }
}
