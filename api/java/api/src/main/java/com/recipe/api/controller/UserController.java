package com.recipe.api.controller;

import com.recipe.api.entities.Role;
import com.recipe.api.entities.User;
import com.recipe.api.entities.UserRole;
import com.recipe.api.repository.UserRepository;
import com.recipe.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @PostMapping("/register")
    public User createUser(@RequestBody User user) throws Exception {
        // encrypting the password
        user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));

        Set<UserRole> roles = new HashSet<>();
        Role role = new Role();
        role.setRoleId(45L);
        role.setRoleName("Normal");

        UserRole userRole = new UserRole();
        userRole.setUser(user);
        userRole.setRole(role);
        roles.add(userRole);

        return this.userService.createUser(user, roles);
    }

    // admin user
    @PostMapping("/register-admin")
    public User createAdminUser(@RequestBody User user) throws Exception {
        // Encrypting the password
        user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));

        Set<UserRole> roles = new HashSet<>();
        Role adminRole = new Role();
        adminRole.setRoleId(46L);
        adminRole.setRoleName("admin");

        UserRole userRole = new UserRole();
        userRole.setUser(user);
        userRole.setRole(adminRole);
        roles.add(userRole);

        return this.userService.createUser(user, roles);
    }


    @GetMapping("/{username}")
    public User getUser(@PathVariable("username") String username) {
        return this.userService.getUser(username);
    }
}

