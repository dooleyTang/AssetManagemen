package com.kingflower.test;

import java.util.List;

import javax.annotation.Resource;

import org.junit.Test;

import com.kingflower.dao.UserMapper;
import com.kingflower.entity.UserEntity;

public class DaoTest extends TestBase{
	
@Resource
private UserMapper userInformation;
	
	@Test
	public void user() {
		UserEntity userEntity =  userInformation.byName("马中杰");
		System.out.println(userEntity.toString());
		List<UserEntity> users =  userInformation.getAllUser();
		System.out.println(users.size());
	}
}
