package com.recipe.api.entities;


import jakarta.persistence.*;



@Entity
    public class UserRole {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)

        private Long userRoleId;
        @ManyToOne(fetch = FetchType.EAGER)
        private User user;
        @ManyToOne
        private Role role;

        public UserRole(Long userRoleId, User user, Role role) {
            this.userRoleId = userRoleId;
            this.user = user;
            this.role = role;
        }

        public Role getRole() {
            return role;
        }

        public void setRole(Role role) {
            this.role = role;
        }

        public Long getUserRoleId() {
            return userRoleId;
        }

        public void setUserRoleId(Long userRoleId) {
            this.userRoleId = userRoleId;
        }

        public User getUser() {
            return user;
        }

        public UserRole() {
        }

        public UserRole(Long userRoleId, User user) {
            this.userRoleId = userRoleId;
            this.user = user;
        }

        public void setUser(User user) {
            this.user = user;
        }
}
