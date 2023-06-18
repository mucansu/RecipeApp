package com.recipe.api.service;

import com.recipe.api.entities.User;
import com.recipe.api.entities.UserRole;

import java.util.Set;

public interface UserService {

    public User createUser(User user, Set<UserRole> userRoles) throws Exception;
    // get user by username
    public User getUser(String username);
}
