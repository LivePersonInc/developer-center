import org.scribe.builder.ServiceBuilder;
import org.scribe.model.OAuthRequest;
import org.scribe.model.Response;
import org.scribe.model.Token;
import org.scribe.model.Verb;
import org.scribe.oauth.OAuthService;

public class EngagementHistory {
	public static void main(String[] args) {
		// OAuth Service from Scribe, you will need to fill in your api key & secret
		OAuthService service = new ServiceBuilder()
			 	.provider(EHAPI.class)
                .apiKey("{YOUR API KEY}")
                .apiSecret("YOUR API SECRET")
                .build();
		 // OAuth token, you will need to fill in your token & secret
		 Token accessToken = new Token("{YOUR TOKEN}",
	            "{YOUR TOKEN SECRET}");
		 // Create the OAuth request, you will need to update the following:
		 // {BASE URI} - with your domain
		 // {YOUR ACCOUNT NUMBER} - with your account number
		 OAuthRequest request = new OAuthRequest(Verb.POST, "https://{BASE URI}/interaction_history/api/account/{YOUR ACCOUNT NUMBER}/interactions/search?offset=0&limit=100");
		 request.addHeader("Content-Type", "application/json");
		 // body parameters that you would like to add to the api call
		 request.addPayload("{\"start\":{\"from\":1433140200000,\"to\":1435645800000}}");
		 // sign the request
		 service.signRequest(accessToken, request); 
		 Response response = request.send();
		 // print the response to the console
		 System.out.println(response.getBody());
	 }

}
