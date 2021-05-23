package com.singleton;

public class MailService {
    private static MailService mailService;

    private MailService() {
        if (mailService != null)
            throw new RuntimeException("mailService is already created");
    }


    public static MailService getMailService() {
        if (mailService == null) {
            synchronized (MailService.class) {
                if (mailService == null)
                    mailService = new MailService();
            }
        }
        return mailService;
    }

    public void enableService() {
        //implementation of mailService enable method
        System.out.println("MailService is enabled");
    }

    public void disableService() {
        //implementation of mailService disable method
        System.out.println("MailService is disabled");
    }

}
