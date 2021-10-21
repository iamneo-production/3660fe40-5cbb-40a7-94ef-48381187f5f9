package com.examly.springapp.controller;


import org.springframework.web.bind.annotation.*;
import com.examly.springapp.service.*;
import com.examly.springapp.model.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

@RestController
public class CommentController {
    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping("/like/{id}")
    public ResponseEntity<String> addLike(@PathVariable("id") String id, @RequestBody UserModel userModel){
        String status = commentService.addLike(id, userModel);
        return new ResponseEntity<>(status, HttpStatus.OK); 
    }

    @DeleteMapping("/dislike/{id}")
    public ResponseEntity<String> removeLike(@PathVariable("id") String id, @RequestBody UserModel userModel){
        System.out.println(id+" "+userModel.getUserId());
        String status = commentService.removeLike(id, userModel);
        return new ResponseEntity<>(status, HttpStatus.OK); 
    }

    @GetMapping("/admin/likeCount/{id}")
    public ResponseEntity<Integer> getLikeCount(@PathVariable("id") String id){
        Integer count = commentService.getLikeCount(id);
        return new ResponseEntity<>(count, HttpStatus.OK);
    }
}
