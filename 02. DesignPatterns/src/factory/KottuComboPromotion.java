package factory;

public class KottuComboPromotion extends Promotion {
    @Override
    protected void createPromotion() {
        foods.add(new Kottu());
        foods.add(new Pepsi());
    }
}
