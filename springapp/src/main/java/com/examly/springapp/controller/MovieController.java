package com.examly.springapp.controller;

import org.springframework.web.bind.annotation.*;
import com.examly.springapp.service.*;
import com.examly.springapp.model.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import java.util.*;

@RestController
public class MovieController {
    private final MovieService movieService;

    public MovieController(MovieService movieService){
        this.movieService = movieService;
    }

    @PostMapping("/admin/addMovie")
    public ResponseEntity<Boolean> addMovie(@RequestBody MovieModel movieModel){
        Boolean isCreated = movieService.addMovie(movieModel);
        return new ResponseEntity<>(isCreated, HttpStatus.OK);
    }

    @GetMapping("/admin/movie")
    public ResponseEntity<List<MovieModel>> getAllMovie(){
        List<MovieModel> movies = movieService.findAllMovies();
        return new ResponseEntity<>(movies, HttpStatus.OK);
    }

    @GetMapping("/movie/{id}")
    public ResponseEntity<MovieModel> showMovie(@PathVariable("id") String id){
        MovieModel movie = movieService.findMovie(id);
        return new ResponseEntity<>(movie, HttpStatus.OK);
    }

    @DeleteMapping("/admin/movie/{id}")
    public void deleteMovie(@PathVariable("id") String id){
        movieService.deleteMovie(id);
    }

    @PutMapping("/admin/movie/{id}")
    public void updateMovie(@PathVariable("id") String id, @RequestBody MovieModel data){
        movieService.saveUpdatedMovie(id, data);
    }
}
