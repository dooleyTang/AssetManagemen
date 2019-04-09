package com.kingflower.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.kingflower.service.IUserService;

@Controller
@RequestMapping("user")
public class UserController {
	@Autowired IUserService iUserService;
	
	@GetMapping("/login")
	public String login(Model model) {
		
		return "user/user";
	}
	
}
