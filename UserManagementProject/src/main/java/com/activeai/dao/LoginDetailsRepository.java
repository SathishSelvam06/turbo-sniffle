package com.activeai.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.activeai.model.LoginDetails;


@Repository
public interface LoginDetailsRepository extends JpaRepository<LoginDetails, String> {

}
