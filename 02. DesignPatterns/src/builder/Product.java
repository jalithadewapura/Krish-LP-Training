package builder;

public class Product {
    private final String productCode;
    private final String name;
    private final double price;
    private final String manufactureDate;
    private final String expireDate;
    private final String ingredients;

    public Product(Builder builder) {
        this.productCode = builder.productCode;
        this.name = builder.name;
        this.price = builder.price;
        this.manufactureDate = builder.manufactureDate;
        this.expireDate = builder.expireDate;
        this.ingredients = builder.ingredients;
    }

    static class Builder {
        private String productCode;
        private String name;
        private double price;
        private String manufactureDate;
        private String expireDate;
        private String ingredients;

        public Builder(String productCode, String name) {
            this.productCode = productCode;
            this.name = name;
        }

        public Product build() {
            return new Product(this);
        }

        public Builder price(double price) {
            this.price = price;
            return this;
        }

        public Builder manufactureDate(String manufactureDate) {
            this.manufactureDate = manufactureDate;
            return this;
        }

        public Builder expireDate(String expireDate) {
            this.expireDate = manufactureDate;
            return this;
        }

        public Builder ingredients(String ingredients) {
            this.ingredients = ingredients;
            return this;
        }

    }


    public String toString() {
        return "Product{" +
                "productCode='" + productCode + '\'' +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", manufactureDate='" + manufactureDate + '\'' +
                ", expireDate='" + expireDate + '\'' +
                ", ingredients='" + ingredients + '\'' +
                '}';
    }
}
