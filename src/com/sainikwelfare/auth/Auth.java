package com.sainikwelfare.auth;

import com.sainikwelfare.db.QueryExecutor;
import com.sainikwelfare.db.Row;
import com.sainikwelfare.utils.Hash;
import java.util.ArrayList;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class Auth
{
  private static Auth auth = new Auth();
  
  public static Auth getInstance()
  {
    return auth;
  }
  
  public boolean validateCredentials(String userid, String password, HttpServletRequest request, HttpServletResponse response)
  {
    String query = "SELECT * FROM users WHERE userid=? AND password=?";
    QueryExecutor queryExecutor = new QueryExecutor(query, new String[] { userid, new Hash(password).getHashValue() });
    ArrayList<Row> rows = queryExecutor.executeGet();
    if (rows.isEmpty()) {
      return false;
    }
    request.getSession(false).setAttribute("userContext", new User((Row)rows.get(0)));
    Cookie role = new Cookie("role", ((Row)rows.get(0)).getColumnValue("role").toString());
    Cookie roleFor = new Cookie("board", ((Row)rows.get(0)).getColumnValue("rolefor").toString());
    Cookie useridcookie = new Cookie("userid", ((Row)rows.get(0)).getColumnValue("userid").toString());
    response.addCookie(role);
    response.addCookie(roleFor);
    response.addCookie(useridcookie);
    return true;
  }
}
