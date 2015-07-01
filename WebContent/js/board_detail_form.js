$(function(){

	var cursor='';
    prevCur='';
    nextCur='';
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
	});
	
	$("#submitbutton").click(submitBoard);
	
	$("#clearbutton").click(function(){
		$('#boardName').val('');
		$('#boardAddress').val('');
		$('#boardDistrict').val('');
		$('#boardState').val('');
	});
	
	$("#editclearbutton").click(function(){
		$('#editboardName').val('');
		$('#editboardAddress').val('');
		$('#editboardDistrict').val('');
		$('#editboardState').val('');
	});
	
	$("#editsubmitbutton").click(function(){
		updateBoard($('#editboardName').val());
	});
	
	$("#deletebutton").click(function(){
		$( "#deleteconfirm" ).dialog(
		{
			buttons: {
			"Ok": function() {
				$.ajax({
					type: 'GET',
					url: "../board/deleteBoard",
					data: {
							boardName: $('#editboardName').val()
						  },
					success: function(response) {
							if(response.status=="success"){
									alert(response.content);
									$('#boardName').val('');
									$('#boardAddress').val('');
									$('#boardDistrict').val('');
									$('#boardState').val('');
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
			height: 200, 
			width:375,
			modal:true
		});
	});
	
	/* Function to send add request */
	function submitBoard(){
		$.ajax({
		type: 'POST',
		url: "../board/submitBoard",
		data: {
				boardName: $('#boardName').val(),
				boardAddress: $('#boardAddress').val(),
				boardDistrict: $('#boardDistrict').val(),
				boardState: $('#boardState').val()
				},
		success: function(response) {
				if(response.status=="success")
					alert('Board successfully added');
				else if(response.status=="failure") {
					alert(response.error);
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
	}
	
	/* Function to attach autocomplete to boardname text box*/
	$( "#editboardName" ).autocomplete({
      source: "../board/getBoardsList",
      delay: 50,
	  select:  function( event, ui ) {
		 getBoardDetail( ui.item.id );
      }
    });
	
	$( "#boardName" ).autocomplete({
      source: "../board/getBoardsList",
      delay: 50,
	  select:  function( event, ui ) {   }
    });
	
	/*Initialise the edit form controls*/
	function loadGridData(direction){
        if ((direction == '') && (prevCur || nextCur)) {
            return;
        }
        var cursor;
		$.ajax({
			type: 'GET',
			url: "../board/getBoardsWithCursor",
			data: {
                    pCursor:prevCur,
                    nCursor:nextCur,
                    dir:direction
				},
			success: function(response) {
                prevCur = response.pCursor;
                nextCur = response.nCursor;
                populateGrid("boardstable",['boardname','district','state'],response)
            },
			dataType: "json"
		});
	}

    $("#prev").button({ icons: { primary: "ui-icon-circle-arrow-w" } });
    $("#next").button({ icons: { primary: "ui-icon-circle-arrow-e" } });
    $("#prev").click(function(){
            loadGridData("prev");
    })
    $("#next").click(function(){
            loadGridData("next");
    })

    for(i=1;i<=10;i++){
        tr = $("row"+i);
        $(tr).hover(
                    function() {$(this).addClass("onhover");$(this).css( 'cursor', 'pointer' );},
                    function() {$(this).removeClass("onhover");$(this).css( 'cursor', 'default' );}
        );
        $(tr).click(function(){
                        getBoardDetail( $(this).attr('id').substr(4) );
        }
        );
    }

	
	/*Populates grid according to json list of boards*/
	function populateGrid(gridid, headers, response){
        var r;
		/*Populate grid rows*/
        for(row in response.content)
		{
            var i=1;
            r = parseInt(row)+1;
			for(colHeader in headers)
			{
				var td = $("#r"+r+"c"+i );
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
                var td = $("#r"+r+"c"+i );
                $(td).html('');
                i++;
            }
        }

    }
	
	function getBoardDetail( boardId ) {
		$.ajax({
			type: 'GET',
			url: "../board/getBoardDetail",
			data: {
					boardName: boardId
				},
			success: function(response) {
				if(response.status=="success")
					{
						$('#editboardName').val(response.content.boardname);
						$('#editboardAddress').val(response.content.address);
						$('#editboardDistrict').val(response.content.district);
						$('#editboardState').val(response.content.state);
					}
				else if(response.status=="failure") 
					{
						alert(response.error);
					}
			},
			dataType: "json"
		});
    }
	
	/* Function to send add request */
	function updateBoard(){
		$.ajax({
		type: 'POST',
		url: "../board/updateBoard",
		data: {
				boardName: $('#editboardName').val(),
				boardAddress: $('#editboardAddress').val(),
				boardDistrict: $('#editboardDistrict').val(),
				boardState: $('#editboardState').val()
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
})