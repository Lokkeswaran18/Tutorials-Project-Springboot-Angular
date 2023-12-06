package com.dynamic.cms.spring.boot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dynamic.cms.spring.boot.model.Tutorial;

public interface TutorialRepository extends JpaRepository<Tutorial, Long> {
  List<Tutorial> findByPublished(boolean published);
  List<Tutorial> findByTitleContainingIgnoreCase(String title);
  
  
}
