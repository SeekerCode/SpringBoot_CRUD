package com.example.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Service;

import com.example.mapper.demoMapper;
import com.example.model.userinfo;

@Service
public class demoService {

	@Resource
	private demoMapper mapper;
	
	public Map<String, Object> getAllusers(HttpServletRequest req,HttpServletResponse res){
		int count;
		Map<String, Object> map = new HashMap<>();
		ArrayList<userinfo> users = null;
		users = mapper.getAllusers();
		count = mapper.getCount();
		map.put("rows", users);
		map.put("total", count);
		return map;
		
	}
	
	public int insertUserinfo(HttpServletRequest req,HttpServletResponse res){
		userinfo user = new userinfo();
		try {
			String usercode = (req.getParameter("usercode") == null ? "" : req.getParameter("usercode").trim());
			String username = (req.getParameter("username") == null ? "" : req.getParameter("username").trim());
			String age = (req.getParameter("age") == null ? "" : req.getParameter("age").trim());
			String sex = (req.getParameter("sex") == null ? "" : req.getParameter("sex").trim());
			String major = (req.getParameter("major") == null ? "" : req.getParameter("major").trim());
			user.setUsercode(usercode);
			user.setUsername(username);
			user.setAge(age);
			user.setSex(sex);
			user.setMajor(major);
			mapper.insertuser(user);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return 0;
		}
		
		return 1;
	}
	
	public int deleteUserinfo(HttpServletRequest req,HttpServletResponse res) {
		try {
			String usercode = (req.getParameter("usercode") == null ? "" : req.getParameter("usercode").trim());
			mapper.deleteuser(usercode);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return 0;
		}
		
		return 1;
	}
	
	public int updateUserinfo(HttpServletRequest req,HttpServletResponse res) {
		
		userinfo user = new userinfo();
		try {
			String usercode = (req.getParameter("usercode") == null ? "" : req.getParameter("usercode").trim());
			String username = (req.getParameter("username") == null ? "" : req.getParameter("username").trim());
			String age = (req.getParameter("age") == null ? "" : req.getParameter("age").trim());
			String sex = (req.getParameter("sex") == null ? "" : req.getParameter("sex").trim());
			String major = (req.getParameter("major") == null ? "" : req.getParameter("major").trim());
			
			user.setUsername(username);
			user.setAge(age);
			user.setSex(sex);
			user.setMajor(major);
			mapper.updateuser(user,usercode);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return 0;
		}
		
		return 1;
	}

	public ArrayList<userinfo> getUserinfo(HttpServletRequest req, HttpServletResponse res) {
		ArrayList<userinfo> users = null;
		
		try {
			String usercode = (req.getParameter("usercode") == null ? "" : req.getParameter("usercode").trim());
			users = mapper.getUserinfo(usercode);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return users;
	}
	
}


