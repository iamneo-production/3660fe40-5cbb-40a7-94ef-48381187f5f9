package com.examly.springapp.service;

import java.util.Optional;

import com.examly.springapp.repo.*;
import com.examly.springapp.model.*;
import com.examly.springapp.exception.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;



@Service
public class CommentService {
    
    private final UserModelRepo userModelRepo;
    private final LikeRepo likeRepo;
    private final MovieRepo movieRepo;

    @Autowired
    public CommentService(UserModelRepo userModelRepo, LikeRepo likeRepo,MovieRepo movieRepo) {
        this.userModelRepo = userModelRepo;
        this.likeRepo = likeRepo;
        this.movieRepo = movieRepo;
    }

    public String addLike(String id, UserModel userModel){
        MovieModel movieModel = movieRepo.findMovieModelByMovieId(id);
        LikeModel likeModel = likeRepo.findLikeModelById(movieModel.getLike().getId());
        likeModel.setNoOfLike(likeModel.getNoOfLike() + 1);
        likeModel.getLikedUser().add(userModel);
        likeRepo.save(likeModel);
        return "Added";
    }

    @Transactional
    public String removeLike(String id, UserModel userModel){
        MovieModel movieModel = movieRepo.findMovieModelByMovieId(id);
        LikeModel likeModel = likeRepo.findLikeModelById(movieModel.getLike().getId());
        if(likeModel.getNoOfLike() > 0){
            likeModel.setNoOfLike(likeModel.getNoOfLike() - 1);
        }
        for(int i = 0; i < likeModel.getLikedUser().size(); i++){
            UserModel user = likeModel.getLikedUser().get(i);
            if(user.getEmail().equals(userModel.getEmail())){
                likeModel.getLikedUser().remove(i);
            }
        }
        likeRepo.deleteLikeModelById(likeModel.getId());
        return "Removed";
    }

    public Integer getLikeCount(String id){
        MovieModel movieModel = movieRepo.findMovieModelByMovieId(id);
        LikeModel likeModel = likeRepo.findLikeModelById(movieModel.getLike().getId());
        return likeModel.getNoOfLike();
    }
}
