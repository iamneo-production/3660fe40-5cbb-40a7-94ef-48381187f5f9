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
    private String yearOfRelease;
    private String duration;
    @ElementCollection
    private List<String> movieCast;
    @OneToOne(cascade = CascadeType.ALL)
    private LikeModel like;


    public MovieModel() {
    }


    public MovieModel(String movieName, String movieUrl, String moviePosterUrl, String yearOfRelease, String duration,  LikeModel like, List<String> movieCast) {
        this.movieName = movieName;
        this.movieUrl = movieUrl;
        this.moviePosterUrl = moviePosterUrl;
        this.yearOfRelease = yearOfRelease;
        this.duration = duration;
        this.like = like;
        this.movieCast = movieCast;
    }

    public String getYearOfRelease() {
        return this.yearOfRelease;
    }

    public void setYearOfRealease(String yearOfRelease) {
        this.yearOfRelease = yearOfRelease;
    }

    public String getDuration() {
        return this.duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
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
            ", yearOfRelease='" + getYearOfRelease() + "'" +
            ", duration='" + getDuration() + "'" +
            ", like='" + getLike() + "'" +
            "}";
    }

}


