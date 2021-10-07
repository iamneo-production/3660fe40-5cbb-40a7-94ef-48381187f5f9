package com.examly.springapp.controller;


import org.springframework.web.bind.annotation.*;
import com.examly.springapp.service.*;
import com.examly.springapp.model.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;


@RestController
public class LoginController {
    private final LoginService loginService;
    private final UserService userService;

    public LoginController(LoginService loginService, UserService userService) {
        this.loginService = loginService;
        this.userService = userService;
    }

    @PostMapping("/login")
    public Boolean checkUser(@RequestBody LoginModel loginModel){
        UserModel user = loginService.loginUser(loginModel);

        Boolean status =  user != null && user.getPassword().equals(loginModel.getPassword());
        if(status){
            user.setActive(true);
            userService.saveEditedUser(user);
        }
        return status;
    }
}
