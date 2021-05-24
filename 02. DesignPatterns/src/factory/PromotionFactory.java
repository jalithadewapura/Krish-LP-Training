package factory;

public class PromotionFactory {
    public static Promotion getPromotion(PromotionCode promotionCode) {
        switch (promotionCode) {
            case BURGERCOMBO:
                return new BurgerComboPromotion();
            case RICECOMBO:
                return new RiceComboPromotion();
            case KOTTUCOMBO:
                return new KottuComboPromotion();
            default:
                return null;
        }
    }
}
