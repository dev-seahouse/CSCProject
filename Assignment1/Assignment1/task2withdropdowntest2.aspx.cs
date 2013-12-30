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

namespace Assignment1
{
    public partial class testDropDown2 : System.Web.UI.Page
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
                XmlDocument soapEnvelopeXml = createSoapEnvelop("", value);    
                IAsyncResult asyncResult = request.BeginGetRequestStream(null, null);                
                Stream postStream = request.EndGetRequestStream(asyncResult);
                asyncResult.AsyncWaitHandle.WaitOne();
                InsertSoapEnvelopeIntoWebRequest(soapEnvelopeXml, request);
                
                
                

                  

                //IAsyncResult asyncResult = request.BeginGetResponse(null, null);
                

                //string soapResult;

                //using (WebResponse webResponse = request.EndGetResponse(asyncResult))
                //{
                //    using (StreamReader rd = new StreamReader(webResponse.GetResponseStream()))
                //    {
                //        soapResult = rd.ReadToEnd();
                //    }
                //    Debug.Write(soapResult);
                //}
               

            }                                             

        }

        private void GetRequestStreamCallback(IAsyncResult ar)
        {
            HttpWebRequest webRequest = (HttpWebRequest)ar.AsyncState;
            XmlDocument soapevelop = createSoapEnvelop("", value);
            Stream postStream = webRequest.EndGetRequestStream(ar);
            soapevelop.Save(postStream);
       
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