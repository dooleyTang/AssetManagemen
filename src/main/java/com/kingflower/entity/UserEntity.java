package com.kingflower.entity;

public class UserEntity {
	private String id;
	private String userId;
	private String name;
	private String passWord;
	private String isAdmin;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassWord() {
		return passWord;
	}
	public void setPassWord(String passWord) {
		this.passWord = passWord;
	}
	public String getIsAdmin() {
		return isAdmin;
	}
	public void setIsAdmin(String isAdmin) {
		this.isAdmin = isAdmin;
	}
	public UserEntity(String id, String userId, String name, String passWord, String isAdmin) {
//		super();
		this.id = id;
		this.userId = userId;
		this.name = name;
		this.passWord = passWord;
		this.isAdmin = isAdmin;
	}
	public UserEntity() {
//		super();
	}
	@Override
	public String toString() {
		return "UserEntity [id=" + id + ", userId=" + userId + ", name=" + name + ", passWord=" + passWord
				+ ", isAdmin=" + isAdmin + "]";
	}
	
}
