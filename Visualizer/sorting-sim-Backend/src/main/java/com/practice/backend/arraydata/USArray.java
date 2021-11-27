package com.practice.backend.arraydata;

import java.util.Arrays;

public class USArray {

	private String type;
	private Integer[] usarray;
	public USArray(String type, Integer[] usarray) {
		super();
		this.type = type;
		this.usarray = usarray;
	}
	public USArray() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public Integer[] getUsarray() {
		return usarray;
	}
	public void setUsarray(Integer[] usarray) {
		this.usarray = usarray;
	}
	@Override
	public String toString() {
		return "USArray [type=" + type + ", usarray=" + Arrays.toString(usarray) + "]";
	}
	
	
}
