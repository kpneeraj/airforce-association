package com.sainikwelfare.db;

import java.sql.*;
import java.util.ArrayList;

import com.sainikwelfare.utils.SainikWelfareProperties;


public class QueryExecutor {
	
	private static SainikWelfareProperties sainikWelfareProperties = SainikWelfareProperties.getInstance();
	private static String dbUrl = "jdbc:mysql://"+sainikWelfareProperties.getDatabaseHost()+"/"+sainikWelfareProperties.getDatabaseName()+"?zeroDateTimeBehavior=convertToNull";
	private static String dbClass = "com.mysql.jdbc.Driver";
	private String queryText;
	private Connection con;
	
	private String[] values;
	
	public SainikWelfareProperties getSainikWelfareProperties() {
		return sainikWelfareProperties;
	}

	public String getDbUrl() {
		return dbUrl;
	}

	public String getDbClass() {
		return dbClass;
	}

	public String getQueryText() {
		return queryText;
	}

	
	public QueryExecutor(String query ,String... values){
		this.queryText = query;
		this.values = values;
	}
	
	public QueryExecutor(String query ,ArrayList<String> values){
		this.queryText = query;
		this.values =values.toArray(new String[values.size()]);
	}
	
	public QueryExecutor(String query ){
		this.queryText = query;
	}
	
	public ArrayList<Row> executeGet(){
		ResultSet rs = null;
		
		PreparedStatement stmt;
		ArrayList<Row> resultSet  = new ArrayList<Row>();
		try {
			Class.forName(dbClass);
			con = DriverManager.getConnection(dbUrl,sainikWelfareProperties.getDatabaseUser(),sainikWelfareProperties.getDatabasePassword());
			stmt = con.prepareStatement(this.getQueryText());
			if(!(values==null || values.length==0)){
				for(int i=0;i<this.values.length;i++){
					if(this.values[i]!=null && this.values[i]!="")
						stmt.setString(i+1, this.values[i]);
					else
						stmt.setString(i+1, null);
				}
				
			}

			rs = stmt.executeQuery();
			while(rs.next())
			{
				resultSet.add(new Row(rs));
			}
			
			con.close();
		}
		catch(Exception e) {
		e.printStackTrace();
		}
		return resultSet;
	}
	
	public int execute(){
		int numberOfRecords = 0;
		PreparedStatement stmt;
		try {
			Class.forName(dbClass);
			con = DriverManager.getConnection(dbUrl,sainikWelfareProperties.getDatabaseUser(),sainikWelfareProperties.getDatabasePassword());
			stmt = con.prepareStatement(this.getQueryText());
			if(!(values==null || values.length==0)){
				for(int i=0;i<this.values.length;i++){
					if(this.values[i]!=null && this.values[i]!="")
						stmt.setString(i+1, this.values[i]);
					else
						stmt.setString(i+1, null);
				}
			}
			numberOfRecords = stmt.executeUpdate();
			con.close();
		}
		catch(Exception e) {
			e.printStackTrace();
			return -1;
		}
		return numberOfRecords;
	}
	
}
