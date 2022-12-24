package com.springbootreact.resources;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "/products")
public class ProductResource {

	@GetMapping
	@ResponseBody
	public String message() {
		return "API funcionando";
	}
	
}
