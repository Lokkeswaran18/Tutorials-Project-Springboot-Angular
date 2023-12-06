package com.dynamic.cms.spring.boot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dynamic.cms.spring.boot.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
	public User findByEmail(String email);
}
