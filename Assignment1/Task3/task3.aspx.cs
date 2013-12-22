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
                request.BeginGetRequestStream(new AsyncCallback(GetRequestStreamCallback), request);
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

        public void GetRequestStreamCallback(IAsyncResult callbackResult)
        {
            HttpWebRequest webRequest = (HttpWebRequest)callbackResult.AsyncState;
            XmlDocument soapevelop = createSoapEnvelop("", value);

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