package com.examly.springapp.service;

import java.util.Optional;

import com.examly.springapp.repo.UserModelRepo;
import com.examly.springapp.model.*;
import com.examly.springapp.exception.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class SignupService {
    private final UserModelRepo userModelRepo;

    @Autowired
    public SignupService(UserModelRepo userModelRepo) {
        this.userModelRepo = userModelRepo;
    }

    public Boolean signupUser(UserModel user){
        Optional<UserModel> isUserExists = userModelRepo.findUserModelByEmail(user.getEmail());
        if(isUserExists.isPresent()){
            // throw new UserFoundException("User already exists");
            return false;
        }
        userModelRepo.save(user);
        return true;
    }
}
