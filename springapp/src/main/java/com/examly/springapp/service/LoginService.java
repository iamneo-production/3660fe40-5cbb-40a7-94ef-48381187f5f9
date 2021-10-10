package com.examly.springapp.service;

import java.util.Optional;

import com.examly.springapp.repo.UserModelRepo;
import com.examly.springapp.model.*;
import com.examly.springapp.exception.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {
    private final UserModelRepo userModelRepo;

    @Autowired
    public LoginService(UserModelRepo userModelRepo) {
        this.userModelRepo = userModelRepo;
    }

    public UserModel loginUser(LoginModel loginModel){
        Optional<UserModel> user = userModelRepo.findUserModelByEmail(loginModel.getEmail());
        if(user.isPresent()){
            return userModelRepo.findUserModelByEmail(loginModel.getEmail())
                        .orElseThrow(() -> new UserNotFoundException("User Not Found"));
        }
        return null;
    }

}
