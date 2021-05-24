package singleton;

public class Application {
    public static void main(String[] args) {
        MailService m1 = MailService.getMailService();
        System.out.println(m1);
        MailService m2 = MailService.getMailService();
        System.out.println(m2);
        //use of other methods inside the singleton class
        m1.enableService();
    }

}
