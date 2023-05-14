package com.recipe.api.service.impl;

import com.recipe.api.entities.User;
import com.recipe.api.entities.UserRole;
import com.recipe.api.repository.RoleRepository;
import com.recipe.api.repository.UserRepository;
import com.recipe.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Override
    public User createUser(User user, Set<UserRole> userRoles) throws Exception {
        User local= this.userRepository.findByUsername(user.getUsername());
        if (local!=null){
            System.out.println("user already present");
            throw new Exception("user already registered in the database");
        }else {
            // create a new user
            // to find all the roles
            for (UserRole ur: userRoles){
                roleRepository.save(ur.getRole());
            }
            user.getUserRoles().addAll(userRoles); // assigning all the roles to the user
            local = this.userRepository.save(user);


        }

        return local;
    }

    @Override
    public User getUser(String username) {
        return this.userRepository.findByUsername(username);
    }
}
