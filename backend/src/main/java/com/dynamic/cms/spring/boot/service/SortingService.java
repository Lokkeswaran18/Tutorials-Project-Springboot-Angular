package com.dynamic.cms.spring.boot.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.dynamic.cms.spring.boot.model.Tutorial;
import com.dynamic.cms.spring.boot.repository.TutorialRepository;

@Service
public class SortingService 
{
	TutorialRepository tutorialRepository;

	@Autowired
	public SortingService(TutorialRepository tutorialRepository) {
		super();
		this.tutorialRepository = tutorialRepository;
	}
	
	public List<Tutorial> sortByAlphabetAsc(String fieldName)
	{
		List<Tutorial> tut = new ArrayList<Tutorial>();
		tut = tutorialRepository.findAll(Sort.by(Sort.Direction.ASC,fieldName));
		return tut;
	}
	
	public List<Tutorial> sortByAlphabetDsc(String fieldName)
	{
		List<Tutorial> tut = new ArrayList<Tutorial>();
		tut = tutorialRepository.findAll(Sort.by(Sort.Direction.DESC,fieldName));
		return tut;
	}
	
	
}
