<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@page import="com.sainikwelfare.utils.StringUtils"%>
<%@page import="com.sainikwelfare.auth.User"%>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	
	<title>Air Force Association</title>
	<link rel="stylesheet" href="css/style.css" type="text/css" media="screen, projection"/>
	<!--[if lte IE 7]>
        <link rel="stylesheet" type="text/css" href="css/ie.css" media="screen" />
    <![endif]-->
			
	<script src="js/jquery-1.10.2.js"></script>
	<script type="text/javascript" language="javascript" src="js/jquery.dropdownPlain.js"></script>
	<script type="text/javascript" language="javascript" src="js/index.js"></script>

</head>

<% 
User user=null;
if(request.getSession(false)!=null) {
	user = (User)request.getSession(false).getAttribute("userContext");
	if( user==null || StringUtils.isEmpty(user.getUserid())  ){
		response.sendRedirect("index.jsp");
	}
}
 %>
<body>

	<div id="page-wrap">
	
        <img src="css/images/title.png" alt="Simple jQuery Dropdowns" />
	   	   
        <p>Under development</p>
		<div style="text-align:right;margin-top:-25px;">Welcome <%=user!=null?user.getUserid():"" %>!<a href="LogoutServlet"> Sign Out</a></div>

        <ul class="dropdown">
        	<%
        		if(user!=null && user.getRole().equals("admin")){
        			%>
        			<li><a href="javascript:void(0)" id="content/board_form.html">Branch</a></li>
        			<li><a href="javascript:void(0)" id="content/service.html">Veteran</a></li>
        			<li><a href="javascript:void(0)" id="content/user.html">User</a></li>
        			<li><a href="javascript:void(0)" id="content/report.html">Report</a></li>
        			<% 
        		}
        		else if(user!=null && user.getRole().equals("boardadmin")){
        			%>
        			<li><a href="javascript:void(0)" id="content/service.html">Veteran</a></li>
        			<li><a href="javascript:void(0)" id="content/report.html">Report</a></li>
        			<li><a href="javascript:void(0)" id="content/user.html">User</a></li>
        			<%
        		}
        	%>
		
        	<!--li><a href="javascript:void(0)" id="board_form">Board</a></li>
            <li><a href="javascript:void(0)" id="service">Veteran</a></li-->
        	<!--li><a href="#">Field Maintenance</a>
        		<ul class="sub_menu">
        			<li><a href="#">All-in-One Team Cart</a></li>
        			<li><a href="#">Air &amp; Electrical Reels</a></li>
        			 <li><a href="#">Field Drags</a></li>
        			 <li>
        				<a href="#">Field Marking Equipment</a>
        				<ul>
        					<li><a href="#">Batter's Box Templates</a></li>
        					<li><a href="#">Dryline Markers</a></li>
        					<li><a href="#">Field Paint</a></li>
        					<li><a href="#">Field Sprayers</a></li>
        					<li><a href="#">Stencils</a></li>
        				</ul>
        			 </li>
        			 <li>
        				<a href="#">Field Tarps</a>
        				<ul>
        					<li><a href="#">Area Tarps</a></li>
        					<li><a href="#">Growth Covers / Protectors</a></li>
        					<li><a href="#">Infield Tarps</a></li>
        					<li><a href="#">Tarp Accessories</a></li>
        				</ul>
        			 </li>
        			 <li><a href="#">Hand Tools</a></li>
        			 <li>
        				<a href="#">Irrigation, Hoses, Nozzles</a>
        				<ul>
        					<li><a href="#">Hoses &amp; Hose Reels</a></li>
        					<li><a href="#">Irrigation</a></li>
        					<li><a href="#">Nozzles</a></li>
        				</ul>
        			 </li>
        			 <li><a href="#">Layout &amp; Measurement Tools</a></li>
        			 <li><a href="#">Moisture Removal</a></li>
        			 <li><a href="#">Mound &amp; Home Plate Fortification</a></li>
        			 <li><a href="#">Mowers &amp; Stripers</a></li>
        			 <li><a href="#">Soil &amp; Enviornmental Management</a></li>
        			 <li><a href="#">Soil Amendments</a></li>
        			 <li><a href="#">Spreaders &amp; Sweepers</a></li>
        			 <li><a href="#"> - VIEW ALL - </a></li>
        		</ul>
        	</li-->
        </ul>
		<div id="maincontent" style="width:100%;height:75%">
			<iframe style="width:100%;height:100%;border:none;" onload=resizeIFrame("mainframe") src="content/home.html" id="mainframe"/>
		</div>
	</div>
</body>

</html>
