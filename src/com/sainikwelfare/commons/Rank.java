package com.sainikwelfare.commons;

import com.sainikwelfare.db.QueryExecutor;
import com.sainikwelfare.db.Row;
import java.util.ArrayList;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class Rank
{
  public static JSONArray getRanksList(String service)
  {
    String query = "Select * from rank where service=?";
    JSONArray jsonRanksArray = new JSONArray();
    QueryExecutor queryExecutor = new QueryExecutor(query, new String[] { service });
    ArrayList<Row> records = queryExecutor.executeGet();
    for (int i = 0; i < records.size(); i++)
    {
      JSONObject rank = new JSONObject();
      try
      {
        rank.put("value", ((Row)records.get(i)).getColumnValue("name").toString());
        rank.put("id", ((Row)records.get(i)).getColumnValue("name").toString());
      }
      catch (JSONException e)
      {
        e.printStackTrace();
      }
      jsonRanksArray.put(rank);
    }
    return jsonRanksArray;
  }
  
  public static int insert(String name, String service)
  {
    String query = "INSERT INTO `rank`(`name`,`service`) VALUES (?,?)";
    ArrayList<String> values = new ArrayList();
    values.add(name);
    values.add(service);
    QueryExecutor queryExecutor = new QueryExecutor(query, values);
    return queryExecutor.execute();
  }
  
  public static int delete(String name, String service)
  {
    String query = "DELETE FROM `rank` WHERE (`name`=? and `service`=?)";
    ArrayList<String> values = new ArrayList();
    values.add(name);
    values.add(service);
    QueryExecutor queryExecutor = new QueryExecutor(query, values);
    return queryExecutor.execute();
  }
}
