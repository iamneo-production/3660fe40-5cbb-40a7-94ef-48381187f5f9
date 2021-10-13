package com.examly.springapp.controller;

import org.springframework.web.bind.annotation.*;
import com.examly.springapp.service.*;
import com.examly.springapp.model.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

@RestController
public class SignupController {
    private final SignupService signupService;

    public SignupController(SignupService signupService) {
        this.signupService = signupService;
    }

    @PostMapping("/signup")
    public ResponseEntity<Boolean> saveUser(@RequestBody UserModel userModel){
        Boolean isCreated = signupService.signupUser(userModel);
        return new ResponseEntity<>(isCreated, HttpStatus.OK);
    }
}
