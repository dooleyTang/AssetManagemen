package com.kingflower.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kingflower.dao.UserMapper;
import com.kingflower.entity.UserEntity;
import com.kingflower.service.IUserService;

@Service
public class UserServiceImpl implements IUserService {
	
	@Autowired UserMapper useMapper;
	
	@Override
	public UserEntity getUserByName() {
		useMapper.byName("唐世洲");
		return null;
	}

}
