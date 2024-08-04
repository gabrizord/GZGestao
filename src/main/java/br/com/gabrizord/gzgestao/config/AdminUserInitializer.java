package br.com.gabrizord.gzgestao.config;

import br.com.gabrizord.gzgestao.enums.RoleName;
import br.com.gabrizord.gzgestao.model.Role;
import br.com.gabrizord.gzgestao.model.User;
import br.com.gabrizord.gzgestao.repository.RoleRepository;
import br.com.gabrizord.gzgestao.repository.UserAuthRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.Optional;
import java.util.logging.Logger;

@Component
@Profile({"dev", "test"})
public class AdminUserInitializer implements CommandLineRunner {

    private final UserAuthRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;
    Logger logger = Logger.getLogger(getClass().getName());

    public AdminUserInitializer(UserAuthRepository userRepository, BCryptPasswordEncoder passwordEncoder, RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {
        Optional<User> admin = userRepository.findByUsername("admin");
        Optional<User> gabrizord = userRepository.findByUsername("gabrizord");

        if (admin.isEmpty() && gabrizord.isEmpty()) {
            Optional<Role> adminRole = roleRepository.findByName(RoleName.ADMIN);
            Optional<Role> basicRole = roleRepository.findByName(RoleName.BASIC);
            if (adminRole.isPresent() && basicRole.isPresent()) {
                User adminUser = new User();
                User gabrizordUser = new User();

                adminUser.setUsername("admin");
                adminUser.setEmail("admin@example.com");
                adminUser.setPassword(passwordEncoder.encode("password"));
                adminUser.setRoles(Collections.singleton(adminRole.get()));

                gabrizordUser.setUsername("gabrizord");
                gabrizordUser.setEmail("dev.gabrizord@example.com");
                gabrizordUser.setPassword(passwordEncoder.encode("password"));
                gabrizordUser.setRoles(Collections.singleton(basicRole.get()));

                userRepository.save(gabrizordUser);
                userRepository.save(adminUser);
                logger.info("Users created successfully.");
            } else {
                logger.info("Users role role not found.");
            }
        } else {
            logger.info("Users user already exists.");
        }
    }
}
