/**
 * Created by pneeraj on 6/1/14.
 */
$(function(){

	//hide all add and delte buttons
	if(getCookie("role")!="admin"){
		$(".dropdownbutton").hide();
		$(".dropdownbuttondelete").hide();
	}
	
	$('#uploadphotoform').fileUpload({
		uploadData    : { 'extra_data' : 'blah' }, // Append POST data to the upload
		submitData    : { 'moar_extra_data' : 'blah' }, // Append POST data to the form submit
		uploadOptions : { dataType : 'json' }, // Customise the parameters passed to the $.ajax() call on uploads. You can use any of the normal $.ajax() params
		submitOptions : { dataType : 'json' }, // Customise the parameters passed to the $.ajax() call on the form submit. You can use any of the normal $.ajax() params
		before        : function(){}, // Run stuff before the upload happens
		beforeSubmit  : function(uploadData){ console.log(uploadData); return true; }, // access the data returned by the upload return false to stop the submit ajax call
		success       : function(data, textStatus, jqXHR){ console.log(data); }, // Callback for the submit success ajax call
		error         : function(jqXHR, textStatus, errorThrown){ console.log(jqXHR); }, // Callback if an error happens with your upload call or the submit call
		complete      : function(jqXHR, textStatus){ console.log(jqXHR); } // Callback on completion
	});
	
	$('#uploadfamilyphotoform').fileUpload({
		uploadData    : { 'extra_data' : 'blah' }, // Append POST data to the upload
		submitData    : { 'moar_extra_data' : 'blah' }, // Append POST data to the form submit
		uploadOptions : { dataType : 'json' }, // Customise the parameters passed to the $.ajax() call on uploads. You can use any of the normal $.ajax() params
		submitOptions : { dataType : 'json' }, // Customise the parameters passed to the $.ajax() call on the form submit. You can use any of the normal $.ajax() params
		before        : function(){}, // Run stuff before the upload happens
		beforeSubmit  : function(uploadData){ console.log(uploadData); return true; }, // access the data returned by the upload return false to stop the submit ajax call
		success       : function(data, textStatus, jqXHR){ console.log(data); }, // Callback for the submit success ajax call
		error         : function(jqXHR, textStatus, errorThrown){ console.log(jqXHR); }, // Callback if an error happens with your upload call or the submit call
		complete      : function(jqXHR, textStatus){ console.log(jqXHR); } // Callback on completion
	});
	
	$body = $("body");
	$(document).on({
		 ajaxStart: function() { $body.addClass("loading");    },
		 ajaxStop: function() { $body.removeClass("loading"); }    
	});
	
	$.ajaxSetup ({
		cache: false
	});
    $("#tabs").tabs({
             activate: function( event, ui ) {
                if(ui.newPanel.attr("id") == "edittab")
                {
                        loadGridData();
                }
            }
    })
	
	$("#editreemploymentstatus1, #editreemploymentstatus2").change(function(){
		if($(this).val()=="Un-Employed"){
			$("#editemployer").prop("disabled",true);
			$("#editmonthlyincome").prop("disabled",true);
			$("#editdepartment").prop("disabled",true);
			$("#editofficecontactno").prop("disabled",true);
		}
		else{
			$("#editemployer").prop("disabled",false);
			$("#editmonthlyincome").prop("disabled",false);
			$("#editdepartment").prop("disabled",false);
			$("#editofficecontactno").prop("disabled",false);
		}
	})
	
	$("#reemploymentstatus1, #reemploymentstatus2").change(function(){
		if($(this).val()=="Un-Employed"){
			$("#employer").prop("disabled",true);
			$("#monthlyincome").prop("disabled",true);
			$("#department").prop("disabled",true);
			$("#officecontactno").prop("disabled",true);
		}
		else{
			$("#employer").prop("disabled",false);
			$("#monthlyincome").prop("disabled",false);
			$("#department").prop("disabled",false);
			$("#officecontactno").prop("disabled",false);
		}
	})
	
	$("#editmaritalstatus1, #editmaritalstatus2").change(function(){
		if($(this).val()!="Married"){
			$("#editdateofmarriage").prop("disabled",true);
			$("#editspousename").prop("disabled",true);
			$("input[name='editspouserelation']").prop("disabled",true);
			$("#editspousedob").prop("disabled",true);			
			$("#editspouseidentificationmark").prop("disabled",true);
			$("#editspousequalification").prop("disabled",true);
			$("input[name='editisspouseemployed']").prop("disabled",true);
			$("#editspouseprofession").prop("disabled",true);

		}
		else{
			$("#editdateofmarriage").prop("disabled",false);
			$("#editspousename").prop("disabled",false);
			$("input[name='editspouserelation']").prop("disabled",false);
			$("#editspousedob").prop("disabled",false);
			$("#editspouseidentificationmark").prop("disabled",false);
			$("#editspousequalification").prop("disabled",false);
			$("input[name='editisspouseemployed']").prop("disabled",false);
			$("#editspouseprofession").prop("disabled",false);
		}
	})
	
	$("#maritalstatus1, #maritalstatus2").change(function(){
		if($(this).val()!="Married"){
			$("#dateofmarriage").prop("disabled",true);
			$("#spousename").prop("disabled",true);
			$("input[name='spouserelation']").prop("disabled",true);
			$("#spousedob").prop("disabled",true);			
			$("#spouseidentificationmark").prop("disabled",true);
			$("#spousequalification").prop("disabled",true);
			$("input[name='isspouseemployed']").prop("disabled",true);
			$("#spouseprofession").prop("disabled",true);

		}
		else{
			$("#dateofmarriage").prop("disabled",false);
			$("#spousename").prop("disabled",false);
			$("input[name='spouserelation']").prop("disabled",false);
			$("#spousedob").prop("disabled",false);
			$("#spouseidentificationmark").prop("disabled",false);
			$("#spousequalification").prop("disabled",false);
			$("input[name='isspouseemployed']").prop("disabled",false);
			$("#spouseprofession").prop("disabled",false);
		}
	})
	
	$("#dischargereason").change(function(){
		if($(this).val()=="Expired"){
			$("#dateofdeath").prop("disabled",false)
			$("#deathdetails").prop("disabled",false)
		}
		else{
			$("#dateofdeath").prop("disabled",true)
			$("#deathdetails").prop("disabled",true)
		}
	})
	
	$("#editdischargereason").change(function(){
		if($(this).val()=="Expired"){
			$("#editdateofdeath").prop("disabled",false)
			$("#editdeathdetails").prop("disabled",false)
		}
		else{
			$("#editdateofdeath").prop("disabled",true)
			$("#editdeathdetails").prop("disabled",true)
			
		}
	})
	
	$("[formelement='addservice']").focusout(function(){validate($(this)) });
	$("[formelement='editservice']").focusout(function(){validate($(this)) });
	$("[date]").change(function(){validate($(this)) });

    $("#addtabform").tabs({
			 heightStyle: "auto",
             activate: function( event, ui ) {    }
    })

    $("#edittabform").tabs({
			activate: function( event, ui ) {    }
    })
	
	$("#name , #editname , #fathername , #editfathername , #mothername , #editmothername, #editspousename ,#spousename, #editnextofkinname , #nextofkinname").focusout(function(){
		$(this).val($(this).val().toUpperCase())
	})
	
	$( "#dob" ).datepicker({ dateFormat: "dd-mm-yy", yearRange: "1900:"+(new Date()).getFullYear(), changeMonth: true,  changeYear: true});
	$( "#dateenrolled" ).datepicker({ dateFormat: "dd-mm-yy", yearRange: "1900:"+(new Date()).getFullYear(), changeMonth: true,  changeYear: true});
	$( "#datedischarged" ).datepicker({ dateFormat: "dd-mm-yy", yearRange: "1900:"+(new Date()).getFullYear(), changeMonth: true,  changeYear: true});
	$( "#dateofdeath" ).datepicker({ dateFormat: "dd-mm-yy", yearRange: "1900:"+(new Date()).getFullYear(), changeMonth: true,  changeYear: true});
	$( "#dateofmarriage" ).datepicker({ dateFormat: "dd-mm-yy", yearRange: "1900:"+(new Date()).getFullYear(), changeMonth: true,  changeYear: true});
	$( "#spousedob" ).datepicker({ dateFormat: "dd-mm-yy", yearRange: "1900:"+(new Date()).getFullYear(), changeMonth: true,  changeYear: true});
	
	$( "#editdob" ).datepicker({ dateFormat: "dd-mm-yy", yearRange: "1900:"+(new Date()).getFullYear(), changeMonth: true,  changeYear: true});
	$( "#spousedateofdeath" ).datepicker({ dateFormat: "dd-mm-yy", yearRange: "1900:"+(new Date()).getFullYear(), changeMonth: true,  changeYear: true});
	$( "#veterandateofdeath" ).datepicker({ dateFormat: "dd-mm-yy", yearRange: "1900:"+(new Date()).getFullYear(), changeMonth: true,  changeYear: true});
	$( "#editveterandateofdeath" ).datepicker({ dateFormat: "dd-mm-yy", yearRange: "1900:"+(new Date()).getFullYear(), changeMonth: true,  changeYear: true});
	
	
	$( "#editspousedateofdeath" ).datepicker({ dateFormat: "dd-mm-yy", yearRange: "1900:"+(new Date()).getFullYear(), changeMonth: true,  changeYear: true});
	

	$( "#editdateenrolled" ).datepicker({ dateFormat: "dd-mm-yy", yearRange: "1900:"+(new Date()).getFullYear(), changeMonth: true,  changeYear: true});
	$( "#editdatedischarged" ).datepicker({ dateFormat: "dd-mm-yy", yearRange: "1900:"+(new Date()).getFullYear(), changeMonth: true,  changeYear: true});
	$( "#editdateofdeath" ).datepicker({ dateFormat: "dd-mm-yy", yearRange: "1900:"+(new Date()).getFullYear(), changeMonth: true,  changeYear: true});
	$( "#editdateofmarriage" ).datepicker({ dateFormat: "dd-mm-yy", yearRange: "1900:"+(new Date()).getFullYear(), changeMonth: true,  changeYear: true});
	$( "#editspousedob" ).datepicker({ dateFormat: "dd-mm-yy", yearRange: "1900:"+(new Date()).getFullYear(), changeMonth: true,  changeYear: true});
	$( "#dateregistered" ).datepicker({ dateFormat: "dd-mm-yy", yearRange: "1900:"+(new Date()).getFullYear(), changeMonth: true,  changeYear: true});
	$( "#editdateregistered" ).datepicker({ dateFormat: "dd-mm-yy", yearRange: "1900:"+(new Date()).getFullYear(), changeMonth: true,  changeYear: true});

    /**Attach autocomplete to board name
    $( "#board" ).autocomplete({
      source: "../board/getBoardsList",
      delay: 50,
	  select:  function( event, ui ) {
		 
      }
    });*/
		
	$('#sameaddress').click(function() {
		$("#permanentdoorno").val($("#communicationdoorno").val())
		$("#permanenthousename").val($("#communicationhousename").val())
		$("#permanentstreet").val($("#communicationstreet").val())
		$("#permanentcity").val($("#communicationcity").val())
		$("#permanentpolicestation").val($("#communicationpolicestation").val())
		$("#permanentpincode").val($("#communicationpincode").val())
		
		var cs= $("#communicationstate")
		var cd= $("#communicationdistrict")
		var ps = $("#permanentstate")
		var pd = $("#permanentdistrict")
		
		$('option',pd).remove();
		
		var options = cd.children();
		$.each(options, function( index, element ) {
			pd.append($(element).clone())
		});
		
		ps.val(cs.val())
		pd.val(cd.val())
	});
	
	 $('#editsameaddress').click(function() {
		$("#editpermanentdoorno").val($("#editcommunicationdoorno").val())
		$("#editpermanenthousename").val($("#editcommunicationhousename").val())
		$("#editpermanentstreet").val($("#editcommunicationstreet").val())
		$("#editpermanentcity").val($("#editcommunicationcity").val())
		$("#editpermanentpolicestation").val($("#editcommunicationpolicestation").val())
		$("#editpermanentpincode").val($("#editcommunicationpincode").val())
		
		var cs= $("#editcommunicationstate")
		var cd= $("#editcommunicationdistrict")
		var ps = $("#editpermanentstate")
		var pd = $("#editpermanentdistrict")
		
		$('option',pd).remove();
		
		var options = cd.children();
		$.each(options, function( index, element ) {
			pd.append($(element).clone())
		});
		
		ps.val(cs.val())
		pd.val(cd.val())
	});

    $("#getServices").click(function(){
		if($("#queryboardname").val()=="")
		{
			alert("Select a board name to search");
			return;
		}
		loadGridData("next");
    })

    $("#editsubmitbutton").click(updateService);
    
    
    
    /*
     * $("#deletebutton").click(function(){
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
     * 
     * */
	$("#editdeletebutton").click(function(){
		$( "#veterandeleteconfirm" ).dialog(
				{
					buttons: {
					"Ok": function() {
						$.ajax({
							type: 'POST',
							url: "../VeteranServlet",
							data: {
									serviceno : $('#editserviceno').val(),
									registrationno : $('#editregistrationno').val(),
									board:$('#editboard').val(),
									action:'deleteVeteran'
									},
							success: function(response) {
									if(response.status=="success"){
										alert(response.content);
										$("[formelement='editservice'][type!='radio']").val('');
										$("#editdependenttable tr[datarow='true']").remove();
										loadGridData("next");
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
	initializeFormControls();

    /* Function to send update service request */
	function updateService(){
		if(validateFormControls("editservice")){
			
			var formData = new FormData($("form#edituploadphotoform")[0]);
			var profilerImageReq = $.ajax({
				type: 'POST',
				url: $("#edituploadphotoform").attr("action"),
				data: formData,
				async:true,
				contentType: false,
				processData: false
			});
			
			var familyformData = new FormData($("form#edituploadfamilyphotoform")[0]);
			var profilerfamilyImageReq = $.ajax({
				type: 'POST',
				url: $("#edituploadfamilyphotoform").attr("action"),
				data: familyformData,
				async:true,
				contentType: false,
				processData: false
			});
			
			$.when(profilerImageReq, profilerfamilyImageReq).done(function(photoReponseObj, familyphotoReponseObj){
				$.ajax({
					type: 'POST',
					url: "../VeteranServlet",
					data: {
						action:"updateVeteran",
						board : $('#editboard').val(),
						service : $('#editservice').val(),
						corps:$('#editcorps').val(),
						group:$('#editgroup').val(),
						trade : $('#edittrade').val(),
						serviceno : $('#editserviceno').val(),
						registrationno : $('#editregistrationno').val(),
						rank : $('#editrank').val(),
						name : $('#editname').val(),
						gender:$("input:radio[name='editgender']:checked").attr('value'),
						dateofbirth: $('#editdob').val(),
						dateenrolled :$('#editdateenrolled').val(),
						wwii : $("input:radio[name='editwwii']:checked").attr('value'),
						operations : $('#editoperations').val(),
						decoration : $('#editdecoration').val(),
						unitlastserved : $('#editunitlastserved').val(),
						datedischarged : $('#editdatedischarged').val(),
						dischargereason:$('#editdischargereason').val(),
						dateofdeath:$('#editdateofdeath').val() || $('#editveterandateofdeath').val(),
						deathdetails:$('#editdeathdetails').val(),
						mcatdischarge:$('#editmcatdischarge').val(),
						characteratdischarge:$('#editcharacteratdischarge').val(),
						dischargebookno:$('#editdischargebookno').val(),
						pponumber : $('#editpponumber').val(),
						cda : $('#editcda').val(),
						servicepension:$('#editservicepension').val(),
						disabilitypension:$('#editdisabilitypension').val(),
						percentageofdisability:$('#editpercentageofdisability').val(),
						pensionaccno : $('#editpensionaccno').val(),
						bankname : $('#editbankname').val(),
						fathername : $('#editfathername').val(),
						mothername : $('#editmothername').val(),
						identificationmark:$('#editidentificationmark').val(),
						religion:$('#editreligion').val(),
						caste:$('#editcaste').val(),
						birthplace : $('#editbirthplace').val(),
						birthstate : $('#editbirthstate').val(),
						birthdistrict : $('#editbirthdistrict').val(),
						qualificationincivil:$('#editqualificationincivil').val(),
						qualificationinservice:$('#editqualificationinservice').val(),
						reemploymentstatus:$("input:radio[name='editreemploymentstatus']:checked").attr('value'),
						employer:$('#editemployer').val(),
						monthlyincome:$('#editmonthlyincome').val(),
						department:$('#editdepartment').val(),
						officecontactno:$('#editofficecontactno').val(),
						adharcardno:$('#editadharcardno').val(),
						csdcardno:$('#editcsdcardno').val(),
						echscardno : $('#editechscardno').val(),
						afacardno:$('#editafacardno').val(),
						dateregistered:$('#editdateregistered').val(),
						permanentdoorno:$('#editpermanentdoorno').val(),
						permanenthousename:$('#editpermanenthousename').val(),
						permanentstreet:$('#editpermanentstreet').val(),
						permanentcity:$('#editpermanentcity').val(),
						permanentstate:$('#editpermanentstate').val(),
						permanentdistrict:$('#editpermanentdistrict').val(),
						permanentpolicestation:$('#editpermanentpolicestation').val(),
						permanentpincode:$('#editpermanentpincode').val(),
						communicationdoorno:$('#editcommunicationdoorno').val(),
						communicationhousename:$('#editcommunicationhousename').val(),
						communicationstreet:$('#editcommunicationstreet').val(),
						communicationcity:$('#editcommunicationcity').val(),
						communicationstate:$('#editcommunicationstate').val(),
						communicationdistrict:$('#editcommunicationdistrict').val(),
						communicationpolicestation:$('#editcommunicationpolicestation').val(),
						communicationpincode:$('#editcommunicationpincode').val(),
						communicationtelephone:$('#editcommunicationtelephone').val(),
						communicationmobile:$('#editcommunicationmobile').val(),
						communicationemail:$('#editcommunicationemail').val(),
						maritalstatus:$("input:radio[name='editmaritalstatus']:checked").attr('value'),
						spousename:$('#editspousename').val(),
						dateofmarriage:$('#editdateofmarriage').val(),
						spouserelation:$("input:radio[name='editspouserelation']:checked").attr('value'),
						spousedateofbirth:$('#editspousedob').val(),
						spousedateofdeath:$('#editspousedateofdeath').val(),
						spouseidentificationmark:$('#editspouseidentificationmark').val(),
						spousequalification:$('#editspousequalification').val(),
						isspouseemployed:$("input:radio[name='editisspouseemployed']:checked").attr('value'),
						spouseprofession:$('#editspouseprofession').val(),
						nextofkinname:$('#editnextofkinname').val(),
						nextofkinrelation:$('#editnextofkinrelation').val(),
						dependents: JSON.stringify(getDependentsFromTable("editdependenttable")),
						veteranphotopath:photoReponseObj[0].resultJSON[0].tempfilename,
						familyphotopath:familyphotoReponseObj[0].resultJSON[0].tempfilename
						
						},
						success: function(response) {
								if(response.status=="success"){
									alert('Veteran successfully updated');
									loadGridData("next");
									$('#editphoto').val('');
									$('#editfamilyphoto').val('');
									getServiceDetail($('#editserviceno').val(), $('#editregistrationno').val());
									
								}
								else if(response.status=="failure") {
									alert(response.error);
								}
						},
						dataType: "json"
					});
			
			})		
			}
			else {
				alert("Errors exist in form");
			}
	}


    /*Initialise the edit form controls*/
	function loadGridData(direction){
        
        var queryParam = new Array();
        if($("#searchservices_value").val()){
        	queryParam.push( {
				searchfield:$("#searchservices_searchin").val(),
				operator:$("#searchservices_operator").val(),
				value:$("#searchservices_value").val()
			}); 
        }
		queryParam.push({
			searchfield:'board',
			operator:'equals',
			value:$("#queryboardname").val()
		})
		
		veteranstore.getProxy().extraParams = {
						"queryparam":JSON.stringify(queryParam),
						"action":'getVeterans'
					};
		veteranstore.load();
    }


    /*Populates grid according to json list of services*/
	function populateGrid(gridid, headers, response){
        var r=0;
		/*Populate grid rows*/
        for(row in response.content)
		{
            var i=1;
            r = parseInt(row)+1;
			for(colHeader in headers)
			{
				var td = $("#"+gridid+"_r"+r+"c"+i );
				$(td).html( response.content[row][headers[colHeader]])
                i++;
			}
	    }
        r++;
        for(;r<=10;r++)
        {
            var i=1;
            for(colHeader in headers)
            {
                var td = $("#"+gridid+"_r"+r+"c"+i );
                $(td).html('');
                i++;
            }
        }

    }

    $("#prev").button({ icons: { primary: "ui-icon-circle-arrow-w" } });
    $("#next").button({ icons: { primary: "ui-icon-circle-arrow-e" } });
    $("#prev").click(function(){
            loadGridData("prev");
    })
    $("#next").click(function(){
            loadGridData("next");
    })

    $("#dependenttable_add").button({ icons: { primary: "ui-icon-circle-plus" } });
    $("#dependenttable_delete").button({ icons: { primary: "ui-icon-circle-minus" } });
	$("#editdependenttable_add").button({ icons: { primary: "ui-icon-circle-plus" } });
    $("#editdependenttable_delete").button({ icons: { primary: "ui-icon-circle-minus" } });
    $("#dependenttable_add").click(function(){attachAddNewRowToTable("dependenttable")})
	$("#editdependenttable_add").click(function(){attachAddNewRowToTable("editdependenttable")})
	$("#dependenttable_delete").click(function(){attachDeleteRowFromTable("dependenttable")})
	$("#editdependenttable_delete").click(function(){attachDeleteRowFromTable("editdependenttable")})
	
	function attachAddNewRowToTable(tableid){
            var rowcount = $("#"+tableid+" tr[datarow='true']").length +1;
            var newRow = $("#"+tableid+" tr[datarow='template']").clone().show();
            newRow.attr("datarow","true");
            //set attributes for the new <tr>
            newRow.attr("class",(rowcount%2 == 0)?"tr_odd":"tr_even");
            newRow.attr("id",tableid+"_row"+rowcount);

            var currentControl =  newRow.find("td[field='select']").children().first();
            currentControl.attr("id",tableid+"_row"+rowcount+"_select");

            currentControl =   newRow.find("td[field='dependentname']").children().first();
            currentControl.val('');
			currentControl.focusout(function(){$(this).val($(this).val().toUpperCase())});
            currentControl.attr("id",tableid+"_row"+rowcount+"_dependentname");

            currentControl =   newRow.find("td[field='relation']").children().first();
            currentControl.val('');
            currentControl.attr("id",tableid+"_row"+rowcount+"relation");

            currentControl =   newRow.find("td[field='dob']").children().first();
            currentControl.val('');
			//currentControl.attr("id",tableid+"_row"+rowcount+"dob");
			currentControl.datepicker({ dateFormat: "dd-mm-yy", yearRange: "1900:"+(new Date()).getFullYear(), changeMonth: true,  changeYear: true});
            
            currentControl =   newRow.find("td[field='maritalstatus']").children().first();
            currentControl.attr("id",tableid+"_row"+rowcount+"maritalstatus");
            currentControl.attr("name",tableid+"_row"+rowcount+"maritalstatus");
            currentControl = currentControl.next();
            currentControl.attr("id",tableid+"_row"+rowcount+"maritalstatus");
            currentControl.attr("name",tableid+"_row"+rowcount+"maritalstatus");

            currentControl =   newRow.find("td[field='education']").children().first();
            currentControl.val('');
            currentControl.attr("id",tableid+"_row"+rowcount+"education");

            currentControl =   newRow.find("td[field='course']").children().first();
            currentControl.val('');
            currentControl.attr("id",tableid+"_row"+rowcount+"course");

            currentControl =   newRow.find("td[field='courseyear']").children().first();
            currentControl.val('');
            currentControl.attr("id",tableid+"_row"+rowcount+"courseyear");

            currentControl =   newRow.find("td[field='employmentstatus']").children().first();
            currentControl.attr("id",tableid+"_row"+rowcount+"employmentstatus");
            currentControl.attr("name",tableid+"_row"+rowcount+"employmentstatus");
            currentControl = currentControl.next();
            currentControl.attr("id",tableid+"_row"+rowcount+"employmentstatus");
            currentControl.attr("name",tableid+"_row"+rowcount+"employmentstatus");

            $("#"+tableid+" tr:last-child").prev().after(newRow);
    }
	
	
	function attachDeleteRowFromTable(tableid){
            var currentClass = "tr_even";
            var rows = $("#"+tableid+" tr[datarow='true']")

            $(rows).each(function() {
                if($( this ).find("[field='select']").children().first().is(':checked')){
                    $( this ).remove();
                }
                else{
                    $( this ).attr("class",currentClass);
                    currentClass = (currentClass=="tr_even")?"tr_odd":"tr_even";
                }
            });
    }

    for(i=1;i<=10;i++){
        tr = $("#servicestable_row"+i);
        $(tr).hover(
                    function() {$(this).addClass("onhover");$(this).css( 'cursor', 'pointer' );},
                    function() {$(this).removeClass("onhover");$(this).css( 'cursor', 'default' );}
        );
        $(tr).click(function(){
                        getServiceDetail( $(this).children(":first").html() );
        }
        );
    }

    $("#submitbutton").click(submitService);

	function submitService() {
		if(validateFormControls("addservice"))
		{			
			var formData = new FormData($("form#uploadphotoform")[0]);
			var profilerImageReq = $.ajax({
				type: 'POST',
				url: $("#uploadphotoform").attr("action"),
				data: formData,
				async:true,
				contentType: false,
				processData: false
			});
			
			var familyformData = new FormData($("form#uploadfamilyphotoform")[0]);
			var profilerfamilyImageReq = $.ajax({
				type: 'POST',
				url: $("#uploadfamilyphotoform").attr("action"),
				data: familyformData,
				async:true,
				contentType: false,
				processData: false
			});
			
			$.when(profilerImageReq, profilerfamilyImageReq).done(function(photoReponseObj, familyphotoReponseObj){
				$.ajax({
					type: 'POST',
					url: "../VeteranServlet",
					async:false,
					data: {
						//tempphoto:response.tempfilename,
						veteranphotopath:photoReponseObj[0].resultJSON[0].tempfilename,
						familyphotopath:familyphotoReponseObj[0].resultJSON[0].tempfilename,
						action:"addVeteran",
						board : $('#board').val(),
						service : $('#service').val(),
						corps:$('#corps').val(),
						group:$('#group').val(),
						trade : $('#trade').val(),
						serviceno : $('#serviceno').val(),
						registrationno : $('#registrationno').val(),
						rank : $('#rank').val(),
						name : $('#name').val(),
						dateofbirth: $('#dob').val(),
						gender:$("input:radio[name='gender']:checked").attr('value'),
						dateenrolled :$('#dateenrolled').val(),
						wwii : $("input:radio[name='wwii']:checked").attr('value'),
						operations : $('#operations').val(),
						decoration : $('#decoration').val(),
						unitlastserved : $('#unitlastserved').val(),
						datedischarged : $('#datedischarged').val(),
						dischargereason:$('#dischargereason').val(),
						dateofdeath:$('#dateofdeath').val() ||$('#veterandateofdeath').val(),
						deathdetails:$('#deathdetails').val(),
						mcatdischarge:$('#mcatdischarge').val(),
						characteratdischarge:$('#characteratdischarge').val(),
						dischargebookno:$('#dischargebookno').val(),
						pponumber : $('#pponumber').val(),
						cda : $('#cda').val(),
						servicepension:$('#servicepension').val(),
						disabilitypension:$('#disabilitypension').val(),
						percentageofdisability:$('#percentageofdisability').val(),
						pensionaccno : $('#pensionaccno').val(),
						bankname : $('#bankname').val(),
						fathername : $('#fathername').val(),
						mothername : $('#mothername').val(),
						identificationmark:$('#identificationmark').val(),
						religion:$('#religion').val(),
						caste:$('#caste').val(),
						birthplace : $('#birthplace').val(),
						birthstate : $('#birthstate').val(),
						birthdistrict : $('#birthdistrict').val(),
						qualificationincivil:$('#qualificationincivil').val(),
						qualificationinservice:$('#qualificationinservice').val(),
						reemploymentstatus:$("input:radio[name='reemploymentstatus']:checked").attr('value'),
						employer:$('#employer').val(),
						monthlyincome:$('#monthlyincome').val(),
						department:$('#department').val(),
						officecontactno:$('#officecontactno').val(),
						adharcardno:$('#adharcardno').val(),
						csdcardno:$('#csdcardno').val(),
						echscardno : $('#echscardno').val(),
						afacardno:$('#afacardno').val(),
						dateregistered:$('#dateregistered').val(),
						permanentdoorno:$('#permanentdoorno').val(),
						permanenthousename:$('#permanenthousename').val(),
						permanentstreet:$('#permanentstreet').val(),
						permanentcity:$('#permanentcity').val(),
						permanentstate:$('#permanentstate').val(),
						permanentdistrict:$('#permanentdistrict').val(),
						permanentpolicestation:$('#permanentpolicestation').val(),
						permanentpincode:$('#permanentpincode').val(),
						communicationdoorno:$('#communicationdoorno').val(),
						communicationhousename:$('#communicationhousename').val(),
						communicationstreet:$('#communicationstreet').val(),
						communicationcity:$('#communicationcity').val(),
						communicationstate:$('#communicationstate').val(),
						communicationdistrict:$('#communicationdistrict').val(),
						communicationpolicestation:$('#communicationpolicestation').val(),
						communicationpincode:$('#communicationpincode').val(),
						communicationtelephone:$('#communicationtelephone').val(),
						communicationmobile:$('#communicationmobile').val(),
						communicationemail:$('#communicationemail').val(),
						maritalstatus:$("input:radio[name='maritalstatus']:checked").attr('value'),
						spousename:$('#spousename').val(),
						dateofmarriage:$('#dateofmarriage').val(),
						spouserelation:$("input:radio[name='spouserelation']:checked").attr('value'),
						spousedateofbirth:$('#spousedob').val(),
						spousedateofdeath:$('#spousedateofdeath').val(),
						spouseidentificationmark:$('#spouseidentificationmark').val(),
						spousequalification:$('#spousequalification').val(),
						isspouseemployed:$("input:radio[name='isspouseemployed']:checked").attr('value'),
						spouseprofession:$('#spouseprofession').val(),
						nextofkinname:$('#nextofkinname').val(),
						nextofkinrelation:$('#nextofkinrelation').val(),
						dependents: JSON.stringify(getDependentsFromTable("dependenttable"))
					},
					success: function(response) {
						if(response.status=="success"){
							alert('Service successfully added');
							clearAddFormData();
						}
						else if(response.status=="failure") {
							alert(response.error);
						}
					},
					dataType: "json"
				});
				
				
			}).fail(function() {
			    alert( "error" );
			}).always(function() {
			});
		}
		else {
			alert("Errors exist in form. Check all the tabs for possible errors.");
		}
	}
	
	function getUploadUrl(formid){
			$.ajax({
				type: 'POST',
				async:false,
				url: "../commons/getUploadUrl",
				success: function(response) {
						if(response.status=="success"){
							$('#'+formid).attr("action",response.url);
						}
						else if(response.status=="failure") {
							alert("Some problem occured. Cannot upload photo.");
						}
					},
				dataType: "json"
				});

	}

	function clearAddFormData() {
		//$("[formelement='addservice']").val('');
		$("[formelement='addservice'][type!='radio']").val('');
		$("#dependenttable tr[datarow='true']").remove();
		//$("#service").val("Army");
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
					 $("#addnewformentryErrorDiv").html("Enter a value.")
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
			var tr = $("#deletenewformentry table tr[template]").first().clone();
			tr.find("td").first().html(fld);
			tr.find("td input").val(dataObject[fld].trim());
			tr.removeAttr('template');
			tr.show();
			$("#deletenewformentry table tr:last").before(tr);
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

    /**Fucntion to parse the dependents table and return a JSON*/
    function getDependentsFromTable(tableid){
        var rows = $("#"+tableid+" tr[datarow='true']");
        var dependents = [];
        $(rows).each(function(){
            var dependent = new Object();
            var currentControl =  $(this).find("td[field='dependentname']").children().first();
            dependent.name = currentControl.val();

            currentControl =   $(this).find("td[field='relation']").children().first();
            dependent.relation = currentControl.val();

            currentControl =   $(this).find("td[field='dob']").children().first();
            dependent.dateofbirth = currentControl.val();

            currentControl =   $(this).find("td[field='maritalstatus']").children().first(); //radio button
            var maritalstatus =  $('input:radio[name='+currentControl.attr('id')+']:checked').attr('value');
            dependent.maritalstatus =maritalstatus?maritalstatus:'Un-Married'
          
            currentControl =   $(this).find("td[field='education']").children().first();
            dependent.education = currentControl.val();

            currentControl =    $(this).find("td[field='course']").children().first();
            dependent.course = currentControl.val();

            currentControl =    $(this).find("td[field='courseyear']").children().first();
            dependent.courseyear = currentControl.val();

            currentControl =    $(this).find("td[field='employmentstatus']").children().first(); //radio button
            var empstatus =  $('input:radio[name='+currentControl.attr('id')+']:checked').attr('value');
            dependent.employmentstatus =empstatus?empstatus:'Un-Employed'//(currentControl.val()=="")?currentControl.val():currentControl.next().val();

            dependents.push(dependent);
        })
        return dependents;
    }

	

    /*Function to get the details of a selected service*/
    function getServiceDetail(serviceno, registrationno){
        $.ajax({
			type: 'POST',
			url: "../VeteranServlet",
			data: {
					serviceno: serviceno,
					registrationno: registrationno,
					action:'getVeteranDetail'
				},
			success: function(response) {
				if(response.status=="success")
					{
                       	$('#editboard').val(response.content.service.board);
                        $('#editservice').val(response.content.service.service);
						populateSelectBox([$('#editcorps')],"../commons",{service: response.content.service.service,action:"getCorps"}); 
                        $('#editcorps').val(response.content.service.corps);
						$('#editgroup').val(response.content.service.group);
						populateSelectBox([$('#edittrade')], "../commons",{group:response.content.service.group,service:response.content.service.service,action:"getTrades"});
                        $('#edittrade').val(response.content.service.trade);
                        $('#editserviceno').val(response.content.service.serviceno);
						$('#editregistrationno').val(response.content.service.registrationno);
						populateSelectBox([$('#editrank')], "../commons",{service:response.content.service.service,action:"getRanks" });
                        $('#editrank').val(response.content.service.rank)
                        $('#editname').val(response.content.service.name)
						//$("#editgender[value="+response.content.service.gender+"]").prop("checked",true)
						setRadioButton('editgender', response.content.service.gender);
                        $('#editdob').val($.datepicker.formatDate('dd-mm-yy', $.datepicker.parseDate('yy-mm-dd',response.content.service.dateofbirth)))
                        $('#editdateenrolled').val($.datepicker.formatDate('dd-mm-yy', $.datepicker.parseDate('yy-mm-dd',response.content.service.dateenrolled)))
						//$("#editwwii[value="+response.content.service.wwii+"]").prop("checked",true)
						setRadioButton('editwwii', response.content.service.wwii);
                        $('#editoperations').val(response.content.service.operations)
                        $('#editdecoration').val(response.content.service.decoration)
                        $('#editunitlastserved').val(response.content.service.unitlastserved)
                        $('#editdatedischarged').val($.datepicker.formatDate('dd-mm-yy', $.datepicker.parseDate('yy-mm-dd',response.content.service.datedischarged)))
						$('#editdischargereason').val(response.content.service.dischargereason)
                        $('#editdeathdetails').val(response.content.service.deathdetails)
						$('#editdateofdeath').val($.datepicker.formatDate('dd-mm-yy', $.datepicker.parseDate('yy-mm-dd',response.content.service.dateofdeath)))
                        $('#editmcatdischarge').val(response.content.service.mcatdischarge)
                        $('#editcharacteratdischarge').val(response.content.service.characteratdischarge)
                        $('#editdischargebookno').val(response.content.service.dischargebookno)
                        $('#editpponumber').val(response.content.service.pponumber)
                        $('#editcda').val(response.content.service.cda)
                        $('#editservicepension').val(response.content.service.servicepension)
                        $('#editdisabilitypension').val(response.content.service.disabilitypension)
                        $('#editpercentageofdisability').val(response.content.service.percentageofdisability)
                        $('#editpensionaccno').val(response.content.service.pensionaccno)
                        $('#editbankname').val(response.content.service.bankname)
                        $('#editfathername').val(response.content.service.fathername)
                        $('#editmothername').val(response.content.service.mothername)
                        $('#editidentificationmark').val(response.content.service.identificationmark)
                        $('#editreligion').val(response.content.service.religion)
                        $('#editcaste').val(response.content.service.caste)
                        $('#editbirthplace').val(response.content.service.birthplace)
                        $('#editbirthstate').val(response.content.service.birthstate)
						populateSelectBox([$('#editbirthdistrict')], "../commons", {state:response.content.service.birthstate,action:"getDistricts"});
						$('#editbirthdistrict').val(response.content.service.birthdistrict)
                        $('#editqualificationincivil').val(response.content.service.qualificationincivil)
                        $('#editqualificationinservice').val(response.content.service.qualificationinservice)
					//	$("#editreemploymentstatus[value="+response.content.service.reemploymentstatus+"]").prop("checked",true)
						setRadioButton('editreemploymentstatus', response.content.service.reemploymentstatus);
                        $('#editemployer').val(response.content.service.employer)
                        $('#editmonthlyincome').val(response.content.service.monthlyincome)
                        $('#editdepartment').val(response.content.service.department)
                        $('#editofficecontactno').val(response.content.service.officecontactno)
                        $('#editadharcardno').val(response.content.service.adharcardno)
                        $('#editcsdcardno').val(response.content.service.csdcardno)
                        $('#editechscardno').val(response.content.service.echscardno)
                        $('#editafacardno').val(response.content.service.afacardno)
                        $('#editdateregistered').val($.datepicker.formatDate('dd-mm-yy', $.datepicker.parseDate('yy-mm-dd',response.content.service.dateregistered)))
                        $('#editpermanentdoorno').val(response.content.service.permanentdoorno)
                        $('#editpermanenthousename').val(response.content.service.permanenthousename)
                        $('#editpermanentstreet').val(response.content.service.permanentstreet)
                        $('#editpermanentcity').val(response.content.service.permanentcity)
                        $('#editpermanentstate').val(response.content.service.permanentstate)
						populateSelectBox([$('#editpermanentdistrict')], "../commons", {state:response.content.service.permanentstate,action:"getDistricts"});
                        $('#editpermanentdistrict').val(response.content.service.permanentdistrict)
                        $('#editpermanentpolicestation').val(response.content.service.permanentpolicestation)
                        $('#editpermanentpincode').val(response.content.service.permanentpincode)
                        $('#editcommunicationdoorno').val(response.content.service.communicationdoorno)
                        $('#editcommunicationhousename').val(response.content.service.communicationhousename)
                        $('#editcommunicationstreet').val(response.content.service.communicationstreet)
                        $('#editcommunicationcity').val(response.content.service.communicationcity)
                        $('#editcommunicationstate').val(response.content.service.communicationstate)
						populateSelectBox([$('#editcommunicationdistrict')], "../commons",{state:response.content.service.communicationstate,action:"getDistricts"});
                        $('#editcommunicationdistrict').val(response.content.service.communicationdistrict)
                        $('#editcommunicationpolicestation').val(response.content.service.communicationpolicestation)
                        $('#editcommunicationpincode').val(response.content.service.communicationpincode)
                        $('#editcommunicationtelephone').val(response.content.service.communicationtelephone)
                        $('#editcommunicationmobile').val(response.content.service.communicationmobile)
                        $('#editcommunicationemail').val(response.content.service.communicationemail)
						//$("#editmaritalstatus[value="+response.content.service.maritalstatus+"]").prop("checked",true)
						setRadioButton('editmaritalstatus', response.content.service.maritalstatus);
                        $('#editspousename').val(response.content.service.spousename)
					//	$("#editspouserelation[value="+response.content.service.spouserelation+"]").prop("checked",true);
						setRadioButton('editspouserelation', response.content.service.spouserelation);
						$('#editdateofmarriage').val($.datepicker.formatDate('dd-mm-yy', $.datepicker.parseDate('yy-mm-dd',response.content.service.dateofmarriage)))
						$('#editspousedob').val($.datepicker.formatDate('dd-mm-yy', $.datepicker.parseDate('yy-mm-dd',response.content.service.spousedateofbirth)))
						$('#editspousedateofdeath').val($.datepicker.formatDate('dd-mm-yy', $.datepicker.parseDate('yy-mm-dd',response.content.service.spousedateofdeath)))
                        $('#editspouseidentificationmark').val(response.content.service.spouseidentificationmark)
                        $('#editspousequalification').val(response.content.service.spousequalification)
					//	$("#editisspouseemployed[value="+response.content.service.isspouseemployed+"]").prop("checked",true);
						setRadioButton('editisspouseemployed', response.content.service.isspouseemployed);
                        $('#editspouseprofession').val(response.content.service.spouseprofession)
                        $('#editnextofkinname').val(response.content.service.nextofkinname)
                        $('#editnextofkinrelation').val(response.content.service.nextofkinrelation)
						$('#editveterandateofdeath').val($.datepicker.formatDate('dd-mm-yy', $.datepicker.parseDate('yy-mm-dd',response.content.service.dateofdeath)))
						$('#editdisplayfamilyphoto').attr("src","");
                        $('#editdisplayservicephoto').attr("src","");
						if(response.content.service.veteranphotopath)
							$('#editdisplayservicephoto').attr("src","../photos/"+response.content.service.veteranphotopath+"?rand="+Math.random());
						if(response.content.service.familyphotopath)
							$('#editdisplayfamilyphoto').attr("src","../photos/"+response.content.service.familyphotopath+"?rand="+Math.random());
						$('#editphotokey').val(response.content.service.photokey)
						var classname = "tr_even";
						var rowcount=1;
						$("#editdependenttable tr[datarow='true']").remove();
						for(var i in response.content.dependents){
							var dependent =  response.content.dependents[i];
							var newRow = $("#editdependenttable tr[datarow='template']").clone().show();
							newRow.attr("datarow","true");
							newRow.show();
							newRow.attr("class",classname);
							newRow.attr("id","editdependenttable_row"+rowcount);
							
							var currentControl =  newRow.find("td[field='select']").children().first();
							currentControl.removeAttr("checked");
							currentControl.attr("id","editdependenttable_row"+rowcount+"_select");
							
							currentControl =   newRow.find("td[field='dependentname']").children().first();
							currentControl.val(dependent.name);
							currentControl.attr("id","editdependenttable_row"+rowcount+"_dependentname");
							currentControl.focusout(function(){$(this).val($(this).val().toUpperCase())});
							
							
							currentControl =   newRow.find("td[field='relation']").children().first();
							currentControl.val(dependent.relation);
							currentControl.attr("id","editdependenttable_row"+rowcount+"relation");

							currentControl =   newRow.find("td[field='dob']").children().first();
							currentControl.val($.datepicker.formatDate('dd-mm-yy', $.datepicker.parseDate('yy-mm-dd',dependent.dateofbirth)));
							currentControl.attr("id","editdependenttable_row"+rowcount+"dob");
							currentControl.datepicker({ dateFormat: "dd-mm-yy", yearRange: "1900:"+(new Date()).getFullYear(), changeMonth: true,  changeYear: true});
							

							currentControl =   newRow.find("td[field='maritalstatus']").children().first();
							currentControl.attr("id","editdependenttable_row"+rowcount+"maritalstatus");
							currentControl.attr("name","editdependenttable_row"+rowcount+"maritalstatus");
							if(dependent.maritalstatus=="Married"){
								currentControl.prop('checked',true);
							}
							currentControl = currentControl.next();
							if(dependent.maritalstatus=="Un-Married"){
								currentControl.prop('checked',true);
							}
							currentControl.attr("id","editdependenttable_row"+rowcount+"maritalstatus");
							currentControl.attr("name","editdependenttable_row"+rowcount+"maritalstatus");
							
							currentControl =   newRow.find("td[field='education']").children().first();
							currentControl.val(dependent.education);
							currentControl.attr("id","editdependenttable_row"+rowcount+"education");

							currentControl =   newRow.find("td[field='course']").children().first();
							currentControl.val(dependent.course);
							currentControl.attr("id","editdependenttable_row"+rowcount+"course");

							currentControl =   newRow.find("td[field='courseyear']").children().first();
							currentControl.val(dependent.courseyear);
							currentControl.attr("id","editdependenttable_row"+rowcount+"courseyear");

							currentControl =   newRow.find("td[field='employmentstatus']").children().first();
							currentControl.attr("id","editdependenttable_row"+rowcount+"employmentstatus");
							currentControl.attr("name","editdependenttable_row"+rowcount+"employmentstatus");
							if(dependent.employmentstatus=="Employed"){
								currentControl.prop('checked',true);
							}
							currentControl = currentControl.next();
							if(dependent.employmentstatus=="Un-Employed"){
								currentControl.prop('checked',true);
							}
							currentControl.attr("id","editdependenttable_row"+rowcount+"employmentstatus");
							currentControl.attr("name","editdependenttable_row"+rowcount+"employmentstatus");
							$('input[name="' + currentControl.attr('id')+ '"][value="' + dependent.employmentstatus + '"]').attr('checked', true);
							
							$("#editdependenttable tr:last-child").prev().after(newRow);
							rowcount++;
							classname = (classname=="tr_odd")?"tr_even":"tr_odd";
						}
					}
				else if(response.status=="failure")
					{
						alert(response.error);
					}
			},
			dataType: "json"
		});
    }
	
	
	function initializeFormControls(){
	
		$(".dropdownbutton").button({ icons: { primary: "ui-icon-circle-plus" } });
		$(".dropdownbuttondelete").button({ icons: { primary: "ui-icon-circle-minus" } });
		
		//replace select box with textbox if role is boardadmin
		if(getCookie("role")=="boardadmin"){
			var textbox = $("<input type='text' id='queryboardname' disabled></input>");
			textbox.val(getCookie("board"))
			$("#queryboardname").replaceWith(textbox);

			var textbox = $("<input type='text' id='board' disabled></input>");
			textbox.val(getCookie("board"))
			$("#board").replaceWith(textbox);
			
			var textbox = $("<input type='text' id='editboard' disabled></input>");
			textbox.val(getCookie("board"))
			$("#editboard").replaceWith(textbox);
			
			
		}
		initializeSearchControls("searchservices", servicetableinfo);
		
		$('#service').change(function(){
				if($('#service').val()!="Army"){
					$('#corps').val('');
					$('#corps').prop('disabled', true);
				}
				else{
					$('#corps').prop('disabled', false);
				}
		})
		$('#editservice').change(function(){
				if($('#editservice').val()!="Army"){
					$('#editcorps').val('');
					$('#editcorps').prop('disabled', true);
				}
				else{
					$('#editcorps').prop('disabled', false);
				}
		})
		
		$('#photo').change(function(){
			file = event.target.files;
		})
		
		

        populateGrid("dependentstable", ["Name","Date Of Birth","Marital Status","Education","Course","Year","Employment status"], {})
		
		$("#service").change(function(){
			$("#corps").val('');
			$("#trade").val('');
			$("#rank").val('');
		});
		
		$("#editservice").change(function(){
			$("#editcorps").val('');
			$("#edittrade").val('');
			$("#editrank").val('');
		});
		
		$("#corps").focus(function(){populateSelectBox([$(this)], "../commons", {service:$("#service").val(),action:"getCorps" }); })
		$("#trade").focus(function(){populateSelectBox([$(this)], "../commons",{group:$("#group").val(),service:$("#service").val(),action:"getTrades"});})
		$("#rank").focus(function(){populateSelectBox([$(this)], "../commons", {service:$("#service").val(),action:"getRanks" });})
		
		$("#editcorps").focus(function(){populateSelectBox([$(this)], "../commons", {service:$("#editservice").val(),action:"getCorps" }); })
		$("#edittrade").focus(function(){populateSelectBox([$(this)], "../commons", {group:$("#editgroup").val(),service:$("#editservice").val(),action:"getTrades"})});
		$("#editrank").focus(function(){populateSelectBox([$(this)], "../commons", {service:$("#editservice").val(),action:"getRanks" }); })
		
		$("#birthdistrict").focus(function(){populateSelectBox([$(this)], "../commons",{state:$("#birthstate").val(),action:"getDistricts"});})
		$("#editbirthdistrict").focus(function(){populateSelectBox([$(this)], "../commons",{state:$("#editbirthstate").val(),action:"getDistricts"});})
		
		$("#communicationdistrict").focus(function(){populateSelectBox([$(this)], "../commons",{state:$("#communicationstate").val(),action:"getDistricts"});})
		$("#editcommunicationdistrict").focus(function(){populateSelectBox([$(this)], "../commons",{state:$("#editcommunicationstate").val(),action:"getDistricts"});})
		
		$("#permanentdistrict").focus(function(){populateSelectBox([$(this)], "../commons",{state:$("#permanentstate").val(),action:"getDistricts"});})
		$("#editpermanentdistrict").focus(function(){populateSelectBox([$(this)], "../commons",{state:$("#editpermanentstate").val(),action:"getDistricts"});})
		
		$("#corpsdropdown").click(function(){
			displayaddnewformentrydialog($("#corps"),{"service":$("#service").val(),action:"addCorp"},"Corps","../commons")
		});
		
		$("#corpsdropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#corps"),{"service":$("#service").val(),action:"deleteCorp"},"Corps","../commons")
		});
		
		$("#editcorpsdropdown").click(function(){
			displayaddnewformentrydialog($("#editcorps"),{"service":$("#editservice").val(),action:"addCorp"},"Corps","../commons")
		});
		
		$("#editcorpsdropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#editcorps"),{"service":$("#editservice").val(),action:"deleteCorp"},"Corps","../commons")
		});
		
		$("#groupdropdown").click(function(){
			displayaddnewformentrydialog($("#group"),{action:"addGroup"},"Group","../commons");
		})	
		
		$("#groupdropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#group"),{action:"deleteGroup"},"Group","../commons");
		})
		
		$("#editgroupdropdown").click(function(){
			displayaddnewformentrydialog($("#editgroup"),{action:"addGroup"},"Group","../commons");			
		})
		
		$("#editgroupdropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#editgroup"),{action:"deleteGroup"},"Group","../commons");			
		})
		
		
		$("#tradedropdown").click(function(){
			displayaddnewformentrydialog($("#trade"),{"service":$("#service").val(), "group":$("#group").val(),action:"addTrade"},"Trade","../commons")
		});
		
		$("#tradedropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#trade"),{"service":$("#service").val(), "group":$("#group").val(),action:"deleteTrade"},"Trade","../commons")
		});
		
		
		$("#edittradedropdown").click(function(){
			displayaddnewformentrydialog($("#edittrade"),{"service":$("#editservice").val(), "group":$("#editgroup").val(),action:"addTrade"},"Trade","../commons");
		})
		
		$("#edittradedropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#edittrade"),{"service":$("#editservice").val(), "group":$("#editgroup").val(),action:"deletetrade"},"Trade","../commons");
		})
		
		$("#rankdropdown").click(function(){
			displayaddnewformentrydialog($("#rank"),{"service":$("#service").val(),action:"addRank"},"Rank","../commons");
		})
		
		$("#rankdropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#rank"),{"service":$("#service").val(),action:"deleteRank"},"Rank","../commons");
		})

		$("#editrankdropdown").click(function(){
			displayaddnewformentrydialog($("#editrank"),{"service":$("#editservice").val(),action:"addRank"},"Rank","../commons");
		})
		
		$("#editrankdropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#editrank"),{"service":$("#editservice").val(),action:"addRank"},"Rank","../commons");
		})
		
		$("#dischargereasondropdown").click(function(){
			displayaddnewformentrydialog($("#dischargereason"),{action:"addDischargeReason"},"Discharge Reason","../commons");
		})
		
		$("#dischargereasondropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#dischargereason"),{action:"deleteDischargeReason"},"Discharge Reason","../commons");
		})
		
		$("#editdischargereasondropdown").click(function(){
			displayaddnewformentrydialog($("#editdischargereason"),{action:"addDischargeReason"},"Discharge Reason","../commons");
		})
		
		$("#editdischargereasondropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#editdischargereason"),{action:"deleteDischargeReason"},"Discharge Reason","../commons");
		})

		
		$("#qualificationincivildropdown").click(function(){
			displayaddnewformentrydialog($("#qualificationincivil"),{action:"addQualification"},"Qualification in Civil","../commons")		
		})
		
		$("#qualificationincivildropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#qualificationincivil"),{action:"deleteQualification"},"Qualification in Civil","../commons"			)		
		})
		
		$("#qualificationinservicedropdown").click(function(){
			displayaddnewformentrydialog($("#qualificationinservice"),{action:"addQualification"},"Qualification in Service","../commons")			})
			
		$("#qualificationinservicedropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#qualificationinservice"),{action:"deleteQualification"},"Qualification in Service","../commons")		})
		
		$("#editqualificationincivildropdown").click(function(){
			displayaddnewformentrydialog($("#editqualificationincivil"),{action:"addQualification"},"Qualification in Civil","../commons");						
		})
		
		$("#editqualificationincivildropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#editqualificationincivil"),{action:"deleteQualification"},"Qualification in Civil","../commons");
			})
		
		$("#editqualificationinservicedropdown").click(function(){
			displayaddnewformentrydialog($("#editqualificationinservice"),{action:"addQualification"},"Qualification in Service","../commons");			
		})
		
		$("#editqualificationinservicedropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#editqualificationinservice"),{action:"deleteQualification"},"Qualification in Service","../commons");			
		})
		
		$("#birthstatedropdown").click(function(){
			displayaddnewformentrydialog($("#birthstate"),{action:"addState"},"State","../commons");			
		})
		
		$("#birthstatedropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#birthstate"),{action:"deleteState"},"State","../commons");			
		})
		
		$("#editbirthstatedropdown").click(function(){
			displayaddnewformentrydialog($("#editbirthstate"),{action:"addState"},"State","../commons");			
		})
		
		$("#editbirthstatedropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#editbirthstate"),{action:"deleteState"},"State","../commons");			
		})
		
		$("#communicationstatedropdown").click(function(){
			displayaddnewformentrydialog($("#communicationstate"),{action:"addState"},"State","../commons");			
		})
		
		$("#communicationstatedropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#communicationstate"),{action:"deleteState"},"State","../commons");			
		})
		
		$("#editcommunicationstatedropdown").click(function(){
			displayaddnewformentrydialog($("#editcommunicationstate"),{action:"addState"},"State","../commons");			
		})
		
		$("#editcommunicationstatedropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#editcommunicationstate"),{action:"deleteState"},"State","../commons");			
		})
		
		$("#permanentstatedropdown").click(function(){
			displayaddnewformentrydialog($("#permanentstate"),{action:"addState"},"State","../commons");			
		})
		
		$("#permanentstatedropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#permanentstate"),{action:"deleteState"},"State","../commons");			
		})
		
		$("#editpermanentstatedropdown").click(function(){
			displayaddnewformentrydialog($("#editpermanentstate"),{action:"addState"},"State","../commons");			
		})
		
		$("#editpermanentstatedropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#editpermanentstate"),{action:"deleteState"},"State","../commons");			
		})
		
		$("#birthdistrictdropdown").click(function(){
			displayaddnewformentrydialog($("#birthdistrict"),{state:$("#birthstate").val(),action:"addDistrict" },"District","../commons");			
		})
		
		$("#birthdistrictdropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#birthdistrict"),{state:$("#birthstate").val(),action:"deleteDistrict" },"District","../commons");			
		})
		
		$("#editbirthdistrictdropdown").click(function(){
			displayaddnewformentrydialog($("#editbirthdistrict"),{state:$("#editbirthstate").val(),action:"addDistrict"},"District","../commons");			
		})
		
		$("#editbirthdistrictdropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#editbirthdistrict"),{state:$("#editbirthstate").val(),action:"deleteDistrict"},"District","../commons");			
		})
		
		$("#communicationdistrictdropdown").click(function(){
			displayaddnewformentrydialog($("#communicationdistrict"),{state:$("#communicationstate").val(),action:"addDistrict"},"District","../commons");			
		})
		
		$("#communicationdistrictdropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#communicationdistrict"),{state:$("#communicationstate").val(),action:"deleteDistrict"},"District","../commons");			
		})
		
		$("#editcommunicationdistrictdropdown").click(function(){
			displayaddnewformentrydialog($("#editcommunicationdistrict"),{state:$("#editcommunicationstate").val(),action:"addDistrict"},"District","../commons");			
		})
		
		$("#editcommunicationdistrictdropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#editcommunicationdistrict"),{state:$("#editcommunicationstate").val(),action:"deleteDistrict"},"District","../commons");			
		})
		
		$("#permanentdistrictdropdown").click(function(){
			displayaddnewformentrydialog($("#permanentdistrict"),{state:$("#permanentstate").val(),action:"addDistrict"},"District","../commons");			
		})
		
		$("#permanentdistrictdropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#permanentdistrict"),{state:$("#permanentstate").val(),action:"deleteDistrict"},"District","../commons");			
		})
		
		$("#editpermanentdistrictdropdown").click(function(){
			displayaddnewformentrydialog($("#editpermanentdistrict"),{state:$("#editpermanentstate").val(),action:"addDistrict"},"District","../commons");			
		})
		
		$("#editpermanentdistrictdropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#editpermanentdistrict"),{state:$("#editpermanentstate").val(),action:"deleteDistrict"},"District","../commons");			
		})
		
		$("#mcatdischargedropdown").click(function(){
			displayaddnewformentrydialog($("#mcatdischarge"),{action:"addMedicalCategory"},"Medical category","../commons");			
		})
		
		$("#mcatdischargedropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#mcatdischarge"),{action:"deleteMedicalCategory"},"Medical category","../commons");			
		})
		
		$("#editmcatdischargedropdown").click(function(){
			displayaddnewformentrydialog($("#editmcatdischarge"),{action:"addMedicalCategory"},"Medical category","../commons");			
		})
		
		$("#editmcatdischargedropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#editmcatdischarge"),{action:"deleteMedicalCategory"},"Medical category","../commons");			
		})
		
		$("#characteratdischargedropdown").click(function(){
			displayaddnewformentrydialog($("#characteratdischarge"),{action:"addCharacter"},"Character","../commons");			
		})
		
		$("#characteratdischargedropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#characteratdischarge"),{action:"deleteCharacter"},"Character","../commons");			
		})
		
		$("#editcharacteratdischargedropdown").click(function(){
			displayaddnewformentrydialog($("#editcharacteratdischarge"),{action:"addCharacter"},"Character","../commons");			
		})
		
		$("#editcharacteratdischargedropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#editcharacteratdischarge"),{action:"deleteCharacter"},"Character","../commons");			
		})
		
		$("#deathdetailsdropdown").click(function(){
			displayaddnewformentrydialog($("#deathdetails"),{action:"addDeathDetail"},"Death Detail","../commons");			
		})
		
		$("#editdeathdetailsdropdown").click(function(){
			displayaddnewformentrydialog($("#editdeathdetails"),{action:"addDeathDetail"},"Death Detail","../commons");			
		})
		
		$("#deathdetailsdropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#deathdetails"),{action:"addDeathDetail"},"Death Detail","../commons");			
		})
		
		$("#editdeathdetailsdropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#editdeathdetails"),{action:"deleteDeathDetail"},"Death Detail","../commons");			
		})
		
		
		populateSelectBox([$('#editdischargereason'),$('#dischargereason')], "../commons",{action:"getDischargeReasons"});
		populateSelectBox([$('#birthstate'),$('#communicationstate'),$('#permanentstate'), $('#editbirthstate'),$('#editcommunicationstate'),$('#editpermanentstate')], "../commons",{action:"getStates"});
		populateSelectBox([$('#qualificationincivil'),$('#qualificationinservice'),$('#editqualificationincivil'), $('#editqualificationinservice')], "../commons",{action:"getEducationalQualifications"});
		populateSelectBox([$('#group'),$('#editgroup')], "../commons",{action:"getGroups"});
		populateSelectBox([$('#board'),$('#editboard'),$('#queryboardname')], "../BoardServlet",{action:"getBoardsList"});
		populateSelectBox([$('#mcatdischarge'),$('#editmcatdischarge')], "../commons",{action:"getMedicalCategories"});
		populateSelectBox([$('#characteratdischarge'),$('#editcharacteratdischarge')], "../commons",{action:"getCharacters"});
	}
	
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
				if(optionvalue=="name"||optionvalue=="fathername"){
					var control = $(tableinfo[optionvalue].controls[0]);
					control.change(function(){
							$(this).val($(this).val().toUpperCase())
					})
					newRow.append("<td>"+control.attr('label')+"</td>");
					newRow.append(control);
					$searchtable.append(newRow);
				}
				else if(optionvalue=="dob"||optionvalue=="datedischarged"){
					var control = $(tableinfo[optionvalue].controls[0]);
					control.datepicker({ dateFormat: "dd-mm-yy", yearRange: "1900:"+(new Date()).getFullYear(), changeMonth: true,  changeYear: true});
					newRow.append("<td>"+control.attr('label')+"</td>");
					newRow.append(control);
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
	
	$("input[type=radio]").click(function(){
		setRadioButton($(this).attr('name'), $(this).attr('value'));
	})
	
	function setRadioButton(radiobuttonname, value){
		$("input[type=radio][name="+radiobuttonname+"]").removeAttr("checked");
		$("input[type=radio][name="+radiobuttonname+"][value="+value+"]").attr("checked",true)
		$("input[type=radio][name="+radiobuttonname+"][value="+value+"]")[0].checked=true;
	}
	
	
Ext.onReady(function() {
	Ext.define('ServiceModel', {
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
			model: 'ServiceModel',
			storeId:'serviceStore',
			proxy: {
			 type: 'ajax',
			 url: "../VeteranServlet",
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
		renderTo: Ext.get("servicestable"),
		items:[
			{
				xtype:'grid',
				title: 'Query Results',
				margin:'0 0 0 0',
				id:'veteranGrid',
				minHeight:210,
				maxHeight:211,
				header:false,
				store: Ext.data.StoreManager.lookup('serviceStore'),
				columns: [
					
					{dataIndex: 'board', text: "Branch", hidden:false},
					{dataIndex: 'service', text: "Service", hidden:true},
					{dataIndex: 'corps', text: "Corps", hidden:true},
					{dataIndex: 'group', text: "Group", hidden:true},
					{dataIndex: 'trade', text: "Trade", hidden:false},
					{dataIndex: 'serviceno', text: "Service No",hideable:false, hidden:false},
					{dataIndex: 'registrationno', text: "Registration No", hidden:false},
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
				],
				listeners:{
					itemclick:function(grid, record, item, index, e, eOpts){
						getServiceDetail(record.get("serviceno"), record.get("registrationno"));
					}
				}
			}
		]
	})
})

function convertDate(v, record){
	debugger;
	return returnReadableDate(v);
	
}
	
})

