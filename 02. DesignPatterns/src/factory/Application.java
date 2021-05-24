package factory;

public class Application {
    public static void main(String[] args) {
        Promotion p1 = PromotionFactory.getPromotion(PromotionCode.BURGERCOMBO);
        System.out.println(p1);

        Promotion p2 = PromotionFactory.getPromotion(PromotionCode.KOTTUCOMBO);
        System.out.println(p2);

        Promotion p3 = PromotionFactory.getPromotion(PromotionCode.RICECOMBO);
        System.out.println(p3);

    }
}
