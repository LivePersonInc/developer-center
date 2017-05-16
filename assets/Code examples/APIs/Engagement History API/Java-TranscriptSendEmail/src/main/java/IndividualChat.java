import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Iterator;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;

import org.json.JSONArray;
import org.json.JSONObject;
import org.jsoup.Jsoup;
import org.scribe.builder.ServiceBuilder;
import org.scribe.model.OAuthRequest;
import org.scribe.model.Response;
import org.scribe.model.Token;
import org.scribe.model.Verb;
import org.scribe.oauth.OAuthService;

import apis.AgentList;
import apis.LPAPI;
import apis.SkillList;
import sendemail.SendEmailSingleChat;

public class IndividualChat {
	public static void main(String[] args) {
		//below, we are using todays date, and then converting the date back to midnight that way we are consistently pulling
		//a clean set of records
		//we then convert the time to UTC that way it matches the api timezone
		LocalDateTime now = LocalDateTime.now(); 
		LocalDateTime midnight = now.toLocalDate().atStartOfDay();
		ZoneId zoneId = ZoneId.of("UTC"); 
		long epoch = midnight.atZone(zoneId).toInstant().toEpochMilli();
		//System.out.println(epoch);
		
		//to change the date range change minuDays function below. For example change 1 to 2 for two days
		LocalDateTime before = midnight.minusDays(1);
		long epoch2 = before.atZone(zoneId).toInstant().toEpochMilli();
		//System.out.println(epoch2);
		callAPI(epoch,epoch2);
	 }
	
	public static void callAPI(long epoch, long epoch2){
		//we define a count variable as a way to keep looping through all of the records until we have a complete set for the data range we are pulling
		//we have to do this since there is a limit to the api for how many records we can grab at a time
		long count = 0;
		int limit = 100;
		int offset = 0;
		
		//we are using the scribe package to generate our oauth header for the post request
		//you need to update the api key and secret below with yours
		OAuthService service = new ServiceBuilder()
				 	.provider(LPAPI.class)
	                .apiKey("YOUR API KEY")
	                .apiSecret("YOUR API SECRET")
	                .build();
		
		//you need to update the token below with your information
		 Token accessToken = new Token("YOUR ACCESS TOKEN",
	            "YOUR ACCESS TOKEN SECRET");
		 
		 //initial request to the api
		 OAuthRequest request = new OAuthRequest(Verb.POST, "https://{BASE URI}/interaction_history/api/account/{YOUR ACCOUNT NUMBER}/interactions/search?offset=0&limit=100");
		 request.addHeader("Content-Type", "application/json");
		 request.addPayload("{\"interactive\":true,\"start\":{\"from\":"+epoch2+",\"to\":"+epoch+"}}");
		 service.signRequest(accessToken, request);
		 Response response = request.send();
		 JSONObject obj =  new JSONObject(response.getBody());
		 count = obj.getJSONObject("_metadata").getLong("count");
		 
		 //keep making api calls until we have a full set of records
		 while(offset < count){
			 offset = offset + limit;
			 OAuthRequest request2 = new OAuthRequest(Verb.POST, "https://{BASE URI}/interaction_history/api/account/{YOUR ACCOUNT NUMBER}/interactions/search?offset="+offset+"&limit=100");
			 request2.addHeader("Content-Type", "application/json");
			 request2.addPayload("{\"interactive\":true,\"start\":{\"from\":"+epoch2+",\"to\":"+epoch+"}}");
			 service.signRequest(accessToken, request2);
			 Response response2 = request2.send();
			 JSONObject obj2 =  new JSONObject(response2.getBody());
			 if(obj2.has("interactionHistoryRecords")){
				 if(obj2.getJSONArray("interactionHistoryRecords").length() != 0){
					 for(int i = 0; i < obj2.getJSONArray("interactionHistoryRecords").length(); i++){
						 obj.getJSONArray("interactionHistoryRecords").put(obj2.getJSONArray("interactionHistoryRecords").get(i));
					 }
				 }
			 }
		 }
		 sendEachChat(obj);
	}
	
	//loop through all of the interaction records and send an email for each chat
	public static void sendEachChat(JSONObject obj){
		JSONArray allChats = new JSONArray();
		String chat = new String();
		String chatline = new String();
		
		for(int m = 0; m < obj.getJSONArray("interactionHistoryRecords").length(); m++){
		//int m = 0;
		chat = "";
			allChats.put(obj.getJSONArray("interactionHistoryRecords").getJSONObject(m));
			
			 //get the agent information
	    	 String agentID = allChats.getJSONObject(m).getJSONObject("info").getString("agentId");
	    	 JSONObject agent = AgentList.individualAgent(agentID);
	    	 String agentEmail = agent.getString("emailAddress");
	    	 String agentDisplayName = agent.getString("displayName");
	    	 //get the skill information
	    	 String skillName = new String();
	    	 int skillID = allChats.getJSONObject(m).getJSONObject("info").getInt("skillId");
	    	 if(skillID != -1){
		    	 String skillIDstr = Integer.toString(skillID);
		    	 JSONObject skill = SkillList.individualSkill(skillIDstr);
		    	 skillName = skill.getString("name");
	    	 }
	    	 else {
	    		 skillName = "Unskilled";
	    	 }
	    	 
			//get the general information on the chat such agent id, skill id, and duration
			chat += "Info <br>";
	    	 for(int n = 0; n<allChats.getJSONObject(m).getJSONObject("info").names().length(); n++){
	    		 chat += "&#160;&#160;&#160;"+allChats.getJSONObject(m).getJSONObject("info").names().getString(n)+ " : "+ allChats.getJSONObject(m).getJSONObject("info").get(allChats.getJSONObject(m).getJSONObject("info").names().getString(n)) + "<br>";
	    	 }
	    	 
	    	 //add the agent information to the chat info section
	    	 chat += "&#160;&#160;&#160;Agent Display Name: "+agentDisplayName+ "<br>";
	    	 chat += "&#160;&#160;&#160;Agent Email: "+agentEmail+ "<br>";
	    	 //add the skill information to the chat info section
	    	 chat += "&#160;&#160;&#160;Skill Name: "+skillName+ "<br>";
	    	 
	    	 //get the chat transcript lines
	    	 chat += "Transcript <br>";
	    	 for(int p = 0; p<allChats.getJSONObject(m).getJSONObject("transcript").getJSONArray("lines").length(); p++){
	    		 chatline = html2text((String) allChats.getJSONObject(m).getJSONObject("transcript").getJSONArray("lines").getJSONObject(p).get("text"));
	    		 chat += "&#160;&#160;&#160;Time: "+allChats.getJSONObject(m).getJSONObject("transcript").getJSONArray("lines").getJSONObject(p).get("time")+"  By: "+allChats.getJSONObject(m).getJSONObject("transcript").getJSONArray("lines").getJSONObject(p).get("by")+"  Text: "+chatline+"<br>";
	    	 }
	    	 
	    	 //get the chat survey information
	    	 if(obj.getJSONArray("interactionHistoryRecords").getJSONObject(m).has("surveys")){
		    	 chat += "Surveys <br>";
		    	 
		    	 //see if prechat survey exists
				if(allChats.getJSONObject(m).getJSONObject("surveys").has("preChat")){
					chat += "&#160;&#160;&#160;Pre-Chat <br>";
			    	 for(int p = 0; p<allChats.getJSONObject(m).getJSONObject("surveys").getJSONArray("preChat").length(); p++){
			    		 chat += "&#160;&#160;&#160;&#160;&#160;&#160;Question: "+allChats.getJSONObject(m).getJSONObject("surveys").getJSONArray("preChat").getJSONObject(p).get("displayName")+"  Answer: "+allChats.getJSONObject(m).getJSONObject("surveys").getJSONArray("preChat").getJSONObject(p).get("value")+"<br>";
			    	 }
				}
				
				//see if post chat survey exists
				if(allChats.getJSONObject(m).getJSONObject("surveys").has("postChat")){
					chat += "&#160;&#160;&#160;Post Chat <br>";
			    	 for(int p = 0; p<allChats.getJSONObject(m).getJSONObject("surveys").getJSONArray("postChat").length(); p++){
			    		 chat += "&#160;&#160;&#160;&#160;&#160;&#160;Question: "+allChats.getJSONObject(m).getJSONObject("surveys").getJSONArray("postChat").getJSONObject(p).get("displayName")+"  Answer: "+allChats.getJSONObject(m).getJSONObject("surveys").getJSONArray("postChat").getJSONObject(p).get("value")+"<br>";
			    	 }
				}
				
				//see if operator survey exists
				if(allChats.getJSONObject(m).getJSONObject("surveys").has("operator")){
					chat += "&#160;&#160;&#160;Operator <br>";
			    	 for(int p = 0; p<allChats.getJSONObject(m).getJSONObject("surveys").getJSONArray("operator").length(); p++){
			    		 chat += "&#160;&#160;&#160;&#160;&#160;&#160;Question: "+allChats.getJSONObject(m).getJSONObject("surveys").getJSONArray("operator").getJSONObject(p).get("displayName")+"  Answer: "+allChats.getJSONObject(m).getJSONObject("surveys").getJSONArray("operator").getJSONObject(p).get("value")+"<br>";
			    	 }
				}
			}
	    	 
	    	// get the engagement attributes 
	    	 if(obj.getJSONArray("interactionHistoryRecords").getJSONObject(m).has("sdes")){
	    		 chat += "Engagement Attributes";
	    		 for(int p = 0; p < allChats.getJSONObject(m).getJSONObject("sdes").getJSONArray("events").length(); p++){
	    			 String sde = allChats.getJSONObject(m).getJSONObject("sdes").getJSONArray("events").getJSONObject(p).toString();
	    			 String result = sde.replaceAll(":\\{","<br>&#160;&#160;&#160;" ).replaceAll("\\{", "<br>").replaceAll(",", "<br>&#160;&#160;&#160;").replace("}", "");
	    			 chat += result;
	    		 }
	    	 }
	    	
	    	 // try to send an email for this chat
			try {
				SendEmailSingleChat.main(null, chat, agentEmail, agentDisplayName );
			} catch (AddressException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (MessagingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} 
			//status update of emails sent
			System.out.println("Email "+(m+1)+" of "+obj.getJSONArray("interactionHistoryRecords").length()+" sent.");
		}
		//print confirmation	
		System.out.println("Done");
	}
	
	//Used to remove html elements from the chat lines.
	public static String html2text(String html) {
	    return Jsoup.parse(html).text();
	}
}
	