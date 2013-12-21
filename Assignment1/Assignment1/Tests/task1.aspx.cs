using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
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
            
            //testing makine get request
            wsResponseXmlDoc = MakeGetRequest("Singapore", "Singapore");
            //Testing making post request.
            //wsResponseXmlDoc = MakePostRequest("Singapore", "Singapore");
            String xmlString = wsResponseXmlDoc.InnerXml;
            Response.ContentType = "text/xml";
            Response.Write(xmlString);
            XmlTextWriter writer = new XmlTextWriter(Server.MapPath("xmlweather.xml"), null);
            writer.Formatting = Formatting.Indented;
            wsResponseXmlDoc.Save(writer);

        }
        //Testing Get Requet here
        public static XmlDocument MakeGetRequest(string cityName,string countryName)
        {
            UriBuilder url = new UriBuilder();
            url.Scheme = "http";
            url.Host = "www.webservicex.net";
            url.Path = "globalweather.asmx/GetWeather";
            url.Query = "CityName="+cityName+"&CountryName="+countryName;
            // testing get request
            try
            {
                WebRequest request = WebRequest.Create(url.ToString());
                request.Method = "GET";
                request.ContentType = "text/xml; encoding='utf-8'";
                WebResponse response = request.GetResponse();
                System.Diagnostics.Debug.Write(((HttpWebResponse)response).StatusDescription);
                //get status description from server
                XmlDocument xmlDoc = new XmlDocument();
                xmlDoc.Load(response.GetResponseStream());
                return (xmlDoc);

            }
            catch (Exception e)
            {

                return null;
            }


            // testing post request
        }
        public static XmlDocument MakePostRequest(string cityName, string countryName)
        {
            UriBuilder url = new UriBuilder();
            url.Scheme = "http";
            url.Host = "www.webservicex.net";
            url.Path = "globalweather.asmx/GetWeather";

            try
            {
                WebRequest request = WebRequest.Create(url.ToString());
                request.Method = "POST";
                string postData = "CityName=Singapore&CountryName=Singapore";

                byte[] byteArray = Encoding.UTF8.GetBytes(postData);
                request.ContentType = "application/x-www-form-urlencoded";
                request.ContentLength = byteArray.Length;
                Stream dataStream = request.GetRequestStream();
                dataStream.Write(byteArray, 0, byteArray.Length);
                dataStream.Close();
                WebResponse response = request.GetResponse();
                System.Diagnostics.Debug.Write(((HttpWebResponse)response).StatusDescription);
                //get status description from server
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