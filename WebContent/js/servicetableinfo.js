var servicetableinfo = {
"serviceno":{
	"fieldname":"serviceno", 
	"displayname":"Service no", 
	"operators":["Equals ","Begins with"], //note the space in equals. Different for reports and veteran edit search operator
	"type":"simple",
	"dependentfields":[],
	"controls":["<input type='text' id='searchservices_value' label='Service no'/>"]
},

"boardname":{
	"fieldname":"boardname", 
	"displayname":"Board Name", 
	"operators":["Equals ","Not Equals"], //note the space in equals. Different for reports and veteran edit search operator
	"type":"simple",
	"dependentfields":[],
	"controls":["<input type='text' id='searchboardnames_value' label='Board Name'/>"]
},

"name":{
	"fieldname":"name", 
	"displayname":"Name", 
	"operators":["Equals ","Begins with"], //note the space in equals. Different for reports and veteran edit search operator
	"type":"simple",
	"controls":["<input type='text' id='searchservices_value' label='Name'/>"]
},	

"fathername":{
	"fieldname":"fathername", 
	"displayname":"Father's Name", 
	"operators":["Equals ","Begins with"], //note the space in equals. Different for reports and veteran edit search operator
	"type":"simple",
	"controls":["<input type='text' id='searchservices_value' label='Fathers Name'/>"]
},

"service":{
	"fieldname":"service", 
	"displayname":"Service", 
	"operators":["Equals ","Not Equals"], //note the space in equals. Different for reports and veteran edit search operator
	"type":"simple",
	"controls":["<select  label='Service' id='searchservices_value'><option value=''>--Select--</option><option value='Army'>Army</option><option value='Navy'>Navy</option><option value='Air Force'>Air Force</option></select>"]
}

}

/*
"dob":{
	"fieldname":"dob", 
	"displayname":"Date of Birth", 
	"operators":["Equals","Before","After"], 
	"type":"simple",
	"controls":["<input type='text' id='searchservices_value' label='Date of Birth'/>"]
},

"datedischarged":{
	"fieldname":"datedischarged", 
	"displayname":"Discharge Date", 
	"operators":["Equals","Before","After"], 
	"type":"simple",
	"controls":["<input type='text' id='searchservices_value' label='Discharge Date'/>"]
}


*/