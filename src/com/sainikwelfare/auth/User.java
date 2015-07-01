package com.sainikwelfare.auth;

import com.sainikwelfare.db.QueryExecutor;
import com.sainikwelfare.db.Row;
import com.sainikwelfare.utils.Hash;
import java.util.ArrayList;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class User
{
  private String userid;
  private String password;
  private String email;
  private String role;
  private String roleFor;
  private String contactno;
  private String issuspended;
  private String name;
  
  public String getContactno()
  {
    return this.contactno;
  }
  
  public String getIssuspended()
  {
    return this.issuspended;
  }
  
  public String getName()
  {
    return this.name;
  }
  
  public String getUserid()
  {
    return this.userid;
  }
  
  public String getPassword()
  {
    return this.password;
  }
  
  public String getEmail()
  {
    return this.email;
  }
  
  public String getRole()
  {
    return this.role;
  }
  
  public String getRoleFor()
  {
    return this.roleFor;
  }
  
  public User(Row userRow)
  {
    this.userid = userRow.getColumnValue("userid").toString();
    this.password = userRow.getColumnValue("password").toString();
    this.email = userRow.getColumnValue("email").toString();
    this.role = userRow.getColumnValue("role").toString();
    this.roleFor = userRow.getColumnValue("roleFor").toString();
  }
  
  public User(String username, String email, String password, String contactno, String role, String rolefor, String suspended)
  {
    this.userid = username;
    this.email = email;
    this.password = password;
    this.contactno = contactno;
    this.role = role;
    this.roleFor = rolefor;
    this.issuspended = suspended;
  }
  
  public static int insert(User user)
  {
    String query = "INSERT INTO `users`(`userid`,`password`, `role`, `rolefor`, `email`, `contactno`, `issuspended`) VALUES (?,?,?,?,?,?,?)";
    
    QueryExecutor queryExecutor = new QueryExecutor(query, new String[] { user.getUserid(), 
      new Hash(user.getPassword()).getHashValue(), 
      user.getRole(), 
      user.getRoleFor(), 
      user.getEmail(), 
      user.getContactno(), 
      user.getIssuspended() });
    return queryExecutor.execute();
  }
  
  public static int update(User user)
  {
    String query = "UPDATE `users` SET `role`=? ,  `rolefor`=? , `email`=? , `contactno`=? , `issuspended`=? WHERE userid=?";
    QueryExecutor queryExecutor = new QueryExecutor(query, new String[] { user.getRole(), 
      user.getRoleFor(), 
      user.getEmail(), 
      user.getContactno(), 
      user.getIssuspended(), 
      user.getUserid() });
    return queryExecutor.execute();
  }
  
  public static JSONObject getUserDetail(String username)
  {
    String query = "Select * from `users`  WHERE userid=?";
    QueryExecutor queryExecutor = new QueryExecutor(query, new String[] { username });
    ArrayList<Row> records = queryExecutor.executeGet();
    JSONObject user = new JSONObject();
    try
    {
      user.put("username", ((Row)records.get(0)).getColumnValue("userid").toString());
      user.put("email", ((Row)records.get(0)).getColumnValue("email").toString());
      user.put("role", ((Row)records.get(0)).getColumnValue("role").toString());
      user.put("board", ((Row)records.get(0)).getColumnValue("rolefor").toString());
      user.put("contactno", ((Row)records.get(0)).getColumnValue("contactno").toString());
      user.put("suspended", ((Row)records.get(0)).getColumnValue("issuspended").toString());
    }
    catch (JSONException e)
    {
      e.printStackTrace();
    }
    return user;
  }
  
  public static JSONArray getUserNames(String username)
  {
    String query = "Select userid from `users`  WHERE userid like ?";
    QueryExecutor queryExecutor = new QueryExecutor(query, new String[] { "%" + username + "%" });
    ArrayList<Row> records = queryExecutor.executeGet();
    JSONArray users = new JSONArray();
    for (int i = 0; i < records.size(); i++) {
      users.put(((Row)records.get(i)).getColumnValue("userid").toString());
    }
    return users;
  }
  
  public static int updateUserPassword(String username, String password)
  {
    password = new Hash(password).getHashValue();
    String query = "UPDATE `sainikwelfare`.`users` SET `password` = ? WHERE `users`.`userid` = ?";
    QueryExecutor queryExecutor = new QueryExecutor(query, new String[] { password, username });
    return queryExecutor.execute();
  }
}
