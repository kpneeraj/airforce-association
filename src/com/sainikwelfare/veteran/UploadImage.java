package com.sainikwelfare.veteran;

import com.sainikwelfare.utils.SainikWelfareProperties;
import com.sainikwelfare.utils.StringUtils;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.util.UUID;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.json.JSONException;
import org.json.JSONObject;

@WebServlet({"/UploadImage"})
public class UploadImage
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
    JSONObject finalresponseJson = new JSONObject();
    try
    {
      if (ServletFileUpload.isMultipartContent(request))
      {
        try
        {
          List<FileItem> multiparts = new ServletFileUpload(
            new DiskFileItemFactory()).parseRequest(request);
          for (FileItem item : multiparts) {
            if (!item.isFormField())
            {
              String name = new File(item.getName()).getName();
              if (StringUtils.isEmpty(name)) {
                break;
              }
              String extension = name.split("\\.")[1];
              String filename = SainikWelfareProperties.getInstance().getPhotoTempDir() + "/" + UUID.randomUUID().toString() + "." + extension;
              item.write(new File(filename));
              responseJson.put("tempfilename", filename);
            }
          }
          responseJson.put("status", "success");
        }
        catch (Exception ex)
        {
          responseJson.put("status", "failure");
          responseJson.put("error", "Error occured while uploading image");
        }
      }
      else
      {
        responseJson.put("status", "failure");
        responseJson.put("error", "Error occured while uploading image");
      }
      finalresponseJson = new JSONObject();
      finalresponseJson.append("resultJSON", responseJson);
    }
    catch (JSONException e)
    {
      e.printStackTrace();
    }
    response.setContentType("application/json");
    response.getWriter().write(finalresponseJson.toString());
  }
}
