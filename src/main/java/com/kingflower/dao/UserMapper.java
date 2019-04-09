package com.kingflower.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
//import org.apache.ibatis.annotations.Select;

import com.kingflower.entity.UserEntity;

public interface UserMapper {
	
//	@Select("select * from 'systemtab' where name=#{name}")
	UserEntity byName(@Param("name") String name);
	List<UserEntity> getAllUser();
}
