using System;
using System.IO;
using System.Net;

namespace EngagementHistoryAPIProject
{
    class EngagementHistoryAPI
    {
        static void Main()
        {
            Console.WriteLine("LivePerson Engagement History API Example - LiveEngage");
            EngagementHistoryAPI test = new EngagementHistoryAPI();
            test.ListClients();
            Console.ReadKey();
        }
        /*
         A web call is needed to discover the baseURI needed to call the Engagmeent History API for individual LiveEngage accounts for Accounts:
         https://api.liveperson.net/api/account/{YOUR ACCOUNT NUMBER}/service/engHistDomain/baseURI.json?version=1.0
        {
         "service":"engHistDomain",
         "account":"56072331",
         "baseURI":"va-a.enghist.liveperson.net"
        }
        */
        WebProxy myProxy;
        string appUrl = "https://{YOUR BASE URI}/interaction_history/api/account/{YOUR ACCOUNT NUMBER}/interactions/search?offset=0&limit=10";

        public EngagementHistoryAPI()
        {
            if (WebRequest.DefaultWebProxy.GetProxy(new Uri(appUrl)).ToString() != appUrl)
            {
                IWebProxy iProxy = WebRequest.DefaultWebProxy;
                myProxy = new WebProxy(iProxy.GetProxy(new Uri(appUrl)));
                myProxy.UseDefaultCredentials = true;
            }
        }

        public bool ListClients()
        {
            try
            {
                var oauth = new EngagementHistoryAPIProject.Manager();
                oauth["consumer_key"] = "Your App Key From LiveEngage";
                oauth["consumer_secret"] = "Your Secret From LiveEngage";
                oauth["token"] = "Your Access Token From LiveEngage";
                oauth["token_secret"] = "Your Access Token Secret From LiveEngage";
                
                var authzHeader = oauth.GenerateAuthzHeader(appUrl, "POST");
                var request = (HttpWebRequest)WebRequest.Create(appUrl);
                request.Method = "POST";
                request.Headers.Add("Authorization", authzHeader);

                request.ContentType = "application/json";
                string interaction = "{\"start\":{\"from\":1433140200000,\"to\":1435645800000}}";
                using (StreamWriter writer = new StreamWriter(request.GetRequestStream()))
                {
                    writer.Write(interaction);
                }
                try
                {
                    HttpWebResponse response = (HttpWebResponse)request.GetResponse();
                    StreamReader streamReader = new StreamReader(response.GetResponseStream(), true);
                    string target = streamReader.ReadToEnd();
                    streamReader.Close();
                    Console.WriteLine(target);
                }
                catch (Exception exc)
                {
                    Console.WriteLine(exc.Message);
                    return false;
                }
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return false;
            }
        }
    }
}
