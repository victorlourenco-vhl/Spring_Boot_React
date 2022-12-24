package com.springbootreact.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springbootreact.domain.Product;
import com.springbootreact.services.ProductService;

@RestController
@RequestMapping(value = "/products")
public class ProductResource {
	
	@Autowired
	ProductService service;

	@GetMapping
	public String message() {
		return "API funcionando";
	}
	
	@GetMapping("/listar")
	public List<Product> list(){
		return service.list();
	}
	
}
