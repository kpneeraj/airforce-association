package com.sainikwelfare.reports;

import com.sainikwelfare.db.WhereCondition;
import com.sainikwelfare.utils.StringUtils;
import com.sainikwelfare.veteran.Veteran;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

@WebServlet({"/ReportServlet"})
public class ReportServlet
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
      if ((request.getSession(false).getAttribute("userContext") != null) && 
        (request.getParameter("action") != null) && (request.getParameter("action").equals("getVeterans")))
      {
        ArrayList<WhereCondition> whereConditions = new ArrayList();
        if (StringUtils.isNotEmpty(request.getParameter("queryParams")))
        {
          JSONArray jsonArray = new JSONArray(request.getParameter("queryParams").toString());
          for (int i = 0; i < jsonArray.length(); i++)
          {
            JSONObject whereConditionObject = jsonArray.getJSONObject(i);
            whereConditions.add(new WhereCondition(whereConditionObject.getString("searchfield").toString(), whereConditionObject.getString("operator").toString(), whereConditionObject.getString("value").toString()));
          }
          responseJson = Veteran.getVeterans(whereConditions);
          responseJson.put("status", "success");
        }
        else
        {
          responseJson.put("status", "failure");
          responseJson.put("error", "Failed to fetch veterans.");
        }
        response.getWriter().write(responseJson.toString());
      }
    }
    catch (Exception e)
    {
      response.setContentType("application/json");
      try
      {
        responseJson.put("status", "failure");
        responseJson.put("error", "Could not complete the operation. Please try after sometime.");
        response.getWriter().write(responseJson.toString());
      }
      catch (JSONException e1)
      {
        e1.printStackTrace();
      }
    }
  }
}
