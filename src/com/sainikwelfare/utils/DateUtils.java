package com.sainikwelfare.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtils {
	
 public static String convertToDBFormat(String date){
	 SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
     Date dateStr;
	try {
		dateStr = formatter.parse(date);
	} catch (ParseException e) {
		return null;
	}
     formatter = new SimpleDateFormat("yyyy-MM-dd");
     String formattedDate = formatter.format(dateStr);
     return formattedDate;
 }
 
 
 public static String convertToUIFormat(String date){
	 SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
     Date dateStr;
	try {
		dateStr = formatter.parse(date);
	} catch (ParseException e) {
		return null;
	}
     formatter = new SimpleDateFormat("dd-MM-yyyy");
     String formattedDate = formatter.format(dateStr);
     return formattedDate;
 }
 
 
}
