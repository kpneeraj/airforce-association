$(function(){
	$("li a").click(function(){
		loadpage(this.id)
	}
	)
})

function loadpage(pageName)
{
	$("#mainframe").attr("src",pageName);
}

function resizeIFrame(id)
    {
    var newheight;
    var newwidth;

    if(document.getElementById){
        newheight=document.getElementById(id).contentWindow.document.body.scrollHeight;
    }
	newheight = (newheight<750)?750: newheight;
    document.getElementById(id).style.height= (newheight) + "px";
}