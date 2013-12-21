# Textbook Exmaple using HttpWebRequest Object
```C#
    protected void Page_Load(object sender, EventArgs e)
    {
    XmlDocument wsResponseXmlDoc = new XmlDocument();

	//http://api.worldweatheronline.com/free/v1/weather.ashx?q=china&format=xml&num_of_days=5&key=*********************
    //id=jipx(spacetime0)
    UriBuilder url = new UriBuilder();
    url.Scheme = "http";// Same as "http://"

    url.Host = "api.worldweatheronline.com";
    url.Path = "free/v1/weather.ashx";
    url.Query = "q=china&format=xml&num_of_days=5&key=*****************";

    //Make a HTTP request to the global weather web service
    wsResponseXmlDoc = MakeRequest(url.ToString());
    //display the XML response 
    String xmlString = wsResponseXmlDoc.InnerXml;
    Response.ContentType = "text/xml";
    Response.Write(xmlString);

    // Save the document to a file and auto-indent the output.
    XmlTextWriter writer = new XmlTextWriter(Server.MapPath("xmlweather.xml"), null);
    writer.Formatting = Formatting.Indented;
    wsResponseXmlDoc.Save(writer);

    }
```
```c#
public static XmlDocument MakeRequest(string requesturl)
{
	try
	{
	  HttpWebRequest request = WebRequest.Create(requestUrl) as HttpWebRequest;
	  request.Timeout=15*1000;
	  request.KeepAlive=false;
	  HttpWebResponse response=request.GetResponse() as HttpWebResponse;
	  xmlDoc.load(response.GetResponseStream());
      return (xmlDoc);
	}
	catch (Exception e)
	{
		return null;
	}
}
```
# Stackoverflow method sending xml
```c#
        XDocument Sendingxml = xml;

        //  string Sendingxml = "<?xml version=1.0 encoding=UTF-8> <PluginData> <Credential UserName=avosfieldagent01 AuthenticationToken=61cc3957744742dca238c4dd7cbca702 /><Session><PropertyAddress>5 Crosskey</PropertyAddress><PropertyAddress2/><PropertyCity>California</PropertyCity><PropertyState>CA</PropertyState><PropertyZip>92620</PropertyZip><PropertyType>Condo</PropertyType><SourceReferenceId>45643</SourceReferenceId><SessionId>2013070100158346</SessionId><SessionCompleteReturnURL/><CustomerId/><BluebookOrderCheckSum>681a598cf23f412095f6092c281823e6</BluebookOrderCheckSum><BluebookOrderId>11160</BluebookOrderId> </Session></PluginData>";

        // Create a request using a URL that can receive a post. 
        WebRequest request =WebRequest.Create("https://test.bluebookcva.net/order/testdirectplugin/3");
        // Set the Method property of the request to POST.
        request.Method = "POST";

        // Create POST data and convert it to a byte array.
        //string postData = "XMLData=" + Sendingxml;	
        //My problem is here as I need postData  as XDocument.


        //byte[] byteArray = Encoding.UTF8.GetBytes(postData);
        byte[] byteArray = Encoding.UTF8.GetBytes(Sendingxml.ToString());
        // Set the ContentType property of the WebRequest.
        //request.ContentType = "application/x-www-form-urlencoded";
        request.ContentType = "text/xml; encoding='utf-8'";
        // Set the ContentLength property of the WebRequest.
        request.ContentLength = byteArray.Length;
        // Get the request stream.
        Stream dataStream = request.GetRequestStream();
        // Write the data to the request stream.
        dataStream.Write(byteArray, 0, byteArray.Length);
        // Close the Stream object.
        dataStream.Close();
        // Get the response.
        WebResponse response = request.GetResponse();
        // Display the status.
        Console.WriteLine(((HttpWebResponse)response).StatusDescription);
        // Get the stream containing content returned by the server.
        dataStream = response.GetResponseStream();
        // Open the stream using a StreamReader for easy access.
        StreamReader reader = new StreamReader(dataStream);
        // Read the content.
        string responseFromServer = reader.ReadToEnd();
        // Display the content.
        Console.WriteLine(responseFromServer);
        // Clean up the streams.
        reader.Close();
        dataStream.Close();
        response.Close();
```

# Writing stuff into console
```c#
   System.Diagnostics.Debug.Write(((HttpWebResponse)response).StatusDescription);
   //get status description from server
```

# Sending xml using soap and webRequestObject
```c#
public static void CallWebService()
        {
            var _url = "http://xxxxxxxxx/Service1.asmx";
            var _action = "http://xxxxxxxx/Service1.asmx?op=HelloWorld";

            XmlDocument soapEnvelopeXml = CreateSoapEnvelope();
            HttpWebRequest webRequest = CreateWebRequest(_url, _action);
            InsertSoapEnvelopeIntoWebRequest(soapEnvelopeXml, webRequest);

            // begin async call to web request.
            IAsyncResult asyncResult = webRequest.BeginGetResponse(null, null);

            // suspend this thread until call is complete. You might want to
            // do something usefull here like update your UI.
            asyncResult.AsyncWaitHandle.WaitOne();

            // get the response from the completed web request.
            string soapResult;
            using (WebResponse webResponse = webRequest.EndGetResponse(asyncResult))
            {
                using (StreamReader rd = new StreamReader(webResponse.GetResponseStream()))
                {
                    soapResult = rd.ReadToEnd();
                }
                Console.Write(soapResult);        
            }

        }


        private static HttpWebRequest CreateWebRequest(string url, string action)
        {
            HttpWebRequest webRequest = (HttpWebRequest)WebRequest.Create(url);
            webRequest.Headers.Add("SOAPAction", action);
            webRequest.ContentType = "text/xml;charset=\"utf-8\"";
            webRequest.Accept = "text/xml";
            webRequest.Method = "POST";
            return webRequest;
        }

        private static XmlDocument CreateSoapEnvelope()
        {
            XmlDocument soapEnvelop = new XmlDocument();
            soapEnvelop.LoadXml(@"<SOAP-ENV:Envelope xmlns:SOAP-ENV=""http://schemas.xmlsoap.org/soap/envelope/"" xmlns:xsi=""http://www.w3.org/1999/XMLSchema-instance"" xmlns:xsd=""http://www.w3.org/1999/XMLSchema""><SOAP-ENV:Body><HelloWorld xmlns=""http://tempuri.org/"" SOAP-ENV:encodingStyle=""http://schemas.xmlsoap.org/soap/encoding/""><int1 xsi:type=""xsd:integer"">12</int1><int2 xsi:type=""xsd:integer"">32</int2></HelloWorld></SOAP-ENV:Body></SOAP-ENV:Envelope>");
            return soapEnvelop;
        }

        private static void InsertSoapEnvelopeIntoWebRequest(XmlDocument soapEnvelopeXml, HttpWebRequest webRequest)
        {
            using (Stream stream = webRequest.GetRequestStream())
            {
                soapEnvelopeXml.Save(stream);
            }
        }
```
  > What doest the request.GetRequestStream() do?

  * Getting the request stream does not trigger the post, but  closing the stream does. Post data is sent to the server in the following way:

  1. A connection is opened to the host
  2. Send request and headers
  3. Write Post data
  4. Wait for a response.

  * The act of flushing and closing the stream is the final step, and once the input stream is closed (i.e. the client has sent what it needs to the server), then the server can return a response.

  * Always remember that WebRequest.Create() method does not actually trigger a request, the get response method does.

# Sending data using WebRequest method example
http://msdn.microsoft.com/en-us/library/debx8sh9(v=vs.110).aspx
```
using System;
using System.IO;
using System.Net;
using System.Text;

namespace Examples.System.Net
{
    public class WebRequestPostExample
    {
        public static void Main ()
        {
            // Create a request using a URL that can receive a post. 
            WebRequest request = WebRequest.Create ("http://www.contoso.com/PostAccepter.aspx ");
            // Set the Method property of the request to POST.
            request.Method = "POST";
            // Create POST data and convert it to a byte array.
            string postData = "This is a test that posts this string to a Web server.";
            byte[] byteArray = Encoding.UTF8.GetBytes (postData);
            // Set the ContentType property of the WebRequest.
            request.ContentType = "application/x-www-form-urlencoded";
            // Set the ContentLength property of the WebRequest.
            request.ContentLength = byteArray.Length;
            // Get the request stream.
            Stream dataStream = request.GetRequestStream ();
            // Write the data to the request stream.
            dataStream.Write (byteArray, 0, byteArray.Length);
            // Close the Stream object.
            dataStream.Close ();
            // Get the response.
            WebResponse response = request.GetResponse ();
            // Display the status.
            Console.WriteLine (((HttpWebResponse)response).StatusDescription);
            // Get the stream containing content returned by the server.
            dataStream = response.GetResponseStream ();
            // Open the stream using a StreamReader for easy access.
            StreamReader reader = new StreamReader (dataStream);
            // Read the content.
            string responseFromServer = reader.ReadToEnd ();
            // Display the content.
            Console.WriteLine (responseFromServer);
            // Clean up the streams.
            reader.Close ();
            dataStream.Close ();
            response.Close ();
        }
    }
}
```

# Error code backup
``` c#
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml;

namespace Assignment1.Tests
{
    public partial class task2 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {   
            //create url
            UriBuilder _url = new UriBuilder();
            _url.Scheme = "http";
            _url.Host = "www.webservicex.net";
            _url.Path = "globalweather.asmx/GetWeather";
            //Create soap action string
            //TODO: test whether using www.webservicex.net/globalweather.asmx/GetWeather as url works, and find out why.
            string _action = "www.webservicex.net/globalweather.asmx/GetWeather";
            
            // create a web request object.
            HttpWebRequest request=CreateRequest(_url.ToString(), _action);

           

            //Begin async call
            request.BeginGetRequestStream(new AsyncCallback(GetRequestStreamCallback), request);
            


        }

        private static HttpWebRequest CreateRequest(string url,string action)
        {

            try
            {
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
                request.Headers.Add("SOAPAction", action);
                request.ContentType = "text/xml;charset=\"utf-8\"";
                request.Method = "POST";
                request.KeepAlive = false;
                return request;
            }
            catch (Exception e)
            {

                return null;
            }
        }

        private static XmlDocument CreateSoapEnvelope()
        {
            XmlDocument soapEnvelop = new XmlDocument();
            soapEnvelop.LoadXml(@"<soap:Envelope xmlns:soap=""http://schemas.xmlsoap.org/soap/envelope/"" xmlns:xsi=""http://www.w3.org/1999/XMLSchema-instance"" xmlns:xsd=""http://www.w3.org/1999/XMLSchema""><soap:Body><GetWeather xmlns=""http://webserviceX.NET""><CityName>Singapore</CityName><CountryName>Singapore</CountryName></GetWeather></soap:Body></soap:Envelope>");
            return soapEnvelop;
        }

        void GetRequestStreamCallback(IAsyncResult callbackResult)
        {
            HttpWebRequest webRequest = (HttpWebRequest)callbackResult.AsyncState;

            //create the soap envelope xml file
            XmlDocument soapEnvelopXml = CreateSoapEnvelope();
            //Then create a postStream
           
            
            Stream postStream = webRequest.EndGetRequestStream(callbackResult);
            soapEnvelopXml.Save(postStream); // saves the envelop file to postStream (save request data)          
            

            webRequest.BeginGetResponse(new AsyncCallback(GetResponseStreamCallback), webRequest);
        }

        void GetResponseStreamCallback(IAsyncResult callbackResult)
        {
            HttpWebRequest request = (HttpWebRequest)callbackResult.AsyncState;
            HttpWebResponse response = (HttpWebResponse)request.EndGetResponse(callbackResult);
            using (StreamReader httpWebStreamReader = new StreamReader(response.GetResponseStream()))
            {
                string result = httpWebStreamReader.ReadToEnd();
                Debug.WriteLine(result);
            }
        }

        
    }
}
```
# Another Async Example
```c#
private void signupButton_Click(object sender, RoutedEventArgs e)
        {
            if (passBox.Text == "")
            {
                MessageBox.Show("Please input a password");
            }
            else if (usernameBox.Text == "")
            {
                MessageBox.Show("Please input a username");
            }

            else
            {
                System.Uri myUri = new System.Uri("http://mywebpage.com");
                HttpWebRequest webRequest = (HttpWebRequest)HttpWebRequest.Create(myUri);
                webRequest.Method = "POST";
                webRequest.ContentType = "application/x-www-form-urlencoded";
                webRequest.BeginGetRequestStream(new AsyncCallback(GetRequestStreamCallback), webRequest);
            }
        }

        void GetRequestStreamCallback(IAsyncResult callbackResult)
        {
            HttpWebRequest webRequest = (HttpWebRequest)callbackResult.AsyncState;
            Stream postStream = webRequest.EndGetRequestStream(callbackResult);

            string requestBody = string.Format("{{\"username\":\"{0}\",\"password\":\"{1}\"}}", usernameBox.Text, passBox.Text);
            byte[] byteArray = Encoding.UTF8.GetBytes(requestBody);
           
            postStream.Write(byteArray, 0, byteArray.Length);
            postStream.Close();

            webRequest.BeginGetResponse(new AsyncCallback(GetResponseStreamCallback), webRequest);
        }

        void GetResponseStreamCallback(IAsyncResult callbackResult)
        {
            HttpWebRequest request = (HttpWebRequest)callbackResult.AsyncState;
            HttpWebResponse response = (HttpWebResponse)request.EndGetResponse(callbackResult);
            using (StreamReader httpWebStreamReader = new StreamReader(response.GetResponseStream()))
            {
                string result = httpWebStreamReader.ReadToEnd();
                Debug.WriteLine(result);
            }
        }
```
# Working Async Codes
```
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml;

namespace Assignment1.Tests
{
    public partial class task2 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //create url
            //UriBuilder _url = new UriBuilder();
            //_url.Scheme = "http";
            //_url.Host = "www.webservicex.net";
            //_url.Path = "globalweather.asmx";
            var _url = "http://www.webservicex.net/globalweather.asmx";

            //Create soap action string
            //TODO: test whether using www.webservicex.net/globalweather.asmx/GetWeather as url works, and find out why.
            var _action = "http://www.webserviceX.NET/GetWeather";

            // create a web request object.
            HttpWebRequest request = CreateRequest(_url, _action);
            XmlDocument soapEnvelopeXml = CreateSoapEnvelope();
            InsertSoapEnvelopeIntoWebRequest(soapEnvelopeXml, request);

            IAsyncResult asyncResult = request.BeginGetResponse(null, null);
            asyncResult.AsyncWaitHandle.WaitOne();
            
            string soapResult;
            using (WebResponse webResponse = request.EndGetResponse(asyncResult))
            {
                using (StreamReader rd = new StreamReader(webResponse.GetResponseStream()))
                {
                    soapResult = rd.ReadToEnd();
                }
                Debug.Write(soapResult);        
            }
            

        }

        private static HttpWebRequest CreateRequest(string url, string action)
        {

            try
            {
                HttpWebRequest request = WebRequest.Create(url) as HttpWebRequest;
                request.Headers.Add("SOAPAction", action);
                request.ContentType = "text/xml;charset=\"utf-8\"";
                request.Method = "POST";
                request.KeepAlive = false;
                return request;
            }
            catch (Exception e)
            {

                return null;
            }
        }

        private static XmlDocument CreateSoapEnvelope()
        {
            XmlDocument soapEnvelop = new XmlDocument();
            soapEnvelop.LoadXml(@"<soap:Envelope xmlns:xsi=""http://www.w3.org/2001/XMLSchema-instance"" xmlns:xsd=""http://www.w3.org/2001/XMLSchema"" xmlns:soap=""http://schemas.xmlsoap.org/soap/envelope/""><soap:Body><GetWeather xmlns=""http://www.webserviceX.NET""><CityName>Singapore</CityName><CountryName>Singapore</CountryName></GetWeather></soap:Body></soap:Envelope>");
            return soapEnvelop;
        }

        private static void InsertSoapEnvelopeIntoWebRequest(XmlDocument soapEnvelopeXml, HttpWebRequest webRequest)
        {
            using (Stream stream = webRequest.GetRequestStream())
            {
                soapEnvelopeXml.Save(stream);
            }
        }
    }
}
```