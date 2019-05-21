package com.example.mapper;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Param;

import com.example.model.userinfo;

public interface demoMapper {
	
	ArrayList<userinfo> getAllusers();
	
	ArrayList<userinfo> getUserinfo(@Param("usercode")String usercode);
	
	int getCount();
	
	public void deleteuser(@Param("usercode")String usercode);
	
	public void updateuser(@Param("userinfo")userinfo userinfo,@Param("usercode")String usercode);
	
	public void insertuser(@Param("userinfo")userinfo userinfo);

}
