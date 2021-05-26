package prototype;

public class Application {
    public static void main(String[] args) {
        Registry registry = new Registry();

        LoyalCustomer c1 = (LoyalCustomer) registry.getCustomer(CustomerType.LOYAL);

        System.out.println(c1);

        LoyalCustomer c2 = (LoyalCustomer) registry.getCustomer(CustomerType.LOYAL);
        c2.setName("Tom");
        c2.setContactNo("071 123 4567");
        c2.setDiscountRate(7.0);
        System.out.println(c2);

        LoyalCustomer c3 = (LoyalCustomer) registry.getCustomer(CustomerType.LOYAL);
        System.out.println(c3);
    }
}
