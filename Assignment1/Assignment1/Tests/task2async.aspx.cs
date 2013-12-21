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
    public partial class task2async : System.Web.UI.Page
    {  
        protected void Page_Load(object sender, EventArgs e)
        {
            //build url
            UriBuilder _url = new UriBuilder();
            
            _url.Scheme = "http";
            _url.Host = "www.webservicex.net";
            _url.Path = "globalweather.asmx";
            string _action = "http://www.webserviceX.NET/GetWeather";
            //creating a request
            HttpWebRequest req=(HttpWebRequest)CreateRequest(_url.ToString(), _action);
            //being async request stream 
            try
            {
                req.BeginGetRequestStream(new AsyncCallback(GetRequestStreamCallback), req);
            }
            catch (Exception ex)
            {

                Debug.WriteLine("Something wrong at asyncallback");
            }
        }
        public static HttpWebRequest CreateRequest (string url, string action)
        {
            try {
                //creating httpwebrequest object
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
                request.Headers.Add("SOAPAction", action);
                request.ContentType = "text/xml;charset=\"utf-8\"";
                request.KeepAlive = false;
                request.Method = "POST";
                return request;
            }
            catch(Exception e)
            {
                return null;
            }
        }

        public static XmlDocument createSoapEnvelop(string cityName,string countryName)
        {
            try
            {
                XmlDocument soapEvelope = new XmlDocument();
                soapEvelope.LoadXml(@"<soap:Envelope xmlns:xsi=""http://www.w3.org/2001/XMLSchema-instance"" xmlns:xsd=""http://www.w3.org/2001/XMLSchema"" xmlns:soap=""http://schemas.xmlsoap.org/soap/envelope/""><soap:Body><GetWeather xmlns=""http://www.webserviceX.NET""><CityName>"+cityName+"</CityName><CountryName>"+countryName+"</CountryName></GetWeather></soap:Body></soap:Envelope>");
                return soapEvelope;

            }
            catch (Exception e)
            {
                return null;
            }

        }
        // using makes sure unused resources are released as soon


        void GetRequestStreamCallback(IAsyncResult callbackResult)
        {
            HttpWebRequest webRequest = (HttpWebRequest)callbackResult.AsyncState;
            XmlDocument soapevelop = createSoapEnvelop("Singapore", "Singapore");
            Stream postStream = webRequest.EndGetRequestStream(callbackResult);
            soapevelop.Save(postStream);
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