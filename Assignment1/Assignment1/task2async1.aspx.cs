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