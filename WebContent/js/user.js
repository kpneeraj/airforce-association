$(function(){
	
	$body = $("body");
	$(document).on({
		 ajaxStart: function() { $body.addClass("loading");    },
		 ajaxStop: function() { $body.removeClass("loading"); }    
	});
	if(getCookie("role")=="boardadmin") {
		$("#addtab").remove();
		$("#addtabmenu").remove();
		$("#searchusername").val(getCookie("userid"));
		$("#searchusername").attr('disabled',true)
		$("#deletebutton").remove();		
	}
	
	$("#tabs").tabs({
		 activate: function( event, ui ) {
			if(ui.newPanel.attr("id") == "edittab")
			{
				//code for edit related activities
			}
		}
	});
	

	$("#username").focusout(function(){$(this).val($(this).val().toUpperCase())});
	
	$("#role").change(function(){
		if($(this).val()=="admin"){
			$("#board").prop("disabled",true);
			$("#board").val('');
		}
		else{
			$("#board").prop("disabled",false);
		}
	})
	
	$("#editrole").change(function(){
		if($(this).val()=="admin"){
			$("#editboard").prop("disabled",true);
			$("#editboard").val('');
		}
		else{
			$("#editboard").prop("disabled",false);
		}
	})
	
	$("[formelement='adduser']").focusout(function(){validate($(this)) });
	$("[formelement='edituser']").focusout(function(){validate($(this)) });

	$("#submitbutton").click(submitUser);
	
	$( "#searchusername" ).autocomplete({
      source: "../UserServlet",
      delay: 500,
	  select:  function( event, ui ) {
		 /*Handler to do operation on select of a board*/
      }
    });
	
	
	
	$("#clearbutton").click(clearForm);
	
	$("#editclearbutton").click(function(){
		$('#editusername').val('');
		$('#editemail').val('');
		$('#editpassword').val('');
		$('#editcontactno').val('');
		$('#editrole').val('');
		$('#editboard').val('');
	});
	
	$("#editsubmitbutton").click(function(){
		updateUser($('#editusername').val());
	});
	
	$("#updatepasswordbutton").click(function(){
		updateUserPassword($('#editusername').val());
	});
	
	$("#getDetailsButton").click(function(){
		getUserDetail($("#searchusername").val())		
	});
	
	populateSelectBox([$('#board'),$('#editboard')], "../BoardServlet",{action:"getBoardsList"});
	
	$("#deletebutton").click(function(){
		$( "#deleteconfirm" ).dialog(
		{
			buttons: {
			"Ok": function() {
				$.ajax({
					type: 'GET',
					url: "../UserServlet",
					data: {
							action:'deleteuser',
							email: $('#editusername').val()
						  },
					success: function(response) {
							if(response.status=="success"){
									alert(response.content);
									$('#editusername').val('');
									$('#editpassword').val('');
									$('#editemail').val('');
									$('#editcontactno').val('');
									$('#editrole').val('');
                                    $('#editboard').val('');
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
	function submitUser(){
		if(validateFormControls("adduser")){
			$.ajax({
				type: 'POST',
				url: "../UserServlet",
				data: {
						action:'addUser',
						username: $('#username').val(),
						email: $('#email').val(),
						password:$('#password').val(),
						contactno: $('#contactno').val(),
						role: $('#role').val(),
						board:$('#board').val(),
						suspended:$("input:radio[name='suspended']:checked").val(),
					},
				success: function(response) {
						if(response.status=="success"){
							alert('User successfully added');
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

	
	function clearForm(){
		$('#username').val('');
		$('#email').val('');
		$('#contactno').val('');
		$('#password').val('');
		$('#role').val('');
		$('#board').val('');
	}
	
	
	function getUserDetail( username ) {
		$.ajax({
			type: 'GET',
			url: "../UserServlet",
			data: {
					action:'getUserDetail',
					username: username
				},
			success: function(response) {
				if(response.status=="success")
					{
                        $('#editusername').val(response.content.username);
						$('#editemail').val(response.content.email);
						$('#editpassword').val('********');
						$('#editcontactno').val(response.content.contactno);
                        $('#editrole').val(response.content.role);
                        $('#editboard').val(response.content.board);
						if(response.content.suspended)$("input[name=editsuspended][value=True]").prop("checked",true)
						else $("input[name=editsuspended][value=False]").prop("checked",true)
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
	function updateUser(){
		if(validateFormControls("edituser")){
			$.ajax({
				type: 'POST',
				url: "../UserServlet",
				data: {
						action:'updateUser',
						username: $('#editusername').val(),
						email: $('#editemail').val(),
						contactno: $('#editcontactno').val(),
						role: $('#editrole').val(),
						board:$('#editboard').val(),
						suspended:$("input:radio[name='editsuspended']:checked").val(),
						},
				success: function(response) {
						if(response.status=="success"){
							alert('User successfully updated');
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
	
	/* Function to send update request */
	function updateUserPassword(){
		if($("#searchusername").val() && $('#editpassword').val()){
			$.ajax({
				type: 'POST',
				url: "../UserServlet",
				data: {
						action:'updateUserPassowrd',
						username: $('#searchusername').val(),
						password:$('#editpassword').val()
						},
				success: function(response) {
						if(response.status=="success"){
							alert('Password successfully updated');
						}
						else if(response.status=="failure") {
							alert(response.error);
						}
					},
				dataType: "json"
		});
		}
		else{
			alert("Username or Password cannot be empty");
		}

	}
})