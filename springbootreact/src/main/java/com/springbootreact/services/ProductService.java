package com.springbootreact.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springbootreact.domain.Product;
import com.springbootreact.repositories.ProductRepository;

@Service
public class ProductService {
	
	@Autowired 
	private ProductRepository repo;
	
	public List<Product> list(){
		return repo.findAll();
	}

}
