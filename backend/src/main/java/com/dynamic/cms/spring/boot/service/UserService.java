package com.dynamic.cms.spring.boot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dynamic.cms.spring.boot.model.User;
import com.dynamic.cms.spring.boot.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	public List<User> getUsers()
	{
		return userRepository.findAll();
	}
	
	public User getUserById(Long userId) throws Exception
	{
		Optional<User> result = userRepository.findById(userId);
 		User theUser;
 		if(result.isPresent())
 		{
 			theUser=result.get();
 		}else {
			throw new Exception("Did not find User id : "+ userId);
		}
		return theUser;
	}                                                                                         
	
	public User addUser(User user)
	{
		return userRepository.save(user);
	}
	
	public void deleteUser(Long id) throws Exception
 	{
 		User user = getUserById(id);
 		if(user == null)
		{
			throw new Exception("User Id not found " + id);
		}
 		userRepository.deleteById(id);
 	}
	
	public User updateUser(Long userId, User userRequest) throws Exception {
        return userRepository.findById(userId).map(user -> {
            user.setUserName(userRequest.getUserName());
            user.setPassword(userRequest.getPassword());
            user.setEmail(userRequest.getEmail());
            return userRepository.save(user);
        }).orElseThrow(() -> new Exception("User Id: "+ userId+ " - not found"  ));
    }
	
	 public boolean isValidUser(String email, String password) {
	        User user = userRepository.findByEmail(email);
	        if (user != null && user.getPassword().equals(password)) {
	            return true;
	        }
	        return false;
	    }
	 
	 public boolean isValidAdmin(String email, String password) {
		 String mail = "admin@gmail.com";
	     String pass = "admin@123";
	        if (mail.equals(email) && pass.equals(pass)) {
	            return true;
	        }
	        return false;
	    }
	 
	 public User getByUserName(String userName) {
	        return userRepository.findByEmail(userName);
	    }
	 
}
