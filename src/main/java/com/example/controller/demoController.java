package com.example.controller;

import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.alibaba.fastjson.JSON;
import com.example.model.userinfo;
import com.example.service.demoService;

@Controller
public class demoController {
	@Resource
	private demoService service;
	
	@RequestMapping("/getAllusers")
	public void getAllusers(HttpServletRequest req,HttpServletResponse res){
		
		PrintWriter out = null;
		try {
			res.setContentType("text/json;charset=UTF-8");
			out = res.getWriter();
			Map<String,Object> users = service.getAllusers(req, res);
			out.write(JSON.toJSONString(users));	  //以JSON格式向前台传输数据,传给function中的data
			out.flush();
			out.close();  
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	@RequestMapping("/getUserinfo")
	public void getUserinfo(HttpServletRequest req,HttpServletResponse res){
		PrintWriter out = null;
		try {
			res.setContentType("text/json;charset=UTF-8");
			out = res.getWriter();
			ArrayList<userinfo> users = service.getUserinfo(req, res);
			out.write(JSON.toJSONString(users));	  //以JSON格式向前台传输数据,传给function中的data
			out.flush();
			out.close();  
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	@RequestMapping("/deleteUserinfo")
	public void deleteUserinfo(HttpServletRequest req,HttpServletResponse res){
		int flag = 0;
		PrintWriter out = null;
		try {
			res.setContentType("text/json;charset=UTF-8");
			out = res.getWriter();
			flag = service.deleteUserinfo(req, res);
			System.out.println("删除成功");
			out.write(JSON.toJSONString(flag));
			out.flush();
			out.close(); 
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
	}
	
	@RequestMapping("/updateUserinfo")
	public void updateUserinfo(HttpServletRequest req,HttpServletResponse res){
		int flag = 0;
		PrintWriter out = null;
		try {
			res.setContentType("text/json;charset=UTF-8");
			out = res.getWriter();
			flag = service.updateUserinfo(req, res);
			out.write(JSON.toJSONString(flag));	  
			out.flush();
			out.close();  
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
	}
	
	@RequestMapping("/insertUserinfo")
	public void insertUserinfo(HttpServletRequest req,HttpServletResponse res){
		int flag = 0;
		PrintWriter out = null;
		try {
			res.setContentType("text/json;charset=UTF-8");
			out = res.getWriter();
			flag = service.insertUserinfo(req, res);
			out.write(JSON.toJSONString(flag));	  
			out.flush();
			out.close();  
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	
	
	

}
