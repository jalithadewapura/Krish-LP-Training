package chainOfResponsibility;

public class Encryptor extends Handler {
    public Encryptor(Handler next) {
        super(next);
    }

    public boolean doHandler(HttpRequest request) {
        System.out.println("Encryption");
        return false;
    }
}
