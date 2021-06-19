package com.jalitha.rentcloud.customerservice.repository;

import com.jalitha.rentcloud.model.customer.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
}
