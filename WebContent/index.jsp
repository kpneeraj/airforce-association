<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@page import="com.sainikwelfare.utils.StringUtils"%>
<%@page import="com.sainikwelfare.auth.User"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<script type="text/javascript" src="js/jquery-1.10.2.js"></script>
<script type="text/javascript" src="js/md5.js"></script>
<title>Insert title here</title>
</head>
<%
User user = (User)request.getSession(false).getAttribute("userContext");
if( user!=null && StringUtils.isNotEmpty(user.getUserid())  ){
	response.sendRedirect("maincontent.jsp");
} 
%>
<style type="text/css"> 
#logincontainer {
    position:fixed;
    top: 50%;
    left: 50%;
    width:288px;
    height:122px;
    margin-top: -9em; /*set to a negative number 1/2 of your height*/
    margin-left: -15em; /*set to a negative number 1/2 of your width*/
    border: 1px solid #ccc;
    background-color: #f3f3f3;
}
</style>
<script>

function submitForm(){
	var hashedPasswordString =$('#password').val();
	$.ajax({
		  type: 'POST',
		  url: "LoginServlet",
		  data: { userid: $('#username').val().toUpperCase(), password: hashedPasswordString },
		  success:  function(data) {
			if(data.redirect)
			{
				 window.location.href = data.redirect;
			}
			else
			{
				 $('#errormsg').html("Invalid credentials");
			}
		   },
		  dataType: "json"
		});
}
</script>
</head>
<body>

<div id="logincontainer" class="ui-corner-all">
<form method="POST"  style="margin-top:10px; margin-bottom:10px;">
<table align='center'>
	<tr><td>Username</td><td><input type="text" id="username"></td></tr>
	<tr><td>Password</td><td><input type="password" id="password"></td></tr>
	<tr><td><input type="text" id="key" style="display:none;"></td><td><input id="submitButton" class="ui-state-default ui-corner-all" value="Login" type="button" onClick="submitForm()"></td></tr>
</table>
<div id="errormsg"></div>
</form>
</div>
</body>
</html>