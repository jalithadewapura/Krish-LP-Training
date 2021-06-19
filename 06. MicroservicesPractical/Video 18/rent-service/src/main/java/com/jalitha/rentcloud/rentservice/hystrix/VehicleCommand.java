package com.jalitha.rentcloud.rentservice.hystrix;

import com.jalitha.rentcloud.model.vehicle.Vehicle;
import com.netflix.hystrix.HystrixCommand;
import com.netflix.hystrix.HystrixCommandGroupKey;
import org.springframework.web.client.RestTemplate;

public class VehicleCommand extends HystrixCommand<Vehicle> {

    RestTemplate restTemplate;
    int vehicleId;

    public VehicleCommand(RestTemplate restTemplate, int vehicleId) {
        super(HystrixCommandGroupKey.Factory.asKey("Default"));
        this.restTemplate = restTemplate;
        this.vehicleId = vehicleId;
    }

    @Override
    protected Vehicle run() throws Exception {
        return restTemplate.getForObject("http://vehicle/services/vehicles/"+vehicleId,Vehicle.class);
    }

    @Override
    protected Vehicle getFallback() {
        System.out.println("Vehicle service is failed!");
        return new Vehicle();
    }
}
