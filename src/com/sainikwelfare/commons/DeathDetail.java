package com.sainikwelfare.commons;

import com.sainikwelfare.db.QueryExecutor;
import com.sainikwelfare.db.Row;
import java.util.ArrayList;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class DeathDetail
{
  public static JSONArray getStateList()
  {
    String query = "Select * from deathdetails";
    JSONArray jsonStatesArray = new JSONArray();
    QueryExecutor queryExecutor = new QueryExecutor(query);
    ArrayList<Row> records = queryExecutor.executeGet();
    for (int i = 0; i < records.size(); i++)
    {
      JSONObject state = new JSONObject();
      try
      {
        state.put("value", ((Row)records.get(i)).getColumnValue("deathdetails").toString());
        state.put("id", ((Row)records.get(i)).getColumnValue("deathdetails").toString());
      }
      catch (JSONException e)
      {
        e.printStackTrace();
      }
      jsonStatesArray.put(state);
    }
    return jsonStatesArray;
  }
  
  public static int insert(String detail)
  {
    String query = "INSERT INTO `deathdetails`(`deathdetails`) VALUES (?)";
    ArrayList<String> values = new ArrayList();
    values.add(detail);
    QueryExecutor queryExecutor = new QueryExecutor(query, values);
    return queryExecutor.execute();
  }
  
  public static int delete(String detail)
  {
    String query = "DELETE FROM `deathdetail` where (`deathdetails`=?)";
    ArrayList<String> values = new ArrayList();
    values.add(detail);
    QueryExecutor queryExecutor = new QueryExecutor(query, values);
    return queryExecutor.execute();
  }
}
