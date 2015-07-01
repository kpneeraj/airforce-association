package com.sainikwelfare.commons;

import com.sainikwelfare.db.QueryExecutor;
import com.sainikwelfare.db.Row;
import java.util.ArrayList;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class MedicalCategory
{
  public static JSONArray getMedicalCategoryList()
  {
    String query = "Select * from medicalcategory";
    JSONArray jsonMedicalCategoryArray = new JSONArray();
    QueryExecutor queryExecutor = new QueryExecutor(query);
    ArrayList<Row> records = queryExecutor.executeGet();
    for (int i = 0; i < records.size(); i++)
    {
      JSONObject medicalCategory = new JSONObject();
      try
      {
        medicalCategory.put("value", ((Row)records.get(i)).getColumnValue("medicalcategory").toString());
        medicalCategory.put("id", ((Row)records.get(i)).getColumnValue("medicalcategory").toString());
      }
      catch (JSONException e)
      {
        e.printStackTrace();
      }
      jsonMedicalCategoryArray.put(medicalCategory);
    }
    return jsonMedicalCategoryArray;
  }
  
  public static int insert(String medicalcategory)
  {
    String query = "INSERT INTO `medicalcategory`(`medicalcategory`) VALUES (?)";
    ArrayList<String> values = new ArrayList();
    values.add(medicalcategory);
    QueryExecutor queryExecutor = new QueryExecutor(query, values);
    return queryExecutor.execute();
  }
  
  public static int delete(String medicalcategory)
  {
    String query = "DELETE FROM `medicalcategory` where (`medicalcategory`=?)";
    ArrayList<String> values = new ArrayList();
    values.add(medicalcategory);
    QueryExecutor queryExecutor = new QueryExecutor(query, values);
    return queryExecutor.execute();
  }
}
