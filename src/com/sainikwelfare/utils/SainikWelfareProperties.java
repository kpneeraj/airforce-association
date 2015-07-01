package com.sainikwelfare.utils;

import java.io.File;
import java.io.IOException;
import java.util.Properties;

public class SainikWelfareProperties
{
  Properties prop;
  private static SainikWelfareProperties sainikWelfareProperties = new SainikWelfareProperties();
  
  private SainikWelfareProperties()
  {
    this.prop = new Properties();
    try
    {
      this.prop.load(Thread.currentThread().getContextClassLoader().getResourceAsStream("global.properties"));
      
      new File(this.prop.getProperty("phototempdirectory")).mkdirs();
      new File(this.prop.getProperty("photodirectory")).mkdirs();
    }
    catch (IOException ex)
    {
      ex.printStackTrace();
    }
  }
  
  public static SainikWelfareProperties getInstance()
  {
    return sainikWelfareProperties;
  }
  
  public String getDatabaseName()
  {
    return this.prop.getProperty("dbname");
  }
  
  public String getDatabaseUser()
  {
    return this.prop.getProperty("dbuser");
  }
  
  public String getDatabaseHost()
  {
    return this.prop.getProperty("dbhost");
  }
  
  public String getDatabasePort()
  {
    return this.prop.getProperty("dbport");
  }
  
  public String getDatabasePassword()
  {
    return this.prop.getProperty("dbpassword");
  }
  
  public String getTokeniserKey()
  {
    return this.prop.getProperty("tokeniserkey");
  }
  
  public String getPhotoTempDir()
  {
    return this.prop.getProperty("phototempdirectory");
  }
  
  public String getPhotoDir()
  {
    return this.prop.getProperty("photodirectory");
  }
}
