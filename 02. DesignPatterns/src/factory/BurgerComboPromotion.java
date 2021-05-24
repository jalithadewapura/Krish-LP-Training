package factory;

public class BurgerComboPromotion extends Promotion {
    @Override
    protected void createPromotion() {
        foods.add(new Burger());
        foods.add(new Pepsi());
    }
}
