/***
Add jquery library before including this in your HTML file
@Author: Neeraj 
@CreatedDate: 12-Feb-2014
*/
function validate($eventObject){
		var errorSpan = $("span[for='"+$eventObject.attr('id')+"'][class='error']");
		$eventObject.css({border:"1px solid black"})
		errorSpan.html('');
		var errorString="";
		if(typeof($eventObject.attr("required"))!="undefined"){
			if($eventObject.val()=='' || $eventObject.val()==null){
				errorString = "This field cannot be empty";
				$eventObject.css({border:"1px solid red"})
				errorSpan.html(errorString)
				return;
			}
		}
		if($eventObject.val()!="" && typeof($eventObject.attr("email"))!="undefined"){
			 var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			  if(!re.test($eventObject.val())){
					errorString = "Invalid email id";
					$eventObject.css({border:"1px solid red"})
					errorSpan.html(errorString)
					return;
			  }
		}
		if($eventObject.val()!="" && typeof($eventObject.attr("number"))!="undefined"){
			var re = /^\+?(0|[1-9]\d*)$/;
			 if(!re.test($eventObject.val())){
					errorString = "This field can have only numbers";
					$eventObject.css({border:"1px solid red"})
					errorSpan.html(errorString)
					return;
			  }
		}
		if($eventObject.val()!="" && typeof($eventObject.attr("telephonenumber"))!="undefined"){
			var re = /^\+?([0-9]\d*)-*([0-9]\d*)$/;
			 if(!re.test($eventObject.val())){
					errorString = "Invalid format. Ex:011-123456";
					$eventObject.css({border:"1px solid red"})
					errorSpan.html(errorString)
					return;
			  }
		}
		if($eventObject.val()!="" && typeof($eventObject.attr("max"))!="undefined"){
			if($eventObject.val().length > parseInt($eventObject.attr("max"))){
					errorString = "Max length allowed is "+$eventObject.attr("max")+" characters";
					$eventObject.css({border:"1px solid red"})
					errorSpan.html(errorString)
					return;
			  }
		}
		if($eventObject.val()!="" && typeof($eventObject.attr("min"))!="undefined"){
			if($eventObject.val().length < parseInt($eventObject.attr("min"))){
					errorString = "Min length required is "+$eventObject.attr("min")+" characters";
					$eventObject.css({border:"1px solid red"})
					errorSpan.html(errorString)
					return;
			  }
		}
		if($eventObject.val()!="" && $eventObject.attr("type")=="file" && event.target.files){
			var fileExtension = ['jpeg', 'jpg'];
			 if ($.inArray(event.target.files[0].name.split('.').pop().toLowerCase(), fileExtension) == -1) {
                errorString = "Only jpg and jpeg files are allowed";
				$eventObject.css({border:"1px solid red"})
				errorSpan.html(errorString)
				return;
            }
		}
		if($eventObject.val()!="" && $eventObject.attr("type")=="file" && event.target.files){
			if (event.target.files[0].size > 150000) {
                errorString = "Max upload file size is 150kB";
				$eventObject.css({border:"1px solid red"})
				errorSpan.html(errorString)
				return;
            }
		}
		if($eventObject.val()!="" && typeof($eventObject.attr("textonly"))!="undefined"){
			var re = /^[A-Za-z\s]+$/;
			 if(!re.test($eventObject.val())){
					errorString = "Cannot accept numbers";
					$eventObject.css({border:"1px solid red"})
					errorSpan.html(errorString)
					return;
			  }
		}		
	return true;
}

function validateFormControls(formelementname){
		var controls = $("[formelement="+formelementname+"]");
		var valid = true;
		var pass=true;
		controls.each( function(){
			pass = validate($(this));
			if(valid) valid = pass;
		})
		return valid;
	}
	
function setCookie(cname,cvalue,exdays)
{
	var d = new Date();
	d.setTime(d.getTime()+(exdays*24*60*60*1000));
	var expires = "expires="+d.toGMTString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname)
{
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) 
	  {
	  var c = ca[i].trim();
	  if (c.indexOf(name)==0) return c.substring(name.length,c.length);
	  }
	return "";
}


function returnReadableDate(datestring){
	var d = Date.parse(datestring);
	if(d>0){
		var da = new Date(d);
		return (da.getDate()+"-"+da.getMonth()+"-"+da.getFullYear());
	}
}




