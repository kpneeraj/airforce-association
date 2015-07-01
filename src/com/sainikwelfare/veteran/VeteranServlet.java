package com.sainikwelfare.veteran;

import com.sainikwelfare.db.WhereCondition;
import com.sainikwelfare.utils.SainikWelfareProperties;
import com.sainikwelfare.utils.StringUtils;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

@WebServlet({"/VeteranServlet"})
public class VeteranServlet
  extends HttpServlet
{
  private static final long serialVersionUID = 1L;
  
  protected void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException
  {}
  
  protected void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException
  {
    JSONObject responseJson = new JSONObject();
    try
    {
      if (request.getSession(false).getAttribute("userContext") != null)
      {
        if ((request.getParameter("action") != null) && (request.getParameter("action").equals("addVeteran")))
        {
          ArrayList<String> fields = Veteran.getFields();
          HashMap<String, String> values = new HashMap();
          for (int i = 0; i < fields.size(); i++) {
            values.put((String)fields.get(i), request.getParameter((String)fields.get(i)));
          }
          values.put("dependents", request.getParameter("dependents"));
          Veteran vet = new Veteran(values);
          if (vet.insert() > 0)
          {
            String tempFilename = request.getParameter("veteranphotopath");
            if (StringUtils.isNotEmpty(tempFilename))
            {
              String extension = tempFilename.split("\\.")[1];
              String newFilename = SainikWelfareProperties.getInstance().getPhotoDir() + "/" + request.getParameter("serviceno") + "_" + request.getParameter("registrationno").replaceAll("/", "_") + "." + extension;
              try
              {
                File tempFile = new File(tempFilename);
                tempFile.renameTo(new File(newFilename));
              }
              catch (Exception e)
              {
                responseJson.put("message", "Cadet added, but the photo upload failed.");
              }
            }
            tempFilename = request.getParameter("familyphotopath");
            if (StringUtils.isNotEmpty(tempFilename))
            {
              String extension = tempFilename.split("\\.")[1];
              String newFilename = SainikWelfareProperties.getInstance().getPhotoDir() + "/" + request.getParameter("serviceno") + "_" + request.getParameter("registrationno").replaceAll("/", "_") + "_family." + extension;
              try
              {
                File tempFile = new File(tempFilename);
                tempFile.renameTo(new File(newFilename));
              }
              catch (Exception e)
              {
                responseJson.put("message", "Cadet added, but the family photo upload failed.");
              }
            }
            responseJson.put("status", "success");
          }
          else
          {
            responseJson.put("status", "failure");
            responseJson.put("error", "Error occured while updating veteran");
          }
          response.getWriter().write(responseJson.toString());
        }
        else if ((request.getParameter("action") != null) && (request.getParameter("action").equals("getVeterans")))
        {
          ArrayList<WhereCondition> whereConditions = new ArrayList();
          if (StringUtils.isNotEmpty(request.getParameter("queryparam")))
          {
            JSONArray jsonArray = new JSONArray(request.getParameter("queryparam").toString());
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
        else if ((request.getParameter("action") != null) && (request.getParameter("action").equals("getVeteranDetail")))
        {
          if (StringUtils.isNotEmpty(request.getParameter("serviceno")))
          {
            responseJson.put("content", Veteran.getVeteranDetail(request.getParameter("serviceno"), request.getParameter("registrationno")));
            responseJson.put("status", "success");
          }
          else
          {
            responseJson.put("status", "failure");
            responseJson.put("error", "Failed to fetch board details.");
          }
          response.getWriter().write(responseJson.toString());
        }
        else if ((request.getParameter("action") != null) && (request.getParameter("action").equals("updateVeteran")))
        {
          ArrayList<String> fields = Veteran.getFields();
          HashMap<String, String> values = new HashMap();
          for (int i = 0; i < fields.size(); i++) {
            values.put((String)fields.get(i), request.getParameter((String)fields.get(i)));
          }
          values.put("dependents", request.getParameter("dependents"));
          Veteran vet = new Veteran(values);
          if (vet.updateVeteran() > 0)
          {
            String tempFilename = request.getParameter("veteranphotopath");
            if (StringUtils.isNotEmpty(tempFilename))
            {
              String extension = tempFilename.split("\\.")[1];
              String newFilename = SainikWelfareProperties.getInstance().getPhotoDir() + "/" + request.getParameter("serviceno") + "_" + request.getParameter("registrationno").replaceAll("/", "_") + "." + extension;
              try
              {
                File tempFile = new File(tempFilename);
                File newFile = new File(newFilename);
                if (newFile.exists()) {
                  newFile.delete();
                }
                tempFile.renameTo(newFile);
              }
              catch (Exception e)
              {
                e.printStackTrace();
                responseJson.put("message", "Cadet added, but the photo upload failed.");
              }
            }
            tempFilename = request.getParameter("familyphotopath");
            if (StringUtils.isNotEmpty(tempFilename))
            {
              String extension = tempFilename.split("\\.")[1];
              String newFilename = SainikWelfareProperties.getInstance().getPhotoDir() + "/" + request.getParameter("serviceno") + "_" + request.getParameter("registrationno").replaceAll("/", "_") + "_family." + extension;
              try
              {
                File tempFile = new File(tempFilename);
                File newFile = new File(newFilename);
                if (newFile.exists()) {
                  newFile.delete();
                }
                tempFile.renameTo(newFile);
              }
              catch (Exception e)
              {
                responseJson.put("message", "Cadet added, but the family photo upload failed.");
              }
            }
            responseJson.put("status", "success");
          }
          else
          {
            responseJson.put("status", "failure");
            responseJson.put("error", "Error occured while updating veteran");
          }
          response.getWriter().write(responseJson.toString());
        }
        else if ((request.getParameter("action") != null) && (request.getParameter("action").equals("deleteVeteran")))
        {
          if (new Veteran().delete(request.getParameter("serviceno"), request.getParameter("registrationno")) > 0)
          {
            responseJson.put("status", "success");
            responseJson.put("content", "Veteran successfully deleted.");
          }
          else
          {
            responseJson.put("status", "failure");
            responseJson.put("error", "Error occured while deleting veteran");
          }
          response.getWriter().write(responseJson.toString());
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
