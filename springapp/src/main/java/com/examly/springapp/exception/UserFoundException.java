package com.examly.springapp.exception;

public class UserFoundException extends RuntimeException{
    public UserFoundException(String msg){
        super(msg);
    }
}
