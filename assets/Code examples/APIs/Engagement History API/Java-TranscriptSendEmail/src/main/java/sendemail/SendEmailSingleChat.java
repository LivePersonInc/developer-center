package sendemail;

import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.Properties;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.activation.FileDataSource;
import javax.mail.Authenticator;
import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

public class SendEmailSingleChat {
	  static Properties mailServerProperties;
	    static Session getMailSession;
	    static MimeMessage msg;
	 
	    public static void main(String args[], String body, String agentEmail, String agentName) throws AddressException, MessagingException {
	 
	        //System.out.println("\n1st ===> setup Mail Server Properties..");
	 
	        final String sourceEmail = "{YOUR GMAIL ID}"; // requires valid Gmail id
	        final String password = "{YOUR GMAIL PASSWORD}"; // correct password for Gmail id
	        final String toEmail = "anymail@dummy.com"; // any destination email id
	 
	        Properties props = new Properties();
	        props.put("mail.smtp.host", "smtp.gmail.com");
	        props.put("mail.smtp.port", "587");
	        props.put("mail.smtp.auth", "true");
	        props.put("mail.smtp.starttls.enable", "true");
	 
	        //System.out.println("\n2nd ===> create Authenticator object to pass in Session.getInstance argument..");
	 
	        Authenticator authentication = new Authenticator() {
	            protected PasswordAuthentication getPasswordAuthentication() {
	                return new PasswordAuthentication(sourceEmail, password);
	            }
	        };
	        Session session = Session.getInstance(props, authentication);
	        generateAndSendEmail(
	                session,
	                toEmail,
	                "Transcript from: "+agentName,
	                "Greetings, <br><br>Please find below your transcript:<br><br>"
	                        + body, agentEmail, agentName);
	 
	    }
	 
	    public static void generateAndSendEmail(Session session, String toEmail, String subject,
	            String body, String agentEmail, String agentName) {
	        try {
	            //System.out.println("\n3rd ===> generateAndSendEmail() starts..");
	 
	            MimeMessage crunchifyMessage = new MimeMessage(session);
	            crunchifyMessage.addHeader("Content-type", "text/HTML; charset=UTF-8");
	            crunchifyMessage.addHeader("format", "flowed");
	            crunchifyMessage.addHeader("Content-Transfer-Encoding", "8bit");
	 
	            crunchifyMessage.setFrom(new InternetAddress(agentEmail,
	                    agentName));
	            crunchifyMessage.setReplyTo(InternetAddress.parse(agentEmail, false));
	            crunchifyMessage.setSubject(subject, "UTF-8");
	            crunchifyMessage.setSentDate(new Date());
	            crunchifyMessage.setRecipients(Message.RecipientType.TO,
	                    InternetAddress.parse(toEmail, false));
	 
	            // Create the message body part
	            BodyPart messageBodyPart = new MimeBodyPart();
	            messageBodyPart.setContent(body, "text/html");
	 
	            // Create a multipart message for attachment
	            Multipart multipart = new MimeMultipart();
	 
	            // Set text message part
	            multipart.addBodyPart(messageBodyPart);
	 
	            messageBodyPart = new MimeBodyPart();
	 
	
	 
	           // System.out.println("\n4th ===> third part for displaying image in the email body..");
	            messageBodyPart = new MimeBodyPart();
	            messageBodyPart.setContent("<br>Thanks,<br>"+agentName
	                    , "text/html");
	            multipart.addBodyPart(messageBodyPart);
	            crunchifyMessage.setContent(multipart);
	 
	            //System.out.println("\n5th ===> Finally Send message..");
	 
	            // Finally Send message
	            Transport.send(crunchifyMessage);
	 
	            //System.out.println("\n6th ===> Email Sent Successfully With Image Attachment. Check your email now..");
	            //System.out.println("\n7th ===> generateAndSendEmail() ends..");
	 
	        } catch (MessagingException e) {
	            e.printStackTrace();
	        } catch (UnsupportedEncodingException e) {
	            e.printStackTrace();
	        }
	    }
}
