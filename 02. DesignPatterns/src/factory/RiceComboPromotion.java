package factory;

public class RiceComboPromotion extends Promotion {
    @Override
    protected void createPromotion() {
        foods.add(new Rice());
        foods.add(new Pepsi());
    }
}
