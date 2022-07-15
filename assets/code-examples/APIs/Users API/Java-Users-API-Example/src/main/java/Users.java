import org.scribe.builder.ServiceBuilder;
import org.scribe.model.OAuthRequest;
import org.scribe.model.Response;
import org.scribe.model.Token;
import org.scribe.model.Verb;
import org.scribe.oauth.OAuthService;

public class Users {
	public static void main(String[] args) {
		// OAuth Service from Scribe, you will need to fill in your api key & secret
		OAuthService service = new ServiceBuilder()
			 	.provider(LPAPI.class)
                .apiKey("{YOUR API KEY}")
                .apiSecret("YOUR API SECRET")
                .build();
		 // OAuth token, you will need to fill in your token & secret
		 Token accessToken = new Token("{YOUR TOKEN}",
                    "{YOUR TOKEN SECRET}");
		 // Create the OAuth request, you will need to update the following:
		 // {BASE URI} - with your domain
		 // {YOUR ACCOUNT NUMBER} - with your account number
		 OAuthRequest request = new OAuthRequest(Verb.GET, "https://{BASE URI}.liveperson.net/api/account/{YOUR ACCOUNT NUMBER}/configuration/le-users/users?v=1");
		 request.addHeader("Content-Type", "application/json");
		 // sign the request
		 service.signRequest(accessToken, request); 
		 Response response = request.send();
		 // print the response to the console
		 System.out.println(response.getBody());
	 }

}
