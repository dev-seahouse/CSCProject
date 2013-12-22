// JavaScript Document
//-----------------------------------------------
var MsgConfirmLogout = "Are you sure you want to logout?";
function jsFn_ConfirmLogout(){		return confirm(MsgConfirmLogout);		}//fn

//-----------------------------------------------
var MsgAlertForSearch = "Please input data for search.";
function jsFn_AlertForSearch(){	alert(MsgAlertForSearch);		}//fn

//-----------------------------------------------

var MsgConfirmInsert		= "Are you sure you want to save?";
var MsgConfirmUpdate	= "Are you sure you want to save change?";
var MsgConfirmDelete	= "Are you sure you want to delete?";
var MsgConfirmClose		= "Are you sure you want to close window?";
var MsgConfirmReset		= "Are you sure you want to reset form?";

function jsFn_ConfirmInsert(){		return confirm(MsgConfirmInsert);		}//fn
function jsFn_ConfirmUpdate(){	return confirm(MsgConfirmUpdate);	}//fn
function jsFn_ConfirmDelete(){		return confirm(MsgConfirmDelete);		}//fn
function jsFn_ConfirmClose(){		return confirm(MsgConfirmClose);		}//fn
function jsFn_ConfirmReset(){		return confirm(MsgConfirmReset);		}//fn
//-----------------------------------------------

var MsgDuplicateForInsert ="Can't Insert, Data is existing.";
var MsgDuplicateForUpdate	="Can't Update, Data is existing.";
var MsgDataInUseForDelete	="Can't Delete, Data is in use.";
var MsgWrongCondition = "Please Input,";

function jsFn_ChkErrorForAlert(errType, message, message2){
	var msgAlert = message?message:"";
	var msgAlertCondition = message2?message2:"";
	switch(errType.toLowerCase()){
		case "duplicateforinsert" : //DuplicateForInsert 			
			alert(MsgDuplicateForInsert);			break;
		case "duplicateforinsertnew" : //DuplicateForInsertNew
			alert(MsgDuplicateForInsertNew);			break;
		case "duplicateforupdate" : //DuplicateForUpdate
			alert(MsgDuplicateForUpdate);		break;
		case "datainusefordelete" : //DataInUseForDelete
			alert(MsgDataInUseForDelete);		break;
	}//switch
}//fn
//-----------------------------------------------

var msgAlert_IsValidDate="Date format is dd/MM/yyyy (ex. 02/10/2004)";
var msgAlert_IsValidTime="Time format is hh:mm (ex. 12:50)";
var msgAlert_IsValidUnitTime="Time format is hh:mm:ss (ex. 12:50:56)";
var msgKeyIn = "Please Input";
var msgChoose = "Please Select";

var gIsThaiYear=false;

//Return False เมื่อไม่มีค่า หรือไม่เท่ากับ Default ในกรณีที่เป็น Select 
//Return True เมื่อมีค่า
function jsFn_ChkField(obj, type, message, v1, v2){
	if(obj==null)	return false;
	var returnV=false;
	var msgAlert = message?message:"";
	switch(type.toLowerCase()){
		case "text" : //text, textarea, password, hidden
			//Option Param v1=Min ,v2=Max
			returnV = jsFn_ChkTEXT(obj, msgAlert, v1, v2);			break;
		case "money" :
			//Option Param v1=Min ,v2=Max
			returnV = jsFn_ChkMONEY(obj, msgAlert, v1, v2);	break;
		case "number" :
			//Option Param v1=Min ,v2=Max
			returnV = jsFn_ChkNUMBER(obj, msgAlert, v1, v2);	break;
		case "select" :
			//v1 is ค่าที่เป็น Default ของ select เช่น {กรุณาเลือก...}	
			//จะ return false ถ้า selected.value=v1
			returnV = jsFn_ChkSELECT(obj, msgAlert, v1);		break;
		case "checkbox" :
			returnV = jsFn_ChkCHECKBOX(obj, msgAlert);   	break;
		case "radio" :
			returnV = jsFn_ChkRADIO(obj, msgAlert);				break;
		case "email" :
			returnV = jsFn_ChkEMAIL(obj, msgAlert);					break;
		case "emails" :
			returnV = jsFn_ChkEMAILS(obj, msgAlert);				break;
		case "date" ://Format (dd/mm/yyyy)
			returnV = jsFn_ChkDATE(obj, msgAlert);					break;
		case "dateselect" ://Format (dd/mm/yyyy)
			returnV = jsFn_ChkDATE_Select(obj, msgAlert);		break;
		case "time" ://Time Format (hh:mm)
			returnV = jsFn_ChkTIME(obj, msgAlert);					break;
		case "unittime" ://Unit of Time (จำนวนชั่วโมง:จำนวนนาที:จำนวนวินาที)
			returnV = jsFn_ChkUnitTIME(obj, msgAlert);				break;
		case "file" : 
			returnV = jsFn_ChkTEXT(obj, msgAlert);					break;
		case "regexp" : 
			//v1=ValidationExpression สำหรับใช้ที่ RegExp
			returnV = jsFn_ChkRegExp(obj, msgAlert, v1);			break;
	}//switch
	return returnV;
}//fn
//-----------------------------------------------
//-----------------------------------------------

function jsFn_ChkRegExp(obj, msgAlert, vExpression){
	if(!jsFn_IsContainSomething(obj)){		
		if(msgAlert!=null && msgAlert.length >0 )	alert(msgAlert);
		try{obj.focus();}catch(er){}	return false;	
	}//if
	if(vExpression!=null){
		if(!jsFn_RegularExpressionValidatorEvaluateIsValid(obj.value, vExpression)){
			if(msgAlert!=null && msgAlert.length >0 )	alert(msgAlert);
			try{obj.focus();}catch(er){}	return false;				
		}//if
	}//if
	return true;
}//fn

function jsFn_ChkTEXT(obj, msgAlert, vMin, vMax){
	if(!jsFn_IsContainSomething(obj)){		
		if(msgAlert!=null && msgAlert.length >0 )	alert(msgKeyIn+" \""+msgAlert+"\" ");
		try{obj.focus();}catch(er){}	return false;	
	}//if	
	if(vMin!=null && vMax!=null){
		if(!jsFn_IsInRange(obj.value.length, parseInt(vMin), parseInt(vMax))){
			if(msgAlert!=null && msgAlert.length >0 )	alert(msgKeyIn+" \""+msgAlert+"\" length between "+vMin+" to "+vMax +" Characters");
			try{obj.focus();}catch(er){}	return false;				
		}//if
	}//if
	return true;
}//fn

function jsFn_ChkMONEY(obj, msgAlert, vMin, vMax){
	if(!jsFn_IsMoney(obj)){	
		if(msgAlert!=null && msgAlert.length >0 )	alert(msgKeyIn+" \""+msgAlert+"\" must valid format.");
		try{obj.focus();}catch(er){}	return false;	
	}//if
	if(vMin!=null && vMax!=null ){		
		if(!jsFn_IsInRange(obj.value, vMin, vMax)){
			if(msgAlert!=null && msgAlert.length >0 )	alert(msgKeyIn+" \""+msgAlert+"\" between "+vMin+" and "+vMax);
			try{obj.focus();}catch(er){}	return false;				
		}//if
	}//if
	return true;
}//fn

function jsFn_ChkNUMBER(obj, msgAlert, vMin, vMax){
	if(!jsFn_IsNumber(obj)){
		if(msgAlert!=null && msgAlert.length >0 )	alert(msgKeyIn+" \""+msgAlert+"\" is number only.");
		try{obj.focus();}catch(er){}	return false;	
	}//if
	if(vMin!=null && vMax!=null ){		
		if(!jsFn_IsInRange(obj.value, vMin, vMax)){
			if(msgAlert!=null && msgAlert.length >0 )	alert(msgKeyIn+" \""+msgAlert+"\" between "+vMin+" and "+vMax);
			try{obj.focus();}catch(er){}	return false;				
		}//if
	}//if
	return true;
}//fn

function jsFn_ChkSELECT(obj, msgAlert, v1){
	if(!jsFn_IsSelected(obj, v1)){
		if(msgAlert!=null && msgAlert.length >0 )	alert(msgChoose+" \""+msgAlert+"\" ");
		try{obj.focus();}catch(er){}	return false;	
	}//if
	return true;		
}//fn

function jsFn_ChkCHECKBOX(obj, msgAlert){
	if(!jsFn_IsChecked(obj)){	
		if(msgAlert!=null && msgAlert.length >0 )	alert(msgChoose+" \""+msgAlert+"\" ");
		if(obj.length) try{obj[0].focus();}catch(er){}
		else try{obj.focus();}catch(er){}	
		return false;	
	}//if
	return true;	
}//fn

function jsFn_ChkRADIO(obj, msgAlert){
	if(!jsFn_IsChecked(obj)){	
		if(msgAlert!=null && msgAlert.length >0 )	alert(msgChoose+" \""+msgAlert+"\" ");	
		if(obj.length) try{obj[0].focus();}catch(er){}
		else try{obj.focus();}catch(er){}	
		return false;	
	}//if
	return true;		
}//fn

function jsFn_ChkEMAIL(obj, msgAlert){
	if(!jsFn_IsContainSomething(obj)){
		if(msgAlert!=null && msgAlert.length >0 )	alert(msgKeyIn+" \""+msgAlert+"\"");
		try{obj.focus();}catch(er){}	return false;	
	}//if

	if(!jsFn_IsValidEmail(obj.value)){
		if(msgAlert!=null && msgAlert.length >0 )	alert(msgKeyIn+" \""+msgAlert+"\" must valid format.");
		try{obj.focus();}catch(er){}	return false;	
	}//if
	return true;
}//fn

function jsFn_ChkEMAILS(obj, msgAlert){
	if(!jsFn_IsContainSomething(obj)){
		if(msgAlert!=null && msgAlert.length >0 )	alert(msgKeyIn+" \""+msgAlert+"\"");
		try{obj.focus();}catch(er){}	return false;	
	}//if

	if(obj.value.indexOf(",")==-1){
		return jsFn_ChkEMAIL(obj, msgAlert);
	}else{
		var objVals = obj.value.split(",");
		for(var i=0; i<objVals.length; i++){
			objVals[i] = jsFn_trim(objVals[i]);
			if(!jsFn_IsValidEmail(objVals[i])){
				if(msgAlert!=null && msgAlert.length >0 )	alert(msgKeyIn+" \""+msgAlert+"\" must valid format.");
				try{obj.focus();}catch(er){}	return false;	
			}//if
		}//for
		return true;
	}//if
}//fn

function jsFn_ChkTIME(obj, msgAlert){
	if(!jsFn_IsValidTime(obj)){	
		if(msgAlert!=null && msgAlert.length >0 )	alert(msgKeyIn+" \""+msgAlert+"\"  must valid format.\n"+msgAlert_IsValidTime);
		obj.value="";	try{obj.focus();}catch(er){}	return false;	
	}//if
	return true;
}//fn

function jsFn_ChkUnitTIME(obj, msgAlert){
	if(!jsFn_IsValidUnitTime(obj)){	
		if(msgAlert!=null && msgAlert.length >0 )	alert(msgKeyIn+" \""+msgAlert+"\"  must valid format.\n"+msgAlert_IsValidUnitTime);
		obj.value="";	try{obj.focus();}catch(er){}	return false;	
	}//if
	return true;
}//fn

function jsFn_ChkDATE(obj, msgAlert){
	if(!jsFn_IsValidDate(obj)){	
		if(msgAlert!=null && msgAlert.length >0 )	alert(msgKeyIn+" \""+msgAlert+"\" \n"+msgAlert_IsValidDate);
		try{obj.focus();}catch(er){}	return false;	
	}//if
	return true;
}//fn

function jsFn_ChkDATE_Select(obj, msgAlert){
	if(!jsFn_IsValidDate(obj)){	
		if(msgAlert!=null && msgAlert.length >0 )	alert(msgAlert+" is invalid date. Please select again.");
		try{obj.focus();}catch(er){}	return false;	
	}//if
	return true;
}//fn

function jsFn_ChkStartFinishDate(objStartD, objFinishD, msgAlert){
	if(!jsFn_IsStartBeforeFinishDate(objStartD, objFinishD)){
		if(msgAlert!=null && msgAlert.length >0 )	alert(msgKeyIn+" \""+msgAlert+"\" \n"+msgAlert_IsValidDate);
		/*objStartD.value="";	objFinishD.value="";*/	try{objFinishD.focus();}catch(er){}	return false;	
	}//if
	return true;
}//fn

function jsFn_ChkStartFinishTime(objStartT, objFinishT, msgAlert){	
	if(!jsFn_IsStartBeforeFinishTime(objStartT, objFinishT)){
		if(msgAlert!=null && msgAlert.length >0 )	alert(msgKeyIn+" \""+msgAlert+"\" \n"+msgAlert_IsValidTime);
		/*objStartT.value="";	objFinishT.value="";	*/	try{objFinishT.focus();}catch(er){}	return false;	
	}//if
	return true;
}//fn
//-----------------------------------------------

function jsFn_FormatTIME(obj, msgAlert){
	if(obj.value.length==4 || obj.value.length==5){
		jsFn_ChgFormatTime(obj);
		if(!jsFn_IsValidTime(obj)){
			if(msgAlert!=null && msgAlert.length >0 )	alert(msgKeyIn+" \""+msgAlert+"\"  must valid format.\n"+msgAlert_IsValidTime);
			obj.value="";	try{obj.focus();}catch(er){}	return false;	
		}//if
	}//if
	return true;
}//

function jsFn_FormatUnitTIME(obj, msgAlert){//จำนวนชั่วโมง:จำนวนนาที:จำนวนวินาที
	if(obj.value.length==6 || obj.value.length==7){
		var ov=obj.value;
		if(ov.length==6 || ov.length==7 ||ov.length==8){
			ov = ov.replace(/:/g,'');
			ov = ov.substring(0,2)+":"+ov.substring(2,4)+":"+ov.substring(4,6);
			obj.value=ov;
		}//if		
		
		if(!jsFn_IsValidUnitTime(obj)){
			if(msgAlert!=null && msgAlert.length >0 )	alert(msgKeyIn+" \""+msgAlert+"\"  must valid format.\n"+msgAlert_IsValidUnitTime);
			obj.value="";	try{obj.focus();}catch(er){}	return false;	
		}//if
	}//if
	return true;
}//

function jsFn_FormatDATE(obj, msgAlert){
	jsFn_ChgFormatDate(obj);
	if(obj.value.length==10){
		if(!jsFn_IsValidDate(obj)){
			if(msgAlert!=null && msgAlert.length >0 )	alert(msgKeyIn+" \""+msgAlert+"\"  must valid format.\n"+msgAlert_IsValidDate);
			obj.value="";	try{obj.focus();}catch(er){}	return false;	
		}//if
	}
	return true;
}//

//-----------------------------------------------
function jsFn_IsValidUnitTime(obj){
	if(!jsFn_IsContainSomething(obj))		return false;	
	var ov=obj.value;	
	if(ov.length==8){
		var timePat=/^(\d{1,2}):(\d{1,2}):(\d{1,2})$/
		var ovArray=ov.match(timePat);
		if(ovArray!=null)
			return true;
		else
			return false;		
	}//if
}//fn

function jsFn_IsValidTime(obj){
	if(!jsFn_IsContainSomething(obj))		return false;	
	//hh  is an integer (0 thru 23)
	//mm is an integer (0 thru 59)
	var ov=obj.value;	
	if(ov.length==5){
		var timePat=/^(\d{1,2}):(\d{1,2})$/
		var ovArray=ov.match(timePat);
		if(ovArray!=null){
			if(ovArray[1]>23 || ovArray[2]>59)	return false;	else	return true;
		}else{
			return false;
		}//if	
	}//if
}//fn

// Check if obj contains a valid date of the form dd/mm/yyyy
function jsFn_IsValidDate(obj){
	if(!jsFn_IsContainSomething(obj))	return false;

	var indate=obj.value;
	var sdate = indate.split("index.html");
	var syear = Math.abs(sdate[2]);	
	if(syear-(gIsThaiYear?543:0) < 1900)	return false;
	var indateEN = (Math.abs(sdate[1]))+"/"+(Math.abs(sdate[0]))+"/"+(syear-(gIsThaiYear?543:0));
	var chkDate = new Date(Date.parse(indateEN));
	var cmpDate = (chkDate.getMonth()+1)+"/"+(chkDate.getDate())+"/"+(chkDate.getFullYear());	
	if(indateEN != cmpDate || cmpDate == "NaN/NaN/NaN")
		return false;
	else
		return true;	
}//fn

function jsFn_IsContainSomething(obj){
   if((obj.type == "text") || (obj.type == "textarea") || (obj.type == "password") || (obj.type == "hidden") || (obj.type == "file") ){
      if(obj.value=="")	return false;
	  obj.value = jsFn_trim(obj.value);
	  if(obj.value.length ==0)
		  return false;
	  else
		  return true;
   }//if	
}//fn

function jsFn_IsChecked(obj){
	if(obj.length){//have more one
		for(var i=0; i < obj.length ; i++){
			if(obj[i].checked)	return true;
		}//for
	}else{//have one
		if(obj.checked)	return true;
	}//if
	return false;
}//fn

function jsFn_IsSelected(obj, chkVal){
	with(obj){
		var length = options.length;				
		for(var i=0;i<length;i++){	
			if(options[i].selected){
				if(chkVal!=null){
					if(options[i].value!=chkVal)	return true;
				}else	return true;
			}//if
		}//for
	}//with
	return false;
}//fn

// Check for valid (ie containg "@", ".", 
// and more than 6 characters) email-address in Field
function jsFn_IsValidEmail(emailStr){
	var emailPat=/^(.+)@(.+)$/
	var specialChars="\\(\\)<>@,;:\\\\\\\"\\.\\[\\]";
	var validChars="\[^\\s" + specialChars + "\]";
	var quotedUser="(\"[^\"]*\")";
	var ipDomainPat=/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/
	var atom=validChars + '+';
	var word="(" + atom + "|" + quotedUser + ")";
	var userPat=new RegExp("^" + word + "(\\." + word + ")*$");
	var domainPat=new RegExp("^" + atom + "(\\." + atom +")*$");

	var matchArray=emailStr.match(emailPat)
	if (matchArray==null) {
		return false;
	}//if
	var user=matchArray[1];
	var domain=matchArray[2];
	if (user.match(userPat)==null) {
		return false;
	}//if
	var IPArray=domain.match(ipDomainPat);
	if (IPArray!=null) {
		  for (var i=1;i<=4;i++) {
			if (IPArray[i]>255) {
				return false;
			}//if
		}//for
		return true;
	}//if
	var domainArray=domain.match(domainPat);
	if (domainArray==null) {
		return false;
	}//if
	var atomPat=new RegExp(atom,"g");
	var domArr=domain.match(atomPat);
	var len=domArr.length;
	if (domArr[domArr.length-1].length<2 || 
		domArr[domArr.length-1].length>3) {
	   return false;
	}//if
	if (len<2) {
	   return false;
	}//if
	return true;
}//fn

// Check if Field contains only letters
function jsFn_IsOnlyLetters(obj){
	var Letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	for (i=0; i < obj.value.length; i++){
		if(Letters.indexOf(obj.value.charAt(i).toUpperCase()) == -1){	return false;	}
   }//for
   return true;
}//fn

function jsFn_IsMoney(obj){
	if(!jsFn_IsContainSomething(obj))
		return false;

	obj.value = obj.value.replace(/,/g,'');
	if(!isFinite(obj.value) || isNaN(parseFloat(obj.value))){
		obj.value="";	try{obj.focus();}catch(er){}
		return false;
	}else{
		return true;
	}//if		
}//fn

function jsFn_IsNumber(obj){
	if(!jsFn_IsContainSomething(obj))
		return false;

	MyStr = new String();
	MyStr = obj.value;
	for(var i=0 ; i<MyStr.length; i++)	{
		if(isNaN(parseInt(MyStr.charAt(i))))		{
			//alert("กรุณาใส่ข้อมูลเฉพาะตัวเลขเท่านั้น");
			obj.value = "";
			if(i != 0){			
				for(var j=0; j<i; j++)
					obj.value += MyStr.charAt(j); 
			}//if
			return false;
		}//if
	}//for
	return true;
}//fn

// Check if Field contains only digits in range Min to Max
function jsFn_IsInRange(objVal, Min, Max){
    if(objVal < Min || Max < objVal)
		return false;
	else
	    return true;
}//fn

function jsFn_IsStartBeforeFinishDate(objStartD, objFinishD){
	var startDs = objStartD.value.split("index.html");
	var finishDs = objFinishD.value.split("index.html");

	if(Math.abs(startDs[2]) < Math.abs(finishDs[2])){	return true;
	}else{
		if(Math.abs(startDs[2]) > Math.abs(finishDs[2])){	return false;	
		}else{
			if(Math.abs(startDs[2]) == Math.abs(finishDs[2])){
				if(Math.abs(startDs[1]) < Math.abs(finishDs[1])){	return true;
				}else{
					if(Math.abs(startDs[1]) > Math.abs(finishDs[1])){	return false;
					}else{
						if(Math.abs(startDs[1]) == Math.abs(finishDs[1])){
							if(Math.abs(startDs[0]) <= Math.abs(finishDs[0]))	return true;
							else	return false;
						}
					}//if
				}//if
			}//if
		}//if
	}//if
	return true;
}//fn

function jsFn_IsStartBeforeFinishTime(objStartT, objFinishT){
	//time format is hh:mm
	var stv = objStartT.value.split(":");	
	var ftv = objFinishT.value.split(":");
	if(Math.abs(stv[0]) > Math.abs(ftv[0])){	return false;
	}else{
		if(Math.abs(stv[0]) == Math.abs(ftv[0]))
			if(Math.abs(stv[1]) > Math.abs(ftv[1]))
				return false;
	}//if
	return true;
}//fn

//-----------------------------------------------
function jsFn_ChgFormatDate(obj){
	var ov=obj.value;
	ov = ov.replace(/\//g,'');
	if(ov.length==8){
		ov = ov.substring(0,2)+"/"+ov.substring(2,4)+"/"+ov.substring(4,8);
		obj.value=ov;
	}//if
}//

function jsFn_ChgFormatTime(obj){
	var ov=obj.value;
	if(ov.length==4 || ov.length==5){
		ov = ov.replace(/:/g,'');
		ov = ov.substring(0,2)+":"+ov.substring(2,4);
		obj.value=ov;
	}//if
}//

function jsFn_trim(s){
	while (s.substring(0,1) == ' ') {//left trim
		s = s.substring(1,s.length);
	}//while
	while (s.substring(s.length-1,s.length) == ' ') {//right trim
		s = s.substring(0,s.length-1);
	}//while
	return s;
}//fn

function handleEnter(objField, event) {
	var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
	if (keyCode == 13) {
		var i;
		for(i = 0; i < objField.form.elements.length; i++)
			if (objField == objField.form.elements[i])
				break;
		i = (i + 1) % objField.form.elements.length;
		objField.form.elements[i].focus();
		return false;
	}else
		return true;
}//fn

//Return Value of Radio Object that checked
function jsFn_getRadioChecked(obj){
	if(obj.length){//have more one
		for(var i=0; i < obj.length ; i++){
			if(obj[i].checked)	return obj[i].value;
		}//for
	}else{//have one
		if(obj.checked)	return obj.value;
	}//if
	return "";
}//fn

//Return Value of Select Object that selected
function jsFn_getSelectSelected(obj){
	if(obj.length){//have more one
		for(var i=0; i < obj.length ; i++){
			if(obj[i].selected)	return obj[i].value;
		}//for
	}else{//have one
		if(obj.selected)	return obj.value;
	}//if
	return "";
}//fn

function jsFn_RegularExpressionValidatorEvaluateIsValid(ValueToValidate, ValidationExpression) {
    var value = ValueToValidate;        
    var rx = new RegExp(ValidationExpression);
    var matches = rx.exec(value);
    return (matches != null && value == matches[0]);
}

