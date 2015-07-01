package com.sainikwelfare.reports;

import com.sainikwelfare.db.WhereCondition;
import com.sainikwelfare.utils.StringUtils;
import com.sainikwelfare.veteran.Veteran;

import java.io.IOException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Locale;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFFont;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

@WebServlet({"/DownloadExcel"})
public class DownloadExcel
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
    response.setContentType("application/vnd.ms-excel");
    response.setHeader("Content-Disposition", "attachment; filename=report.xls");
    JSONObject reportJSON = new JSONObject();
    HSSFWorkbook workbook = new HSSFWorkbook();
    try
    {
      if (request.getSession(false).getAttribute("userContext") != null)
      {
        ArrayList<WhereCondition> whereConditions = new ArrayList();
        if (StringUtils.isNotEmpty(request.getParameter("queryParamString")))
        {
          JSONArray jsonArray = new JSONArray(request.getParameter("queryParamString").toString());
          for (int i = 0; i < jsonArray.length(); i++)
          {
            JSONObject whereConditionObject = jsonArray.getJSONObject(i);
            whereConditions.add(new WhereCondition(whereConditionObject.getString("searchfield").toString(), whereConditionObject.getString("operator").toString(), whereConditionObject.getString("value").toString()));
          }
          reportJSON = Veteran.getVeterans(whereConditions);
        }
      }
      workbook = getWorkBookFromReportJSON(reportJSON, request.getParameter("columnInfoString"));
    }
    catch (Exception e)
    {
      e.printStackTrace();
    }
    workbook.write(response.getOutputStream());
  }
  
  public HSSFWorkbook getWorkBookFromReportJSON(JSONObject reportJSON, String columnInfoString)
  {
    HSSFWorkbook workbook = new HSSFWorkbook();
    ArrayList<String> columnHeaders = new ArrayList();
    ArrayList<String> columnDataIndexes = new ArrayList();
    try
    {
      JSONArray columnInfoArray = new JSONArray(columnInfoString);
      HSSFSheet sheet = workbook.createSheet("Report Sheet");
      
      HSSFFont font = workbook.createFont();
      font.setBoldweight((short)700);
      HSSFCellStyle style = workbook.createCellStyle();
      style.setFont(font);
      
      Row headerrow = sheet.createRow(0);
      for (int i = 0; i < columnInfoArray.length(); i++) {
        if (columnInfoArray.getJSONObject(i).getBoolean("visible"))
        {
        	 columnHeaders.add(columnInfoArray.getJSONObject(i).getString("text"));
             columnDataIndexes.add(columnInfoArray.getJSONObject(i).getString("dataIndex"));
         
        }
      }
      for (int i = 0; i < columnHeaders.size(); i++)
      {
        Cell cell = headerrow.createCell(i);
        cell.setCellStyle(style);
        cell.setCellValue(((String)columnHeaders.get(i)).toString());
      }
      JSONArray content = reportJSON.getJSONArray("content");
      for (int i = 0; i < content.length(); i++)
      {
        Row contentRow = sheet.createRow(i + 1);
        for (int j = 0; j < columnDataIndexes.size(); j++)
        {
          Cell cell = contentRow.createCell(j);
          String colDataIndex = columnDataIndexes.get(j);
          if(colDataIndex.indexOf("date")!=-1){
        	  String target = content.getJSONObject(i).getString(((String)columnDataIndexes.get(j)).toString());
              DateFormat df = new SimpleDateFormat("yyyy-mm-dd");
				try {
					 Date result = df.parse(target);
					 DateFormat dfomart = new SimpleDateFormat("dd-mm-yyyy");
		             cell.setCellValue(dfomart.format(result)); 
				} catch (ParseException e) {
					cell.setCellValue(""); 
				}
          }
          else{
        	  cell.setCellValue(content.getJSONObject(i).getString(((String)columnDataIndexes.get(j)).toString()));
          } 
        }
        sheet.autoSizeColumn(i);
      }
      return workbook;
    }
    catch (JSONException e)
    {
      e.printStackTrace();
    }
    return workbook;
  }
}
