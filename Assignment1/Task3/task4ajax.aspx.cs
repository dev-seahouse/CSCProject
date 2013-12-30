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
    public partial class task4ajax : System.Web.UI.Page
    {
        string _url = "http://www.webservicex.net/globalweather.asmx";
        //Create soap action string
        //TODO: test whether using www.webservicex.net/globalweather.asmx/GetWeather as url works, and find out why.
        string _getWeatherAction = "http://www.webserviceX.NET/GetWeather";
        string _getCitiesAction = "http://www.webserviceX.NET/GetCitiesByCountry";


        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void DropDownList1_SelectedIndexChanged(object sender, EventArgs e)
        {
            string value = DropDownList1.SelectedItem.Value;
            getTemperature(value);
            getCities(value);


        }

        public void getCities(string value)
        {

            HttpWebRequest request = CreateRequest(_url, _getCitiesAction);
            XmlDocument soapevelop = createSoapEnvelopCities(value);
            InsertSoapEnvelopeIntoWebRequest(soapevelop, request);
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();
            XmlDocument wsResponseXmlDoc = new XmlDocument();
            wsResponseXmlDoc.Load(response.GetResponseStream());
            XmlNamespaceManager nsmgr = new XmlNamespaceManager(wsResponseXmlDoc.NameTable);
            nsmgr.AddNamespace("soap", "http://schemas.xmlsoap.org/soap/envelope/");
            nsmgr.AddNamespace("default", "http://www.webserviceX.NET");
            XmlNode cities = wsResponseXmlDoc.SelectSingleNode("/soap:Envelope/soap:Body/default:GetCitiesByCountryResponse/default:GetCitiesByCountryResult", nsmgr);
            string xmldata = WebUtility.HtmlDecode(cities.InnerText);
            if (xmldata != "</NewDataSet>")
            {
                wsResponseXmlDoc.LoadXml(xmldata);
                XmlNodeList node = wsResponseXmlDoc.SelectNodes("//NewDataSet/Table/City");
                DropDownCities.Items.Clear();
                foreach (XmlNode n in node)
                {
                    ListItem l = new ListItem();
                    l.Text = n.InnerXml.ToString();
                    DropDownCities.Items.Add(l);
                }
            }
        }

        public void getTemperature(string value)
        {
            if (value != "0")
            {
                HttpWebRequest request = CreateRequest(_url, _getWeatherAction);
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
                    Label1.Text = "Temperature in " + value + " is " + currentWeather.InnerText;
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

        public static XmlDocument createSoapEnvelopCities(string countryName)
        {
            XmlDocument soapEvelope = new XmlDocument();
            soapEvelope.PreserveWhitespace = true;
            soapEvelope.LoadXml(@"<soap:Envelope xmlns:xsi=""http://www.w3.org/2001/XMLSchema-instance"" xmlns:xsd=""http://www.w3.org/2001/XMLSchema"" xmlns:soap=""http://schemas.xmlsoap.org/soap/envelope/""><soap:Body><GetCitiesByCountry xmlns=""http://www.webserviceX.NET""><CountryName>" + countryName + "</CountryName></GetCitiesByCountry></soap:Body></soap:Envelope>");
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