package com.sainikwelfare.commons;

import com.sainikwelfare.db.QueryExecutor;
import com.sainikwelfare.db.Row;
import java.util.ArrayList;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class Groups
{
  public static JSONArray getGroupsList()
  {
    String query = "Select * from `group`";
    JSONArray jsonGroupsArray = new JSONArray();
    QueryExecutor queryExecutor = new QueryExecutor(query);
    ArrayList<Row> records = queryExecutor.executeGet();
    for (int i = 0; i < records.size(); i++)
    {
      JSONObject group = new JSONObject();
      try
      {
        group.put("value", ((Row)records.get(i)).getColumnValue("name").toString());
        group.put("id", ((Row)records.get(i)).getColumnValue("name").toString());
      }
      catch (JSONException e)
      {
        e.printStackTrace();
      }
      jsonGroupsArray.put(group);
    }
    return jsonGroupsArray;
  }
  
  public static int insert(String name)
  {
    String query = "INSERT INTO `group`(`name`) VALUES (?)";
    ArrayList<String> values = new ArrayList();
    values.add(name);
    QueryExecutor queryExecutor = new QueryExecutor(query, values);
    return queryExecutor.execute();
  }
  
  public static int delete(String name)
  {
    String query = "DELETE FROM `group` where (`name`=?)";
    ArrayList<String> values = new ArrayList();
    values.add(name);
    QueryExecutor queryExecutor = new QueryExecutor(query, values);
    return queryExecutor.execute();
  }
}
