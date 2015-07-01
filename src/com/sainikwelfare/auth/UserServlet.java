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
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

@WebServlet({"/UserServlet"})
public class UserServlet
  extends HttpServlet
{
  private static final long serialVersionUID = 1L;
  
  protected void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException
  {
    doPost(request, response);
  }
  
  protected void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException
  {
    JSONObject responseJson = new JSONObject();
    try
    {
      if (request.getSession(false).getAttribute("userContext") != null)
      {
        if ((request.getParameter("action") != null) && (request.getParameter("action").equals("addUser")))
        {
          String username = request.getParameter("username");
          String email = request.getParameter("email");
          String password = request.getParameter("password");
          String contactno = request.getParameter("contactno");
          String role = request.getParameter("role");
          String rolefor = request.getParameter("board");
          String suspended = request.getParameter("suspended");
          if ((StringUtils.isNotEmpty(username)) && (StringUtils.isNotEmpty(email)) && (StringUtils.isNotEmpty(contactno)) && (StringUtils.isNotEmpty(role)) && (StringUtils.isNotEmpty(password)))
          {
            User user = new User(username, email, password, contactno, role, rolefor, suspended);
            if (User.insert(user) > 0)
            {
              responseJson.put("status", "success");
            }
            else
            {
              responseJson.put("status", "failure");
              responseJson.put("error", "Failed to add user.");
            }
            response.setContentType("application/json");
            response.getWriter().write(responseJson.toString());
          }
        }
        else if ((request.getParameter("action") != null) && (request.getParameter("action").equals("updateUser")))
        {
          if (StringUtils.isNotEmpty(request.getParameter("username")))
          {
            String email = request.getParameter("email");
            String contactno = request.getParameter("contactno");
            String role = request.getParameter("role");
            String rolefor = request.getParameter("board");
            String suspended = request.getParameter("suspended");
            
            String username = request.getParameter("username");
            
            User user = new User(username, email, null, contactno, role, rolefor, suspended);
            if (User.update(user) > 0) {
              responseJson.put("status", "success");
            }
          }
          else
          {
            responseJson.put("status", "failure");
            responseJson.put("error", "Failed to fetch user details.");
          }
          response.getWriter().write(responseJson.toString());
        }
        else if ((request.getParameter("action") != null) && (request.getParameter("action").equals("getUserDetail")))
        {
          if (StringUtils.isNotEmpty(request.getParameter("username")))
          {
            responseJson.put("content", User.getUserDetail(request.getParameter("username")));
            responseJson.put("status", "success");
          }
          else
          {
            responseJson.put("status", "failure");
            responseJson.put("error", "Failed to fetch user details.");
          }
          response.getWriter().write(responseJson.toString());
        }
        else if ((request.getParameter("action") != null) && (request.getParameter("action").equals("updateUserPassowrd")))
        {
          if ((StringUtils.isNotEmpty(request.getParameter("username"))) && (StringUtils.isNotEmpty(request.getParameter("password"))))
          {
            if (User.updateUserPassword(request.getParameter("username"), request.getParameter("password")) > 0)
            {
              responseJson.put("content", "Password updated.");
              responseJson.put("status", "success");
            }
            else
            {
              responseJson.put("status", "failure");
              responseJson.put("error", "Failed to update user password.");
            }
          }
          else
          {
            responseJson.put("status", "failure");
            responseJson.put("error", "Required fields are empty");
          }
          response.getWriter().write(responseJson.toString());
        }
        else if ((request.getParameter("term") != null) && 
          (StringUtils.isNotEmpty(request.getParameter("term"))))
        {
          response.getWriter().write(User.getUserNames(request.getParameter("term")).toString());
        }
      }
      else
      {
        response.setContentType("application/json");
        responseJson.put("status", "failure");
        responseJson.put("error", "Your session has expired. Please login.");
        response.getWriter().write(responseJson.toString());
      }
    }
    catch (JSONException e)
    {
      e.printStackTrace();
    }
  }
}
