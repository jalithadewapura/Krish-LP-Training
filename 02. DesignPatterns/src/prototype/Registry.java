package prototype;

import java.util.HashMap;
import java.util.Map;

public class Registry {
    private Map<CustomerType, Customer> customers = new HashMap();

    public Registry() {
        this.initialize();
    }

    public Customer getCustomer(CustomerType customerType) {
        Customer customer = null;
        try {
            customer = (Customer) customers.get(customerType).clone();
        } catch (CloneNotSupportedException e) {
            e.printStackTrace();
        }
        return customer;
    }

    private void initialize() {
        LoyalCustomer localCustomer = new LoyalCustomer();
        localCustomer.setName("Default Loyal Name");
        localCustomer.setContactNo("070 000 0000");
        localCustomer.setDiscountRate(5.0);

        RegularCustomer regularCustomer = new RegularCustomer();
        regularCustomer.setName("default Regular Customer");
        regularCustomer.setContactNo("070 000 0000");

        customers.put(CustomerType.LOYAL, localCustomer);
        customers.put(CustomerType.REGULAR, regularCustomer);

    }
}
