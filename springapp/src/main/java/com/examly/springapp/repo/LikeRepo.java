package com.examly.springapp.repo;

import java.util.*;

import com.examly.springapp.model.LikeModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface LikeRepo extends JpaRepository<LikeModel ,String> {
    LikeModel findLikeModelById(String id);
    void deleteLikeModelById(String id);

    // @Query("delete from like_model_liked_user where liked_user_email = %?1")
    // void deleteLikedUserByEmail(String email);

}
