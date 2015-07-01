package com.sainikwelfare.db;

public class WhereCondition {
	
	public WhereCondition(String field, String operator, String value) {
		super();
		this.field = field;
		this.operator = operator;
		this.value = value;
	}

	private String field, operator, value;
	
	public String getWhereClauseString(){
		return "`"+this.field+"` "+getOperator(this.operator)+ "?";
	}
	
	public String getWhereClauseValue(){
		switch(this.operator){
			case "Begins with":
				return this.value+"%";
			default:
				return this.value;
	}
		
	}
	
	private String getOperator(String operation){
		switch(operation){
			case "Not Equals":
			case "not equals":
			case "Not Equals ":{
				return "!=";
			}	
			case "Equals":
			case "equals":
			case "Equals ":
				return "=";
			case "Less Than":
				return "<";
			case "Greater Than":
				return ">";
			case "Begins with":
				return "like ";
			default:
				return "";
		}
		
	}
}
