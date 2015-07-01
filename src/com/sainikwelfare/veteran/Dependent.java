package com.sainikwelfare.veteran;

import com.sainikwelfare.db.Query;
import com.sainikwelfare.db.QueryExecutor;
import com.sainikwelfare.db.Row;
import com.sainikwelfare.db.WhereCondition;
import java.util.ArrayList;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class Dependent
{
  String name;
  String serviceno;
  String registrationno;
  String relation;
  String dateofbirth;
  String maritalstatus;
  String education;
  String course;
  String courseyear;
  String employmentstatus;
  
  public String getName()
  {
    return this.name;
  }
  
  public void setName(String name)
  {
    this.name = name;
  }
  
  public void setRegistrationNo(String name)
  {
    this.registrationno = name;
  }
  
  public String getServiceno()
  {
    return this.serviceno;
  }
  
  public void setServiceno(String serviceno)
  {
    this.serviceno = serviceno;
  }
  
  public String getRelation()
  {
    return this.relation;
  }
  
  public void setRelation(String relation)
  {
    this.relation = relation;
  }
  
  public String getDateofbirth()
  {
    return this.dateofbirth;
  }
  
  public void setDateofbirth(String dateofbirth)
  {
    this.dateofbirth = dateofbirth;
  }
  
  public String getMaritalstatus()
  {
    return this.maritalstatus;
  }
  
  public String getRegistrationNo()
  {
    return this.registrationno;
  }
  
  public void setMaritalstatus(String maritalstatus)
  {
    this.maritalstatus = maritalstatus;
  }
  
  public String getEducation()
  {
    return this.education;
  }
  
  public void setEducation(String education)
  {
    this.education = education;
  }
  
  public String getCourse()
  {
    return this.course;
  }
  
  public void setCourse(String course)
  {
    this.course = course;
  }
  
  public String getCourseyear()
  {
    return this.courseyear;
  }
  
  public void setCourseyear(String courseyear)
  {
    this.courseyear = courseyear;
  }
  
  public String getEmploymentstatus()
  {
    return this.employmentstatus;
  }
  
  public void setEmploymentstatus(String employementstatus)
  {
    this.employmentstatus = employementstatus;
  }
  
  public Dependent(String name, String serviceno, String registrationno, String relation, String dateofbirth, String maritalstatus, String education, String course, String courseyear, String employementstatus)
  {
    this.name = name;
    this.serviceno = serviceno;
    this.registrationno = registrationno;
    this.relation = relation;
    this.dateofbirth = dateofbirth;
    this.maritalstatus = maritalstatus;
    this.education = education;
    this.course = course;
    this.courseyear = courseyear;
    this.employmentstatus = employementstatus;
  }
  
  public static int insert(Dependent dependent)
  {
    String query = "INSERT INTO `dependents`(`name`,`serviceno`, `registrationno`,`relation`, `dateofbirth`, `maritalstatus`, `education`, `course`, `courseyear`,`employmentstatus`) VALUES (?,?,?,?,?,?,?,?,?,?)";
    
    QueryExecutor queryExecutor = new QueryExecutor(query, new String[] { dependent.getName(), 
      dependent.getServiceno(), 
      dependent.getRegistrationNo(), 
      dependent.getRelation(), 
      dependent.getDateofbirth(), 
      dependent.getMaritalstatus(), 
      dependent.getEducation(), 
      dependent.getCourse(), 
      dependent.getCourseyear(), 
      dependent.getEmploymentstatus() });
    
    return queryExecutor.execute();
  }
  
  public static int update(Dependent dependent)
  {
    String query = "UPDATE `dependents` SET `name`=? , `relation`=? , `dateofbirth`=? ,  `maritalstatus`=? , `education`=? , `course`=? , `courseyear`=?, `employmentstatus`=? WHERE `name`=? and `serviceno`=? and `registrationno`=?";
    QueryExecutor queryExecutor = new QueryExecutor(query, new String[] { dependent.getName(), 
      dependent.getRelation(), 
      dependent.getDateofbirth(), 
      dependent.getMaritalstatus(), 
      dependent.getEducation(), 
      dependent.getCourse(), 
      dependent.getCourseyear(), 
      dependent.getEmploymentstatus(), 
      dependent.getName(), 
      dependent.getServiceno(), 
      dependent.getRegistrationNo() });
    return queryExecutor.execute();
  }
  
  public static int delete(String serviceno, String registrationno)
  {
    String query = "DELETE FROM `dependents` WHERE `serviceno`=? and `registrationno`=?";
    QueryExecutor queryExecutor = new QueryExecutor(query, new String[] { serviceno, registrationno });
    return queryExecutor.execute();
  }
  
  public static JSONArray getDependents(ArrayList<WhereCondition> whereconditions)
  {
    JSONObject jsonResponse = new JSONObject();
    JSONArray content = new JSONArray();
    try
    {
      QueryExecutor queryExecutor = Query.getSelectQuery("dependents", whereconditions);
      ArrayList<Row> records = queryExecutor.executeGet();
      for (int i = 0; i < records.size(); i++)
      {
        String name = ((Row)records.get(i)).getColumnValue("name").toString();
        String serviceno = ((Row)records.get(i)).getColumnValue("serviceno").toString();
        String registrationno = ((Row)records.get(i)).getColumnValue("registrationno").toString();
        String relation = ((Row)records.get(i)).getColumnValue("relation").toString();
        String dateofbirth = ((Row)records.get(i)).getColumnValue("dateofbirth").toString();
        String maritalstatus = ((Row)records.get(i)).getColumnValue("maritalstatus").toString();
        String education = ((Row)records.get(i)).getColumnValue("education").toString();
        String course = ((Row)records.get(i)).getColumnValue("course").toString();
        String courseyear = ((Row)records.get(i)).getColumnValue("courseyear").toString();
        String employementstatus = ((Row)records.get(i)).getColumnValue("employmentstatus").toString();
        
        JSONObject dependent = new JSONObject();
        dependent.put("name", name);
        dependent.put("serviceno", serviceno);
        dependent.put("registrationno", registrationno);
        dependent.put("relation", relation);
        dependent.put("dateofbirth", dateofbirth);
        dependent.put("maritalstatus", maritalstatus);
        dependent.put("education", education);
        dependent.put("course", course);
        dependent.put("courseyear", courseyear);
        dependent.put("employmentstatus", employementstatus);
        
        content.put(dependent);
      }
    }
    catch (JSONException e)
    {
      e.printStackTrace();
    }
    return content;
  }
}
