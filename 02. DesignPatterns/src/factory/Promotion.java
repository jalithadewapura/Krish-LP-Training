package factory;

import java.util.ArrayList;
import java.util.List;

public abstract class Promotion {
    protected List<Food> foods = new ArrayList<>();

    public Promotion() {
        createPromotion();
    }

    protected abstract void createPromotion();

    public String toString() {
        return "Promotion { " + foods + " }";
    }
}
