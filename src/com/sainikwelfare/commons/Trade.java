package com.sainikwelfare.commons;

import com.sainikwelfare.db.QueryExecutor;
import com.sainikwelfare.db.Row;
import java.util.ArrayList;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class Trade
{
  public static JSONArray getTradeList(String service)
  {
    String query = "Select * from trade where service=?";
    JSONArray jsonTradesArray = new JSONArray();
    QueryExecutor queryExecutor = new QueryExecutor(query, new String[] { service });
    ArrayList<Row> records = queryExecutor.executeGet();
    for (int i = 0; i < records.size(); i++)
    {
      JSONObject trade = new JSONObject();
      try
      {
        trade.put("value", ((Row)records.get(i)).getColumnValue("name").toString());
        trade.put("id", ((Row)records.get(i)).getColumnValue("name").toString());
      }
      catch (JSONException e)
      {
        e.printStackTrace();
      }
      jsonTradesArray.put(trade);
    }
    return jsonTradesArray;
  }
  
  public static int insert(String name, String service, String group)
  {
    String query = "INSERT INTO `trade`(`name`,`service`,`group`) VALUES (?,?,?)";
    ArrayList<String> values = new ArrayList();
    values.add(name);
    values.add(service);
    values.add(group);
    QueryExecutor queryExecutor = new QueryExecutor(query, values);
    return queryExecutor.execute();
  }
  
  public static int delete(String name, String service, String group)
  {
    String query = "DELETE FROM `trade` WHERE (`name`=? and `service`=? and `group`=?)";
    ArrayList<String> values = new ArrayList();
    values.add(name);
    values.add(service);
    values.add(group);
    QueryExecutor queryExecutor = new QueryExecutor(query, values);
    return queryExecutor.execute();
  }
}
