package com.activeai.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.activeai.model.UserDetails;


@Repository
public interface UserDetailsRepository extends JpaRepository<UserDetails, String> {

}
