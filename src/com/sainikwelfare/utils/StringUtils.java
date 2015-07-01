package com.sainikwelfare.utils;

public class StringUtils
{
  public static boolean isEmpty(String string)
  {
    if ((string == null) || (string.isEmpty()) || ("".equals(string))) {
      return true;
    }
    return false;
  }
  
  public static boolean isNotEmpty(String string)
  {
    if ((string != null) && (!"".equals(string)) && (!string.isEmpty())) {
      return true;
    }
    return false;
  }
}
