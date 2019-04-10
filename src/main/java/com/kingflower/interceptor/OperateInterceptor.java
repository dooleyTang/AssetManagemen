package com.kingflower.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class OperateInterceptor extends HandlerInterceptorAdapter{

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		

		
		boolean sessionContainsUri = false;
		
		
		
		if ( sessionContainsUri ) {
			return true;
		} else {
			response.sendRedirect( request.getContextPath() + "/error/error");
			return false;
		}
		
		//return true;
	}
}
