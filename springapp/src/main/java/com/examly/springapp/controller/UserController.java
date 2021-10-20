package com.examly.springapp.controller;

import java.util.*;

import org.springframework.web.bind.annotation.*;
import com.examly.springapp.service.*;
import com.examly.springapp.model.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/admin")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService){
        this.userService = userService;
    }

    @GetMapping("")
    public ResponseEntity<List<UserModel>> getUser(){
        List<UserModel> users = userService.findAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/onlineUsers")
    public ResponseEntity<List<UserModel>> getOnlineUser(){
        List<UserModel> users = userService.findAllOnlineUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/{email}")
    public ResponseEntity<UserModel> userEditData(@PathVariable("email") String email){
        UserModel user = userService.getUserByEmail(email);
        return new ResponseEntity<>(user, HttpStatus.OK);
    } 

    @PutMapping("/userEdit/{userId}")
    public ResponseEntity<Boolean> userEditSave(@PathVariable("userId") String userId, @RequestBody UserModel data){
        return new ResponseEntity<>(userService.saveEditedUser(data), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{email}")
    public void userDelete(@PathVariable String email){
        userService.deleteUser(email);
    }
}
