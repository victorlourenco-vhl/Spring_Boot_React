package com.springbootreact.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springbootreact.domain.Product;
import com.springbootreact.repositories.ProductRepository;

@Service
public class ProductService {
	
	@Autowired 
	private ProductRepository repo;
	
	public Optional<Product> findById(Integer id){
		return repo.findById(id);
	}
	
	public List<Product> list(){
		return repo.findAll();
	}
	
	public void addProduct(Product product){
		repo.save(product);
	}
	
	public Product update(Product obj) {
		return repo.save(obj);
	}
	
	public void deleteById(Integer id) {
		
		repo.deleteById(id);
		
	}
	
	
	

}
