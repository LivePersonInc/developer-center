package apis;

import org.json.JSONObject;
import org.scribe.builder.ServiceBuilder;
import org.scribe.model.OAuthRequest;
import org.scribe.model.Response;
import org.scribe.model.Token;
import org.scribe.model.Verb;
import org.scribe.oauth.OAuthService;

public class SkillList {
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
	//gets information on a particular skill by using the skill id
	//some information includes skill name, description, members, etc
	public static JSONObject individualSkill(String id){
		 OAuthRequest request = new OAuthRequest(Verb.GET, "https://{BASE URI}/api/account/{YOUR ACCOUNT NUMBER}/skills/"+id+"?v=1");
		 service.signRequest(accessToken, request);
		 Response response = request.send();
		 JSONObject obj =  new JSONObject(response.getBody());
		 //System.out.println(obj);
		return obj;
		
	}
}
