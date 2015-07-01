package com.sainikwelfare.commons;

import com.sainikwelfare.db.QueryExecutor;
import com.sainikwelfare.db.Row;
import java.util.ArrayList;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class EducationalQualification
{
  public static JSONArray getQualificationList()
  {
    String query = "Select * from qualification";
    JSONArray jsonQualificationArray = new JSONArray();
    QueryExecutor queryExecutor = new QueryExecutor(query);
    ArrayList<Row> records = queryExecutor.executeGet();
    for (int i = 0; i < records.size(); i++)
    {
      JSONObject qualification = new JSONObject();
      try
      {
        qualification.put("value", ((Row)records.get(i)).getColumnValue("qualification").toString());
        qualification.put("id", ((Row)records.get(i)).getColumnValue("qualification").toString());
      }
      catch (JSONException e)
      {
        e.printStackTrace();
      }
      jsonQualificationArray.put(qualification);
    }
    return jsonQualificationArray;
  }
  
  public static int insert(String qualification)
  {
    String query = "INSERT INTO `qualification`(`qualification`) VALUES (?)";
    ArrayList<String> values = new ArrayList();
    values.add(qualification);
    QueryExecutor queryExecutor = new QueryExecutor(query, values);
    return queryExecutor.execute();
  }
  
  public static int delete(String qualification)
  {
    String query = "DELETE FROM `qualification` where (`qualification`=?)";
    ArrayList<String> values = new ArrayList();
    values.add(qualification);
    QueryExecutor queryExecutor = new QueryExecutor(query, values);
    return queryExecutor.execute();
  }
}
