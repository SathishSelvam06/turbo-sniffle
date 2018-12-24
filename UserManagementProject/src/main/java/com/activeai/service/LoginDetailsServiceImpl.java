package com.activeai.service;

import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.activeai.dao.LoginDetailsRepository;
import com.activeai.model.LoginDetails;


@Service
public class LoginDetailsServiceImpl implements LoginDetailsService {
	@Autowired
	LoginDetailsRepository loginDetailsRepository;

	@Override
	public String validatingUsers(LoginDetails loginDetails) {
		AtomicInteger atmInteger=new AtomicInteger(0);
		boolean check=loginDetailsRepository.findById(loginDetails.getId()).isPresent();
		if(check==true) {
			loginDetailsRepository.findById(loginDetails.getId()).stream().forEach(action->{
				if(action.getId().equals(loginDetails.getId())&&action.getPassword().equals(loginDetails.getPassword())) {
					atmInteger.getAndIncrement();
					System.out.println("valid user");
					if(action.getRole().equals("admin")) {
					atmInteger.getAndIncrement();
					System.out.println("admin");
					}
				}
			});
		}
		if(atmInteger.get()==1) {
			return "valid";
		}else if(atmInteger.get()==2) {
			return "admin";
		}else {
			return "invalid";
		}
	}
}
