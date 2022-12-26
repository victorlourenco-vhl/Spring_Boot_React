package com.springbootreact.resources;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springbootreact.domain.Product;
import com.springbootreact.services.ProductService;

import jakarta.validation.Valid;

@RestController
@RequestMapping(value = "/products")
public class ProductResource {
	
	@Autowired
	ProductService service;

	@GetMapping("/test")
	public String message() {
		return "API funcionando";
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<Product>> findById(@PathVariable Integer id){
		return ResponseEntity.ok().body(service.findById(id));
	}
	
	@GetMapping
	public ResponseEntity<List<Product>> list(){
		return ResponseEntity.ok().body(service.list());
	}
	
	@PostMapping
	public ResponseEntity<Void> addProduct(@Valid @RequestBody Product obj) {
		service.addProduct(obj);
		return ResponseEntity.ok().build();
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteProduct(@PathVariable Integer id){
		service.deleteById(id);
		return ResponseEntity.ok().build(); 
	}
	
	
	
	
}
