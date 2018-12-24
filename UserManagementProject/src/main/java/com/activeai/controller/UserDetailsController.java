package com.activeai.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.activeai.model.LoginDetails;
import com.activeai.model.UserDetails;
import com.activeai.service.LoginDetailsService;
import com.activeai.service.UserDetailsService;


@RestController
@EnableAutoConfiguration
@RequestMapping("/rest/users")
public class UserDetailsController {
	
	@Autowired
	UserDetailsService userDetailsService;
	
	@Autowired 
	LoginDetailsService loginDetailsService; 
	
	   @GetMapping("/list")
	    public List<UserDetails> getAllEmployees() {
	        return userDetailsService.findAllDetails();
	    }
	   
	   @GetMapping("/update")
	   public void updateEmployees(UserDetails userDetails) {
		  System.out.println(userDetails.getEmailId());
		  System.out.println(userDetails.getPassword());
		  System.out.println(userDetails.getPhoneNumber());
		  System.out.println(userDetails.getRole());
		  System.out.println(userDetails.getUserId());
		  System.out.println(userDetails.getUserName());
	      userDetailsService.updateEmployees(userDetails);
	    }
	   
	   @GetMapping("/delete")
	   public void deleteEmployees(UserDetails userDetails) {
	
	        userDetailsService.deleteEmployees(userDetails);
	    }
	   
	   @GetMapping("/insert")
	   public void insertEmployees(UserDetails userDetails) {
	        userDetailsService.insertEmployees(userDetails);
	    }
	   
	   @RequestMapping("/login")
	   public String login(LoginDetails loginDetails) {
	        String userType=loginDetailsService.validatingUsers(loginDetails);
	        return userType;
	   }
	   
	   @GetMapping("/id")
	   public UserDetails fetchJson(String id) {
		   List<UserDetails> jsonDetails=userDetailsService.fetchById(id); 
		   if(jsonDetails.isEmpty()) {
			   return null;
		   }
		   return jsonDetails.get(0);
	   }
	   
	   @RequestMapping("/index")
	   public ModelAndView initial() {
		   return new ModelAndView("login");
	   }
	   
	   @RequestMapping("/userdetails")
	   public ModelAndView userdetails() {
		   return new ModelAndView("userdetails");
	   }
	   
	   @RequestMapping("/display")
	   public ModelAndView display() {
		   return new ModelAndView("display");
	   }
}
