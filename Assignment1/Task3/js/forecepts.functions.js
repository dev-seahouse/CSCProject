var TEXT = 1;
var NUMBER = 2;
var EMAIL = 3;
var DATE = 4;
var DATETIME = 5;
var TIME = 6;


//AJAX
function GetXmlHttpObject() {
  var xmlHttp=null;
  try
    {
    // Firefox, Opera 8.0+, Safari
    xmlHttp=new XMLHttpRequest();
    }
  catch (e)
    {
    // Internet Explorer
    try
      {
      xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
      }
    catch (e)
      {
      xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    }
  return xmlHttp;
}

function doSort(sortBy) {
  formSortBy = document.getElementById('sortby');
  formSortDir = document.getElementById('sortdir');
  if (formSortDir.value == 'ASC' && formSortBy.value == sortBy) {
    newSortDir = 'DESC';
  }
  else {
    newSortDir = 'ASC';
  }
  formSortBy.value = sortBy;
  formSortDir.value = newSortDir;
  formSortDir.form.submit();
}

function findPos(obj) {
	var curleft = curtop = 0;
	if (obj.offsetParent) {
		curleft = obj.offsetLeft
		curtop = obj.offsetTop
		while (obj = obj.offsetParent) {
			curleft += obj.offsetLeft
			curtop += obj.offsetTop
		}
	}
	return [curleft,curtop];
}

function selectAll(elem) {
  var prefix = elem.name.substr(0, elem.name.length - 4);
  var postfix = elem.name.substr(elem.name.length - 4);
  var theForm = elem.form;
  if (postfix == '_all') { // This is the master controller
    for (i=0; i < theForm.length; i++) {
      if (theForm[i].type == 'checkbox' && 
          theForm[i].name.substr(0, prefix.length) == prefix &&
          theForm[i].name != prefix + '_all') {
        theForm[i].checked = elem.checked;    
      }
    }
  }
  else { // Slave
    // Find correct prefix
    var current = 0;
    var lastPos = 0;
    while (1) {
      lastPos = elem.name.indexOf('_', current);
      if (lastPos != -1) {
        current = lastPos + 1;
      }
      else {
        break;
      }
    }
    var prefix2 = elem.name.substr(0, current);
    if (elem.checked == false) {
      document.getElementById(prefix2 + 'all').checked = false;
    }
  }
}

function validateCheckboxGroup(theForm, prefix, desc) {
  var count = 0;
  for (i=0; i < theForm.length; i++) {
    if (theForm[i].type == 'checkbox' && 
        theForm[i].name.substr(0, prefix.length) == prefix &&
        theForm[i].name != prefix + '_all' &&
        theForm[i].checked == true) {
      count++; 
    }
  }
  if (count == 0) {
    alert('Please select a least one '+desc);
    return false;
  }
  return true;
}

function matchPasswords(obj1, obj2) {
  if (obj1.value != obj2.value) {
    alert('Passwords mismatch.');
    obj1.focus();
    return false;
  }
  return true;
}

function optionalEmail(obj, objName) {
  if (obj.value.search(/\S/)!=-1) { // Tak Kosong
    return validate_field(obj, objName, EMAIL);
  }
  return true;
}

function optionalDate(obj, objName) {
  if (obj.value.search(/\S/)!=-1) { // Tak Kosong
    return validate_field(obj, objName, DATE);
  }
  return true;
}

function validate_upload(fieldObj, fieldName) {
  if (fieldObj.value.search(/\S/) == -1) {
    alert('Please upload '+fieldName);
    fieldObj.focus();
    return false;
  }
  return true;
}

function validate_field(field_obj, field_name, field_type)  {
	//field_obj must be a valid form field
	//alert(field_obj);
	//alert(field_name);
	
    if (field_obj.value.search(/\S/)==-1)   {
        if (field_obj.type == "select-one")
          alert("Please select " + field_name);
        else
          alert("Please fill in " + field_name);
        field_obj.focus();
        return 0;
    }
    else    {
        //checking for email if needed
        if (field_type == EMAIL)    {
            if (field_obj.value.search(/^[^@ ]+@[^@ ]+\.[^@ \.]+$/) == -1)   {
                alert("Please fill in valid " + field_name);
                field_obj.focus();
                return 0;
            }
                return 1;
        }
        else if (field_type == NUMBER)  {
            if (isNaN(field_obj.value)) {
                alert("Please fill in valid " + field_name);
                field_obj.focus();
                return 0;
            }
            else
                return 1;
        }

		else if (field_type == DATE)    {
			if (field_obj.value.length == 10 &&
				field_obj.value.search(/(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d/) >= 0)    {
				parts = field_obj.value.split("index.html");
                d = parseInt(parts[0]);
                m = parseInt(parts[1]);
                y = parseInt(parts[2]);

                //get the wrong dates
                if ((d>=30 && m==2) ||
                    (d==31 && (m==2 || m==4 || m==6 || m==9 || m==11)) ||
                    (d==29 && m==2 && !(((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0))))   {
					alert("Please fill in valid " + field_name + "(dd/mm/yyyy)");
            		field_obj.focus();
					return 0;
                }
                else
                    return 1;
			}
			else    {
			    alert("Please fill in valid " + field_name + "(dd/mm/yyyy)");
                field_obj.focus();
				return 0;
			}
		}
		
		
		else if (field_type == TIME)    {
		    if (field_obj.value.length == 5)    {
		        parts = field_obj.value.split(":");
		        if (parts.length == 2)  {
		            h = parts[0];
		            m = parts[1];
		            if (h>=0 && h<=23 && m>=0 && m<=59)
						return 1;
					else    {
					    alert("Please fill in valid " + field_name + "(hh:mm)");
        				field_obj.focus();
						return 0;
					}
		        }
		        else    {
		            alert("Please fill in valid " + field_name + "(hh:mm)");
					field_obj.focus();
					return 0;
		        }
		    }
		    else    {
		        alert("Please fill in valid " + field_name + "(hh:mm)");
				field_obj.focus();
				return 0;
		    }
		}


		else if (field_type == DATETIME)    {
			parts = field_obj.value.split(" ");
			if (parts.length == 2)  {
			    dates = parts[0];
			    times = parts[1];
				
				if (dates.length == 10 &&
					dates.search(/(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d/) >= 0)  {
	                dateparts = dates.split("index.html");
	                d = parseInt(dateparts[0]);
	                m = parseInt(dateparts[1]);
	                y = parseInt(dateparts[2]);

	                //get the wrong dates
	                if ((d>=30 && m==2) ||
	                    (d==31 && (m==2 || m==4 || m==6 || m==9 || m==11)) ||
	                    (d==29 && m==2 && !(((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0))))   {
						alert("Please fill in valid " + field_name + "(dd/mm/yyyy hh:mm)");
                		field_obj.focus();
						return 0;
	                }
	                else    {
	                    //check time
						timeparts = times.split(":");
						if (timeparts.length == 2)  {
						    h = parseInt(timeparts[0]);
							m = parseInt(timeparts[1]);
							if (h>=0 && h<=23 && m>=0 && m<=59)
								return 1;
							else    {
							    alert("Please fill in valid " + field_name + "(dd/mm/yyyy hh:mm)");
                				field_obj.focus();
								return 0;
							}
						}
						else    {
                            alert("Please fill in valid " + field_name + "(dd/mm/yyyy hh:mm)");
                			field_obj.focus();
							return 0;
						}
					}
                }
                else    {
                    alert("Please fill in valid " + field_name + "(dd/mm/yyyy hh:mm)");
        			field_obj.focus();
					return 0;
                }
			}
			else    {
			    alert("Please fill in valid " + field_name + "(dd/mm/yyyy hh:mm)");
                field_obj.focus();
				return 0;
			}
		}

		else
		    return 1;
	}
}

function validate_optionalfield(field_obj, field_name, field_type)  {
  if (field_obj.value.search(/\S/)>= 0) {
    return validate_field(field_obj, field_name, field_type); 
  }
  else  {
    return 1;
  }
}

function validate_sel(obj, fieldname) {
  if (obj.value == 0 || obj.value == "0" || obj.value == "")  {
    alert("Please select " + fieldname);
    obj.focus();
    return false;  
  } 
  else
    return true;
}

function checkValidDate(d, m, y, field_name)    {
	if ((d>=30 && m==2) ||
	    (d==31 && (m==2 || m==4 || m==6 || m==9 || m==11)) ||
	    (d==29 && m==2 && !(((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0))))   {
		alert("Please fill in valid Date for " + field_name);
		return 0;
    }
    else
        return 1;
}


function compareTimeString(time1, time2)    {
//return 0 if time1 == time2
//return 1 if time1 > time2
//return -1 if time1 < time2
	if (time1 == time2)
	    return 0;

	//split the time first
	time1part = time1.split(":");
	time2part = time2.split(":");

	time1_h = time1part[0];
	time1_m = time1part[1];
	time2_h = time2part[0];
	time2_m = time2part[1];

	//compare
	if (time1_h > time2_h ||
		(time1_h == time2_h && time1_m > time2_m))
	    return 1;
	else
	    return -1;
}


function compareDateString(date1, date2)    {
//return 0 if time1 == time2
//return 1 if time1 > time2
//return -1 if time1 < time2
	if (date1 == date2)
	    return 0;

	//split the time first
	date1part = date1.split("index.html");
	date2part = date2.split("index.html");

	date1_d = date1part[0];
	date1_m = date1part[1];
	date1_y = date1part[2];
	date2_d = date2part[0];
	date2_m = date2part[1];
	date2_y = date2part[2];

	//compare
	if ((date1_y > date2_y) ||
	    (date1_y == date2_y && date1_m > date2_m) ||
	    (date1_y == date2_y && date1_m == date2_m && date1_d > date2_d))
	    return 1;
	else
	    return -1;
}

function namedPopup(windowName, url, win_width, win_height) {
	sw = screen.width;
	sh = screen.height;

	x = Math.ceil((sw - win_width) / 2);
	y = Math.ceil((sh - win_height) / 2);
	newWindow = window.open(url, windowName, "left=" + x + ",top=" + y + ",menubar=no,scrollbars=no,status=yes,resizable=yes,width=" + win_width + ",height=" + win_height);
  newWindow.focus();
  return newWindow;
}

function namedParentPopup(windowName, url, win_width, win_height) {
	sw = screen.width;
	sh = screen.height;

	x = Math.ceil((sw - win_width) / 2);
	y = Math.ceil((sh - win_height) / 2);
	newWindow = window.opener.open(url, windowName, "left=" + x + ",top=" + y + ",menubar=no,scrollbars=no,status=yes,resizable=yes,width=" + win_width + ",height=" + win_height);
  newWindow.focus();
  return newWindow;
}


function winpopup(url, win_width, win_height)  {
	sw = screen.width;
	sh = screen.height;

	x = Math.ceil((sw - win_width) / 2);
	y = Math.ceil((sh - win_height) / 2);
	window.open(url, "_blank", "left=" + x + ",top=" + y + ",menubar=no,scrollbars=yes,status=yes,resizable=yes,width=" + win_width + ",height=" + win_height);
}

function winpopup2(url, win_width, win_height)  {
	sw = screen.width;
	sh = screen.height;

	x = Math.ceil((sw - win_width) / 2);
	y = Math.ceil((sh - win_height) / 2);
	window.open(url, "_blank", "left=" + x + ",top=" + y + ",toolbar=yes,menubar=yes,scrollbars=yes,status=yes,resizable=yes,width=" + win_width + ",height=" + win_height);
}

function winpopup3(url, win_width, win_height)  {
	sw = screen.width;
	sh = screen.height;

	x = Math.ceil((sw - win_width) / 2);
	y = Math.ceil((sh - win_height) / 2);
	window.open(url, "_blank", "left=" + x + ",top=" + y + ",menubar=no,scrollbars=no,status=yes,resizable=no,width=" + win_width + ",height=" + win_height);
}

//restrict typing beyond maximum length. (used by textarea)
function restrict_length(obj, len)  {
  if (obj.value.length > len) {
    alert("Maximum Length Reach");
    obj.value = obj.value.substr(0, len);
  }
}

/*populator(data, sep1, sep2)*/
/*
sep1 = delimiter to seperate whole row
sep2 = delimiter to seperate key and value
example:
key1=>value1;key2=>value2;.....
where:
';' : sep1
'=>' : sep2

**note : jquery needed
*/
function populator(data, sep1, sep2){

	var myArr = new Array();
	var myArr2 = new Array();
	myArr = data.split(sep1);
	
	for(var i=0;i<myArr.length;i++)
	{
		var myArr2 = myArr[i].split(sep2);
		
		$('#'+myArr2[0]).val(myArr2[1]);
		
	}

}

function populator_validator(data, sep1, sep2){

	var myArr = new Array();
	var myArr2 = new Array();
	myArr = data.split(sep1);
	
	for(var i=0;i<myArr.length;i++)
	{
		var myArr2 = myArr[i].split(sep2);
		
		if(myArr2[1]!=""){
		//alert("-->"+myArr2[1]+"<--");
			$('#'+myArr2[0]).val(myArr2[1]);

			$('#'+myArr2[0]).removeClass('requiredAlert').removeClass('fontgrey');
		}else{
			$('#'+myArr2[0]).addClass('fontgrey').val('( Field required )');
		}
	}

}


