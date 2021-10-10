package com.examly.springapp.repo;

import java.util.*;

import com.examly.springapp.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserModelRepo extends JpaRepository<UserModel, String>{
    Optional<UserModel> findUserModelByEmail(String email);
    List<UserModel> findAllUserModelByActive(Boolean active);
    void deleteUserModelByEmail(String email);
}
