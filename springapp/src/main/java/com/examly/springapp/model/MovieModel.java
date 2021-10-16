package com.examly.springapp.model;

import com.examly.springapp.model.*;


import javax.persistence.*;
import org.hibernate.annotations.GenericGenerator;
import java.util.*;


@Entity
public class MovieModel {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
        name = "UUID",
        strategy = "org.hibernate.id.UUIDGenerator"
    )
    @Column(updatable = false, nullable = false)
    private String movieId; 
    private String movieName;
    private String movieUrl;
    private String moviePosterUrl;
    @ElementCollection
    private List<String> movieCast;
    @OneToOne(cascade = CascadeType.ALL)
    private LikeModel like;


    public MovieModel() {
    }


    public MovieModel(String movieId, String movieName, String movieUrl, String moviePosterUrl,  LikeModel like, List<String> movieCast) {
        this.movieId = movieId;
        this.movieName = movieName;
        this.movieUrl = movieUrl;
        this.moviePosterUrl = moviePosterUrl;
        this.like = like;
        this.movieCast = movieCast;
    }


    public String getMovieId() {
        return this.movieId;
    }

    public void setMovieId(String movieId) {
        this.movieId = movieId;
    }

    public String getMovieName() {
        return this.movieName;
    }

    public void setMovieName(String movieName) {
        this.movieName = movieName;
    }

    public String getMovieUrl() {
        return this.movieUrl;
    }

    public void setMovieUrl(String movieUrl) {
        this.movieUrl = movieUrl;
    }

    public String getMoviePosterUrl() {
        return this.moviePosterUrl;
    }

    public void setMoviePosterUrl(String moviePosterUrl) {
        this.moviePosterUrl = moviePosterUrl;
    }

    public LikeModel getLike() {
        return this.like;
    }

    public void setLike(LikeModel like) {
        this.like = like;
    }

    public void setMovieCast(List<String> movieCast){
        this.movieCast = movieCast;
    }

    public List<String> getMovieCast(){
        return this.movieCast;
    }


    @Override
    public String toString() {
        return "{" +
            " movieId='" + getMovieId() + "'" +
            ", movieName='" + getMovieName() + "'" +
            ", movieUrl='" + getMovieUrl() + "'" +
            ", moviePosterUrl='" + getMoviePosterUrl() + "'" +

            ", like='" + getLike() + "'" +
            "}";
    }

}


