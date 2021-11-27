package com.practice.backend.services;

import java.util.List;

import com.practice.backend.arraydata.SArray;
import com.practice.backend.arraydata.USArray;

public interface ArrayServices {
	public List<SArray> getSArray();
	public void getUSArray(USArray usa);

}
