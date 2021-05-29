package chainOfResponsibility;

public class Application {
    public static void main(String[] args) {
        //Authentication ->  Compression -> Encryption
        Encryptor encryptor = new Encryptor(null);
        Compressor compressor = new Compressor(encryptor);
        //Logger logger = new Logger(compressor);
        Authenticator authenticator = new Authenticator(compressor);
        WebServer server = new WebServer(authenticator);
        server.start(new HttpRequest("admin", "password123"));

    }
}
