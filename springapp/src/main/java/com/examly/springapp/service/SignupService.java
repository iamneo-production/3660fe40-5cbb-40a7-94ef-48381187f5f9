package com.examly.springapp.service;

import java.util.Optional;

import com.examly.springapp.repo.UserModelRepo;
import com.examly.springapp.model.*;
import com.examly.springapp.exception.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class SignupService {
    private final UserModelRepo userModelRepo;
    private final PasswordEncoder passwordEncoder;


    @Autowired
    public SignupService(UserModelRepo userModelRepo) {
        this.userModelRepo = userModelRepo;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    public Boolean signupUser(UserModel user){
        Optional<UserModel> isUserExists = userModelRepo.findUserModelByEmail(user.getEmail());
        if(isUserExists.isPresent()){
            // throw new UserFoundException("User already exists");
            return false;
        }
        String encodedPassword = this.passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword); 
        userModelRepo.save(user);
        return true;
    }
}
