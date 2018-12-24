package com.activeai.service;

import java.util.List;

import com.activeai.model.UserDetails;


public interface UserDetailsService {
	public List<UserDetails> findAllDetails();
	
	public void updateEmployees(UserDetails userDetails);
	
	public void deleteEmployees(UserDetails userDetails);
	
	public void insertEmployees(UserDetails userDetails);
	
	public List<UserDetails> fetchById(String id);
}
