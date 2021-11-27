package com.practice.backend.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.practice.backend.arraydata.SArray;
import com.practice.backend.arraydata.USArray;
import com.practice.backend.mycontroller.MyController;

@Service
public class ArrayServicesImpletation implements ArrayServices {

	
	
	USArray usa;
	
	@Override
	public List<SArray> getSArray() {
		
		if(usa.getType().equals("ms")) {
		Merge_Top_Down ms=new Merge_Top_Down();
		return ms.sort(usa.getUsarray());
		}
		else if(usa.getType().equals("qs")) {
		QuickSort qs=new QuickSort();
		return qs.sort(usa.getUsarray());
		}
		else if(usa.getType().equals("hs")) {
			HeapSort hs=new HeapSort();
			return hs.sort(usa.getUsarray());
			}
		else if(usa.getType().equals("bs")) {
			BubbleSort bs=new BubbleSort();
			return bs.sort(usa.getUsarray());
			}
		return null;
	}
	


	@Override
	public void getUSArray(USArray usa) {
		this.usa=new USArray(usa.getType(),usa.getUsarray());
		
	}


}
