package com.sainikwelfare.commons;

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

@WebServlet({"/commons"})
public class CommonServlet
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
        if (request.getParameter("action").equals("getStates"))
        {
          JSONArray statesArray = State.getStateList();
          responseJson.put("status", "success");
          responseJson.put("content", statesArray);
          response.setContentType("application/json");
          response.getWriter().write(responseJson.toString());
        }
        else if (request.getParameter("action").equals("getDistricts"))
        {
          JSONArray districtsArray = District.getDistrictList(request.getParameter("state").toString());
          responseJson.put("status", "success");
          responseJson.put("content", districtsArray);
          response.setContentType("application/json");
          response.getWriter().write(responseJson.toString());
        }
        else if (request.getParameter("action").equals("getCorps"))
        {
          JSONArray districtsArray = Corps.getCorpsList();
          responseJson.put("status", "success");
          responseJson.put("content", districtsArray);
          response.setContentType("application/json");
          response.getWriter().write(responseJson.toString());
        }
        else if (request.getParameter("action").equals("getDischargeReasons"))
        {
          JSONArray districtsArray = DischargeReason.getDischargeReasonList();
          responseJson.put("status", "success");
          responseJson.put("content", districtsArray);
          response.setContentType("application/json");
          response.getWriter().write(responseJson.toString());
        }
        else if (request.getParameter("action").equals("getEducationalQualifications"))
        {
          JSONArray districtsArray = EducationalQualification.getQualificationList();
          responseJson.put("status", "success");
          responseJson.put("content", districtsArray);
          response.setContentType("application/json");
          response.getWriter().write(responseJson.toString());
        }
        else if (request.getParameter("action").equals("getGroups"))
        {
          JSONArray districtsArray = Groups.getGroupsList();
          responseJson.put("status", "success");
          responseJson.put("content", districtsArray);
          response.setContentType("application/json");
          response.getWriter().write(responseJson.toString());
        }
        else if (request.getParameter("action").equals("getMedicalCategories"))
        {
          JSONArray districtsArray = MedicalCategory.getMedicalCategoryList();
          responseJson.put("status", "success");
          responseJson.put("content", districtsArray);
          response.setContentType("application/json");
          response.getWriter().write(responseJson.toString());
        }
        else if (request.getParameter("action").equals("getRanks"))
        {
          JSONArray districtsArray = Rank.getRanksList(request.getParameter("service").toString());
          responseJson.put("status", "success");
          responseJson.put("content", districtsArray);
          response.setContentType("application/json");
          response.getWriter().write(responseJson.toString());
        }
        else if (request.getParameter("action").equals("getTrades"))
        {
          JSONArray districtsArray = Trade.getTradeList(request.getParameter("service").toString());
          responseJson.put("status", "success");
          responseJson.put("content", districtsArray);
          response.setContentType("application/json");
          response.getWriter().write(responseJson.toString());
        }
        else if (request.getParameter("action").equals("getCharacters"))
        {
          JSONArray districtsArray = Character.getCharacterList();
          responseJson.put("status", "success");
          responseJson.put("content", districtsArray);
          response.setContentType("application/json");
          response.getWriter().write(responseJson.toString());
        }
        else if (request.getParameter("action").equals("addState"))
        {
          String statename = request.getParameter("name").toString();
          if (State.insert(statename) > 0)
          {
            responseJson.put("status", "success");
          }
          else
          {
            responseJson.put("status", "failure");
            responseJson.put("error", "State was not added");
          }
          response.setContentType("application/json");
          response.getWriter().write(responseJson.toString());
        }
        else if (request.getParameter("action").equals("deleteState"))
        {
          String statename = request.getParameter("name").toString();
          if (State.delete(statename) > 0)
          {
            responseJson.put("status", "success");
          }
          else
          {
            responseJson.put("status", "failure");
            responseJson.put("error", "State was not deleted");
          }
          response.setContentType("application/json");
          response.getWriter().write(responseJson.toString());
        }
        else if (request.getParameter("action").equals("addDistrict"))
        {
          String statename = request.getParameter("state").toString();
          String districtname = request.getParameter("name").toString();
          if ((StringUtils.isNotEmpty(statename)) && (StringUtils.isNotEmpty(districtname)) && (District.insert(statename, districtname) > 0))
          {
            responseJson.put("status", "success");
          }
          else
          {
            responseJson.put("status", "failure");
            responseJson.put("error", "District was not added");
          }
          response.setContentType("application/json");
          response.getWriter().write(responseJson.toString());
        }
        else if (request.getParameter("action").equals("deleteDistrict"))
        {
          String statename = request.getParameter("state").toString();
          String districtname = request.getParameter("name").toString();
          if ((StringUtils.isNotEmpty(statename)) && (StringUtils.isNotEmpty(districtname)) && (District.delete(statename, districtname) > 0))
          {
            responseJson.put("status", "success");
          }
          else
          {
            responseJson.put("status", "failure");
            responseJson.put("error", "District was not deleted");
          }
          response.setContentType("application/json");
          response.getWriter().write(responseJson.toString());
        }
        else if (request.getParameter("action").equals("addCorp"))
        {
          String name = request.getParameter("name").toString();
          if (Corps.insert(name) > 0)
          {
            responseJson.put("status", "success");
          }
          else
          {
            responseJson.put("status", "failure");
            responseJson.put("error", "Corp was not added");
          }
          response.setContentType("application/json");
          response.getWriter().write(responseJson.toString());
        }
        else if (request.getParameter("action").equals("deleteCorp"))
        {
          String name = request.getParameter("name").toString();
          if (Corps.delete(name) > 0)
          {
            responseJson.put("status", "success");
          }
          else
          {
            responseJson.put("status", "failure");
            responseJson.put("error", "Corp was not deleted");
          }
          response.setContentType("application/json");
          response.getWriter().write(responseJson.toString());
        }
        else if (request.getParameter("action").equals("addGroup"))
        {
          String name = request.getParameter("name").toString();
          if (Groups.insert(name) > 0)
          {
            responseJson.put("status", "success");
          }
          else
          {
            responseJson.put("status", "failure");
            responseJson.put("error", "Corp was not added");
          }
          response.setContentType("application/json");
          response.getWriter().write(responseJson.toString());
        }
        else if (request.getParameter("action").equals("deleteGroup"))
        {
          String name = request.getParameter("name").toString();
          if (Groups.delete(name) > 0)
          {
            responseJson.put("status", "success");
          }
          else
          {
            responseJson.put("status", "failure");
            responseJson.put("error", "Corp was not deleted");
          }
          response.setContentType("application/json");
          response.getWriter().write(responseJson.toString());
        }
        else if (request.getParameter("action").equals("addTrade"))
        {
          String name = request.getParameter("name").toString();
          String group = request.getParameter("group").toString();
          String service = request.getParameter("service").toString();
          if (Trade.insert(name, service, group) > 0)
          {
            responseJson.put("status", "success");
          }
          else
          {
            responseJson.put("status", "failure");
            responseJson.put("error", "Corp was not added");
          }
          response.setContentType("application/json");
          response.getWriter().write(responseJson.toString());
        }
        else if (request.getParameter("action").equals("deleteTrade"))
        {
          String name = request.getParameter("name").toString();
          String group = request.getParameter("group").toString();
          String service = request.getParameter("service").toString();
          if (Trade.delete(name, service, group) > 0)
          {
            responseJson.put("status", "success");
          }
          else
          {
            responseJson.put("status", "failure");
            responseJson.put("error", "Corp was not deleted");
          }
          response.setContentType("application/json");
          response.getWriter().write(responseJson.toString());
        }
        else if (request.getParameter("action").equals("addRank"))
        {
          String name = request.getParameter("name").toString();
          String service = request.getParameter("service").toString();
          if (Rank.insert(name, service) > 0)
          {
            responseJson.put("status", "success");
          }
          else
          {
            responseJson.put("status", "failure");
            responseJson.put("error", "Corp was not added");
          }
          response.setContentType("application/json");
          response.getWriter().write(responseJson.toString());
        }
        else if (request.getParameter("action").equals("deleteRank"))
        {
          String name = request.getParameter("name").toString();
          String service = request.getParameter("service").toString();
          if (Rank.delete(name, service) > 0)
          {
            responseJson.put("status", "success");
          }
          else
          {
            responseJson.put("status", "failure");
            responseJson.put("error", "Corp was not deleted");
          }
          response.setContentType("application/json");
          response.getWriter().write(responseJson.toString());
        }
        else if (request.getParameter("action").equals("addDischargeReason"))
        {
          String reason = request.getParameter("name").toString();
          if (DischargeReason.insert(reason) > 0)
          {
            responseJson.put("status", "success");
          }
          else
          {
            responseJson.put("status", "failure");
            responseJson.put("error", "Discharge reason was not added");
          }
          response.setContentType("application/json");
          response.getWriter().write(responseJson.toString());
        }
        else if (request.getParameter("action").equals("deleteDischargeReason"))
        {
          String reason = request.getParameter("name").toString();
          if (DischargeReason.delete(reason) > 0)
          {
            responseJson.put("status", "success");
          }
          else
          {
            responseJson.put("status", "failure");
            responseJson.put("error", "Discharge reason was not deleted");
          }
          response.setContentType("application/json");
          response.getWriter().write(responseJson.toString());
        }
        else if (request.getParameter("action").equals("addDeathDetail"))
        {
          String detail = request.getParameter("name").toString();
          if (DeathDetail.insert(detail) > 0)
          {
            responseJson.put("status", "success");
          }
          else
          {
            responseJson.put("status", "failure");
            responseJson.put("error", "Death details was not added");
          }
          response.setContentType("application/json");
          response.getWriter().write(responseJson.toString());
        }
        else if (request.getParameter("action").equals("deleteDeathDetail"))
        {
          String detail = request.getParameter("name").toString();
          if (DeathDetail.delete(detail) > 0)
          {
            responseJson.put("status", "success");
          }
          else
          {
            responseJson.put("status", "failure");
            responseJson.put("error", "Death details was not deleted");
          }
          response.setContentType("application/json");
          response.getWriter().write(responseJson.toString());
        }
        else if (request.getParameter("action").equals("addMedicalCategory"))
        {
          String medicalCategory = request.getParameter("name").toString();
          if (MedicalCategory.insert(medicalCategory) > 0)
          {
            responseJson.put("status", "success");
          }
          else
          {
            responseJson.put("status", "failure");
            responseJson.put("error", "Medical Category was not added");
          }
          response.setContentType("application/json");
          response.getWriter().write(responseJson.toString());
        }
        else if (request.getParameter("action").equals("deleteMedicalCategory"))
        {
          String medicalCategory = request.getParameter("name").toString();
          if (MedicalCategory.delete(medicalCategory) > 0)
          {
            responseJson.put("status", "success");
          }
          else
          {
            responseJson.put("status", "failure");
            responseJson.put("error", "Medical Category was not deleted");
          }
          response.setContentType("application/json");
          response.getWriter().write(responseJson.toString());
        }
        else if (request.getParameter("action").equals("addCharacter"))
        {
          String character = request.getParameter("name").toString();
          if (Character.insert(character) > 0)
          {
            responseJson.put("status", "success");
          }
          else
          {
            responseJson.put("status", "failure");
            responseJson.put("error", "Character was not added");
          }
          response.setContentType("application/json");
          response.getWriter().write(responseJson.toString());
        }
        else if (request.getParameter("action").equals("deleteCharacter"))
        {
          String character = request.getParameter("name").toString();
          if (Character.delete(character) > 0)
          {
            responseJson.put("status", "success");
          }
          else
          {
            responseJson.put("status", "failure");
            responseJson.put("error", "Character was not deleted");
          }
          response.setContentType("application/json");
          response.getWriter().write(responseJson.toString());
        }
        else if (request.getParameter("action").equals("addQualification"))
        {
          String qualification = request.getParameter("name").toString();
          if (EducationalQualification.insert(qualification) > 0)
          {
            responseJson.put("status", "success");
          }
          else
          {
            responseJson.put("status", "failure");
            responseJson.put("error", "Qualification was not added");
          }
          response.setContentType("application/json");
          response.getWriter().write(responseJson.toString());
        }
        else if (request.getParameter("action").equals("deleteQualification"))
        {
          String qualification = request.getParameter("name").toString();
          if (EducationalQualification.delete(qualification) > 0)
          {
            responseJson.put("status", "success");
          }
          else
          {
            responseJson.put("status", "failure");
            responseJson.put("error", "Qualification was not deleted");
          }
          response.setContentType("application/json");
          response.getWriter().write(responseJson.toString());
        }
        else
        {
          responseJson.put("status", "failure");
          responseJson.put("error", "No action parameter found");
          response.setContentType("application/json");
          response.getWriter().write(responseJson.toString());
        }
      }
      else
      {
        response.setContentType("application/json");
        responseJson.put("status", "failure");
        responseJson.put("error", "Session expired. Login again.");
        response.getWriter().write(responseJson.toString());
      }
    }
    catch (JSONException e)
    {
      e.printStackTrace();
    }
  }
}
