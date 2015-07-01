package com.sainikwelfare.commons;

import com.sainikwelfare.db.QueryExecutor;
import com.sainikwelfare.db.Row;
import java.util.ArrayList;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class Character
{
  public static JSONArray getCharacterList()
  {
    String query = "Select * from dischargecharacter";
    JSONArray jsonCharacterArray = new JSONArray();
    QueryExecutor queryExecutor = new QueryExecutor(query);
    ArrayList<Row> records = queryExecutor.executeGet();
    for (int i = 0; i < records.size(); i++)
    {
      JSONObject character = new JSONObject();
      try
      {
        character.put("value", ((Row)records.get(i)).getColumnValue("character").toString());
        character.put("id", ((Row)records.get(i)).getColumnValue("character").toString());
      }
      catch (JSONException e)
      {
        e.printStackTrace();
      }
      jsonCharacterArray.put(character);
    }
    return jsonCharacterArray;
  }
  
  public static int insert(String character)
  {
    String query = "INSERT INTO `dischargecharacter`(`character`) VALUES (?)";
    ArrayList<String> values = new ArrayList();
    values.add(character);
    QueryExecutor queryExecutor = new QueryExecutor(query, values);
    return queryExecutor.execute();
  }
  
  public static int delete(String character)
  {
    String query = "DELETE FROM `dischargecharacter` where (`character`=?)";
    ArrayList<String> values = new ArrayList();
    values.add(character);
    QueryExecutor queryExecutor = new QueryExecutor(query, values);
    return queryExecutor.execute();
  }
}
