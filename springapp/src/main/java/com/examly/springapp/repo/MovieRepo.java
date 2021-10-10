package com.examly.springapp.repo;

import java.util.*;

import com.examly.springapp.model.MovieModel;
import org.springframework.data.jpa.repository.JpaRepository;


public interface MovieRepo extends JpaRepository<MovieModel, String>{
    MovieModel findMovieModelByMovieId(String email);
    void deleteMovieModelByMovieId(String id);
    // void updateMovieModelByMovieId(String id, MovieModel data);
}
