package com.examly.springapp.model;

import java.io.Serializable;
import org.hibernate.annotations.GenericGenerator;
import javax.persistence.*;
import com.examly.springapp.model.*;
import java.util.*;


@Entity
public class LikeModel{
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
        name = "UUID",
        strategy = "org.hibernate.id.UUIDGenerator"
    )
    @Column(updatable = false, nullable = false)
    private String id;
    private int noOfLike;
    @OneToMany(cascade = CascadeType.ALL)
    private List<UserModel> likedUser = new ArrayList<>();

    public LikeModel() {
    }


    public LikeModel(String id, int noOfLike) {
        this.id = id;
        this.noOfLike = noOfLike;
    }


    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getNoOfLike() {
        return this.noOfLike;
    }

    public void setNoOfLike(int noOfLike) {
        this.noOfLike = noOfLike;
    }

    public List<UserModel> getLikedUser(){
        return this.likedUser;
    }

    public void setLikedUser(){
        this.likedUser = likedUser;
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", noOfLike='" + getNoOfLike() + "'" +
            ", likedUser='" + getLikedUser() + "'" +
            "}";
    }
    


}
