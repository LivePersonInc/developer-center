package ehapi_to_txt;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.ZoneId;

import org.json.JSONArray;
import org.json.JSONObject;
import org.scribe.builder.ServiceBuilder;
import org.scribe.model.OAuthRequest;
import org.scribe.model.Response;
import org.scribe.model.Token;
import org.scribe.model.Verb;
import org.scribe.oauth.OAuthService;

public class Main {
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
	                .apiKey("YOUR APP KEY")
	                .apiSecret("YOUR APP SECRET")
	                .build();
		//you need to update the token below with your information
		 Token accessToken = new Token("YOUR ACCESS TOKEN",
	            "YOUR ACCESS TOKEN SECRET");
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
			 //System.out.println(obj2.getJSONArray("interactionHistoryRecords"));
			 if(obj2.has("interactionHistoryRecords")){
				 if(obj2.getJSONArray("interactionHistoryRecords").length() != 0){
					 for(int i = 0; i < obj2.getJSONArray("interactionHistoryRecords").length(); i++){
						 obj.getJSONArray("interactionHistoryRecords").put(obj2.getJSONArray("interactionHistoryRecords").get(i));
					 }
				 }
			 }
		 } 
		 System.out.println(obj);
		 getCSAT(obj);
	}
	public static void getCSAT( JSONObject obj){
		JSONArray records = new JSONArray();
		System.out.println(obj.getJSONArray("interactionHistoryRecords").length());
		//we are looping through all of the interaction records, and then we are adding them to our array
		for(int i = 0; i < obj.getJSONArray("interactionHistoryRecords").length(); i++){
			records.put(obj.getJSONArray("interactionHistoryRecords").getJSONObject(i));
		 }
		//we are going to write our array of records to the text file below
		BufferedWriter out = null;
		 //write to file
		 try  
		 {
		     FileWriter fstream = new FileWriter("out.txt"); //true tells to append data.
		     out = new BufferedWriter(fstream);
		     for(int m = 0; m < records.length(); m++){
		    	 out.write("Chat " +m+ "\n");
		    	 out.write("  Info \n");
		    	 for(int n = 0; n<records.getJSONObject(m).getJSONObject("info").names().length(); n++){
		    		 out.write("      "+records.getJSONObject(m).getJSONObject("info").names().getString(n)+ " : "+ records.getJSONObject(m).getJSONObject("info").get(records.getJSONObject(m).getJSONObject("info").names().getString(n)) + "\n");
		    	 }
		    	 out.write("  Transcript \n");
		    	 for(int p = 0; p<records.getJSONObject(m).getJSONObject("transcript").getJSONArray("lines").length(); p++){
		    		 out.write("      Time: "+records.getJSONObject(m).getJSONObject("transcript").getJSONArray("lines").getJSONObject(p).get("time")+"  By: "+records.getJSONObject(m).getJSONObject("transcript").getJSONArray("lines").getJSONObject(p).get("by")+"  Text: "+records.getJSONObject(m).getJSONObject("transcript").getJSONArray("lines").getJSONObject(p).get("text")+"\n");
		    	 }
		    	 if(records.getJSONObject(m).has("surveys")){
				out.write("  Surveys \n");
				if(records.getJSONObject(m).getJSONObject("surveys").has("preChat")){
					out.write("    Pre-Chat \n");
			    	 for(int p = 0; p<records.getJSONObject(m).getJSONObject("surveys").getJSONArray("preChat").length(); p++){
			    		 out.write("      Question: "+records.getJSONObject(m).getJSONObject("surveys").getJSONArray("preChat").getJSONObject(p).get("displayName")+"  Answer: "+records.getJSONObject(m).getJSONObject("surveys").getJSONArray("preChat").getJSONObject(p).get("value")+"\n");
			    	 }
				}
				if(records.getJSONObject(m).getJSONObject("surveys").has("postChat")){
					out.write("    Post Chat \n");
			    	 for(int p = 0; p<records.getJSONObject(m).getJSONObject("surveys").getJSONArray("postChat").length(); p++){
			    		 out.write("      Question: "+records.getJSONObject(m).getJSONObject("surveys").getJSONArray("postChat").getJSONObject(p).get("displayName")+"  Answer: "+records.getJSONObject(m).getJSONObject("surveys").getJSONArray("postChat").getJSONObject(p).get("value")+"\n");
			    	 }
				}
				if(records.getJSONObject(m).getJSONObject("surveys").has("operator")){
					out.write("    Operator \n");
			    	 for(int p = 0; p<records.getJSONObject(m).getJSONObject("surveys").getJSONArray("operator").length(); p++){
			    		 out.write("      Question: "+records.getJSONObject(m).getJSONObject("surveys").getJSONArray("operator").getJSONObject(p).get("displayName")+"  Answer: "+records.getJSONObject(m).getJSONObject("surveys").getJSONArray("operator").getJSONObject(p).get("value")+"\n");
			    	 }
				}
		    	 }
			}
		     System.out.println("wrote");
		 }
		 catch (IOException e)
		 {
		     System.err.println("Error: " + e.getMessage());
		 }
		 finally
		 {
		     if(out != null) {
		         try {
					out.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
		     }
		 } 
	}
}

