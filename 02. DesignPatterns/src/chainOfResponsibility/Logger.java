package chainOfResponsibility;

public class Logger extends Handler {
    public Logger(Handler next) {
        super(next);
    }

    public boolean doHandler(HttpRequest request) {
        System.out.println("Log");
        return false;
    }
}
