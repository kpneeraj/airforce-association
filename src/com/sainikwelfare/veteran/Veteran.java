package com.sainikwelfare.veteran;

import com.sainikwelfare.db.Query;
import com.sainikwelfare.db.QueryExecutor;
import com.sainikwelfare.db.Row;
import com.sainikwelfare.db.WhereCondition;
import com.sainikwelfare.utils.DateUtils;
import java.util.ArrayList;
import java.util.HashMap;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class Veteran
{
  String email;
  String loginid;
  String password;
  String board;
  String service;
  String corps;
  String group;
  String trade;
  String serviceno;
  String registrationno;
  String rank;
  String name;
  String gender;
  String wwii;
  String operations;
  String decoration;
  String unitlastserved;
  String dischargereason;
  String deathdetails;
  String mcatdischarge;
  String characteratdischarge;
  String dischargebookno;
  String pponumber;
  String cda;
  String servicepension;
  String disabilitypension;
  String percentageofdisability;
  String pensionaccno;
  String bankname;
  String fathername;
  String mothername;
  String identificationmark;
  String religion;
  String caste;
  String birthplace;
  String birthstate;
  String birthdistrict;
  String qualificationincivil;
  String qualificationinservice;
  String reemploymentstatus;
  String employer;
  String monthlyincome;
  String department;
  String officecontactno;
  String adharcardno;
  String csdcardno;
  String echscardno;
  String afacardno;
  String permanentdoorno;
  String permanenthousename;
  String permanentstreet;
  String permanentcity;
  String permanentstate;
  String permanentdistrict;
  String permanentpolicestation;
  String permanentpincode;
  String communicationdoorno;
  String communicationhousename;
  String communicationstreet;
  String communicationcity;
  String communicationstate;
  String communicationdistrict;
  String communicationpolicestation;
  String communicationpincode;
  String communicationtelephone;
  String communicationmobile;
  String communicationemail;
  String maritalstatus;
  String spousename;
  String spouserelation;
  String spouseidentificationmark;
  String spousequalification;
  String isspouseemployed;
  String spouseprofession;
  String nextofkinname;
  String nextofkinrelation;
  String dateofbirth;
  String dateenrolled;
  String datedischarged;
  String dateofdeath;
  String dateregistered;
  String dateofmarriage;
  String spousedateofbirth;
  String spousedateofdeath;
  String dependents;
  String veteranphotopath;
  String familyphotopath;
  public static ArrayList<String> fields = new ArrayList();
  
  static
  {
    fields.add("email");
    fields.add("loginid");
    fields.add("password");
    fields.add("board");
    fields.add("service");
    fields.add("corps");
    fields.add("group");
    fields.add("trade");
    fields.add("serviceno");
    fields.add("registrationno");
    fields.add("rank");
    fields.add("name");
    fields.add("gender");
    fields.add("dateenrolled");
    fields.add("wwii");
    fields.add("operations");
    fields.add("decoration");
    fields.add("unitlastserved");
    fields.add("dischargereason");
    fields.add("deathdetails");
    fields.add("mcatdischarge");
    fields.add("characteratdischarge");
    fields.add("dischargebookno");
    fields.add("pponumber");
    fields.add("cda");
    fields.add("servicepension");
    fields.add("disabilitypension");
    fields.add("percentageofdisability");
    fields.add("pensionaccno");
    fields.add("bankname");
    fields.add("fathername");
    fields.add("mothername");
    fields.add("identificationmark");
    fields.add("religion");
    fields.add("caste");
    fields.add("birthplace");
    fields.add("birthstate");
    fields.add("birthdistrict");
    fields.add("qualificationincivil");
    fields.add("qualificationinservice");
    fields.add("reemploymentstatus");
    fields.add("employer");
    fields.add("monthlyincome");
    fields.add("department");
    fields.add("officecontactno");
    fields.add("adharcardno");
    fields.add("csdcardno");
    fields.add("echscardno");
    fields.add("afacardno");
    fields.add("permanentdoorno");
    fields.add("permanenthousename");
    fields.add("permanentstreet");
    fields.add("permanentcity");
    fields.add("permanentstate");
    fields.add("permanentdistrict");
    fields.add("permanentpolicestation");
    fields.add("permanentpincode");
    fields.add("communicationdoorno");
    fields.add("communicationhousename");
    fields.add("communicationstreet");
    fields.add("communicationcity");
    fields.add("communicationstate");
    fields.add("communicationdistrict");
    fields.add("communicationpolicestation");
    fields.add("communicationpincode");
    fields.add("communicationtelephone");
    fields.add("communicationmobile");
    fields.add("communicationemail");
    fields.add("maritalstatus");
    fields.add("spousename");
    fields.add("spouserelation");
    fields.add("spouseidentificationmark");
    fields.add("spousequalification");
    fields.add("isspouseemployed");
    fields.add("spouseprofession");
    fields.add("nextofkinname");
    fields.add("nextofkinrelation");
    fields.add("dateofbirth");
    fields.add("datedischarged");
    fields.add("dateofdeath");
    fields.add("dateregistered");
    fields.add("dateofmarriage");
    fields.add("spousedateofbirth");
    fields.add("spousedateofdeath");
    fields.add("veteranphotopath");
    fields.add("familyphotopath");
  }
  
  public static ArrayList<String> getFields()
  {
    return fields;
  }
  
  public Veteran() {}
  
  public Veteran(HashMap<String, String> values)
  {
    this.email = ((String)values.get("email"));
    this.loginid = ((String)values.get("loginid"));
    this.password = ((String)values.get("password"));
    this.board = ((String)values.get("board"));
    this.service = ((String)values.get("service"));
    this.corps = ((String)values.get("corps"));
    this.group = ((String)values.get("group"));
    this.trade = ((String)values.get("trade"));
    this.serviceno = ((String)values.get("serviceno"));
    this.registrationno = ((String)values.get("registrationno"));
    this.rank = ((String)values.get("rank"));
    this.name = ((String)values.get("name"));
    this.gender = ((String)values.get("gender"));
    this.dateenrolled = ((String)values.get("dateenrolled"));
    this.wwii = ((String)values.get("wwii"));
    this.operations = ((String)values.get("operations"));
    this.decoration = ((String)values.get("decoration"));
    this.unitlastserved = ((String)values.get("unitlastserved"));
    this.dischargereason = ((String)values.get("dischargereason"));
    this.deathdetails = ((String)values.get("deathdetails"));
    this.mcatdischarge = ((String)values.get("mcatdischarge"));
    this.characteratdischarge = ((String)values.get("characteratdischarge"));
    this.dischargebookno = ((String)values.get("dischargebookno"));
    this.pponumber = ((String)values.get("pponumber"));
    this.cda = ((String)values.get("cda"));
    this.servicepension = ((String)values.get("servicepension"));
    this.disabilitypension = ((String)values.get("disabilitypension"));
    this.percentageofdisability = ((String)values.get("percentageofdisability"));
    this.pensionaccno = ((String)values.get("pensionaccno"));
    this.bankname = ((String)values.get("bankname"));
    this.fathername = ((String)values.get("fathername"));
    this.mothername = ((String)values.get("mothername"));
    this.identificationmark = ((String)values.get("identificationmark"));
    this.religion = ((String)values.get("religion"));
    this.caste = ((String)values.get("caste"));
    this.birthplace = ((String)values.get("birthplace"));
    this.birthstate = ((String)values.get("birthstate"));
    this.birthdistrict = ((String)values.get("birthdistrict"));
    this.qualificationincivil = ((String)values.get("qualificationincivil"));
    this.qualificationinservice = ((String)values.get("qualificationinservice"));
    this.reemploymentstatus = ((String)values.get("reemploymentstatus"));
    this.employer = ((String)values.get("employer"));
    this.monthlyincome = ((String)values.get("monthlyincome"));
    this.department = ((String)values.get("department"));
    this.officecontactno = ((String)values.get("officecontactno"));
    this.adharcardno = ((String)values.get("adharcardno"));
    this.csdcardno = ((String)values.get("csdcardno"));
    this.echscardno = ((String)values.get("echscardno"));
    this.afacardno = ((String)values.get("afacardno"));
    this.permanentdoorno = ((String)values.get("permanentdoorno"));
    this.permanenthousename = ((String)values.get("permanenthousename"));
    this.permanentstreet = ((String)values.get("permanentstreet"));
    this.permanentcity = ((String)values.get("permanentcity"));
    this.permanentstate = ((String)values.get("permanentstate"));
    this.permanentdistrict = ((String)values.get("permanentdistrict"));
    this.permanentpolicestation = ((String)values.get("permanentpolicestation"));
    this.permanentpincode = ((String)values.get("permanentpincode"));
    this.communicationdoorno = ((String)values.get("communicationdoorno"));
    this.communicationhousename = ((String)values.get("communicationhousename"));
    this.communicationstreet = ((String)values.get("communicationstreet"));
    this.communicationcity = ((String)values.get("communicationcity"));
    this.communicationstate = ((String)values.get("communicationstate"));
    this.communicationdistrict = ((String)values.get("communicationdistrict"));
    this.communicationpolicestation = ((String)values.get("communicationpolicestation"));
    this.communicationpincode = ((String)values.get("communicationpincode"));
    this.communicationtelephone = ((String)values.get("communicationtelephone"));
    this.communicationmobile = ((String)values.get("communicationmobile"));
    this.communicationemail = ((String)values.get("communicationemail"));
    this.maritalstatus = ((String)values.get("maritalstatus"));
    this.spousename = ((String)values.get("spousename"));
    this.spouserelation = ((String)values.get("spouserelation"));
    this.spouseidentificationmark = ((String)values.get("spouseidentificationmark"));
    this.spousequalification = ((String)values.get("spousequalification"));
    this.isspouseemployed = ((String)values.get("isspouseemployed"));
    this.spouseprofession = ((String)values.get("spouseprofession"));
    this.nextofkinname = ((String)values.get("nextofkinname"));
    this.nextofkinrelation = ((String)values.get("nextofkinrelation"));
    this.dateofbirth = ((String)values.get("dateofbirth"));
    this.dateenrolled = ((String)values.get("dateenrolled"));
    this.datedischarged = ((String)values.get("datedischarged"));
    this.dateofdeath = ((String)values.get("dateofdeath"));
    this.dateregistered = ((String)values.get("dateregistered"));
    this.dateofmarriage = ((String)values.get("dateofmarriage"));
    this.spousedateofbirth = ((String)values.get("spousedateofbirth"));
    this.spousedateofdeath = ((String)values.get("spousedateofdeath"));
    this.dependents = ((String)values.get("dependents"));
  }
  
  public int insert()
  {
    String query = "INSERT INTO `veterans`(`email`,`loginid`,`password`,`board`,`service`,`corps`,`group`,`trade`,`serviceno`,`registrationno`,`rank`,`name`,`gender`,`wwii`,`operations`,`decoration`,`unitlastserved`,`dischargereason`,`deathdetails`,`mcatdischarge`,`characteratdischarge`,`dischargebookno`,`pponumber`,`cda`,`servicepension`,`disabilitypension`,`percentageofdisability`,`pensionaccno`,`bankname`,`fathername`,`mothername`,`identificationmark`,`religion`,`caste`,`birthplace`,`birthstate`,`birthdistrict`,`qualificationincivil`,`qualificationinservice`,`reemploymentstatus`,`employer`,`monthlyincome`,`department`,`officecontactno`,`adharcardno`,`csdcardno`,`echscardno`,`afacardno`,`permanentdoorno`,`permanenthousename`,`permanentstreet`,`permanentcity`,`permanentstate`,`permanentdistrict`,`permanentpolicestation`,`permanentpincode`,`communicationdoorno`,`communicationhousename`,`communicationstreet`,`communicationcity`,`communicationstate`,`communicationdistrict`,`communicationpolicestation`,`communicationpincode`,`communicationtelephone`,`communicationmobile`,`communicationemail`,`maritalstatus`,`spousename`,`spouserelation`,`spouseidentificationmark`,`spousequalification`,`isspouseemployed`,`spouseprofession`,`nextofkinname`,`nextofkinrelation`,`dateofbirth`,`dateenrolled`,`datedischarged`,`dateofdeath`,`dateregistered`,`dateofmarriage`,`spousedateofbirth`,`spousedateofdeath`,`veteranphotopath`,`familyphotopath`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    
    ArrayList<String> values = new ArrayList();
    
    values.add(this.email);
    values.add(this.loginid);
    values.add(this.password);
    values.add(this.board);
    values.add(this.service);
    values.add(this.corps);
    values.add(this.group);
    values.add(this.trade);
    values.add(this.serviceno);
    values.add(this.registrationno);
    values.add(this.rank);
    values.add(this.name);
    values.add(this.gender);
    values.add(this.wwii);
    values.add(this.operations);
    values.add(this.decoration);
    values.add(this.unitlastserved);
    values.add(this.dischargereason);
    values.add(this.deathdetails);
    values.add(this.mcatdischarge);
    values.add(this.characteratdischarge);
    values.add(this.dischargebookno);
    values.add(this.pponumber);
    values.add(this.cda);
    values.add(this.servicepension);
    values.add(this.disabilitypension);
    values.add(this.percentageofdisability);
    values.add(this.pensionaccno);
    values.add(this.bankname);
    values.add(this.fathername);
    values.add(this.mothername);
    values.add(this.identificationmark);
    values.add(this.religion);
    values.add(this.caste);
    values.add(this.birthplace);
    values.add(this.birthstate);
    values.add(this.birthdistrict);
    values.add(this.qualificationincivil);
    values.add(this.qualificationinservice);
    values.add(this.reemploymentstatus);
    values.add(this.employer);
    values.add(this.monthlyincome);
    values.add(this.department);
    values.add(this.officecontactno);
    values.add(this.adharcardno);
    values.add(this.csdcardno);
    values.add(this.echscardno);
    values.add(this.afacardno);
    values.add(this.permanentdoorno);
    values.add(this.permanenthousename);
    values.add(this.permanentstreet);
    values.add(this.permanentcity);
    values.add(this.permanentstate);
    values.add(this.permanentdistrict);
    values.add(this.permanentpolicestation);
    values.add(this.permanentpincode);
    values.add(this.communicationdoorno);
    values.add(this.communicationhousename);
    values.add(this.communicationstreet);
    values.add(this.communicationcity);
    values.add(this.communicationstate);
    values.add(this.communicationdistrict);
    values.add(this.communicationpolicestation);
    values.add(this.communicationpincode);
    values.add(this.communicationtelephone);
    values.add(this.communicationmobile);
    values.add(this.communicationemail);
    values.add(this.maritalstatus);
    values.add(this.spousename);
    values.add(this.spouserelation);
    values.add(this.spouseidentificationmark);
    values.add(this.spousequalification);
    values.add(this.isspouseemployed);
    values.add(this.spouseprofession);
    values.add(this.nextofkinname);
    values.add(this.nextofkinrelation);
    values.add(DateUtils.convertToDBFormat(this.dateofbirth));
    values.add(DateUtils.convertToDBFormat(this.dateenrolled));
    values.add(DateUtils.convertToDBFormat(this.datedischarged));
    values.add(DateUtils.convertToDBFormat(this.dateofdeath));
    values.add(DateUtils.convertToDBFormat(this.dateregistered));
    values.add(DateUtils.convertToDBFormat(this.dateofmarriage));
    values.add(DateUtils.convertToDBFormat(this.spousedateofbirth));
    values.add(DateUtils.convertToDBFormat(this.spousedateofdeath));
    values.add(this.serviceno + '_' + this.registrationno.replaceAll("/", "_") + ".jpg");
    values.add(this.serviceno + '_' + this.registrationno.replaceAll("/", "_") + "_family" + ".jpg");
    
    QueryExecutor queryExecutor = new QueryExecutor(query, values);
    
    int insertedcount = queryExecutor.execute();
    JSONArray jsonArray;
    try
    {
      jsonArray = new JSONArray(this.dependents);
    }
    catch (JSONException e)
    {
      return insertedcount;
    }
    if (insertedcount > 0)
    {
      int depinsertedcount = 0;
      try
      {
        for (int i = 0; i < jsonArray.length(); i++)
        {
          JSONObject dependentObject = jsonArray.getJSONObject(i);
          Dependent dep = new Dependent(
            dependentObject.getString("name").toString(), 
            this.serviceno, 
            this.registrationno, 
            dependentObject.getString("relation").toString(), 
            DateUtils.convertToDBFormat(dependentObject.getString("dateofbirth").toString()), 
            dependentObject.getString("maritalstatus").toString(), 
            dependentObject.getString("education").toString(), 
            dependentObject.getString("course").toString(), 
            dependentObject.getString("courseyear").toString(), 
            dependentObject.getString("employmentstatus").toString());
          
          depinsertedcount = Dependent.insert(dep);
        }
      }
      catch (JSONException e)
      {
        delete(this.serviceno, this.registrationno);
        Dependent.delete(this.serviceno, this.registrationno);
        
        e.printStackTrace();
        return -1;
      }
    }
    return insertedcount;
  }
  
  public int delete(String serviceno, String registrationno)
  {
    String query = "DELETE FROM `sainikwelfare`.`veterans` WHERE `veterans`.`serviceno` = ? and `veterans`.`registrationno` = ?";
    
    ArrayList<String> values = new ArrayList();
    values.add(serviceno);
    values.add(registrationno);
    QueryExecutor queryExecutor = new QueryExecutor(query, values);
    int updatedcount = 0;
    updatedcount = queryExecutor.execute();
    return updatedcount;
  }
  
  public int deleteVeterans(String serviceno, String registrationno)
  {
    String query = "DELETE FROM `sainikwelfare`.`dependents` WHERE `veterans`.`serviceno` = ? and `veterans`.`registrationno` = ?";
    ArrayList<String> values = new ArrayList();
    values.add(serviceno);
    values.add(registrationno);
    QueryExecutor queryExecutor = new QueryExecutor(query, values);
    int updatedcount = 0;
    updatedcount = queryExecutor.execute();
    return updatedcount;
  }
  
  public int updateVeteran()
  {
    String query = "UPDATE `veterans` SET `email`=?,`loginid`=?,`password`=?,`board`=?,`service`=?,`corps`=?,`group`=?,`trade`=?,`rank`=?,`name`=?,`gender`=?,`wwii`=?,`operations`=?,`decoration`=?,`unitlastserved`=?,`dischargereason`=?,`deathdetails`=?,`mcatdischarge`=?,`characteratdischarge`=?,`dischargebookno`=?,`pponumber`=?,`cda`=?,`servicepension`=?,`disabilitypension`=?,`percentageofdisability`=?,`pensionaccno`=?,`bankname`=?,`fathername`=?,`mothername`=?,`identificationmark`=?,`religion`=?,`caste`=?,`birthplace`=?,`birthstate`=?,`birthdistrict`=?,`qualificationincivil`=?,`qualificationinservice`=?,`reemploymentstatus`=?,`employer`=?,`monthlyincome`=?,`department`=?,`officecontactno`=?,`adharcardno`=?,`csdcardno`=?,`echscardno`=?,`afacardno`=?,`permanentdoorno`=?,`permanenthousename`=?,`permanentstreet`=?,`permanentcity`=?,`permanentstate`=?,`permanentdistrict`=?,`permanentpolicestation`=?,`permanentpincode`=?,`communicationdoorno`=?,`communicationhousename`=?,`communicationstreet`=?,`communicationcity`=?,`communicationstate`=?,`communicationdistrict`=?,`communicationpolicestation`=?,`communicationpincode`=?,`communicationtelephone`=?,`communicationmobile`=?,`communicationemail`=?,`maritalstatus`=?,`spousename`=?,`spouserelation`=?,`spouseidentificationmark`=?,`spousequalification`=?,`isspouseemployed`=?,`spouseprofession`=?,`nextofkinname`=?,`nextofkinrelation`=?,`dateofbirth`=?,`dateenrolled`=?,`datedischarged`=?,`dateofdeath`=?,`dateregistered`=?,`dateofmarriage`=?,`spousedateofbirth`=?,`spousedateofdeath`=?,`veteranphotopath`=?,`familyphotopath`=? where `serviceno`=? and `registrationno`=?";
    
    ArrayList<String> values = new ArrayList();
    
    values.add(this.email);
    values.add(this.loginid);
    values.add(this.password);
    values.add(this.board);
    values.add(this.service);
    values.add(this.corps);
    values.add(this.group);
    values.add(this.trade);
    values.add(this.rank);
    values.add(this.name);
    values.add(this.gender);
    values.add(this.wwii);
    values.add(this.operations);
    values.add(this.decoration);
    values.add(this.unitlastserved);
    values.add(this.dischargereason);
    values.add(this.deathdetails);
    values.add(this.mcatdischarge);
    values.add(this.characteratdischarge);
    values.add(this.dischargebookno);
    values.add(this.pponumber);
    values.add(this.cda);
    values.add(this.servicepension);
    values.add(this.disabilitypension);
    values.add(this.percentageofdisability);
    values.add(this.pensionaccno);
    values.add(this.bankname);
    values.add(this.fathername);
    values.add(this.mothername);
    values.add(this.identificationmark);
    values.add(this.religion);
    values.add(this.caste);
    values.add(this.birthplace);
    values.add(this.birthstate);
    values.add(this.birthdistrict);
    values.add(this.qualificationincivil);
    values.add(this.qualificationinservice);
    values.add(this.reemploymentstatus);
    values.add(this.employer);
    values.add(this.monthlyincome);
    values.add(this.department);
    values.add(this.officecontactno);
    values.add(this.adharcardno);
    values.add(this.csdcardno);
    values.add(this.echscardno);
    values.add(this.afacardno);
    values.add(this.permanentdoorno);
    values.add(this.permanenthousename);
    values.add(this.permanentstreet);
    values.add(this.permanentcity);
    values.add(this.permanentstate);
    values.add(this.permanentdistrict);
    values.add(this.permanentpolicestation);
    values.add(this.permanentpincode);
    values.add(this.communicationdoorno);
    values.add(this.communicationhousename);
    values.add(this.communicationstreet);
    values.add(this.communicationcity);
    values.add(this.communicationstate);
    values.add(this.communicationdistrict);
    values.add(this.communicationpolicestation);
    values.add(this.communicationpincode);
    values.add(this.communicationtelephone);
    values.add(this.communicationmobile);
    values.add(this.communicationemail);
    values.add(this.maritalstatus);
    values.add(this.spousename);
    values.add(this.spouserelation);
    values.add(this.spouseidentificationmark);
    values.add(this.spousequalification);
    values.add(this.isspouseemployed);
    values.add(this.spouseprofession);
    values.add(this.nextofkinname);
    values.add(this.nextofkinrelation);
    values.add(DateUtils.convertToDBFormat(this.dateofbirth));
    values.add(DateUtils.convertToDBFormat(this.dateenrolled));
    values.add(DateUtils.convertToDBFormat(this.datedischarged));
    values.add(DateUtils.convertToDBFormat(this.dateofdeath));
    values.add(DateUtils.convertToDBFormat(this.dateregistered));
    values.add(DateUtils.convertToDBFormat(this.dateofmarriage));
    values.add(DateUtils.convertToDBFormat(this.spousedateofbirth));
    values.add(DateUtils.convertToDBFormat(this.spousedateofdeath));
    values.add(this.serviceno + '_' + this.registrationno.replaceAll("/", "_") + ".jpg");
    values.add(this.serviceno + '_' + this.registrationno.replaceAll("/", "_") + "_family" + ".jpg");
    values.add(this.serviceno);
    values.add(this.registrationno);
    
    QueryExecutor queryExecutor = new QueryExecutor(query, values);
    int updatedcount = queryExecutor.execute();
    JSONArray jsonArray;
    try
    {
      jsonArray = new JSONArray(this.dependents);
    }
    catch (JSONException e)
    {
      return updatedcount;
    }
    if (updatedcount > 0)
    {
      int depupdatedcount = 0;
      try
      {
        Dependent.delete(this.serviceno, this.registrationno);
        for (int i = 0; i < jsonArray.length(); i++)
        {
          JSONObject dependentObject = jsonArray.getJSONObject(i);
          Dependent dep = new Dependent(
            dependentObject.getString("name").toString(), 
            this.serviceno, 
            this.registrationno, 
            dependentObject.getString("relation").toString(), 
            DateUtils.convertToDBFormat(dependentObject.getString("dateofbirth").toString()), 
            dependentObject.getString("maritalstatus").toString(), 
            dependentObject.getString("education").toString(), 
            dependentObject.getString("course").toString(), 
            dependentObject.getString("courseyear").toString(), 
            dependentObject.getString("employmentstatus").toString());
          
          depupdatedcount += Dependent.insert(dep);
        }
      }
      catch (JSONException e)
      {
        e.printStackTrace();
      }
    }
    return updatedcount;
  }
  
  public static JSONObject getVeterans(ArrayList<WhereCondition> whereconditions)
  {
    JSONObject jsonResponse = new JSONObject();
    try
    {
      QueryExecutor queryExecutor = Query.getSelectQuery("veterans", whereconditions);
      ArrayList<Row> records = queryExecutor.executeGet();
      JSONArray content = new JSONArray();
      JSONArray contentHeader = new JSONArray();
      
      ArrayList<String> fields = getFields();
      for (int i = 0; i < fields.size(); i++) {
        contentHeader.put(fields.get(i));
      }
      for (int i = 0; i < records.size(); i++)
      {
        JSONObject veteran = new JSONObject();
        for (int j = 0; j < fields.size(); j++) {
          veteran.put((String)fields.get(j), ((Row)records.get(i)).getColumnValue((String)fields.get(j)).toString());
        }
        content.put(veteran);
      }
      jsonResponse.put("contentheader", contentHeader);
      jsonResponse.put("content", content);
    }
    catch (JSONException e)
    {
      e.printStackTrace();
    }
    return jsonResponse;
  }
  
  public static JSONObject getVeteranDetail(String serviceno, String registrationno)
  {
    String query = "Select * from `veterans`  WHERE serviceno=? and registrationno=?";
    QueryExecutor queryExecutor = new QueryExecutor(query, new String[] { serviceno, registrationno });
    ArrayList<Row> records = queryExecutor.executeGet();
    JSONObject service = new JSONObject();
    JSONObject content = new JSONObject();
    try
    {
      ArrayList<String> fields = getFields();
      for (int i = 0; i < fields.size(); i++) {
        content.put((String)fields.get(i), ((Row)records.get(0)).getColumnValue((String)fields.get(i)).toString());
      }
      ArrayList<WhereCondition> whereConditions = new ArrayList();
      whereConditions.add(new WhereCondition("serviceno", "equals", ((Row)records.get(0)).getColumnValue("serviceno").toString()));
      whereConditions.add(new WhereCondition("registrationno", "equals", ((Row)records.get(0)).getColumnValue("registrationno").toString()));
      service.put("dependents", Dependent.getDependents(whereConditions));
      service.put("service", content);
    }
    catch (JSONException e)
    {
      e.printStackTrace();
    }
    return service;
  }
}
