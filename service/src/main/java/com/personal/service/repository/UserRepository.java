package com.personal.service.repository;

import com.personal.service.domain.User;
import com.personal.service.service.dto.UserDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    @Query("SELECT new com.personal.service.service.dto.UserDTO(u) from User u where  u.active = true AND LOWER(u.email) LIKE LOWER(:#{#user.email})  AND LOWER(u.password) LIKE LOWER(:#{#user.password})")
    public Optional<UserDTO> login(@Param("user") UserDTO user);
}
