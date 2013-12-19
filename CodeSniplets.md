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
```
   System.Diagnostics.Debug.Write(((HttpWebResponse)response).StatusDescription);
   //get status description from server
```