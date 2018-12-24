package com.activeai.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.activeai.dao.LoginDetailsRepository;
import com.activeai.dao.UserDetailsRepository;
import com.activeai.model.LoginDetails;
import com.activeai.model.UserDetails;


@Service
public class UserDetailsServiceImpl implements UserDetailsService{

	@Autowired
	LoginDetailsRepository loginDetailsRepository;

	@Autowired
	UserDetailsRepository userDetailsRepository;

	@Override
	public List<UserDetails> findAllDetails() {
		List<UserDetails> UserDetailsList=userDetailsRepository.findAll();
		return UserDetailsList;
	}

	@Override
	public void updateEmployees(UserDetails userDetails) {
		userDetailsRepository.deleteById(userDetails.getUserId());
		userDetailsRepository.save(userDetails);
		LoginDetails loginDetails=new LoginDetails();
		loginDetails.setId(userDetails.getUserId());
		loginDetails.setPassword(userDetails.getPassword());
		loginDetails.setRole(userDetails.getRole());
		loginDetailsRepository.deleteById(userDetails.getUserId());
		loginDetailsRepository.save(loginDetails);
	}

	@Override
	public void deleteEmployees(UserDetails userDetails) {
		userDetailsRepository.delete(userDetails);
		LoginDetails loginDetails=new LoginDetails();
		loginDetails.setId(userDetails.getUserId());
		loginDetails.setPassword(userDetails.getPassword());
		loginDetails.setRole(userDetails.getRole());
		loginDetailsRepository.delete(loginDetails);
	}

	@Override
	public void insertEmployees(UserDetails userDetails) {
		userDetailsRepository.save(userDetails);
		LoginDetails loginDetails=new LoginDetails();
		loginDetails.setId(userDetails.getUserId());
		loginDetails.setPassword(userDetails.getPassword());
		loginDetails.setRole(userDetails.getRole());
		loginDetailsRepository.save(loginDetails);
	}

	@Override
	public List<UserDetails> fetchById(String id) {
		if(userDetailsRepository.findById(id).isPresent()) {
			userDetailsRepository.findById(id).stream().forEach(action->System.out.println(action.getPassword()));	
		}
		userDetailsRepository.findById(id).stream().collect(Collectors.toList());
		return userDetailsRepository.findById(id).stream().collect(Collectors.toList());
	}
}
