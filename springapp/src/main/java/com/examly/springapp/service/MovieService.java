package com.examly.springapp.service;

import java.util.*;

import com.examly.springapp.repo.*;
import com.examly.springapp.model.*;
import com.examly.springapp.exception.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class MovieService {
    private final MovieRepo movieRepo;
    private final LikeRepo  likeRepo;

    @Autowired
    public MovieService(MovieRepo movieRepo, LikeRepo likeRepo) {
        this.movieRepo = movieRepo;
        this.likeRepo = likeRepo;
    }

    public Boolean addMovie(MovieModel movieModel){
        LikeModel likeModel = new LikeModel();
        movieModel.setLike(likeModel);
        movieRepo.save(movieModel);
        return true;
    }

    public List<MovieModel> findAllMovies(){
        return movieRepo.findAll();
    }

    public MovieModel findMovie(String id){
        MovieModel movie = movieRepo.findMovieModelByMovieId(id);
        return movie;
    }

    @Transactional
    public void deleteMovie(String id){
        movieRepo.deleteMovieModelByMovieId(id);
    }

    public void saveUpdatedMovie(String id, MovieModel data){
        MovieModel movie = movieRepo.findMovieModelByMovieId(id);
        movie.setMovieName(data.getMovieName());
        movie.setMovieUrl(data.getMovieUrl());
        movie.setMoviePosterUrl(data.getMoviePosterUrl());
        movie.setMovieCast(data.getMovieCast());
        movieRepo.save(movie);
    }

}
