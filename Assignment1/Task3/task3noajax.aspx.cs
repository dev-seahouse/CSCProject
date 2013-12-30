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

namespace Task3
{
    public partial class task3 : System.Web.UI.Page
    {

        string _url = "http://www.webservicex.net/globalweather.asmx";
        //Create soap action string
        //TODO: test whether using www.webservicex.net/globalweather.asmx/GetWeather as url works, and find out why.
        string _action = "http://www.webserviceX.NET/GetWeather";
        string value = "";


        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void DropDownList1_SelectedIndexChanged(object sender, EventArgs e)
        {
            value = DropDownList1.SelectedItem.Value;
            if (value != "0")
            {
                HttpWebRequest request = CreateRequest(_url, _action);
                XmlDocument soapevelop = createSoapEnvelop("", value);
                InsertSoapEnvelopeIntoWebRequest(soapevelop, request);
                HttpWebResponse response = (HttpWebResponse)request.GetResponse();
                XmlDocument wsResponseXmlDoc = new XmlDocument();
                wsResponseXmlDoc.Load(response.GetResponseStream());
                XmlNode root = wsResponseXmlDoc.DocumentElement;
                XmlNamespaceManager nsmgr = new XmlNamespaceManager(wsResponseXmlDoc.NameTable);
                nsmgr.AddNamespace("soap", "http://schemas.xmlsoap.org/soap/envelope/");
                nsmgr.AddNamespace("default", "http://www.webserviceX.NET");
                XmlNode currentWeather = root.SelectSingleNode("/soap:Envelope/soap:Body/default:GetWeatherResponse", nsmgr);
                string xmldata = WebUtility.HtmlDecode(currentWeather.InnerText);
                if (xmldata != "Data Not Found")
                {
                    wsResponseXmlDoc.LoadXml(xmldata);
                    currentWeather = wsResponseXmlDoc.SelectSingleNode("//CurrentWeather/Temperature");
                    Debug.WriteLine(currentWeather.InnerText);
                    Label1.Text = "Temperature in "+value+"is "+currentWeather.InnerText;
                }
                else
                {
                    Label1.Text = "No Temperature data";
                }
                XmlTextWriter writer = new XmlTextWriter(Server.MapPath("xmlweather.xml"), null);
                writer.Formatting = Formatting.Indented;
                wsResponseXmlDoc.Save(writer);
                writer.Close();
                response.Close();
                
                
            }


        }

        public static HttpWebRequest CreateRequest(string url, string action)
        {
            try
            {
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
                request.KeepAlive = false;
                request.Method = "POST";
                request.ContentType = "text/xml;charset=\"utf-8\"";
                request.Headers.Add("SOAPAction", action);
                return request;
            }
            catch (Exception e)
            {

                return null;
            }

        }

        public static XmlDocument createSoapEnvelop(string cityName = "", string countryName = "")
        {
            XmlDocument soapEvelope = new XmlDocument();
            soapEvelope.PreserveWhitespace = true;
            soapEvelope.LoadXml(@"<soap:Envelope xmlns:xsi=""http://www.w3.org/2001/XMLSchema-instance"" xmlns:xsd=""http://www.w3.org/2001/XMLSchema"" xmlns:soap=""http://schemas.xmlsoap.org/soap/envelope/""><soap:Body><GetWeather xmlns=""http://www.webserviceX.NET""><CityName></CityName><CountryName>" + countryName + "</CountryName></GetWeather></soap:Body></soap:Envelope>");
            return soapEvelope;
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