package chainOfResponsibility;

public class WebServer {
    private Handler firstHandler;

    public WebServer(Handler firstHandler) {
        this.firstHandler = firstHandler;
    }

    public void start(HttpRequest request) {
        firstHandler.handle(request);
    }
}
