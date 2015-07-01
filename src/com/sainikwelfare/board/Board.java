package com.sainikwelfare.board;

import com.sainikwelfare.db.Query;
import com.sainikwelfare.db.QueryExecutor;
import com.sainikwelfare.db.Row;
import com.sainikwelfare.db.WhereCondition;
import java.util.ArrayList;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class Board
{
  String boardname;
  String district;
  String address;
  String pincode;
  String contactno;
  String email;
  String state;
  String director;
  
  public Board(String boardname, String district, String address, String pincode, String contactno, String email, String state, String director)
  {
    this.boardname = boardname;
    this.district = district;
    this.address = address;
    this.pincode = pincode;
    this.contactno = contactno;
    this.email = email;
    this.state = state;
    this.director = director;
  }
  
  public String getBoardname()
  {
    return this.boardname;
  }
  
  public String getState()
  {
    return this.state;
  }
  
  public String getDistrict()
  {
    return this.district;
  }
  
  public String getAddress()
  {
    return this.address;
  }
  
  public String getPincode()
  {
    return this.pincode;
  }
  
  public String getContactno()
  {
    return this.contactno;
  }
  
  public String getEmail()
  {
    return this.email;
  }
  
  public String getDirector()
  {
    return this.director;
  }
  
  public void setBoardname(String boardname)
  {
    this.boardname = boardname;
  }
  
  public void setState(String state)
  {
    this.state = state;
  }
  
  public void setDistrict(String district)
  {
    this.district = district;
  }
  
  public void setAddress(String address)
  {
    this.address = address;
  }
  
  public void setPincode(String pincode)
  {
    this.pincode = pincode;
  }
  
  public void setContactno(String contactno)
  {
    this.contactno = contactno;
  }
  
  public void setEmail(String email)
  {
    this.email = email;
  }
  
  public void setDirector(String director)
  {
    this.director = director;
  }
  
  public static int insert(Board board)
  {
    String query = "INSERT INTO `boards`(`boardname`,`state`, `district`, `address`, `pincode`, `contactno`, `email`, `director`) VALUES (?,?,?,?,?,?,?,?)";
    
    QueryExecutor queryExecutor = new QueryExecutor(query, new String[] { board.getBoardname(), 
      board.getState(), 
      board.getDistrict(), 
      board.getAddress(), 
      board.getPincode(), 
      board.getContactno(), 
      board.getEmail(), 
      board.getDirector() });
    return queryExecutor.execute();
  }
  
  public static int update(Board board)
  {
    String query = "UPDATE `boards` SET `boardname`=? , `state`=? , `district`=? , `address`=? ,  `pincode`=? , `contactno`=? , `email`=? , `director`=? WHERE boardname=?";
    QueryExecutor queryExecutor = new QueryExecutor(query, new String[] { board.getBoardname(), 
      board.getState(), 
      board.getDistrict(), 
      board.getAddress(), 
      board.getPincode(), 
      board.getContactno(), 
      board.getEmail(), 
      board.getDirector(), 
      board.getBoardname() });
    return queryExecutor.execute();
  }
  
  public static int delete(String boardname)
  {
    String query = "DELETE FROM `sainikwelfare`.`boards` WHERE `boards`.`boardname` = ?";
    QueryExecutor queryExecutor = new QueryExecutor(query, new String[] { boardname });
    return queryExecutor.execute();
  }
  
  public static JSONObject getBoards(ArrayList<WhereCondition> whereconditions)
  {
    JSONObject jsonResponse = new JSONObject();
    try
    {
      QueryExecutor queryExecutor = Query.getSelectQuery("boards", whereconditions);
      ArrayList<Row> records = queryExecutor.executeGet();
      JSONArray content = new JSONArray();
      JSONArray contentHeader = new JSONArray();
      
      contentHeader.put("boardname");
      contentHeader.put("district");
      contentHeader.put("address");
      contentHeader.put("pincode");
      contentHeader.put("contactno");
      contentHeader.put("email");
      contentHeader.put("state");
      contentHeader.put("director");
      for (int i = 0; i < records.size(); i++)
      {
        String boardname = ((Row)records.get(i)).getColumnValue("boardname").toString();
        String district = ((Row)records.get(i)).getColumnValue("district").toString();
        String address = ((Row)records.get(i)).getColumnValue("address").toString();
        String pincode = ((Row)records.get(i)).getColumnValue("pincode").toString();
        String contactno = ((Row)records.get(i)).getColumnValue("contactno").toString();
        String email = ((Row)records.get(i)).getColumnValue("email").toString();
        String state = ((Row)records.get(i)).getColumnValue("state").toString();
        String director = ((Row)records.get(i)).getColumnValue("director").toString();
        
        JSONObject board = new JSONObject();
        board.put("boardname", boardname);
        board.put("district", district);
        board.put("address", address);
        board.put("pincode", pincode);
        board.put("contactno", contactno);
        board.put("email", email);
        board.put("state", state);
        board.put("director", director);
        
        content.put(board);
      }
      jsonResponse.put("contentheader", contentHeader);
      jsonResponse.put("content", content);
    }
    catch (JSONException e)
    {
      e.printStackTrace();
    }
    return jsonResponse;
  }
  
  public static JSONObject getBoardDetail(String boardname)
  {
    String query = "Select * from `boards`  WHERE boardname=?";
    QueryExecutor queryExecutor = new QueryExecutor(query, new String[] { boardname });
    ArrayList<Row> records = queryExecutor.executeGet();
    JSONObject board = new JSONObject();
    try
    {
      board.put("boardname", ((Row)records.get(0)).getColumnValue("boardname").toString());
      board.put("district", ((Row)records.get(0)).getColumnValue("district").toString());
      board.put("address", ((Row)records.get(0)).getColumnValue("address").toString());
      board.put("pincode", ((Row)records.get(0)).getColumnValue("pincode").toString());
      board.put("contactno", ((Row)records.get(0)).getColumnValue("contactno").toString());
      board.put("email", ((Row)records.get(0)).getColumnValue("email").toString());
      board.put("state", ((Row)records.get(0)).getColumnValue("state").toString());
      board.put("director", ((Row)records.get(0)).getColumnValue("director").toString());
    }
    catch (JSONException e)
    {
      e.printStackTrace();
    }
    return board;
  }
  
  public static JSONArray getBoardsList()
  {
    JSONArray content = new JSONArray();
    try
    {
      QueryExecutor queryExecutor = new QueryExecutor("select boardname from `boards` order by boardname asc");
      ArrayList<Row> records = queryExecutor.executeGet();
      for (int i = 0; i < records.size(); i++)
      {
        JSONObject board = new JSONObject();
        board.put("value", ((Row)records.get(i)).getColumnValue("boardname").toString());
        content.put(board);
      }
    }
    catch (JSONException e)
    {
      e.printStackTrace();
    }
    return content;
  }
}
