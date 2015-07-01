/**
 * Created by pneeraj on 6/1/14.
 */
$(function(){

	//hide all add and delte buttons
	if(getCookie("role")!="admin"){
		$(".dropdownbutton").hide();
		$(".dropdownbuttondelete").hide();
	}

    var prevCur='';
    var nextCur='';
	
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
	$( "#editdateenrolled" ).datepicker({ dateFormat: "dd-mm-yy", yearRange: "1900:"+(new Date()).getFullYear(), changeMonth: true,  changeYear: true});
	$( "#editdatedischarged" ).datepicker({ dateFormat: "dd-mm-yy", yearRange: "1900:"+(new Date()).getFullYear(), changeMonth: true,  changeYear: true});
	$( "#editdateofdeath" ).datepicker({ dateFormat: "dd-mm-yy", yearRange: "1900:"+(new Date()).getFullYear(), changeMonth: true,  changeYear: true});
	$( "#editdateofmarriage" ).datepicker({ dateFormat: "dd-mm-yy", yearRange: "1900:"+(new Date()).getFullYear(), changeMonth: true,  changeYear: true});
	$( "#editspousedob" ).datepicker({ dateFormat: "dd-mm-yy", yearRange: "1900:"+(new Date()).getFullYear(), changeMonth: true,  changeYear: true});
	$( "#dateregistered" ).datepicker({ dateFormat: "dd-mm-yy", yearRange: "1900:"+(new Date()).getFullYear(), changeMonth: true,  changeYear: true});
	$( "#editdateregistered" ).datepicker({ dateFormat: "dd-mm-yy", yearRange: "1900:"+(new Date()).getFullYear(), changeMonth: true,  changeYear: true});

    /**Attach autocomplete to board name*/
    $( "#board" ).autocomplete({
      source: "../board/getBoardsList",
      delay: 50,
	  select:  function( event, ui ) {
		 /*Handler to do operation on select of a board*/
      }
    });
		
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
		prevCur=null;
		nextCur=null;
		loadGridData("next");
    })

    $("#editsubmitbutton").click(updateService)
	$("#editdeletebutton").click(function(){
		$.ajax({
			type: 'POST',
			url: "../service/deleteService",
			data: {
					serviceno : $('#editserviceno').val(),
					board:$('#editboard').val()
					},
			success: function(response) {
					if(response.status=="success"){
						alert(response.content);
						$("[formelement='editservice']").val('');
						$("#editdependenttable tr[datarow='true']").remove();
						loadGridData("next");
					}
					else if(response.status=="failure") {
						alert(response.error);
					}
				},
			dataType: "json"
			});	
	})
	
	initializeFormControls();

    /* Function to send update service request */
	function updateService(){
		if(validateFormControls("editservice")){
			$.ajax({
			type: 'POST',
			url: "../service/updateService",
			data: {
					board : $('#editboard').val(),
					service : $('#editservice').val(),
					corps:$('#editcorps').val(),
					group:$('#editgroup').val(),
					trade : $('#edittrade').val(),
					serviceno : $('#editserviceno').val(),
					registrationno : $('#editregistrationno').val(),
					rank : $('#editrank').val(),
					name : $('#editname').val(),
					gender:$("input:radio[name='gender']:checked").val(),
					dob: $('#editdob').val(),
					dateenrolled :$('#editdateenrolled').val(),
					wwii : $("input:radio[name='editwwii']:checked").val(),
					operations : $('#editoperations').val(),
					decoration : $('#editdecoration').val(),
					unitlastserved : $('#editunitlastserved').val(),
					datedischarged : $('#editdatedischarged').val(),
					dischargereason:$('#editdischargereason').val(),
					dateofdeath:$('#editdateofdeath').val(),
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
					reemploymentstatus:$("input:radio[name='editreemploymentstatus']:checked").val(),
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
					maritalstatus:$("input:radio[name='editmaritalstatus']:checked").val(),
					spousename:$('#editspousename').val(),
					dateofmarriage:$('#editdateofmarriage').val(),
					spouserelation:$("input:radio[name='editspouserelation']:checked").val(),
					spousedob:$('#editspousedob').val(),
					spouseidentificationmark:$('#editspouseidentificationmark').val(),
					spousequalification:$('#editspousequalification').val(),
					isspouseemployed:$("input:radio[name='editisspouseemployed']:checked").val(),
					spouseprofession:$('#editspouseprofession').val(),
					nextofkinname:$('#editnextofkinname').val(),
					nextofkinrelation:$('#editnextofkinrelation').val(),
					dependents: JSON.stringify(getDependentsFromTable("editdependenttable"))
					},
			success: function(response) {
					if(response.status=="success"){
						alert('Service successfully updated');
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


    /*Initialise the edit form controls*/
	function loadGridData(direction){
        if ((direction == '') && (prevCur || nextCur)) {
            return;
        }
		var queryParam = {
							"searchfield":$("#searchservices_searchin").val(),
							"operator":$("#searchservices_operator").val(),
							"value":$("#searchservices_value").val()
						}
        var cursor;
		$.ajax({
			type: 'GET',
			url: "../service/getServicesWithCursor",
			data: {
                    pCursor:prevCur,
                    nCursor:nextCur,
                    dir:direction,
                    boardname:$("#queryboardname").val(),
					queryparam:JSON.stringify(queryParam)
				},
			success: function(response) {
                prevCur = response.pCursor;
                nextCur = response.nCursor;
                populateGrid("servicestable",['serviceno','rank','service','name','dob','fathername'],response)
            },
			dataType: "json"
		});
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

    /* Function to send add request */
	function submitService(){
		if(validateFormControls("addservice")){
			$.ajax({
			type: 'POST',
			url: "../service/submitService",
			data: {
					board : $('#board').val(),
					service : $('#service').val(),
					corps:$('#corps').val(),
					group:$('#group').val(),
					trade : $('#trade').val(),
					serviceno : $('#serviceno').val(),
					registrationno : $('#registrationno').val(),
					rank : $('#rank').val(),
					name : $('#name').val(),
					dob: $('#dob').val(),
					gender:$("input:radio[name='gender']:checked").val(),
					dateenrolled :$('#dateenrolled').val(),
					wwii : $("input:radio[name='wwii']:checked").val(),
					operations : $('#operations').val(),
					decoration : $('#decoration').val(),
					unitlastserved : $('#unitlastserved').val(),
					datedischarged : $('#datedischarged').val(),
					dischargereason:$('#dischargereason').val(),
					dateofdeath:$('#dateofdeath').val(),
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
					reemploymentstatus:$("input:radio[name='reemploymentstatus']:checked").val(),
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
					maritalstatus:$("input:radio[name='maritalstatus']:checked").val(),
					spousename:$('#spousename').val(),
					dateofmarriage:$('#dateofmarriage').val(),
					spouserelation:$("input:radio[name='spouserelation']:checked").val(),
					spousedob:$('#spousedob').val(),
					spouseidentificationmark:$('#spouseidentificationmark').val(),
					spousequalification:$('#spousequalification').val(),
					isspouseemployed:$("input:radio[name='isspouseemployed']:checked").val(),
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
						alert(response.errors);
					}
				},
			dataType: "json"
			});
			
		}
		else{
			alert("Errors exist in form");
		}
	}

	function clearAddFormData(){
		$("[formelement='addservice']").val('');
		$("#dependenttable tr[datarow='true']").remove();
		//$("#service").val("Army");
	}
	
	function displayaddnewformentrydialog($selectbox,dataObject,field, url){
		$("#addnewformentry table tr[data='false']:not([template]").remove();
		for(fld in dataObject){
			var tr = $("#addnewformentry table tr[template]").first().clone();
			tr.find("td").first().html(fld);
			tr.find("td input").val(dataObject[fld]);
			tr.removeAttr('template');
			tr.show();
			$("#addnewformentry table tr:last").before(tr);
		}
		
		
		$("#addfield").html(field);
		$("#addfieldvalue").val('');
		
		$("#addnewformentry").dialog({
			modal:true,
			title: 'Add new ' + field,
			buttons: {
			"Add": function() {
				dataObject.name = $("#addfieldvalue").val();
				$.ajax({
						type: 'POST',
						url: url,
						data: dataObject,
						success: function(response) {
								if(response.status=="success"){
									$selectbox.append("<option value='"+$("#addfieldvalue").val()+"'>"+$("#addfieldvalue").val()+"</option>")
									alert(field + ' successfully added');
									
								}
								else if(response.status=="failure") {
									alert(response.error);
								}
								$("#addfieldvalue").val('');
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
	
	function displaydeletenewformentrydialog($selectbox,dataObject,field, url){
		$("#deletenewformentry table tr[data='false']:not([template]").remove();
		for(fld in dataObject){
			var tr = $("#deletenewformentry table tr[template]").first().clone();
			tr.find("td").first().html(fld);
			tr.find("td input").val(dataObject[fld]);
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
									var option = $selectbox.find("option[value=" +$("#deletefieldvalue").val() +"]");
									if(option!=null){
										option.remove();
									}
									alert(field + ' successfully deleted');
									
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
            dependent.dob = currentControl.val();

            currentControl =   $(this).find("td[field='maritalstatus']").children().first(); //radio button
            dependent.maritalstatus = $('input:radio[name='+currentControl.attr('id')+']:checked').val();//(currentControl.val()=="")?currentControl.val():currentControl.next().val();;

            currentControl =   $(this).find("td[field='education']").children().first();
            dependent.education = currentControl.val();

            currentControl =    $(this).find("td[field='course']").children().first();
            dependent.course = currentControl.val();

            currentControl =    $(this).find("td[field='courseyear']").children().first();
            dependent.courseyear = currentControl.val();

            currentControl =    $(this).find("td[field='employmentstatus']").children().first(); //radio button
            dependent.employmentstatus = $('input:radio[name='+currentControl.attr('id')+']:checked').val();//(currentControl.val()=="")?currentControl.val():currentControl.next().val();

            dependents.push(dependent);
        })
        return dependents;
    }

	

    /*Function to get the details of a selected service*/
    function getServiceDetail(serviceno){
        $.ajax({
			type: 'GET',
			url: "../service/getServiceDetail",
			data: {
					serviceno: serviceno
				},
			success: function(response) {
				if(response.status=="success")
					{
                       	$('#editboard').val(response.content.service.board);
                        $('#editservice').val(response.content.service.service);
						populateSelectBox([$('#editcorps')],"../commons/getCorps",{service: response.content.service.service}); 
                        $('#editcorps').val(response.content.service.corps);
						$('#editgroup').val(response.content.service.group);
						populateSelectBox([$('#edittrade')], "../commons/getTrades",{group:response.content.service.group,service:response.content.service.service});
                        $('#edittrade').val(response.content.service.trade);
                        $('#editserviceno').val(response.content.service.serviceno);
						$('#editregistrationno').val(response.content.service.registrationno);
						populateSelectBox([$('#editrank')], "../commons/getRanks",{service:response.content.service.service });
                        $('#editrank').val(response.content.service.rank)
                        $('#editname').val(response.content.service.name)
						$("#editgender[value="+response.content.service.gender+"]").prop("checked",true)
                        $('#editdob').val(response.content.service.dob)
                        $('#editdateenrolled').val(response.content.service.dateenrolled)
						$("#editwwii[value="+response.content.service.wwii+"]").prop("checked",true)
                        $('#editoperations').val(response.content.service.operations)
                        $('#editdecoration').val(response.content.service.decoration)
                        $('#editunitlastserved').val(response.content.service.unitlastserved)
                        $('#editdatedischarged').val(response.content.service.datedischarged)
						$('#editdischargereason').val(response.content.service.dischargereason)
                        $('#editdeathdetails').val(response.content.service.deathdetails)
						$('#editdateofdeath').val(response.content.service.dateofdeath)
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
						populateSelectBox([$('#editbirthdistrict')], "../commons/getDistricts", {state:response.content.service.birthstate});
						$('#editbirthdistrict').val(response.content.service.birthdistrict)
                        $('#editqualificationincivil').val(response.content.service.qualificationincivil)
                        $('#editqualificationinservice').val(response.content.service.qualificationinservice)
						$("#editreemploymentstatus[value="+response.content.service.reemploymentstatus+"]").prop("checked",true)
                        $('#editemployer').val(response.content.service.employer)
                        $('#editmonthlyincome').val(response.content.service.monthlyincome)
                        $('#editdepartment').val(response.content.service.department)
                        $('#editofficecontactno').val(response.content.service.officecontactno)
                        $('#editadharcardno').val(response.content.service.adharcardno)
                        $('#editcsdcardno').val(response.content.service.csdcardno)
                        $('#editechscardno').val(response.content.service.echscardno)
                        $('#editafacardno').val(response.content.service.afacardno)
                        $('#editdateregistered').val(response.content.service.dateregistered)
                        $('#editpermanentdoorno').val(response.content.service.permanentdoorno)
                        $('#editpermanenthousename').val(response.content.service.permanenthousename)
                        $('#editpermanentstreet').val(response.content.service.permanentstreet)
                        $('#editpermanentcity').val(response.content.service.permanentcity)
                        $('#editpermanentstate').val(response.content.service.permanentstate)
						populateSelectBox([$('#editpermanentdistrict')], "../commons/getDistricts", {state:response.content.service.permanentstate});
                        $('#editpermanentdistrict').val(response.content.service.permanentdistrict)
                        $('#editpermanentpolicestation').val(response.content.service.permanentpolicestation)
                        $('#editpermanentpincode').val(response.content.service.permanentpincode)
                        $('#editcommunicationdoorno').val(response.content.service.communicationdoorno)
                        $('#editcommunicationhousename').val(response.content.service.communicationhousename)
                        $('#editcommunicationstreet').val(response.content.service.communicationstreet)
                        $('#editcommunicationcity').val(response.content.service.communicationcity)
                        $('#editcommunicationstate').val(response.content.service.communicationstate)
						populateSelectBox([$('#editcommunicationdistrict')], "../commons/getDistricts",{state:response.content.service.communicationstate});
                        $('#editcommunicationdistrict').val(response.content.service.communicationdistrict)
                        $('#editcommunicationpolicestation').val(response.content.service.communicationpolicestation)
                        $('#editcommunicationpincode').val(response.content.service.communicationpincode)
                        $('#editcommunicationtelephone').val(response.content.service.communicationtelephone)
                        $('#editcommunicationmobile').val(response.content.service.communicationmobile)
                        $('#editcommunicationemail').val(response.content.service.communicationemail)
						$("#editmaritalstatus[value="+response.content.service.maritalstatus+"]").prop("checked",true)
                        $('#editspousename').val(response.content.service.spousename)
						$("#editspouserelation[value="+response.content.service.spouserelation+"]").prop("checked",true)
						$('#editdateofmarriage').val(response.content.service.dateofmarriage)
						$('#editspousedob').val(response.content.service.spousedob)
                        $('#editspouseidentificationmark').val(response.content.service.spouseidentificationmark)
                        $('#editspousequalification').val(response.content.service.spousequalification)
						$("#editisspouseemployed[value="+response.content.service.isspouseemployed+"]").prop("checked",true)
                        $('#editspouseprofession').val(response.content.service.spouseprofession)
                        $('#editnextofkinname').val(response.content.service.nextofkinname)
                        $('#editnextofkinrelation').val(response.content.service.nextofkinrelation)
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
							currentControl.val(dependent.dob);
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
		
		$("#corps").focus(function(){populateSelectBox([$(this)], "../commons/getCorps", {service:$("#service").val() }); })
		$("#trade").focus(function(){populateSelectBox([$(this)], "../commons/getTrades",{group:$("#group").val(),service:$("#service").val()});})
		$("#rank").focus(function(){populateSelectBox([$(this)], "../commons/getRanks", {service:$("#service").val() });})
		
		$("#editcorps").focus(function(){populateSelectBox([$(this)], "../commons/getCorps", {service:$("#editservice").val() }); })
		$("#edittrade").focus(function(){populateSelectBox([$(this)], "../commons/getTrades", {group:$("#editgroup").val(),service:$("#editservice").val()})});
		$("#editrank").focus(function(){populateSelectBox([$(this)], "../commons/getRanks", {service:$("#editservice").val() }); })
		
		$("#birthdistrict").focus(function(){populateSelectBox([$(this)], "../commons/getDistricts",{state:$("#birthstate").val()});})
		$("#editbirthdistrict").focus(function(){populateSelectBox([$(this)], "../commons/getDistricts",{state:$("#editbirthstate").val()});})
		
		$("#communicationdistrict").focus(function(){populateSelectBox([$(this)], "../commons/getDistricts",{state:$("#communicationstate").val()});})
		$("#editcommunicationdistrict").focus(function(){populateSelectBox([$(this)], "../commons/getDistricts",{state:$("#editcommunicationstate").val()});})
		
		$("#permanentdistrict").focus(function(){populateSelectBox([$(this)], "../commons/getDistricts",{state:$("#permanentstate").val()});})
		$("#editpermanentdistrict").focus(function(){populateSelectBox([$(this)], "../commons/getDistricts",{state:$("#editpermanentstate").val()});})
		
		$("#corpsdropdown").click(function(){
			displayaddnewformentrydialog($("#corps"),{"service":$("#service").val()},"Corps","../commons/addCorps")
		});
		
		$("#corpsdropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#corps"),{"service":$("#service").val()},"Corps","../commons/deleteCorps")
		});
		
		$("#editcorpsdropdown").click(function(){
			displayaddnewformentrydialog($("#editcorps"),{"service":$("#editservice").val()},"Corps","../commons/addCorps")
		});
		
		$("#editcorpsdropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#editcorps"),{"service":$("#editservice").val()},"Corps","../commons/deleteCorps")
		});
		
		$("#groupdropdown").click(function(){
			displayaddnewformentrydialog($("#group"),{},"Group","../commons/addGroups");
		})	
		
		$("#groupdropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#group"),{},"Group","../commons/deleteGroups");
		})
		
		$("#editgroupdropdown").click(function(){
			displayaddnewformentrydialog($("#editgroup"),{},"Group","../commons/addGroups");			
		})
		
		$("#editgroupdropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#editgroup"),{},"Group","../commons/deleteGroups");			
		})
		
		
		$("#tradedropdown").click(function(){
			displayaddnewformentrydialog($("#trade"),{"service":$("#service").val(), "group":$("#group").val()},"Trade","../commons/addTrades")
		});
		
		$("#tradedropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#trade"),{"service":$("#service").val(), "group":$("#group").val()},"Trade","../commons/deleteTrades")
		});
		
		
		$("#edittradedropdown").click(function(){
			displayaddnewformentrydialog($("#edittrade"),{"service":$("#editservice").val(), "group":$("#editgroup").val()},"Trade","../commons/addTrades");
		})
		
		$("#edittradedropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#edittrade"),{"service":$("#editservice").val(), "group":$("#editgroup").val()},"Trade","../commons/deleteTrades");
		})
		
		$("#rankdropdown").click(function(){
			displayaddnewformentrydialog($("#rank"),{"service":$("#service").val()},"Rank","../commons/addRanks");
		})
		
		$("#rankdropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#rank"),{"service":$("#service").val()},"Rank","../commons/deleteRanks");
		})

		$("#editrankdropdown").click(function(){
			displayaddnewformentrydialog($("#editrank"),{"service":$("#editservice").val()},"Rank","../commons/addRanks");
		})
		
		$("#editrankdropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#editrank"),{"service":$("#editservice").val()},"Rank","../commons/deleteRanks");
		})
		
		$("#dischargereasondropdown").click(function(){
			displayaddnewformentrydialog($("#dischargereason"),{},"Discharge Reason","../commons/addDischargeReasons");
		})
		
		$("#dischargereasondropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#dischargereason"),{},"Discharge Reason","../commons/deleteDischargeReasons");
		})
		
		$("#editdischargereasondropdown").click(function(){
			displayaddnewformentrydialog($("#editdischargereason"),{},"Discharge Reason","../commons/addDischargeReasons");
		})
		
		$("#editdischargereasondropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#editdischargereason"),{},"Discharge Reason","../commons/deleteDischargeReasons");
		})

		
		$("#qualificationincivildropdown").click(function(){
			displayaddnewformentrydialog($("#qualificationincivil"),{},"Qualification in Civil","../commons/addEducationalQualifications")		
		})
		
		$("#qualificationincivildropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#qualificationincivil"),{},"Qualification in Civil","../commons/deleteEducationalQualifications"			)		
		})
		
		$("#qualificationinservicedropdown").click(function(){
			displayaddnewformentrydialog($("#qualificationinservice"),{},"Qualification in Service","../commons/addEducationalQualifications")			})
			
		$("#qualificationinservicedropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#qualificationinservice"),{},"Qualification in Service","../commons/deleteEducationalQualifications")		})
		
		$("#editqualificationincivildropdown").click(function(){
			displayaddnewformentrydialog($("#editqualificationincivil"),{},"Qualification in Civil","../commons/addEducationalQualifications");						
		})
		
		$("#editqualificationincivildropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#editqualificationincivil"),{},"Qualification in Civil","../commons/deleteEducationalQualifications");
			})
		
		$("#editqualificationinservicedropdown").click(function(){
			displayaddnewformentrydialog($("#editqualificationinservice"),{},"Qualification in Service","../commons/addEducationalQualifications");			
		})
		
		$("#editqualificationinservicedropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#editqualificationinservice"),{},"Qualification in Service","../commons/deleteEducationalQualifications");			
		})
		
		$("#birthstatedropdown").click(function(){
			displayaddnewformentrydialog($("#birthstate"),{},"State","../commons/addStates");			
		})
		
		$("#birthstatedropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#birthstate"),{},"State","../commons/deleteStates");			
		})
		
		$("#editbirthstatedropdown").click(function(){
			displayaddnewformentrydialog($("#editbirthstate"),{},"State","../commons/addStates");			
		})
		
		$("#editbirthstatedropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#editbirthstate"),{},"State","../commons/deleteStates");			
		})
		
		$("#communicationstatedropdown").click(function(){
			displayaddnewformentrydialog($("#communicationstate"),{},"State","../commons/addStates");			
		})
		
		$("#communicationstatedropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#communicationstate"),{},"State","../commons/deleteStates");			
		})
		
		$("#editcommunicationstatedropdown").click(function(){
			displayaddnewformentrydialog($("#editcommunicationstate"),{},"State","../commons/addStates");			
		})
		
		$("#editcommunicationstatedropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#editcommunicationstate"),{},"State","../commons/deleteStates");			
		})
		
		$("#permanentstatedropdown").click(function(){
			displayaddnewformentrydialog($("#permanentstate"),{},"State","../commons/addStates");			
		})
		
		$("#permanentstatedropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#permanentstate"),{},"State","../commons/deleteStates");			
		})
		
		$("#editpermanentstatedropdown").click(function(){
			displayaddnewformentrydialog($("#editpermanentstate"),{},"State","../commons/addStates");			
		})
		
		$("#editpermanentstatedropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#editpermanentstate"),{},"State","../commons/deleteStates");			
		})
		
		$("#birthdistrictdropdown").click(function(){
			displayaddnewformentrydialog($("#birthdistrict"),{state:$("#birthstate").val() },"District","../commons/addDistricts");			
		})
		
		$("#birthdistrictdropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#birthdistrict"),{state:$("#birthstate").val() },"District","../commons/deleteDistricts");			
		})
		
		$("#editbirthdistrictdropdown").click(function(){
			displayaddnewformentrydialog($("#editbirthdistrict"),{state:$("#editbirthstate").val()},"District","../commons/addDistricts");			
		})
		
		$("#editbirthdistrictdropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#editbirthdistrict"),{state:$("#editbirthstate").val()},"District","../commons/deleteDistricts");			
		})
		
		$("#communicationdistrictdropdown").click(function(){
			displayaddnewformentrydialog($("#communicationdistrict"),{state:$("#communicationstate").val()},"District","../commons/addDistricts");			
		})
		
		$("#communicationdistrictdropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#communicationdistrict"),{state:$("#communicationstate").val()},"District","../commons/deleteDistricts");			
		})
		
		$("#editcommunicationdistrictdropdown").click(function(){
			displayaddnewformentrydialog($("#editcommunicationdistrict"),{state:$("#editcommunicationstate").val()},"District","../commons/addDistricts");			
		})
		
		$("#editcommunicationdistrictdropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#editcommunicationdistrict"),{state:$("#editcommunicationstate").val()},"District","../commons/deleteDistricts");			
		})
		
		$("#permanentdistrictdropdown").click(function(){
			displayaddnewformentrydialog($("#permanentdistrict"),{state:$("#permanentstate").val()},"District","../commons/addDistricts");			
		})
		
		$("#permanentdistrictdropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#permanentdistrict"),{state:$("#permanentstate").val()},"District","../commons/deleteDistricts");			
		})
		
		$("#editpermanentdistrictdropdown").click(function(){
			displayaddnewformentrydialog($("#editpermanentdistrict"),{state:$("#editpermanentstate").val()},"District","../commons/addDistricts");			
		})
		
		$("#editpermanentdistrictdropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#editpermanentdistrict"),{state:$("#editpermanentstate").val()},"District","../commons/deleteDistricts");			
		})
		
		$("#mcatdischargedropdown").click(function(){
			displayaddnewformentrydialog($("#mcatdischarge"),{},"Medical category","../commons/addMedicalCategories");			
		})
		
		$("#mcatdischargedropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#mcatdischarge"),{},"Medical category","../commons/deleteMedicalCategories");			
		})
		
		$("#editmcatdischargedropdown").click(function(){
			displayaddnewformentrydialog($("#editmcatdischarge"),{},"Medical category","../commons/addMedicalCategories");			
		})
		
		$("#editmcatdischargedropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#editmcatdischarge"),{},"Medical category","../commons/deleteMedicalCategories");			
		})
		
		$("#characteratdischargedropdown").click(function(){
			displayaddnewformentrydialog($("#characteratdischarge"),{},"Character","../commons/addCharacters");			
		})
		
		$("#characteratdischargedropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#characteratdischarge"),{},"Character","../commons/deleteCharacters");			
		})
		
		$("#editcharacteratdischargedropdown").click(function(){
			displayaddnewformentrydialog($("#editcharacteratdischarge"),{},"Character","../commons/addCharacters");			
		})
		
		$("#editcharacteratdischargedropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#editcharacteratdischarge"),{},"Character","../commons/deleteCharacters");			
		})
		
		$("#deathdetailsdropdown").click(function(){
			displayaddnewformentrydialog($("#deathdetails"),{},"Death Detail","../commons/addDeathDetails");			
		})
		
		$("#editdeathdetailsdropdown").click(function(){
			displayaddnewformentrydialog($("#editdeathdetails"),{},"Death Detail","../commons/addDeathDetails");			
		})
		
		$("#deathdetailsdropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#deathdetails"),{},"Death Detail","../commons/deleteDeathDetails");			
		})
		
		$("#editdeathdetailsdropdowndelete").click(function(){
			displaydeletenewformentrydialog($("#editdeathdetails"),{},"Death Detail","../commons/deleteDeathDetails");			
		})
		
		
		populateSelectBox([$('#editdischargereason'),$('#dischargereason')], "../commons/getDischargeReasons",{});
		populateSelectBox([$('#birthstate'),$('#communicationstate'),$('#permanentstate'), $('#editbirthstate'),$('#editcommunicationstate'),$('#editpermanentstate')], "../commons/getStates",{});
		populateSelectBox([$('#qualificationincivil'),$('#qualificationinservice'),$('#editqualificationincivil'), $('#editqualificationinservice')], "../commons/getEducationalQualifications",{});
		populateSelectBox([$('#group'),$('#editgroup')], "../commons/getGroups",{});
		populateSelectBox([$('#board'),$('#editboard'),$('#queryboardname')], "../board/getBoardsList",{});
		populateSelectBox([$('#mcatdischarge'),$('#editmcatdischarge')], "../commons/getMedicalCategories",{});
		populateSelectBox([$('#characteratdischarge'),$('#editcharacteratdischarge')], "../commons/getCharacters",{});

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

})