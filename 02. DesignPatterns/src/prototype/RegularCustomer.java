package prototype;

public class RegularCustomer extends Customer {

    @Override
    public String toString() {
        return "LoyalCustomer{" +
                "name=" + getName() + ", " +
                "Contact Number=" + getContactNo() + ", " +
                "}";
    }
}
