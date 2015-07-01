package com.sainikwelfare.commons;

import com.sainikwelfare.db.QueryExecutor;
import com.sainikwelfare.db.Row;
import java.util.ArrayList;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class District
{
  public static JSONArray getDistrictList(String state)
  {
    String query = "Select * from district where state=?";
    JSONArray jsonDistrictsArray = new JSONArray();
    QueryExecutor queryExecutor = new QueryExecutor(query, new String[] { state });
    ArrayList<Row> records = queryExecutor.executeGet();
    for (int i = 0; i < records.size(); i++)
    {
      JSONObject district = new JSONObject();
      try
      {
        district.put("value", ((Row)records.get(i)).getColumnValue("name").toString());
      }
      catch (JSONException e)
      {
        e.printStackTrace();
      }
      jsonDistrictsArray.put(district);
    }
    return jsonDistrictsArray;
  }
  
  public static int insert(String statename, String districtname)
  {
    String query = "INSERT INTO `district`(`state`,`name`) VALUES (?,?)";
    ArrayList<String> values = new ArrayList();
    values.add(statename);
    values.add(districtname);
    QueryExecutor queryExecutor = new QueryExecutor(query, values);
    return queryExecutor.execute();
  }
  
  public static int delete(String statename, String districtname)
  {
    String query = "DELETE FROM `district` WHERE (`name`=?)";
    ArrayList<String> values = new ArrayList();
    values.add(districtname);
    QueryExecutor queryExecutor = new QueryExecutor(query, values);
    return queryExecutor.execute();
  }
}
