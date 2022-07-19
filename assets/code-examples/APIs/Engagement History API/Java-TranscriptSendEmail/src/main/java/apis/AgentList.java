package apis;

import org.json.JSONObject;
import org.scribe.builder.ServiceBuilder;
import org.scribe.model.OAuthRequest;
import org.scribe.model.Response;
import org.scribe.model.Token;
import org.scribe.model.Verb;
import org.scribe.oauth.OAuthService;

public class AgentList {
	static OAuthService service = new ServiceBuilder()
		 	.provider(LPAPI.class)
		 	.apiKey("YOUR API KEY")
            .apiSecret("YOUR API SECRET")
            .build();
	//you need to update the token below with your information
	static Token accessToken = new Token("YOUR ACCESS TOKEN",
            "YOUR ACCESS TOKEN SECRET");
	
	public static void main(String[] args) {
	}
	//gets information on a particular agent by using the agent id
	//some information includes email, displayname, loginName, maxnumberofchats, etc.
	public static JSONObject individualAgent(String id){
		 OAuthRequest request = new OAuthRequest(Verb.GET, "https://{BASE URI}/api/account/{YOUR ACCOUNT NUMBER}/operators/"+id+"?v=1");
		 service.signRequest(accessToken, request);
		 Response response = request.send();
		 JSONObject obj =  new JSONObject(response.getBody());
		 //System.out.println(obj);
		return obj;
		
	}
}
