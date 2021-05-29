package chainOfResponsibility;

public class Authenticator extends Handler {

    public Authenticator(Handler next) {
        super(next);
    }

    public boolean doHandler(HttpRequest request) {
        var isValid = (request.getUsername() == "admin" && request.getPassword() == "password123");
        System.out.println("Authentication");
        return !isValid;
    }
}
