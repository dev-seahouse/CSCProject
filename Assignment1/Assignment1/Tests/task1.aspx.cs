using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml;

namespace Assignment1.Tests
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            XmlDocument wsResponseXmlDoc = new XmlDocument(); 


            wsResponseXmlDoc = MakeGetRequest("Singapore","Singapore");
            String xmlString = wsResponseXmlDoc.InnerXml;
            Response.ContentType = "text/xml";
            Response.Write(xmlString);

            XmlTextWriter writer = new XmlTextWriter(Server.MapPath("xmlweather.xml"), null);
            writer.Formatting = Formatting.Indented;
            wsResponseXmlDoc.Save(writer);



        }
        public static XmlDocument MakeGetRequest(string cityName,string countryName)
        {
            UriBuilder url = new UriBuilder();
            url.Scheme = "http";
            url.Host = "www.webservicex.net";
            url.Path = "globalweather.asmx/GetWeather";
            url.Query = "CityName="+cityName+"&CountryName="+countryName;

            try
            {
                WebRequest request = WebRequest.Create(url.ToString());
                request.Method = "GET";
                request.ContentType = "text/xml; encoding='utf-8'";
                WebResponse response = request.GetResponse();
                System.Diagnostics.Debug.Write(((HttpWebResponse)response));
                //get status from server
                XmlDocument xmlDoc = new XmlDocument();
                xmlDoc.Load(response.GetResponseStream());
                return (xmlDoc);

            }
            catch (Exception e)
            {

                return null;
            }
        }
    }
}