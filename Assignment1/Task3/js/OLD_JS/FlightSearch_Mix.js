// JavaScript Document
function SEARCH_onClick(objForm){
	if(jsFn_CheckValidValue(objForm) && goSubmit()){
		objForm.submit();
	}//if
}//jsfn

function TYPEOFTRIP_onClick(typeVal){
	document.getElementById("tbReturnDate_input").style.display = "none";
	switch(typeVal){
		case "O" :	
			break;
		case "R" :		
			document.getElementById("tbReturnDate_input").style.display = "";
			break;
	}//switch
}//jsfn

function jsFn_CheckValidValue(objForm){
	var typeOfTrip = jsFn_getRadioChecked(objForm.TYPEOFTRIP);
	if(typeOfTrip=="R"){
		if(!jsFn_ChkField(objForm.DEPARTCITY,"text","departure airport", 3, 50))	return false;
		if(!jsFn_ChkField(objForm.RETURNCITY,"text","arrival airport", 3, 50))	return false;

		if(!jsFn_ChkField(objForm.DEPARTDATE,"text","depart date", 3, 50))	return false;
		if(!jsFn_ChkField(objForm.RETURNDATE,"text","return date", 3, 50))	return false;
		
		if(objForm.DEPARTCITY.value.toLowerCase( ) == objForm.RETURNCITY.value.toLowerCase( ))
		{
			alert("Your cities of departure and arrival are the same. Please modify your request and try again.");
			return false;
		}

		if(gfPop.fDateDiff(objForm.START_DEPART_DATE.value, objForm.DEPARTDATE.value) < 0){
			alert("We can only accept dates that occur between  "+objForm.START_DEPART_DATE.value+" and "+objForm.TODAYADD9MONTH.value+". \nPlease enter a new depart date.");			
			objForm.DEPARTDATE.focus();	return false;
		}//if
		if(!jsFn_ChkStartFinishDate(objForm.DEPARTDATE, objForm.RETURNDATE, "Departure date before arrival date")){	
			objForm.DEPARTDATE.focus();	return false;
		}//if
		if(gfPop.fDateDiff(objForm.RETURNDATE.value, objForm.TODAYADD9MONTH.value) < 0){
			alert("We can only accept dates that occur between  "+objForm.START_DEPART_DATE.value+" and "+objForm.TODAYADD9MONTH.value+". \nPlease enter a new depart date.");			
			objForm.RETURNDATE.focus();	return false;
		}//if		
		if(!jsFn_checkNumberSeat(objForm.ADULTS, objForm.CHILDS, objForm.INFANTS)){
			objForm.ADULTS.focus();	return false;
		}//if
		return true;
	}else if(typeOfTrip == "O"){
		if(!jsFn_ChkField(objForm.DEPARTCITY,"text","departure airport", 3, 50))	return false;
		if(!jsFn_ChkField(objForm.RETURNCITY,"text","arrival airport", 3, 50))	return false;
		if(!jsFn_checkNumberSeat(objForm.ADULTS, objForm.CHILDS, objForm.INFANTS)){
			objForm.ADULTS.focus();	return false;
		}//if
		return true;			
	}//if
}//fn

function jsFn_checkNumberSeat(objAdult, objChild, objInfant){//for check seat number
	var adultNo = parseInt(objAdult.value);
	var childNo = parseInt(objChild.value);
	var infantNo = parseInt(objInfant.value);
	var total = adultNo+childNo;
	if(total<=9){
		if(infantNo<=adultNo){	
			return true;
		}else{
			alert("Infant  more than adult");	return false;
		}//if
	}else{
		alert("Seats more than 9");	return false;
	}//if
}//jsfn

function ADULTS_setOptions(frm, objAdult, objChild, objInfant) {
	var Maximum = 9;
    var adtultVal = objAdult.options[objAdult.selectedIndex].value;
	if(objInfant !=null ){
		objInfant.options.length = 0;
		for(q=0;q<=adtultVal;q++){
			 objInfant.options[objInfant.options.length] = new Option(q,q);
		}//for
	}//if
	if(objChild != null){
		objChild.options.length = 0;
		for(i=0 ; i <= Maximum ; i++){
			if(adtultVal == i) {
				objChild.options[objChild.options.length] = new Option(0,0);
				for(z=1;z <=(Maximum-i) ; z++){
				  objChild.options[objChild.options.length] = new Option(z,z);
				}//for
				break;
			}//if
		}//for

	}//if
}//fn

function jsFn_doOnload(){
	var objForm = document.AirSearchForm;
	var today = new Date();
	objForm.TODAY.value = today.getDate() +"/"+(today.getMonth()+1) +"/"+ today.getFullYear();
	objForm.TODAYADD9MONTH.value = gfPop.fDateAdd(objForm.TODAY.value, 0, 9, 0);
	objForm.START_DEPART_DATE.value = gfPop.fDateAdd(objForm.TODAY.value, 6, 0, 0);
	objForm.DEPARTDATE.value = objForm.START_DEPART_DATE.value;
	objForm.RETURNDATE.value = gfPop.fDateAdd(objForm.DEPARTDATE.value, 2, 0, 0);
	//alert(objForm.TODAY.value+"="+objForm.TODAYADD9MONTH.value+"="+objForm.START_DEPART_DATE.value);
}//fn
<!--
// The following script is used to hide the calendar whenever you click the document.
// When using it you should set the name of popup button or image to "popcal", otherwise the calendar won't show up.
document.onmousedown=function(e){
	var n=!e?self.event.srcElement.name:e.target.name;
	if (document.layers) {
		with (gfPop) var l=pageX, t=pageY, r=l+clip.width, b=t+clip.height;
		if (n!="popcal"&&(e.pageX>r||e.pageX<l||e.pageY>b||e.pageY<t)) gfPop.fHideCal();
		return routeEvent(e);	// must use return here.
	} else if (n!="popcal") gfPop.fHideCal();
}
if (document.layers) document.captureEvents(Event.MOUSEDOWN);
// This is just an example, no guarantee it working in all browsers. You may use your own.
//-->

//Check Re-Submit
<!--
submitted = false;
function goSubmit(){
	if(submitted==false){
		submitted = true;
		return true;
	}else{
		alert("Your request is processing (Please Wait).\nPlease Click Submit Once Only.\nClicking the Submit button multiple times will result in multiple charges on your credit card.");
		return false;
	}//if
}//jsfn
//-->
