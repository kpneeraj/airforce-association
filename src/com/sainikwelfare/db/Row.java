package com.sainikwelfare.db;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;

public class Row {
	public HashMap<String, Object> getColumn() {
		return column;
	}

	HashMap<String,Object> column = new HashMap<String,Object>();
	ResultSet rs;

	public Row(ResultSet rs){
		 try {
			int columnCount = rs.getMetaData().getColumnCount();
			for (int i=1; i <= columnCount; i++) {
	           column.put(rs.getMetaData().getColumnName(i), (Object)rs.getObject(i));
	         }
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	public Object getColumnValue(String columnName){
		if(column.get(columnName)!=null)
		return column.get(columnName);
		else return "";
	}
}
