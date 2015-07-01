var boardtableinfo = {
"boardname":{
	"fieldname":"boardname", 
	"displayname":"Board Name", 
	"operators":["Equals ","Not Equals","Begins with"], 
	"type":"simple",
	"dependentfields":[],
	"controls":["<input type='text' id='searchboards_value' label='Board Name'/>"]
},

"state":{
	"fieldname":"state", 
	"displayname":"State", 
	"operators":["Equals ","Not Equals"], 
	"type":"simple",
	"controls":["<select id='searchboards_value' label='State'><option value=''>--Select--</option></select>"]
},	

"district":{
	"fieldname":"district", 
	"displayname":"District", 
	"operators":["Equals ","Not Equals"], 
	"type":"complex",
	"controls":["<select id='searchboards_state' label='State'><option value=''>--Select--</option></select>", 
				"<select id='searchboards_value' label='District'><option value=''>--Select--</option></select>"
			   ]
}


}

/*

"pincode":{
	"fieldname":"pincode", 
	"displayname":"Pincode", 
	"operators":["Equals","Not Equals"], 
	"type":"simple",
	"controls":["<input type='text' id='searchboards_value' label='Pincode'>"]
},

"email":{
	"fieldname":"email", 
	"displayname":"Email", 
	"operators":["Equals","Not Equals"], 
	"type":"simple",
	"controls":["<input type='text' id='searchboards_value' label='Email'>"]
},
	
"director":{
	"fieldname":"director", 
	"displayname":"Director Name", 
	"operators":["Equals","Not Equals","Begins with"], 
	"type":"simple",
	"controls":["<input type='text' id='searchboards_value' label='Director Name'>"]
}
*/