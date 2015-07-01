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

    var prevCur='';
    var nextCur='';
	
	$("#tabs").tabs({
		 activate: function( event, ui ) {
			if(ui.newPanel.attr("id") == "edittab")
			{
				loadGridData();
				populateSelectBox([$('#editboardName')], "../BoardServlet");
			}
		}
	});
	$("#Search").click(function(){
		prevCur='';
		nextCur='';
		loadGridData();
	})
	$("#boardName").focusout(function(){$(this).val($(this).val().toUpperCase().trim())});
	
	$("#boardStatedropdown").click(function(){
			displayaddnewformentrydialog($("#boardState"),{action:"addState"},"State","../commons");			
	})
	
	$("#boardStatedropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#boardState"),{action:"deleteState"},"State","../commons");			
	})
	
	$("#editboardStatedropdown").click(function(){
			displayaddnewformentrydialog($("#editboardState"),{action:"addState"},"State","../commons");			
	})
	
	$("#editboardStatedropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#editboardState"),{action:"deleteState"},"State","../commons");			
	})
	
	$("#boardDistrictdropdown").click(function(){
			displayaddnewformentrydialog($("#boardDistrict"),{state:$("#boardState").val(),action:"addDistrict"},"District","../commons");			
	})
	
	$("#boardDistrictdropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#boardDistrict"),{state:$("#boardState").val(),action:"deleteDistrict"},"District","../commons");			
	})

	$("#editboardDistrictdropdown").click(function(){
			displayaddnewformentrydialog($("#editboardDistrict"),{state:$("#editboardState").val(),action:"addDistrict"},"District","../commons");			
	})
	
	$("#editboardDistrictdropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#editboardDistrict"),{state:$("#editboardState").val(),action:"deleteDistrict"},"District","../commons");			
	})
	
	$(".dropdownbutton").button({ icons: { primary: "ui-icon-circle-plus" } });
	$(".dropdownbuttondelete").button({ icons: { primary: "ui-icon-circle-minus" } });
	
    getStates();
	
	$("[formelement='addboard']").focusout(function(){validate($(this)) });
	$("[formelement='editboard']").focusout(function(){validate($(this)) });

    $("#boardState").change(function(){getDistricts('boardState','boardDistrict')})
	getDistricts('boardState','boardDistrict');
	
    $("#editboardState").change(function(){getDistricts('editboardState','editboardDistrict')})
	getDistricts('editboardState','editboardDistrict');
	
	$("#submitbutton").click(submitBoard);
	
	$("#clearbutton").click(clearForm);
	
	$("#editclearbutton").click(function(){
		$('#editboardName').val('');
		$('#editboardAddress').val('');
		$('#editboardDistrict').val('');
		$('#editboardState').val('');
        $('#editpincode').val('');
        $('#editcontactno').val('');
        $('#editemail').val('');
        $('#editdirector').val('');
	});
	
	$("#editsubmitbutton").click(function(){
		updateBoard($('#editboardName').val());
	});
	
	initializeSearchControls("searchboards", boardtableinfo);
		
	$("#deletebutton").click(function(){
		$( "#deleteconfirm" ).dialog(
		{
			buttons: {
			"Ok": function() {
				$.ajax({
					type: 'POST',
					url: "../BoardServlet",
					data: {
							boardName: $('#editboardName').val(),
							action:'deleteBoard'
						  },
					success: function(response) {
							if(response.status=="success"){
									alert(response.content);
									$('#editboardName').val('');
									$('#editboardAddress').val('');
									$('#editboardDistrict').val('');
									$('#editboardState').val('');
                                    $('#editpincode').val('');
                                    $('#editcontactno').val('');
                                    $('#editemail').val('');
                                    $('#editdirector').val('');
									loadGridData();
									
							}
							else if(response.status=="failure") {
								alert(response.error);
							}
						},
					dataType: "json"
				});
				$( this ).dialog( "close" );
				},
			"Cancel":function(){
				$( this ).dialog( "close" );
				}
			},
			height: 150, 
			width:375,
			modal:true
		});
	});
	
	/* Function to send add request */
	function submitBoard(){
		if(validateFormControls("addboard")){
			$.ajax({
				type: 'POST',
				url: "../BoardServlet",
				data: {
						boardName: $('#boardName').val(),
						boardAddress: $('#boardAddress').val(),
						boardDistrict: $('#boardDistrict').val(),
						boardState: $('#boardState').val(),
						pincode:$('#pincode').val(),
						contactno:$('#contactno').val(),
						email:$('#email').val(),
						director:$('#director').val(),
						action:'addBoard'
						},
				success: function(response) {
						if(response.status=="success"){
							alert('Branch successfully added');
							clearForm();
						}
						else if(response.status=="failure") {
							alert(response.error);
						}
					},
				dataType: "json"
			});
		}
		else{
			alert("Errors exist in form");
		}

	}

    function getStates(){
        $.ajax({
              type: 'POST',
              url: "../commons",
              async:   false,
              data:{
            	  action:"getStates"
              },
              cache:true,
              success:  function(response) {
                 $('option', $('#boardState')).remove();
                 $('option', $('#editboardState')).remove();
				  $('#boardState').append("<option value=''>--Select--</option>");
                  $('#editboardState').append("<option value=''>--Select--</option>");
				 for(var i=0;i<response.content.length;i++){
                   $('#boardState').append("<option value='"+response.content[i].value+"'>"+response.content[i].value+"</option>");
                    $('#editboardState').append("<option value='"+response.content[i].value+"'>"+response.content[i].value+"</option>");
                 }
               },
              dataType: "json"
            });
	}

    function getDistricts(source, id){
        $.ajax({
              type: 'POST',
              url: "../commons",
              async:   false,
              cache:true,
              data:{
            	  action:"getDistricts",
                  state: $("#"+source).val()
              },
              success:  function(response) {
                 $('option', $('#'+id)).remove();
				 $('#'+id).append("<option value=''>--Select--</option>");
                 for(var i=0;i<response.content.length;i++){
                    //$('#state').append(new Option(data.states[i], data.states[i], false, false));
                    $('#'+id).append("<option value='"+response.content[i].value+"'>"+response.content[i].value+"</option>");
                 }
               },
              dataType: "json"
            });
	}
	
	function populateSelectBox(selectboxes, url, dataObject){
		//add a check to send request only if there is no select box entries
		$.ajax({
              type: 'POST',
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

	
	function clearForm(){
		$('#boardName').val('');
		$('#boardAddress').val('');
		$('#boardDistrict').val('');
		$('#boardState').val('');
        $('#pincode').val('');
        $('#contactno').val('');
        $('#email').val('');
        $('#director').val('');
	}
	
	/*Initialise the edit form controls*/
	function loadGridData(){
       var params=[]
	   if($("#searchboards_value").val()){
        	params =[ {
				"searchfield":$("#searchboards_searchin").val(),
				"operator":$("#searchboards_operator").val(),
				"value":$("#searchboards_value").val()
			}];
        }
	   
	   boardstore.getProxy().extraParams = {
						"queryparam":JSON.stringify(params),
						"action":'getBoards'
					};
		boardstore.load();
	}
	
	function getBoardDetail( boardId ) {
		$.ajax({
			type: 'POST',
			url: "../BoardServlet",
			data: {
					action:'getBoardDetail',
					boardName: boardId
				},
			success: function(response) {
				if(response.status=="success")
					{
                        $('#editboardName').val(response.content.boardname);
						$('#editboardAddress').val(response.content.address);
						$('#editboardState').val(response.content.state);
                        //fetch Districts for the current state
                        getDistricts('editboardState','editboardDistrict');
                        $('#editboardDistrict').val(response.content.district);
                        $('#editpincode').val(response.content.pincode);
                        $('#editcontactno').val(response.content.contactno);
                        $('#editemail').val(response.content.email);
                        $('#editdirector').val(response.content.director);

					}
				else if(response.status=="failure") 
					{
						alert(response.error);
					}
			},
			dataType: "json"
		});
    }
	
	/* Function to send update request */
	function updateBoard(){
		if(validateFormControls("editboard")){
			$.ajax({
				type: 'POST',
				url: "../BoardServlet",
				data: {
						boardName: $('#editboardName').val(),
						boardAddress: $('#editboardAddress').val(),
						boardDistrict: $('#editboardDistrict').val(),
						boardState: $('#editboardState').val(),
						pincode:$('#editpincode').val(),
						contactno:$('#editcontactno').val(),
						email:$('#editemail').val(),
						director:$('#editdirector').val(),
						action:"updateBoard",
						},
				success: function(response) {
						if(response.status=="success"){
							alert('Board successfully updated');
							loadGridData("next");
						}
						else if(response.status=="failure") {
							alert(response.error);
						}
					},
				dataType: "json"
		});
		}
		else{
			alert("Errors exist in form");
		}

	}

	function displayaddnewformentrydialog($selectbox,dataObject,field, url){
		$("#addnewformentry table tr[data='false']:not([template]").remove();
		$("#addnewformentryErrorDiv").html('');
		for(fld in dataObject){
			if(fld!="action"){
				var tr = $("#addnewformentry table tr[template]").first().clone();
				tr.find("td").first().html(fld);
				tr.find("td input").val(dataObject[fld]);
				tr.removeAttr('template');
				tr.show();
				$("#addnewformentry table tr:last").before(tr);
			}
		}
		
		$("#addfield").html(field);
		$("#addfieldvalue").val('');
		
		$("#addnewformentry").dialog({
			modal:true,
			title: 'Add new ' + field,
			buttons: {
			"Add": function() {
				dataObject.name = $("#addfieldvalue").val().trim();
				var re = /^[A-Za-z\s]+$/;
				if(dataObject.name.trim()!=''){//if(re.test(dataObject.name)){
					 $.ajax({
							type: 'POST',
							url: url,
							data: dataObject,
							success: function(response) {
									if(response.status=="success"){
										$selectbox.append("<option value='"+$("#addfieldvalue").val()+"'>"+$("#addfieldvalue").val()+"</option>")
										alert(field + ' successfully added');
										$("#addnewformentry").dialog("destroy");
									}
									else if(response.status=="failure") {
										alert(response.error);
									}
									$("#addfieldvalue").val('');
									
								},
							dataType: "json"
						});
			 }
			 else {
				 $("#addnewformentryErrorDiv").html("Invalid input.")
			 }
			},
			Cancel: function() {
				$( this ).dialog("destroy");
			}
		}
		});
	}
	
	function displaydeletenewformentrydialog($selectbox,dataObject,field, url){
		$("#deletenewformentry table tr[data='false']:not([template]").remove();
		for(fld in dataObject){
			if(fld!="action"){
				var tr = $("#deletenewformentry table tr[template]").first().clone();
				tr.find("td").first().html(fld);
				tr.find("td input").val(dataObject[fld].trim());
				tr.removeAttr('template');
				tr.show();
				$("#deletenewformentry table tr:last").before(tr);
			}
			
		}
		
		
		$("#deletefield").html(field);
		$("#deletefieldvalue").val($selectbox.val());
		
		$("#deletenewformentry").dialog({
			modal:true,
			title: 'Delete ' + field,
			buttons: {
			"Delete": function() {
				dataObject.name = $("#deletefieldvalue").val();
				$.ajax({
						type: 'POST',
						url: url,
						data: dataObject,
						success: function(response) {
								if(response.status=="success"){
									var option = $selectbox.find("option[value='" +$("#deletefieldvalue").val() +"']");
									if(option!=null){
										option.remove();
									}
									alert(field + ' successfully deleted');
									$("#deletenewformentry").dialog("destroy");
									
								}
								else if(response.status=="failure") {
									alert(response.error);
								}
								$("#deletefieldvalue").val('');
								
							},
						dataType: "json"
					});
			},
			Cancel: function() {
				$( this ).dialog("destroy");
			}
		}
		});
	}
	
	function initializeSearchControls(searchgroupid, tableinfo){
		var $searchtable = $("#"+searchgroupid);
		var $searchin = $("#"+searchgroupid+"_searchin");
		$searchin.children().remove();
		$searchin.append("<option value=''>--Select--</option>");
		for(var field in tableinfo){
			var $option = $("<option value='"+field+"'>"+tableinfo[field].displayname+"</option>");
			$searchin.append($option);
		}
		$searchin.change(function(){
			$searchtable.find("tr[datarow='true']").remove();
			var optionvalue = $(this).val();
			if(optionvalue!=""){
				var $searchoperator = $("#"+searchgroupid+"_operator");
				$searchoperator.children().remove();
				for(var operator in tableinfo[optionvalue].operators){
					var $option = $("<option value='"+tableinfo[optionvalue].operators[operator]+"'>"+tableinfo[optionvalue].operators[operator]+"</option>");
					$searchoperator.append($option);
				}
				var newRow = $("<tr></tr>");
				newRow.attr("datarow","true");
				if(optionvalue=="state"){
					newRow.append("<td>State</td>");
					var col = $("<td></td>");
					newRow.append(col);
					var statelist = $("<select id='searchboards_value'></select>")
					var options = $("#editboardState").children();
					$.each(options, function( index, element ) {
						statelist.append($(element).clone())
					});
					col.append(statelist);
					$searchtable.append(newRow);
				}
				else if(optionvalue=="district"){
					newRow.append("<td>State</td>");
					var col = $("<td></td>");
					newRow.append(col);
					var statelist = $("<select id='searchboards_state'></select>")
					var options = $("#editboardState").children();
					$.each(options, function( index, element ) {
						statelist.append($(element).clone())
					});
					col.append(statelist);
					$searchtable.append(newRow);
					
					newRow = $("<tr></tr>");
					newRow.attr("datarow","true");
					newRow.append("<td>District</td>");
					var col = $("<td></td>");
					newRow.append(col);
					col.append("<select id='searchboards_value'></select>");
					
					statelist.change(function(){
						populateSelectBox([$("#searchboards_value")],  "../commons",{action:"getDistricts",state:$("#searchboards_state").val()})
					})
					$searchtable.append(newRow);
				}
				else{
					for(var control in tableinfo[optionvalue].controls){
						var control = $(tableinfo[optionvalue].controls[control]);
						newRow.append("<td>"+control.attr('label')+"</td>");
						newRow.append(control);
						$searchtable.append(newRow);
					}
				}
			}
		})
	}
	
	
	
Ext.onReady(function() {
	Ext.define('BoardModel', {
			extend: 'Ext.data.Model',
			fields: [
				{name: 'boardname', type: 'string'},
				{name: 'state', type: 'string'},
				{name: 'district', type: 'string'},
				{name: 'pincode', type: 'string'},
				{name: 'contactno', type: 'string'},
				{name: 'email', type: 'string'},
				{name: 'director', type: 'string'}
			]
		});
		
	boardstore = Ext.create('Ext.data.Store', {
			model: 'BoardModel',
			storeId:'boardStore',
			proxy: {
			 type: 'ajax',
			 url: "../BoardServlet",
			 action:'getBoards',
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
		renderTo: Ext.get("boardstable"),
		items:[
			{
				xtype:'grid',
				title: 'Query Results',
				header:false,
				id:'boardResultGrid',
				minHeight:210,
				maxHeight:211,
				store: Ext.data.StoreManager.lookup('boardStore'),
				columns: [
					{dataIndex: 'boardname', text: "Branch", hidden:false},
					{dataIndex: 'state', text: "State", hidden:false},
					{dataIndex: 'district', text: "district", hidden:false},
					{dataIndex: 'pincode', text: "pincode", hidden:true},
					{dataIndex: 'contactno', text: "contactno", hidden:false},
					{dataIndex: 'email', text: "Email", hidden:false},
					{dataIndex: 'director', text: "Director", hidden:false},
				],
				listeners:{
					itemclick:function(grid, record, item, index, e, eOpts){
						getBoardDetail( record.get("boardname") ) ;
					}
				}
			}
		]
	})
})
	
})