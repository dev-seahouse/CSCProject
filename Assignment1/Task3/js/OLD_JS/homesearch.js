function switchHomeSearchTab(tid) {
  for (i=1; i<=3; i++) {
    if (i == tid) {
      document.getElementById("aHomeSearchTab" + i).className = "tabInnerStyle_1_selected";
      document.getElementById("divHomeSearch" + i).style.display = "";
    }
    else {
      document.getElementById("aHomeSearchTab" + i).className = "tabInnerStyle_1";
      document.getElementById("divHomeSearch" + i).style.display = "none";
    }  
  } 
}

/* city search - ajax */
var aoGrouptourSearchRefreshCity = null; //ajax 
var aoHotelSearchRefreshCity = null; //ajax 
var aoFlightSearchRefreshCity = null; //ajax 

function homeSearchGrouptoursRefreshCity(country) {

  var objsel = document.homeSearchGrouptour.destination;
  
  //remove all old record
  while (objsel.length > 0) {
    objsel.options[objsel.length-1] = null;
  }
  
  if (country != "")  {
    //add loading selection
    var objopt = new Option('loading...', '', false, false);
    objsel.options[0]=objopt;
    objsel.disabled = true;
    
    if (aoGrouptourSearchRefreshCity == null) {	
      aoGrouptourSearchRefreshCity = GetXmlHttpObject();
    }
  
    if (aoGrouptourSearchRefreshCity != null)  {
	
      if (aoGrouptourSearchRefreshCity.readyState == 4 || aoGrouptourSearchRefreshCity.readyState == 0) {
       
        var url = "homesearch_ajax255c.html?type=TOURCITY&amp;country=" + country;
		
        aoGrouptourSearchRefreshCity.open("GET.html",url,true);
        aoGrouptourSearchRefreshCity.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        aoGrouptourSearchRefreshCity.send(null);
        aoGrouptourSearchRefreshCity.onreadystatechange=homeSearchGrouptoursRefreshCityStateChanged;
      }
    }
  }
  else  {  
    var objopt = new Option('- Select City -', '', false, false);
    objsel.options[0]=objopt;   
  }
  

}

function homeSearchGrouptoursRefreshCity2(country) {

  var objsel = document.homeSearchGrouptour2.destination;
  
  //remove all old record
  while (objsel.length > 0) {
    objsel.options[objsel.length-1] = null;
  }
  
  if (country != "")  {
    //add loading selection
    var objopt = new Option('loading...', '', false, false);
    objsel.options[0]=objopt;
    objsel.disabled = true;
    
    if (aoGrouptourSearchRefreshCity == null) {	
      aoGrouptourSearchRefreshCity = GetXmlHttpObject();
    }
  
    if (aoGrouptourSearchRefreshCity != null)  {
	
      if (aoGrouptourSearchRefreshCity.readyState == 4 || aoGrouptourSearchRefreshCity.readyState == 0) {
       
        var url = "homesearch_ajax255c.html?type=TOURCITY&amp;country=" + country;
		
        aoGrouptourSearchRefreshCity.open("GET.html",url,true);
        aoGrouptourSearchRefreshCity.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        aoGrouptourSearchRefreshCity.send(null);
        aoGrouptourSearchRefreshCity.onreadystatechange=homeSearchGrouptoursRefreshCityStateChanged2;
      }
    }
  }
  else  {  
    var objopt = new Option('- Select City -', '', false, false);
    objsel.options[0]=objopt;   
  }
  

}

function homeSearchGrouptoursRefreshCityStateChanged() {
  var objsel = document.homeSearchGrouptour.destination;

  if (aoGrouptourSearchRefreshCity != null)  {
    if (aoGrouptourSearchRefreshCity.readyState==4 && aoGrouptourSearchRefreshCity.status == 200)  {
      if (aoGrouptourSearchRefreshCity.responseText.substring(0,2) == "OK") {
        var vals = aoGrouptourSearchRefreshCity.responseText.substring(3);
        
        var objopt = new Option('- Select City -', '', false, false);
		
        objsel.options[0] = objopt;
        var idx = 0;
        
        if (vals != "") {
          var arrCities = vals.split("\n");
          for (c=0; c<arrCities.length; c++) {
            idx++;
            
            var cityVal = arrCities[c];
            var cityPart = cityVal.split(";");
            var sel = false;
            
            objopt = new Option(cityPart[1], cityPart[0], false, sel); 
            objsel.options[idx] = objopt;
          }
        }
        
        objsel.disabled = false;
      }
      else  {
        alert(aoGrouptourSearchRefreshCity.responseText);
      }
    }
    else if (aoGrouptourSearchRefreshCity.readyState==4 && aoGrouptourSearchRefreshCity.status != 200) {
      alert("Error calling processing script. Please try again."); 
    }
  }
}


function homeSearchGrouptoursRefreshCityStateChanged2() {
  var objsel = document.homeSearchGrouptour2.destination;

  if (aoGrouptourSearchRefreshCity != null)  {
    if (aoGrouptourSearchRefreshCity.readyState==4 && aoGrouptourSearchRefreshCity.status == 200)  {
      if (aoGrouptourSearchRefreshCity.responseText.substring(0,2) == "OK") {
        var vals = aoGrouptourSearchRefreshCity.responseText.substring(3);
        
        var objopt = new Option('- Select City -', '', false, false);
		
        objsel.options[0] = objopt;
        var idx = 0;
        
        if (vals != "") {
          var arrCities = vals.split("\n");
          for (c=0; c<arrCities.length; c++) {
            idx++;
            
            var cityVal = arrCities[c];
            var cityPart = cityVal.split(";");
            var sel = false;
            
            objopt = new Option(cityPart[1], cityPart[0], false, sel); 
            objsel.options[idx] = objopt;
          }
        }
        
        objsel.disabled = false;
      }
      else  {
        alert(aoGrouptourSearchRefreshCity.responseText);
      }
    }
    else if (aoGrouptourSearchRefreshCity.readyState==4 && aoGrouptourSearchRefreshCity.status != 200) {
      alert("Error calling processing script. Please try again."); 
    }
  }
}
function homeSearchHotelsRefreshCity(country) {

  var objsel = document.homeSearchHotel.destination;
  
  //remove all old record
  while (objsel.length > 0) {
    objsel.options[objsel.length-1] = null;
  }
  
  if (country != "")  {
    //add loading selection
    var objopt = new Option('loading...', '', false, false);
    objsel.options[0]=objopt;
    objsel.disabled = true;
    
    if (aoHotelSearchRefreshCity == null) {
      aoHotelSearchRefreshCity = GetXmlHttpObject();
    }
  
    if (aoHotelSearchRefreshCity != null)  {
      if (aoHotelSearchRefreshCity.readyState == 4 || aoHotelSearchRefreshCity.readyState == 0) {
        
        var url = "homesearch_ajax61db.html?type=HOTELCITY&amp;country=" + country;
        aoHotelSearchRefreshCity.open("GET.html",url,true);
        aoHotelSearchRefreshCity.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        aoHotelSearchRefreshCity.send(null);
        aoHotelSearchRefreshCity.onreadystatechange=homeSearchHotelsRefreshCityStateChanged;
      }
    }
  }
  else  {
    var objopt = new Option('- All Cities -', '', false, false);
    objsel.options[0]=objopt;   
  }

}

function homeSearchHotelsRefreshCityStateChanged() {
  var objsel = document.homeSearchHotel.destination;
  
  if (aoHotelSearchRefreshCity != null)  {
    if (aoHotelSearchRefreshCity.readyState==4 && aoHotelSearchRefreshCity.status == 200)  {
      if (aoHotelSearchRefreshCity.responseText.substring(0,2) == "OK") {
        var vals = aoHotelSearchRefreshCity.responseText.substring(3);
        
        var objopt = new Option('- All Cities -', '', false, false);
        objsel.options[0] = objopt;
        var idx = 0;
        
        if (vals != "") {
          var arrCities = vals.split("\n");
          for (c=0; c<arrCities.length; c++) {
            idx++;
            
            var cityVal = arrCities[c];
            var cityPart = cityVal.split(";");
            var sel = false;
            
            objopt = new Option(cityPart[1], cityPart[0], false, sel); 
            objsel.options[idx] = objopt;
          }
        }
        
        objsel.disabled = false;
      }
      else  {
        alert(aoHotelSearchRefreshCity.responseText);
      }
    }
    else if (aoHotelSearchRefreshCity.readyState==4 && aoHotelSearchRefreshCity.status != 200) {
      alert("Error calling processing script. Please try again."); 
    }
  }
}

function homeSearchFlightsRefreshCity(country) {
  var objsel = document.homeSearchFlights.destination;
  
  //remove all old record
  while (objsel.length > 0) {
    objsel.options[objsel.length-1] = null;
  }
  
  if (country != "")  {
    //add loading selection
    var objopt = new Option('loading...', '', false, false);
    objsel.options[0]=objopt;
    objsel.disabled = true;
    
    if (aoFlightSearchRefreshCity == null) {
      aoFlightSearchRefreshCity = GetXmlHttpObject();
    }
  
    if (aoFlightSearchRefreshCity != null)  {
      if (aoFlightSearchRefreshCity.readyState == 4 || aoFlightSearchRefreshCity.readyState == 0) {
        
        var url = "homesearch_ajax2ada.html?type=FLIGHTCITY&amp;country=" + country;
        aoFlightSearchRefreshCity.open("GET.html",url,true);
        aoFlightSearchRefreshCity.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        aoFlightSearchRefreshCity.send(null);
        aoFlightSearchRefreshCity.onreadystatechange=homeSearchFlightsRefreshCityStateChanged;
      }
    }
  }
  else  {
    var objopt = new Option('- All Cities -', '', false, false);
    objsel.options[0]=objopt;   
  }
}

function homeSearchFlightsRefreshCityStateChanged() {
  var objsel = document.homeSearchFlights.destination;
  
  if (aoFlightSearchRefreshCity != null)  {
    if (aoFlightSearchRefreshCity.readyState==4 && aoFlightSearchRefreshCity.status == 200)  {
      if (aoFlightSearchRefreshCity.responseText.substring(0,2) == "OK") {
        var vals = aoFlightSearchRefreshCity.responseText.substring(3);
        
        var objopt = new Option('- All Cities -', '', false, false);
        objsel.options[0] = objopt;
        var idx = 0;
        
        if (vals != "") {
          var arrCities = vals.split("\n");
          for (c=0; c<arrCities.length; c++) {
            idx++;
            
            var cityVal = arrCities[c];
            var cityPart = cityVal.split(";");
            var sel = false;
            
            objopt = new Option(cityPart[1], cityPart[0], false, sel); 
            objsel.options[idx] = objopt;
          }
        }
        
        objsel.disabled = false;
      }
      else  {
        alert(aoFlightSearchRefreshCity.responseText);
      }
    }
    else if (aoFlightSearchRefreshCity.readyState==4 && aoFlightSearchRefreshCity.status != 200) {
      alert("Error calling processing script. Please try again."); 
    }
  }
}


function homeSearchGroupTourSubmit() {
  //need to at least select country
  if (validate_field(document.homeSearchGrouptour.country, "Country", TEXT) &&
      (document.homeSearchGrouptour.gt_from.value.search(/\S/)==-1 || validate_field(document.homeSearchGrouptour.gt_from, "Departure (From)", DATE)) &&
      (document.homeSearchGrouptour.gt_to.value.search(/\S/)==-1 || validate_field(document.homeSearchGrouptour.gt_to, "Departure (From)", DATE)))  {
    document.homeSearchGrouptour.submit();
  }
}
function homeSearchGroupTourSubmit2() {
  //need to at least select country
  if (validate_field(document.homeSearchGrouptour2.country, "Country", TEXT) &&
      (document.homeSearchGrouptour2.gt_from.value.search(/\S/)==-1 || validate_field(document.homeSearchGrouptour2.gt_from, "Departure (From)", DATE)) &&
      (document.homeSearchGrouptour2.gt_to.value.search(/\S/)==-1 || validate_field(document.homeSearchGrouptour2.gt_to, "Departure (From)", DATE)))  {
    document.homeSearchGrouptour2.submit();
  }
}

function homeSearchHotelSubmit() {
  //need to at least select country
  if (validate_field(document.homeSearchHotel.country, "Country", TEXT) &&
      (document.homeSearchHotel.ht_checkin.value.search(/\S/)==-1 || validate_field(document.homeSearchHotel.ht_checkin, "Check-In", DATE)) &&
      (document.homeSearchHotel.ht_checkout.value.search(/\S/)==-1 || validate_field(document.homeSearchHotel.ht_checkout, "Check-Out", DATE)))  {
    if (document.homeSearchHotel.ht_checkin.value.search(/\S/)==-1 && document.homeSearchHotel.ht_checkout.value.search(/\S/)==-1) {
      if (document.homeSearchHotel.destination.value != "") {
        location.href = "hotel-listfe44.html?dest=" + document.homeSearchHotel.destination.value + "&page=1";
      }
      else  {
        location.href = "hotel-listfe44.html?dest=" + document.homeSearchHotel.country.value + "&page=1";
      }
    }
    else  {
      if (validate_field(document.homeSearchHotel.ht_checkin, "Check-In", DATE) &&
          validate_field(document.homeSearchHotel.ht_checkout, "Check-Out", DATE)) {
        document.homeSearchHotel.submit();      
      }
    }
  }
}