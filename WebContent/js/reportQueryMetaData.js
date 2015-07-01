var reportQueryMetaData = {
"serviceno":{
	"fieldname":"serviceno", 
	"displayname":"Service no", 
	"operators":["Equals","Begins with"], 
	"type":"simple",
	"dependentfields":[],
	"controls":["<input type='text' id='searchservices_value' label='Service no'/>"]
},

"board":{
	"fieldname":"board", 
	"displayname":"Board Name", 
	"operators":["Equals","Not Equals"], 
	"type":"simple",
	"dependentfields":[],
	"controls":["<input type='text' id='searchboardnames_value' label='Board Name'/>"]
},

"name":{
	"fieldname":"name", 
	"displayname":"Name", 
	"operators":["Equals","Begins with"], 
	"type":"simple",
	"controls":["<input type='text' id='searchservices_value' label='Name'/>"]
},	

"fathername":{
	"fieldname":"fathername", 
	"displayname":"Father's Name", 
	"operators":["Equals","Begins with"], 
	"type":"simple",
	"controls":["<input type='text' id='searchservices_value' label='Fathers Name'/>"]
},

"service":{
	"fieldname":"service", 
	"displayname":"Service", 
	"operators":["Equals","Not Equals"], 
	"type":"simple",
	"controls":["<select  label='Service' id='searchservices_value'><option value=''>--Select--</option><option value='Army'>Army</option><option value='Navy'>Navy</option><option value='Air Force'>Air Force</option></select>"]
},
"trade":{
	"fieldname":"trade", 
	"displayname":"Trade", 
	"operators":["Equals","Not Equals"], 
	"type":"simple",
	"controls":["<select  label='Trade' id='searchservices_value'><option value=''>--Select--</option></select>"]
},
"dateofdeath":{
	"fieldname":"dateofdeath", 
	"displayname":"Date Of Expiry", 
	"operators":["Equals","Before","After"], 
	"type":"simple",
	"controls":["<select  label='Service' id='searchservices_value'><option value=''>--Select--</option><option value='Army'>Army</option><option value='Navy'>Navy</option><option value='Air Force'>Air Force</option></select>"]
},
"dateofbirth":{
	"fieldname":"dateofbirth", 
	"displayname":"Date Of Birth", 
	"operators":["Equals","Before","After"], 
	"type":"simple",
	"controls":["<select  label='Service' id='searchservices_value'><option value=''>--Select--</option><option value='Army'>Army</option><option value='Navy'>Navy</option><option value='Air Force'>Air Force</option></select>"]
},
"reemploymentstatus":{
	"fieldname":"reemploymentstatus", 
	"displayname":"Employment Status", 
	"operators":["Equals"], 
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