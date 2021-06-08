package state;

//context class
public class Canvas {
    private Tool tooltype;

    public void mouseDown() {
        tooltype.mouseDown();
    }

    public void mouseUp() {
        tooltype.mouseUp();
    }

    public Tool getTooltype() {
        return tooltype;
    }

    public void setTooltype(Tool tooltype) {
        this.tooltype = tooltype;
    }


}
