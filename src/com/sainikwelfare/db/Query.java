package com.sainikwelfare.db;

import java.util.ArrayList;

public class Query {
	public static QueryExecutor getSelectQuery(String tablename, ArrayList<WhereCondition> whereConditions){
		StringBuffer query = new StringBuffer("select * from `").append(tablename).append("`");
		ArrayList<String> values = new ArrayList<String>();
		if(whereConditions!=null && whereConditions.size()>0 ){
			query.append(" where (");
			for(int i=0;i<whereConditions.size();i++){
				if(i!=0) query.append(" AND ");
				query.append(whereConditions.get(i).getWhereClauseString());
				values.add(whereConditions.get(i).getWhereClauseValue());
			}
			query.append(")");
		}
		return new QueryExecutor(query.toString(), values);	
	}
}
