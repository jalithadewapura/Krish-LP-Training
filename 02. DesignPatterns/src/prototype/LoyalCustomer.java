package prototype;

public class LoyalCustomer extends Customer {
    private double discountRate;

    public double getDiscountRate() {
        return discountRate;
    }

    public void setDiscountRate(double discountRate) {
        this.discountRate = discountRate;
    }

    @Override
    public String toString() {
        return "LoyalCustomer{" +
                "name=" + getName() + ", " +
                "Contact Number=" + getContactNo() + ", " +
                "discountRate=" + discountRate + "%" +
                "}";
    }

}
