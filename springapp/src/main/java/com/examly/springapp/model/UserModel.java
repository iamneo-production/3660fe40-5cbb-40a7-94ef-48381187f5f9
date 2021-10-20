package com.examly.springapp.model;

import javax.persistence.*;
import org.hibernate.annotations.GenericGenerator;

@Entity
public class UserModel{
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
        name = "UUID",
        strategy = "org.hibernate.id.UUIDGenerator"
    )
    @Column(updatable = false, nullable = false)
    private String userId;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private String password;
    @Column(nullable = false)
    private String username;
    private String mobileNumber;
    @Column(columnDefinition = "BOOLEAN")
    private Boolean active;
    private String role;
    
    
    public UserModel() {
    }


    public UserModel(String userId, String email, String password, String username, String mobileNumber, Boolean active, String role) {
        this.userId = userId;
        this.email = email;
        this.password = password;
        this.username = username;
        this.mobileNumber = mobileNumber;
        this.active = active;
        this.role = role;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return "{" +
            " userId='" + getUserId() + "'" +
            " email='" + getEmail() + "'" +
            ", password='" + getPassword() + "'" +
            ", username='" + getUsername() + "'" +
            ", mobileNumber='" + getMobileNumber() + "'" +
            ", active='" + getActive() + "'" +
            ", role='" + getRole() + "'" +
            "}";
    }

}
