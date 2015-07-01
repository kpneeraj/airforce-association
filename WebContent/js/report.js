/**
 * Created by pneeraj on 22/4/14.
 */
var veteranstore;
 
$(function(){

	//hide all add and delte buttons
	if(getCookie("role")!="admin"){
		$(".dropdownbutton").hide();
		$(".dropdownbuttondelete").hide();
	}
	
	$body = $("body");
	$(document).on({
		 ajaxStart: function() { $body.addClass("loading");    },
		 ajaxStop: function() { $body.removeClass("loading"); }    
	});
	
	$.ajaxSetup ({
		cache: false
	});
    $("#tabs").tabs();
	
	$( "#querytable tr" ).each(function( index ) {
	 // console.log( index + ": " + $( this ).text() );
		if($(this).attr("field")!=undefined){
			var field = $(this).attr("field");
			var fieldprop = eval("reportQueryMetaData."+field);
			var selectBox = "<select>";
			var arrayLength = fieldprop.operators.length;
			for (var i = 0; i < arrayLength; i++) {
				selectBox+="<option value='"+fieldprop.operators[i]+"'>"+fieldprop.operators[i]+"</option>";
			}
			selectBox+=("</select>");
			$(this).find("td[column=\"control\"]").append(selectBox);
		}
	});
	
	function populateSelectBox(selectboxes, url, dataObject){
		//add a check to send request only if there is no select box entries
		$.ajax({
				//Assumption: the data has only the "service" name passed in the request
              type: 'GET',
              url: url,
              async:   false,
              cache:true,
              data: dataObject,
              success:  function(response) {
							  for(var selcount=0; selcount< selectboxes.length; selcount++){
								 $selectbox = selectboxes[selcount];
								 $('option', $selectbox).remove();
								 $selectbox.append("<option value=''>--Select--</option>");
								 for(var i=0;i<response.content.length;i++){
									$selectbox.append("<option value='"+response.content[i].value+"'>"+response.content[i].value+"</option>");
								 }
							  }
						},
              dataType: "json"
            });
	}
	
	populateSelectBox([$('#query_boardname')], "../BoardServlet",{action:"getBoardsList"});
	$('#query_service').change(function(){
		populateSelectBox([$('#query_trade')], "../commons",{service:$("#query_service").val(),action:"getTrades"})
	}
	)
	$( "#query_expirydate" ).datepicker({ dateFormat: "dd-mm-yy", yearRange: "1900:"+(new Date()).getFullYear(), changeMonth: true,  changeYear: true});
	$( "#query_dateofbirth" ).datepicker({ dateFormat: "dd-mm-yy", yearRange: "1900:"+(new Date()).getFullYear(), changeMonth: true,  changeYear: true});
	
})

Ext.onReady(function() {
	Ext.define('Service', {
			extend: 'Ext.data.Model',
			fields: [
				{name: 'email', type: 'string'},
				{name: 'board', type: 'string'},
				{name: 'service', type: 'string'},
				{name: 'corps', type: 'string'},
				{name: 'group', type: 'string'},
				{name: 'trade', type: 'string'},
				{name: 'serviceno', type: 'int'},
				{name: 'registrationno', type: 'string'},
				{name: 'rank', type: 'string'},
				{name: 'name', type: 'string'},
				{name: 'dateofbirth', type: 'date',dateReadFormat:'Y-m-d',dateWriteFormat:'d-m-Y'},
				{name: 'gender', type: 'string'},
				{name: 'dateenrolled', type: 'date',dateReadFormat:'Y-m-d',dateWriteFormat:'d-m-Y'},
				{name: 'wwii', type: 'string'},
				{name: 'operations', type: 'string'},
				{name: 'decoration', type: 'string'},
				{name: 'unitlastserved', type: 'string'},
				{name: 'datedischarged', type: 'date',dateReadFormat:'Y-m-d',dateWriteFormat:'d-m-Y'},
				{name: 'dischargereason', type: 'string'},
				{name: 'dateofdeath', type: 'date',dateReadFormat:'Y-m-d',dateWriteFormat:'d-m-Y'},
				{name: 'deathdetails', type: 'string'},
				{name: 'mcatdischarge', type: 'string'},
				{name: 'characteratdischarge', type: 'string'},
				{name: 'dischargebookno', type: 'string'},
				{name: 'pponumber', type: 'string'},
				{name: 'cda', type: 'string'},
				{name: 'servicepension', type: 'string'},
				{name: 'disabilitypension', type: 'string'},
				{name: 'percentageofdisability', type: 'string'},
				{name: 'pensionaccno', type: 'string'},
				{name: 'bankname', type: 'string'},
				{name: 'fathername', type: 'string'},
				{name: 'mothername', type: 'string'},
				{name: 'identificationmark', type: 'string'},
				{name: 'religion', type: 'string'},
				{name: 'caste', type: 'string'},
				{name: 'birthplace', type: 'string'},
				{name: 'birthstate', type: 'string'},
				{name: 'birthdistrict', type: 'string'},
				{name: 'qualificationincivil', type: 'string'},
				{name: 'qualificationinservice', type: 'string'},
				{name: 'reemploymentstatus', type: 'string'},
				{name: 'employer', type: 'string'},
				{name: 'monthlyincome', type: 'string'},
				{name: 'department', type: 'string'},
				{name: 'officecontactno', type: 'string'},
				{name: 'adharcardno', type: 'string'},
				{name: 'csdcardno', type: 'string'},
				{name: 'echscardno', type: 'string'},
				{name: 'afacardno', type: 'string'},
				{name: 'dateregistered', type: 'string',dateReadFormat:'Y-m-d',dateWriteFormat:'d-m-Y'},
				{name: 'permanentdoorno', type: 'string'},
				{name: 'permanenthousename', type: 'string'},
				{name: 'permanentstreet', type: 'string'},
				{name: 'permanentcity', type: 'string'},
				{name: 'permanentstate', type: 'string'},
				{name: 'permanentdistrict', type: 'string'},
				{name: 'permanentpolicestation', type: 'string'},
				{name: 'permanentpincode', type: 'string'},
				{name: 'communicationdoorno', type: 'string'},
				{name: 'communicationhousename', type: 'string'},
				{name: 'communicationstreet', type: 'string'},
				{name: 'communicationcity', type: 'string'},
				{name: 'communicationstate', type: 'string'},
				{name: 'communicationdistrict', type: 'string'},
				{name: 'communicationpolicestation', type: 'string'},
				{name: 'communicationpincode', type: 'string'},
				{name: 'communicationtelephone', type: 'string'},
				{name: 'communicationmobile', type: 'string'},
				{name: 'communicationemail', type: 'string'},
				{name: 'maritalstatus', type: 'string'},
				{name: 'dateofmarriage', type: 'string',dateReadFormat:'Y-m-d',dateWriteFormat:'d-m-Y'},
				{name: 'spousename', type: 'string'},
				{name: 'spouserelation', type: 'string'},
				{name: 'spousedateofbirth', type: 'string'},
				{name: 'spousedateofdeath', type: 'string',dateReadFormat:'Y-m-d',dateWriteFormat:'d-m-Y'},
				{name: 'spouseidentificationmark', type: 'string'},
				{name: 'spousequalification', type: 'string'},
				{name: 'isspouseemployed', type: 'string'},
				{name: 'spouseprofession', type: 'string'},
				{name: 'nextofkinname', type: 'string'},
				{name: 'nextofkinrelation', type: 'string'}
			]
		});
		
	veteranstore = Ext.create('Ext.data.Store', {
			model: 'Service',
			storeId:'serviceStore',
			proxy: {
			 type: 'ajax',
			 url: "../ReportServlet",
			 action:'getVeterans',
			 reader: {
				 type: 'json',
				 root: 'content'
			 },
			 actionMethods :{
				read : 'POST'
			 }
			},
			autoLoad: false
	}); 
	
	Ext.create('Ext.Panel', {
		title:'',
		renderTo: Ext.get("result"),
		items:[
			{
				xtype:'button',
				text: 'Search Query',
				 handler: function() {
					param = buildSerachParameters();
					if($.isEmptyObject(param)){
						alert('Select a search field.');
						return;
					}
					veteranstore.getProxy().extraParams = {
						"queryParams":JSON.stringify(param),
						"action":'getVeterans'
					};
					veteranstore.load();
				}
			},
			/*{
				xtype:'panel',
				html: '<div>Search errors come here</div>',
				height:'30',
				id:'seracherrorpanel'
			},*/

			{
				xtype:'grid',
				title: 'Query Results',
				margin:'10 0 0 0',
				id:'queryResultGrid',
				minHeight:250,
				maxHeight:300,
				store: Ext.data.StoreManager.lookup('serviceStore'),
				columns: [
					/*{
						xtype:'actioncolumn',
						hideable:false,
						text:'Include Long Roll',
						items: [{
							icon: 'images/gray/dd/drop-add.gif',  // Use a URL in the icon config
							tooltip: 'Yes',
							handler: function(grid, rowIndex, colIndex) {
								var rec = grid.getStore().getAt(rowIndex);
								alert("Edit " + rec.get('firstname'));
							}
						},{
							icon: 'images/gray/dd/drop-no.gif',
							tooltip: 'No',
							handler: function(grid, rowIndex, colIndex) {
								var rec = grid.getStore().getAt(rowIndex);
								alert("Terminate " + rec.get('firstname'));
							}
						}]
					},*/
					{dataIndex: 'board', text: "Board", hidden:false},
					{dataIndex: 'service', text: "Service", hidden:true},
					{dataIndex: 'corps', text: "Corps", hidden:true},
					{dataIndex: 'group', text: "Group", hidden:true},
					{dataIndex: 'trade', text: "Trade", hidden:false},
					{dataIndex: 'serviceno', text: "Service No",hideable:false, hidden:false},
					{dataIndex: 'registrationno', text: "Registration No", hidden:true},
					{dataIndex: 'rank', text: "Rank", hidden:false},
					{dataIndex: 'name', text: "Name",hideable:false, hidden:false},
					{dataIndex: 'dateofbirth', text: "Date of Birth",hideable:false, hidden:false, xtype: 'datecolumn', format: 'd-m-Y'},
					{dataIndex: 'gender', text: "Gender", hidden:true},
					{dataIndex: 'dateenrolled', text: "Date Enrolled", hidden:true ,xtype: 'datecolumn', format: 'd-m-Y'},
					{dataIndex: 'wwii', text: "WW II", hidden:true},
					{dataIndex: 'operations', text: "Operations", hidden:true},
					{dataIndex: 'decoration', text: "Decoration", hidden:true},
					{dataIndex: 'unitlastserved', text: "Unit Last served", hidden:true},
					{dataIndex: 'datedischarged', text: "Date Discharged", hidden:true,xtype: 'datecolumn', format: 'd-m-Y'},
					{dataIndex: 'dischargereason', text: "Discharge Reason", hidden:true},
					{dataIndex: 'dateofdeath', text: "Date of Death", hidden:true,xtype: 'datecolumn', format: 'd-m-Y'},
					{dataIndex: 'deathdetails', text: "Death Details", hidden:true},
					{dataIndex: 'mcatdischarge', text: "Discharge Category", hidden:true},
					{dataIndex: 'characteratdischarge', text: "Discharge Character", hidden:true},
					{dataIndex: 'dischargebookno', text: "Discharge Book No", hidden:true},
					{dataIndex: 'pponumber', text: "PPO No", hidden:true},
					{dataIndex: 'cda', text: "CDA", hidden:true},
					{dataIndex: 'servicepension', text: "Service Pension", hidden:true},
					{dataIndex: 'disabilitypension', text: "Disability Pension", hidden:true},
					{dataIndex: 'percentageofdisability', text: "Percentage of Disability", hidden:true},
					{dataIndex: 'pensionaccno', text: "Pension Acc no", hidden:true},
					{dataIndex: 'bankname', text: "Bank Name", hidden:true},
					{dataIndex: 'fathername', text: "Father Name", hidden:true},
					{dataIndex: 'mothername', text: "Mother Name", hidden:true},
					{dataIndex: 'identificationmark', text: "ID mark", hidden:true},
					{dataIndex: 'religion', text: "Religion", hidden:true},
					{dataIndex: 'caste', text: "caste", hidden:true},
					{dataIndex: 'birthplace', text: "Birth Place", hidden:true},
					{dataIndex: 'birthstate', text: "Birth State", hidden:true},
					{dataIndex: 'birthdistrict', text: "Birth District", hidden:true},
					{dataIndex: 'qualificationincivil', text: "Qualification in civil", hidden:true},
					{dataIndex: 'qualificationinservice', text: "Qualification in service", hidden:true},
					{dataIndex: 'reemploymentstatus', text: "Reemployment status", hidden:false},
					{dataIndex: 'employer', text: "Employer", hidden:true},
					{dataIndex: 'monthlyincome', text: "Monthly Income", hidden:true},
					{dataIndex: 'department', text: "Department", hidden:true},
					{dataIndex: 'officecontactno', text: "Office contact no", hidden:true},
					{dataIndex: 'adharcardno', text: "Adhar Card No", hidden:true},
					{dataIndex: 'csdcardno', text: "CSD Card No", hidden:true},
					{dataIndex: 'echscardno', text: "ECHS Card No", hidden:true},
					{dataIndex: 'afacardno', text: "SainikWelfare Reg No", hidden:true},
					{dataIndex: 'dateregistered', text: "Date Registered", hidden:true,xtype: 'datecolumn', format: 'd-m-Y'},
					{dataIndex: 'permanentdoorno', text: "Permanent DoorNo", hidden:true},
					{dataIndex: 'permanenthousename', text: "Permanent House Name", hidden:true},
					{dataIndex: 'permanentstreet', text: "Permanent street", hidden:true},
					{dataIndex: 'permanentcity', text: "Permanent City", hidden:true},
					{dataIndex: 'permanentstate', text: "Permanent state", hidden:true},
					{dataIndex: 'permanentdistrict', text: "Permanent district", hidden:true},
					{dataIndex: 'permanentpolicestation', text: "Permanent police station", hidden:true},
					{dataIndex: 'permanentpincode', text: "Permanent pincode", hidden:true},
					{dataIndex: 'communicationdoorno', text: "Communication door no", hidden:true},
					{dataIndex: 'communicationhousename', text: "Communication house name", hidden:true},
					{dataIndex: 'communicationstreet', text: "Communication street", hidden:true},
					{dataIndex: 'communicationcity', text: "Communication city", hidden:true},
					{dataIndex: 'communicationstate', text: "Communication state", hidden:true},
					{dataIndex: 'communicationdistrict', text: "Communication district", hidden:true},
					{dataIndex: 'communicationpolicestation', text: "Communication police station", hidden:true},
					{dataIndex: 'communicationpincode', text: "Communication pincode", hidden:true},
					{dataIndex: 'communicationtelephone', text: "Communication telephone", hidden:true},
					{dataIndex: 'communicationmobile', text: "Communication mobile", hidden:true},
					{dataIndex: 'communicationemail', text: "Communication email", hidden:true},
					{dataIndex: 'maritalstatus', text: "Marital Status", hidden:true},
					{dataIndex: 'dateofmarriage', text: "Date of Marriage", hidden:true,xtype: 'datecolumn', format: 'd-m-Y'},
					{dataIndex: 'spousename', text: "Spouse Name", hidden:true},
					{dataIndex: 'spouserelation', text: "Spouse Relation", hidden:true},
					{dataIndex: 'spousedateofbirth', text: "Spouse DOB", hidden:true},
					{dataIndex: 'spousedateofdeath', text: "Spouse Date of death", hidden:true,xtype: 'datecolumn', format: 'd-m-Y'},
					{dataIndex: 'spouseidentificationmark', text: "Spouse ID mark", hidden:true},
					{dataIndex: 'spousequalification', text: "Spouse Qualification", hidden:true},
					{dataIndex: 'isspouseemployed', text: "Is Spouse Employed?", hidden:true},
					{dataIndex: 'spouseprofession', text: "Spouse Profession", hidden:true},
					{dataIndex: 'nextofkinname', text: "Next of Kin", hidden:true},
					{dataIndex: 'nextofkinrelation', text: "Next of kin relation", hidden:true}
					
					
				]
			},{
				xtype:'button',
				text: 'Download as Excel',
				handler: function(){
					param = buildSerachParameters();
					downloadExcel(param);
				}
			},
		]
	})
})

function buildSerachParameters(){
		var queryParams=[]
		$( "#querytable tr" ).each(function( index ) {
	 // console.log( index + ": " + $( this ).text() );
		if($(this).attr("field")!=undefined){
			if($(this).find("input[type=\"checkbox\"]").is(':checked')){
				queryParam=new Object();
				queryParam.searchfield=$(this).attr("field");
				queryParam.operator = $(this).find("td[column=\"control\"] select").first().val();
				queryParam.value = $(this).find("td[column=\"value\"]").first().children().val();
				queryParams.push(queryParam);
			}
		}
	});
	return queryParams;
}


function downloadExcel(queryParam){
			//get columns visible in grid
			var headerCt = Ext.getCmp("queryResultGrid").getView().getHeaderCt();
			var columnInfo =[];
			for(var count=0;count<headerCt.headerCounter;count++){
				var column = new Object();
				column['dataIndex']=headerCt.getHeaderAtIndex(count).dataIndex;
				column['text']=headerCt.getHeaderAtIndex(count).text;
				column['visible']=headerCt.getHeaderAtIndex(count).isVisible();
				columnInfo.push(column);
			}
			ajax_download("../DownloadExcel", queryParam,columnInfo);
}

function ajax_download(url, data,columnInfo) {
    var $iframe,
        iframe_doc,
        iframe_html;

    if (($iframe = $('#download_iframe')).length === 0) {
        $iframe = $("<iframe id='download_iframe'" +
                    " style='display: none' src='about:blank'></iframe>"
                   ).appendTo("body");
    }

    iframe_doc = $iframe[0].contentWindow || $iframe[0].contentDocument;
    if (iframe_doc.document) {
        iframe_doc = iframe_doc.document;
    }

    iframe_html = "<html><head></head><body><form method='POST' action='" +
                  url +"'>" 

    //Object.keys(data).forEach(function(key){
        iframe_html += "<input type='hidden' name='queryParamString' value='"+JSON.stringify(data)+"'>";
        iframe_html += "<input type='hidden' name='columnInfoString' value='"+JSON.stringify(columnInfo)+"'>";

    //});

        iframe_html +="</form></body></html>";

    iframe_doc.open();
    iframe_doc.write(iframe_html);
    $(iframe_doc).find('form').submit();
}

