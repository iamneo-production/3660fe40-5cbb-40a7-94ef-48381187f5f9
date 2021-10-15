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
public class LoginService {
    private final UserModelRepo userModelRepo;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public LoginService(UserModelRepo userModelRepo) {
        this.userModelRepo = userModelRepo;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    public Boolean loginUser(LoginModel loginModel){
        Optional<UserModel> user = userModelRepo.findUserModelByEmail(loginModel.getEmail());
        Boolean status = false;
        if(user.isPresent()){
                UserModel currUser = userModelRepo.findUserModelByEmail(loginModel.getEmail())
                                            .orElseThrow(() -> new UserNotFoundException("User Not Found"));
                // String encodedPassword = this.passwordEncoder.encode(loginModel.getPassword(), currUser.getPassword());
                status = this.passwordEncoder.matches(loginModel.getPassword(), currUser.getPassword());
                // status = encodedPassword.equals(currUser.getPassword());
                System.out.println(status);
                if(status){
                    currUser.setActive(true);
                    userModelRepo.save(currUser);
                }

        }
        return status;
    }

}
