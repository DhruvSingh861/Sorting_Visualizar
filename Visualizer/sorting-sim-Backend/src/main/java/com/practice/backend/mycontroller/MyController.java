package com.practice.backend.mycontroller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.practice.backend.arraydata.SArray;
import com.practice.backend.arraydata.USArray;
import com.practice.backend.services.ArrayServices;
import com.practice.backend.services.ArrayServicesImpletation;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class MyController {

	
	private ArrayServices arrayService;
	
	
	USArray finalarray;
	
	//get unsorted array from front-end.
	@PostMapping("/array")
	public void getArray(@RequestBody USArray usa) {
		System.out.println(usa);
		arrayService=new ArrayServicesImpletation();
		this.arrayService.getUSArray(usa);
	}
	
	@GetMapping("/array")
	public List<SArray> sendSArray() {
		return this.arrayService.getSArray();
	}
	
	
}
