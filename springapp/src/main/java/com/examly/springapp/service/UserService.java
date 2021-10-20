package com.examly.springapp.service;

import java.util.*;

import com.examly.springapp.repo.UserModelRepo;
import com.examly.springapp.model.*;
import com.examly.springapp.exception.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;



@Service
public class UserService {
    private final UserModelRepo userModelRepo;
    private final PasswordEncoder passwordEncoder;
    

    @Autowired
    public UserService(UserModelRepo userModelRepo){
        this.userModelRepo = userModelRepo;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    public List<UserModel> findAllUsers(){
        return userModelRepo.findAll();
    }

    public List<UserModel> findAllOnlineUsers(){
        return userModelRepo.findAllUserModelByActive(true);
    }

    public UserModel getUserByEmail(String email){
        Optional<UserModel> user = userModelRepo.findUserModelByEmail(email);
        if(user.isPresent()){
            return userModelRepo.findUserModelByEmail(email)
                        .orElseThrow(() -> new UserNotFoundException("User Not Found"));
        }
        return null;
    }

    public boolean saveEditedUser(UserModel data){
        Optional<UserModel> user = userModelRepo.findUserModelByEmail(data.getEmail());
        if(user.isPresent()){
            UserModel currUser =  userModelRepo.findUserModelByEmail(data.getEmail())
                                        .orElseThrow(() -> new UserNotFoundException("User Not Found"));
            if(!currUser.getUserId().equals(data.getUserId())){
                return false;
            }
        }
        String encodedPassword = this.passwordEncoder.encode(data.getPassword());
        data.setPassword(encodedPassword); 
        userModelRepo.save(data);
        return true;
    }

    @Transactional
    public void deleteUser(String userId){
        userModelRepo.deleteUserModelByUserId(userId);
    }
}
