package com.examly.springapp.service;

import java.util.*;

import com.examly.springapp.repo.UserModelRepo;
import com.examly.springapp.model.*;
import com.examly.springapp.exception.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;



@Service
public class UserService {
    private final UserModelRepo userModelRepo;
    

    @Autowired
    public UserService(UserModelRepo userModelRepo){
        this.userModelRepo = userModelRepo;
        
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

    public void saveEditedUser(UserModel data){
        userModelRepo.save(data);
    }

    @Transactional
    public void deleteUser(String email){
        userModelRepo.deleteUserModelByEmail(email);
    }
}
