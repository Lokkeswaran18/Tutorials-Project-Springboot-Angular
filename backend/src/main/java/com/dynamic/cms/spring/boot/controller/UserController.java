package com.dynamic.cms.spring.boot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dynamic.cms.spring.boot.model.Admin;
import com.dynamic.cms.spring.boot.model.Login;
import com.dynamic.cms.spring.boot.model.User;
import com.dynamic.cms.spring.boot.service.EmailService;
import com.dynamic.cms.spring.boot.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/tutorials")
public class UserController 
{
	@Autowired
	UserService userService;
	
	@Autowired
	EmailService emailService;
	
	@PostMapping("/users/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        if (userService.getByUserName(user.getEmail()) != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body("User already registered");
        }

        return ResponseEntity.ok(userService.addUser(user));

    }
	
	@PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Login login) {
        String email = login.getEmail();
        String password = login.getPassword();

        // Validate user credentials
        if (!userService.isValidUser(email, password)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid email or password");
        }

        return ResponseEntity.ok().build();
    }
	
	
	
	@PostMapping("/adminlogin")
    public ResponseEntity<?> loginAdmin(@RequestBody Admin admin) {
        String email = admin.getEmail();
        String password = admin.getPassword();
        if(!userService.isValidAdmin(email, password))
        {
        	return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid email or password");
        }
        
        return ResponseEntity.ok().build();
    }
	
	@GetMapping("/users")
	public List<User> findAll()
	{
		return userService.getUsers();
	}
	
	@GetMapping("/users/{id}") 
	public User findById(@PathVariable Long id) throws Exception
	{
		User user = userService.getUserById(id);
		return user;
	}
	
	@PutMapping("/users/{userId}")
	public User updateUser(@RequestBody User user, @PathVariable Long userId) throws Exception 
	{
		userService.updateUser(userId,user);
		return user;
	}
	
	@DeleteMapping("/users/{userId}")
	public String deleteUser(@PathVariable Long userId) throws Exception
	{
		userService.deleteUser(userId);
		return "Deleted User Id = "+userId;
	}
	
	 
}
