package chainOfResponsibility;

public class Compressor extends Handler {
    public Compressor(Handler next) {
        super(next);
    }

    public boolean doHandler(HttpRequest request) {
        System.out.println("Compression");
        return false;
    }


}
