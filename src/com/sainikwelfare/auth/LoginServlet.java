package com.sainikwelfare.auth;

import com.sainikwelfare.utils.StringUtils;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.json.JSONException;
import org.json.JSONObject;

@WebServlet({"/LoginServlet"})
public class LoginServlet
  extends HttpServlet
{
  private static final long serialVersionUID = 1L;
  
  protected void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException
  {}
  
  protected void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException
  {
    HttpSession session = request.getSession(true);
    JSONObject jsonResponse = new JSONObject();
    String password = request.getParameter("password");
    String userid = request.getParameter("userid");
    if ((StringUtils.isEmpty(password)) || (StringUtils.isEmpty(userid)))
    {
      try
      {
        jsonResponse.put("status", "invalid");
      }
      catch (JSONException e)
      {
        e.printStackTrace();
      }
      session.invalidate();
    }
    if (Auth.getInstance().validateCredentials(userid, password, request, response))
    {
      session = request.getSession(true);
      try
      {
        jsonResponse.put("redirect", "maincontent.jsp");
      }
      catch (JSONException e)
      {
        e.printStackTrace();
      }
    }
    else
    {
      try
      {
        jsonResponse.put("status", "invalid");
      }
      catch (JSONException e)
      {
        e.printStackTrace();
      }
    }
    response.setContentType("application/json");
    response.getWriter().write(jsonResponse.toString());
  }
}
