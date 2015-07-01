package com.sainikwelfare.commons;

import com.sainikwelfare.db.QueryExecutor;
import com.sainikwelfare.db.Row;
import java.util.ArrayList;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class Corps
{
  public static JSONArray getCorpsList()
  {
    String query = "Select * from corps";
    JSONArray jsonCorpsArray = new JSONArray();
    QueryExecutor queryExecutor = new QueryExecutor(query);
    ArrayList<Row> records = queryExecutor.executeGet();
    for (int i = 0; i < records.size(); i++)
    {
      JSONObject corp = new JSONObject();
      try
      {
        corp.put("value", ((Row)records.get(i)).getColumnValue("name").toString());
        corp.put("id", ((Row)records.get(i)).getColumnValue("name").toString());
      }
      catch (JSONException e)
      {
        e.printStackTrace();
      }
      jsonCorpsArray.put(corp);
    }
    return jsonCorpsArray;
  }
  
  public static int insert(String name)
  {
    String query = "INSERT INTO `corps`(`name`) VALUES (?)";
    ArrayList<String> values = new ArrayList();
    values.add(name);
    QueryExecutor queryExecutor = new QueryExecutor(query, values);
    return queryExecutor.execute();
  }
  
  public static int delete(String name)
  {
    String query = "DELETE FROM `corps` where (`name`=?)";
    ArrayList<String> values = new ArrayList();
    values.add(name);
    QueryExecutor queryExecutor = new QueryExecutor(query, values);
    return queryExecutor.execute();
  }
}
