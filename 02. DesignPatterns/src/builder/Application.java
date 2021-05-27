package builder;

public class Application {
    public static void main(String[] args) {
        Product.Builder builder = new Product.Builder("P001", "Product 1");
        Product p1 = builder.price(200).build();

        System.out.println(p1);

        Product.Builder builder2 = new Product.Builder("P002", "Product 2");
        Product p2 = builder2.build();

        System.out.println(p2);
    }
}
