package com.kingflower.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class LoginInterceptor extends HandlerInterceptorAdapter {

	
		@Override
		public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
				throws Exception {
			if(request.getSession().getAttribute("currentUser")==null){
				response.sendRedirect( request.getContextPath()+"/user/login");
				return false;
			}
			return true;
		}
}
