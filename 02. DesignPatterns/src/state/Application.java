package state;

public class Application {
    public static void main(String[] args) {
        Canvas canvas = new Canvas();
        canvas.setTooltype(new BrushTool()); //simply change the tool which you want

        canvas.mouseDown();
        canvas.mouseUp();
    }
}
