package com.sainikwelfare.commons;

import com.sainikwelfare.db.QueryExecutor;
import com.sainikwelfare.db.Row;
import java.util.ArrayList;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class State
{
  public static JSONArray getStateList()
  {
    String query = "Select * from states";
    JSONArray jsonStatesArray = new JSONArray();
    QueryExecutor queryExecutor = new QueryExecutor(query);
    ArrayList<Row> records = queryExecutor.executeGet();
    for (int i = 0; i < records.size(); i++)
    {
      JSONObject state = new JSONObject();
      try
      {
        state.put("value", ((Row)records.get(i)).getColumnValue("name").toString());
        state.put("id", ((Row)records.get(i)).getColumnValue("name").toString());
      }
      catch (JSONException e)
      {
        e.printStackTrace();
      }
      jsonStatesArray.put(state);
    }
    return jsonStatesArray;
  }
  
  public static int insert(String name)
  {
    String query = "INSERT INTO `states`(`name`) VALUES (?)";
    ArrayList<String> values = new ArrayList();
    values.add(name);
    QueryExecutor queryExecutor = new QueryExecutor(query, values);
    return queryExecutor.execute();
  }
  
  public static int delete(String name)
  {
    String query = "DELETE FROM `states` where (`name`=?)";
    ArrayList<String> values = new ArrayList();
    values.add(name);
    QueryExecutor queryExecutor = new QueryExecutor(query, values);
    return queryExecutor.execute();
  }
}
