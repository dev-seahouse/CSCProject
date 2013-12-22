var accHotelSearchInitialCheckin = "";
var accHotelSearchLastCheckin = "";
var accHotelSearchLastCheckout = "";
var accHotelSearchLastStays = 1;

var aoAccHotelSearchRefreshCity = null; //ajax 
var accHotelSearchLastCity = "";
function refreshAccHotelCity(country) {
  var objsel = document.frmAccommodationHotel.city;
  
  //remove all old record
  while (objsel.length > 0) {
    objsel.options[objsel.length-1] = null;
  }
  
  if (country != "")  {
    //add loading selection
    var objopt = new Option('loading...', '', false, false);
    objsel.options[0]=objopt;
    objsel.disabled = true;
    
    if (aoAccHotelSearchRefreshCity == null) {
      aoAccHotelSearchRefreshCity = GetXmlHttpObject();
    }
  
    if (aoAccHotelSearchRefreshCity != null)  {
      if (aoAccHotelSearchRefreshCity.readyState == 4 || aoAccHotelSearchRefreshCity.readyState == 0) {
        
        var url = "accommodation-ajaxdb74.html?type=HOTEL_CITY&amp;country=" + country;
        aoAccHotelSearchRefreshCity.open("GET.html",url,true);
        aoAccHotelSearchRefreshCity.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        aoAccHotelSearchRefreshCity.send(null);
        aoAccHotelSearchRefreshCity.onreadystatechange=refreshAccHotelSearchCityStateChanged;
      }
    }
  }
  else  {
    var objopt = new Option('- Select City -', '', false, false);
    objsel.options[0]=objopt;   
  }
}
function refreshAccHotelSearchCityStateChanged()   {
  var objsel = document.frmAccommodationHotel.city;
  
  if (aoAccHotelSearchRefreshCity != null)  {
    if (aoAccHotelSearchRefreshCity.readyState==4 && aoAccHotelSearchRefreshCity.status == 200)  {
      if (aoAccHotelSearchRefreshCity.responseText.substring(0,2) == "OK") {
        var vals = aoAccHotelSearchRefreshCity.responseText.substring(3);
        
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
            
            if (cityPart[0] == accHotelSearchLastCity) {
              sel = true;
            }
            objopt = new Option(cityPart[1], cityPart[0], false, sel); 
            objsel.options[idx] = objopt;
          }
        }
        
        objsel.disabled = false;
      }
      else  {
        alert(aoAccHotelSearchRefreshCity.responseText);
      }
    }
    else if (aoAccHotelSearchRefreshCity.readyState==4 && aoAccHotelSearchRefreshCity.status != 200) {
      alert("Error calling processing script. Please try again."); 
    }
  }
}

function changeAccHotelSearchRooms() {
  var rooms = parseInt(document.frmAccommodationHotel.rooms.value);
  //reset all first
  for (r=1; r<=rooms; r++) {
    document.getElementById("trAccHotelSearchRoom" + r).style.display = "";
  }
  for (r=rooms+1; r<=3; r++) {
    document.getElementById("trAccHotelSearchRoom" + r).style.display = "none";
  }
}

function changeAccHotelSearchCheckin() {
  var nights = parseInt(document.frmAccommodationHotel.nights.value, 10);  
  var checkin = document.frmAccommodationHotel.checkin2.value + "-" + document.frmAccommodationHotel.checkin1.value;
  var checkout = document.frmAccommodationHotel.checkout2.value + "-" + document.frmAccommodationHotel.checkout1.value;
  var tCheckin = makeJsDateFromDBDate(checkin);
  var tCheckout = makeJsDateFromDBDate(checkout);
  
  if (validateDBDate(checkin)) {
    if (checkin >= accHotelSearchInitialCheckin)  {
      accHotelSearchLastCheckin = checkin;
      
      tCheckout.setTime(tCheckin.getTime() + ((24*3600*1000) * nights));
      var m = tCheckout.getMonth() + 1;
      var d = tCheckout.getDate();
      checkout = tCheckout.getFullYear() + "-" + (m>=10? "" : "0") + m + "-" + (d>10? "" : "0") + d;
      
      document.frmAccommodationHotel.checkout1.value = checkout.substr(8,2);
      document.frmAccommodationHotel.checkout2.value = checkout.substr(0,7);
      accHotelSearchLastCheckout = checkout;
    }
    else  {
      checkin = accHotelSearchLastCheckin;
      document.frmAccommodationHotel.checkin1.value = checkin.substr(8,2);
      document.frmAccommodationHotel.checkin2.value = checkin.substr(0,7);    
    }
  }
  else  {
    checkin = accHotelSearchLastCheckin;
    document.frmAccommodationHotel.checkin1.value = checkin.substr(8,2);
    document.frmAccommodationHotel.checkin2.value = checkin.substr(0,7); 
  }
}

function changeAccHotelSearchCheckout() {
  var nights = parseInt(document.frmAccommodationHotel.nights.value, 10);  
  var checkin = document.frmAccommodationHotel.checkin2.value + "-" + document.frmAccommodationHotel.checkin1.value;
  var checkout = document.frmAccommodationHotel.checkout2.value + "-" + document.frmAccommodationHotel.checkout1.value;
  var tCheckin = makeJsDateFromDBDate(checkin);
  var tCheckout = makeJsDateFromDBDate(checkout);
  
  //alert("Checkin=" + tCheckin + "\nCheckout=" + tCheckout);
  
  if (validateDBDate(checkout) && checkout > checkin) {
    var diff = (tCheckout - tCheckin)/(24*3600*1000);
    if (diff <= 30) {
      document.frmAccommodationHotel.nights.value = Math.ceil(diff); 
      accHotelSearchLastCheckout = checkout;
    }
    else  {
      checkout = accHotelSearchLastCheckout;
      document.frmAccommodationHotel.checkout1.value = checkout.substr(8,2);
      document.frmAccommodationHotel.checkout2.value = checkout.substr(0,7); 
    }
  }
  else  {
    checkout = accHotelSearchLastCheckout;
    document.frmAccommodationHotel.checkout1.value = checkout.substr(8,2);
    document.frmAccommodationHotel.checkout2.value = checkout.substr(0,7); 
  }
}

function changeAccHotelSearchNights() {
  var nights = parseInt(document.frmAccommodationHotel.nights.value, 10);  
  var checkin = document.frmAccommodationHotel.checkin2.value + "-" + document.frmAccommodationHotel.checkin1.value;
  var checkout = document.frmAccommodationHotel.checkout2.value + "-" + document.frmAccommodationHotel.checkout1.value;
  var tCheckin = makeJsDateFromDBDate(checkin);
  var tCheckout = makeJsDateFromDBDate(checkout);
  
  tCheckout.setTime(tCheckin.getTime() + ((24*3600*1000) * nights));
  var m = tCheckout.getMonth() + 1;
  var d = tCheckout.getDate();
  checkout = tCheckout.getFullYear() + "-" + (m>=10? "" : "0") + m + "-" + (d>10? "" : "0") + d;
  
  document.frmAccommodationHotel.checkout1.value = checkout.substr(8,2);
  document.frmAccommodationHotel.checkout2.value = checkout.substr(0,7);
  accHotelSearchLastCheckout = checkout;
}

function validateAccHotelSearch() {
  if (validate_field(document.frmAccommodationHotel.country, "Country", TEXT) &&
      validate_field(document.frmAccommodationHotel.city, "City", TEXT) &&
      validate_field(document.frmAccommodationHotel.rooms, "Rooms", TEXT)) {
    document.frmAccommodationHotel.submit();  
  }
}

function validateDBDate(strDate) {
  if (strDate.search(/(19|20)\d\d-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])/) >= 0)    {
    y = parseInt(strDate.substr(0,4), 10);
		m = parseInt(strDate.substr(5,2), 10);
		d = parseInt(strDate.substr(8,2), 10);

    //get the wrong dates
    if ((d>=30 && m==2) ||
        (d==31 && (m==2 || m==4 || m==6 || m==9 || m==11)) ||
        (d==29 && m==2 && !(((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0))))   {
		  return 0;
    }
    else
      return 1;
		}
  else    {
    return 0;
  }
}

function getTodayDBDate() {
  var myDate= new Date();
  var y = myDate.getFullYear();
  var m = myDate.getMonth() + 1;
  var d = myDate.getDate();
  return (y + "-" + (m>10? "" : "0") + m + "-" + (d>10? "" : "0") + d);
}

function makeJsDateFromDBDate(strDate) {
  y = parseInt(strDate.substr(0,4), 10);
	m = parseInt(strDate.substr(5,2), 10);
	d = parseInt(strDate.substr(8,2), 10);
	var myDate= new Date();
  myDate.setFullYear(y);
  myDate.setMonth(m-1);
  myDate.setDate(d);
  
  
  return myDate;
}







function changeSingleHotelSearchRooms() {
  var rooms = parseInt(document.frmSearchSingleHotel.rooms.value);
  //reset all first
  for (r=1; r<=rooms; r++) {
    document.getElementById("trSingleHotelSearchRoom" + r).style.display = "";
  }
  for (r=rooms+1; r<=3; r++) {
    document.getElementById("trSingleHotelSearchRoom" + r).style.display = "none";
  }
}

function changeSingleHotelSearchCheckin() {
  var nights = parseInt(document.frmSearchSingleHotel.nights.value, 10);  
  var checkin = document.frmSearchSingleHotel.checkin2.value + "-" + document.frmSearchSingleHotel.checkin1.value;
  var checkout = document.frmSearchSingleHotel.checkout2.value + "-" + document.frmSearchSingleHotel.checkout1.value;
  var tCheckin = makeJsDateFromDBDate(checkin);
  var tCheckout = makeJsDateFromDBDate(checkout);
  
  if (validateDBDate(checkin)) {
    if (checkin >= accHotelSearchInitialCheckin)  {
      accHotelSearchLastCheckin = checkin;
      
      tCheckout.setTime(tCheckin.getTime() + ((24*3600*1000) * nights));
      var m = tCheckout.getMonth() + 1;
      var d = tCheckout.getDate();
      checkout = tCheckout.getFullYear() + "-" + (m>=10? "" : "0") + m + "-" + (d>10? "" : "0") + d;
      
      document.frmSearchSingleHotel.checkout1.value = checkout.substr(8,2);
      document.frmSearchSingleHotel.checkout2.value = checkout.substr(0,7);
      accHotelSearchLastCheckout = checkout;
    }
    else  {
      checkin = accHotelSearchLastCheckin;
      document.frmSearchSingleHotel.checkin1.value = checkin.substr(8,2);
      document.frmSearchSingleHotel.checkin2.value = checkin.substr(0,7);    
    }
  }
  else  {
    checkin = accHotelSearchLastCheckin;
    document.frmSearchSingleHotel.checkin1.value = checkin.substr(8,2);
    document.frmSearchSingleHotel.checkin2.value = checkin.substr(0,7); 
  }
}

function changeSingleHotelSearchCheckout() {
  var nights = parseInt(document.frmSearchSingleHotel.nights.value, 10);  
  var checkin = document.frmSearchSingleHotel.checkin2.value + "-" + document.frmSearchSingleHotel.checkin1.value;
  var checkout = document.frmSearchSingleHotel.checkout2.value + "-" + document.frmSearchSingleHotel.checkout1.value;
  var tCheckin = makeJsDateFromDBDate(checkin);
  var tCheckout = makeJsDateFromDBDate(checkout);
  
  //alert("Checkin=" + tCheckin + "\nCheckout=" + tCheckout);
  
  if (validateDBDate(checkout) && checkout > checkin) {
    var diff = (tCheckout - tCheckin)/(24*3600*1000);
    if (diff <= 30) {
      document.frmSearchSingleHotel.nights.value = Math.ceil(diff); 
      accHotelSearchLastCheckout = checkout;
    }
    else  {
      checkout = accHotelSearchLastCheckout;
      document.frmSearchSingleHotel.checkout1.value = checkout.substr(8,2);
      document.frmSearchSingleHotel.checkout2.value = checkout.substr(0,7); 
    }
  }
  else  {
    checkout = accHotelSearchLastCheckout;
    document.frmSearchSingleHotel.checkout1.value = checkout.substr(8,2);
    document.frmSearchSingleHotel.checkout2.value = checkout.substr(0,7); 
  }
}

function changeSingleHotelSearchNights() {
  var nights = parseInt(document.frmSearchSingleHotel.nights.value, 10);  
  var checkin = document.frmSearchSingleHotel.checkin2.value + "-" + document.frmSearchSingleHotel.checkin1.value;
  var checkout = document.frmSearchSingleHotel.checkout2.value + "-" + document.frmSearchSingleHotel.checkout1.value;
  var tCheckin = makeJsDateFromDBDate(checkin);
  var tCheckout = makeJsDateFromDBDate(checkout);
  
  tCheckout.setTime(tCheckin.getTime() + ((24*3600*1000) * nights));
  var m = tCheckout.getMonth() + 1;
  var d = tCheckout.getDate();
  checkout = tCheckout.getFullYear() + "-" + (m>=10? "" : "0") + m + "-" + (d>10? "" : "0") + d;
  
  document.frmSearchSingleHotel.checkout1.value = checkout.substr(8,2);
  document.frmSearchSingleHotel.checkout2.value = checkout.substr(0,7);
  accHotelSearchLastCheckout = checkout;
}

