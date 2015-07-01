package com.sainikwelfare.commons;

import com.sainikwelfare.db.QueryExecutor;
import com.sainikwelfare.db.Row;
import java.util.ArrayList;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class DischargeReason
{
  public static JSONArray getDischargeReasonList()
  {
    String query = "Select * from dischargereason";
    JSONArray jsonDischargeReasonArray = new JSONArray();
    QueryExecutor queryExecutor = new QueryExecutor(query);
    ArrayList<Row> records = queryExecutor.executeGet();
    for (int i = 0; i < records.size(); i++)
    {
      JSONObject dischargereason = new JSONObject();
      try
      {
        dischargereason.put("value", ((Row)records.get(i)).getColumnValue("reason").toString());
        dischargereason.put("id", ((Row)records.get(i)).getColumnValue("reason").toString());
      }
      catch (JSONException e)
      {
        e.printStackTrace();
      }
      jsonDischargeReasonArray.put(dischargereason);
    }
    return jsonDischargeReasonArray;
  }
  
  public static int insert(String reason)
  {
    String query = "INSERT INTO `dischargereason`(`reason`) VALUES (?)";
    ArrayList<String> values = new ArrayList();
    values.add(reason);
    QueryExecutor queryExecutor = new QueryExecutor(query, values);
    return queryExecutor.execute();
  }
  
  public static int delete(String reason)
  {
    String query = "DELETE FROM `dischargereason` where (`reason`=?)";
    ArrayList<String> values = new ArrayList();
    values.add(reason);
    QueryExecutor queryExecutor = new QueryExecutor(query, values);
    return queryExecutor.execute();
  }
}
