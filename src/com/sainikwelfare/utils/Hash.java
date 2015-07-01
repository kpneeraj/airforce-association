package com.sainikwelfare.utils;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class Hash
{
  String input;
  String output = "";
  
  public Hash(String input)
  {
    this.input = input;
    calculateHash();
  }
  
  private void calculateHash()
  {
    try
    {
      MessageDigest md = MessageDigest.getInstance("MD5");
      
      md.update(this.input.getBytes());
      
      byte[] byteData = md.digest();
      
      StringBuffer hexString = new StringBuffer();
      for (int i = 0; i < byteData.length; i++)
      {
        String hex = Integer.toHexString(0xFF & byteData[i]);
        if (hex.length() == 1) {
          hexString.append('0');
        }
        hexString.append(hex);
      }
      this.output = hexString.toString();
    }
    catch (NoSuchAlgorithmException e)
    {
      e.printStackTrace();
    }
  }
  
  public String getHashValue()
  {
    return this.output;
  }
}
