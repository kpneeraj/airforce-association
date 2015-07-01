package com.sainikwelfare.board;

import com.sainikwelfare.db.WhereCondition;
import com.sainikwelfare.utils.StringUtils;
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

@WebServlet({"/BoardServlet"})
public class BoardServlet
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
        if ((request.getParameter("action") != null) && (request.getParameter("action").equals("addBoard")))
        {
          String boardname = request.getParameter("boardName");
          String district = request.getParameter("boardDistrict");
          String address = request.getParameter("boardAddress");
          String pincode = request.getParameter("pincode");
          String contactno = request.getParameter("contactno");
          String email = request.getParameter("email");
          String state = request.getParameter("boardState");
          String director = request.getParameter("director");
          if ((StringUtils.isNotEmpty(boardname)) && (StringUtils.isNotEmpty(district)) && (StringUtils.isNotEmpty(state)))
          {
            Board board = new Board(boardname, district, address, pincode, contactno, email, state, director);
            if (Board.insert(board) > 0)
            {
              responseJson.put("status", "success");
            }
            else
            {
              responseJson.put("status", "failure");
              responseJson.put("error", "Failed to add board. Check if board name already exists.");
            }
            response.setContentType("application/json");
            response.getWriter().write(responseJson.toString());
          }
        }
        else if ((request.getParameter("action") != null) && (request.getParameter("action").equals("getBoards")))
        {
          ArrayList<WhereCondition> whereConditions = new ArrayList();
          if (StringUtils.isNotEmpty(request.getParameter("queryparam")))
          {
            JSONArray jsonArray = new JSONArray(request.getParameter("queryparam"));
            for (int i = 0; i < jsonArray.length(); i++)
            {
              JSONObject whereConditionObject = jsonArray.getJSONObject(i);
              whereConditions.add(new WhereCondition(whereConditionObject.getString("searchfield").toString(), whereConditionObject.getString("operator").toString(), whereConditionObject.getString("value").toString()));
            }
            responseJson = Board.getBoards(whereConditions);
            responseJson.put("status", "success");
          }
          else
          {
            responseJson.put("status", "failure");
            responseJson.put("error", "Failed to fetch boards.");
          }
          response.getWriter().write(responseJson.toString());
        }
        else if ((request.getParameter("action") != null) && (request.getParameter("action").equals("getBoardDetail")))
        {
          if (StringUtils.isNotEmpty(request.getParameter("boardName")))
          {
            responseJson.put("content", Board.getBoardDetail(request.getParameter("boardName")));
            responseJson.put("status", "success");
          }
          else
          {
            responseJson.put("status", "failure");
            responseJson.put("error", "Failed to fetch board details.");
          }
          response.getWriter().write(responseJson.toString());
        }
        else if ((request.getParameter("action") != null) && (request.getParameter("action").equals("updateBoard")))
        {
          if (StringUtils.isNotEmpty(request.getParameter("boardName")))
          {
            String boardname = request.getParameter("boardName");
            String district = request.getParameter("boardDistrict");
            String address = request.getParameter("boardAddress");
            String pincode = request.getParameter("pincode");
            String contactno = request.getParameter("contactno");
            String email = request.getParameter("email");
            String state = request.getParameter("boardState");
            String director = request.getParameter("director");
            
            Board board = new Board(boardname, district, address, pincode, contactno, email, state, director);
            if (Board.update(board) > 0) {
              responseJson.put("status", "success");
            }
          }
          else
          {
            responseJson.put("status", "failure");
            responseJson.put("error", "Failed to update board details.");
          }
          response.getWriter().write(responseJson.toString());
        }
        else if ((request.getParameter("action") != null) && (request.getParameter("action").equals("deleteBoard")))
        {
          if (StringUtils.isNotEmpty(request.getParameter("boardName")))
          {
            if (Board.delete(request.getParameter("boardName")) > 0)
            {
              responseJson.put("status", "success");
              responseJson.put("content", "Board successfully deleted.");
            }
          }
          else
          {
            responseJson.put("status", "failure");
            responseJson.put("error", "Failed to delete board.");
          }
          response.getWriter().write(responseJson.toString());
        }
        else if ((request.getParameter("action") != null) && (request.getParameter("action").equals("getBoardsList")))
        {
          responseJson.put("content", Board.getBoardsList());
          responseJson.put("status", "success");
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
    catch (JSONException e)
    {
      e.printStackTrace();
    }
  }
}
