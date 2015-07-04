-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 04, 2015 at 06:56 AM
-- Server version: 5.6.20
-- PHP Version: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `sainikwelfare`
--

-- --------------------------------------------------------

--
-- Table structure for table `boards`
--

CREATE TABLE IF NOT EXISTS `boards` (
  `boardname` varchar(50) NOT NULL,
  `state` varchar(50) DEFAULT NULL,
  `district` varchar(50) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `pincode` varchar(6) DEFAULT NULL,
  `contactno` varchar(15) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `director` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `boards`
--

INSERT INTO `boards` (`boardname`, `state`, `district`, `address`, `pincode`, `contactno`, `email`, `director`) VALUES
('ASDASD', 'sate1', 'sadsd', 'adsd', '231234', '234234', 'asd@ew.com', 'dfsdfsf'),
('HNHN', 'kerala', 'jjuu', 'Pondicherry', '566575', '45345', 'fgf@erer.com', 'gsdsfdf'),
('SADS', 'sate1', 'sadsd', NULL, NULL, NULL, NULL, 'sdasd'),
('SDASD', 'kerala', 'jjuu', 'dasd', '123456', '32432', 'fs@rrfsd.com', 'dsfsfsdf'),
('SDFD', 'kerala', 'jjuu', 'dsfdf', NULL, NULL, NULL, NULL),
('TTT', 'kerala', 'jjuu', 'dfds', '333555', '436454', NULL, 'fhfdggd');

-- --------------------------------------------------------

--
-- Table structure for table `corps`
--

CREATE TABLE IF NOT EXISTS `corps` (
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `corps`
--

INSERT INTO `corps` (`name`) VALUES
('adsdsd'),
('asdasd'),
('dsads'),
('sadsad'),
('sdfdsfg'),
('ss#');

-- --------------------------------------------------------

--
-- Table structure for table `deathdetails`
--

CREATE TABLE IF NOT EXISTS `deathdetails` (
  `deathdetails` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `dependents`
--

CREATE TABLE IF NOT EXISTS `dependents` (
  `name` varchar(100) NOT NULL,
  `serviceno` varchar(45) NOT NULL,
  `registrationno` varchar(45) NOT NULL,
  `relation` varchar(45) DEFAULT NULL,
  `dateofbirth` date DEFAULT NULL,
  `maritalstatus` varchar(45) DEFAULT NULL,
  `education` varchar(45) DEFAULT NULL,
  `course` varchar(45) DEFAULT NULL,
  `courseyear` varchar(45) DEFAULT NULL,
  `employmentstatus` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `dependents`
--

INSERT INTO `dependents` (`name`, `serviceno`, `registrationno`, `relation`, `dateofbirth`, `maritalstatus`, `education`, `course`, `courseyear`, `employmentstatus`) VALUES
('CACSCCSC', '9', '0', 'Mother', '1977-12-21', 'Married', 'School', 'cxczxc', '2018', 'Un-Employed'),
('DSDVSDV', '9', '1', 'Father', NULL, 'Married', 'PG', 'scacasdc', '2019', 'Employed'),
('FDG', '1', '5', 'Son', '2014-12-15', 'Un-Married', 'PG', 'dfgf', '2015', 'Un-Employed'),
('HFJHJHJH', '1', '5', 'Daughter', '2014-12-17', 'Married', 'Diploma', 'edfsdfd', '1985', 'Employed'),
('SFDSGHDFGFG', '1', '4', 'Father', '1996-12-11', 'Married', 'UG', 'fdfdaf', '1985', 'Employed'),
('WWWWWW', '9', '1', 'Mother', '1977-12-21', 'Married', 'School', 'cxczxc', '2018', 'Un-Employed');

-- --------------------------------------------------------

--
-- Table structure for table `dischargecharacter`
--

CREATE TABLE IF NOT EXISTS `dischargecharacter` (
  `character` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `dischargereason`
--

CREATE TABLE IF NOT EXISTS `dischargereason` (
  `reason` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `dischargereason`
--

INSERT INTO `dischargereason` (`reason`) VALUES
('Expired');

-- --------------------------------------------------------

--
-- Table structure for table `district`
--

CREATE TABLE IF NOT EXISTS `district` (
  `name` varchar(50) NOT NULL,
  `state` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `district`
--

INSERT INTO `district` (`name`, `state`) VALUES
('jjuu', 'kerala'),
('sadsd', 'sate1');

-- --------------------------------------------------------

--
-- Table structure for table `group`
--

CREATE TABLE IF NOT EXISTS `group` (
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `group`
--

INSERT INTO `group` (`name`) VALUES
('jhbsdjh'),
('sda');

-- --------------------------------------------------------

--
-- Table structure for table `medicalcategory`
--

CREATE TABLE IF NOT EXISTS `medicalcategory` (
  `medicalcategory` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `medicalcategory`
--

INSERT INTO `medicalcategory` (`medicalcategory`) VALUES
('fghj');

-- --------------------------------------------------------

--
-- Table structure for table `qualification`
--

CREATE TABLE IF NOT EXISTS `qualification` (
  `qualification` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `rank`
--

CREATE TABLE IF NOT EXISTS `rank` (
  `name` varchar(50) NOT NULL,
  `service` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `rank`
--

INSERT INTO `rank` (`name`, `service`) VALUES
('af', 'Air Force'),
('bddf', 'Army'),
('rank1', 'Navy');

-- --------------------------------------------------------

--
-- Table structure for table `states`
--

CREATE TABLE IF NOT EXISTS `states` (
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `states`
--

INSERT INTO `states` (`name`) VALUES
('kerala'),
('sate1');

-- --------------------------------------------------------

--
-- Table structure for table `trade`
--

CREATE TABLE IF NOT EXISTS `trade` (
  `name` varchar(50) NOT NULL,
  `group` varchar(45) DEFAULT NULL,
  `service` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `trade`
--

INSERT INTO `trade` (`name`, `group`, `service`) VALUES
('dsgsdfg', 'sda', 'Army'),
('sss', NULL, 'Air Force'),
('trade1', NULL, 'Navy');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `userid` varchar(50) NOT NULL,
  `password` varchar(150) NOT NULL,
  `role` varchar(45) DEFAULT NULL,
  `rolefor` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `contactno` varchar(50) DEFAULT NULL,
  `issuspended` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userid`, `password`, `role`, `rolefor`, `email`, `contactno`, `issuspended`) VALUES
('admin', 'e10adc3949ba59abbe56e057f20f883e', 'admin', NULL, 'kpneeraj@gmail.com', '234567876', 'False'),
('B', 'e10adc3949ba59abbe56e057f20f883e', 'boardadmin', 'TTT', 'boarduser', '2222', 'True');

-- --------------------------------------------------------

--
-- Table structure for table `veterans`
--

CREATE TABLE IF NOT EXISTS `veterans` (
  `email` varchar(45) DEFAULT NULL,
  `loginid` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `board` varchar(45) NOT NULL,
  `service` varchar(45) NOT NULL,
  `corps` varchar(45) DEFAULT NULL,
  `group` varchar(45) DEFAULT NULL,
  `trade` varchar(45) NOT NULL,
  `serviceno` varchar(45) NOT NULL,
  `registrationno` varchar(45) NOT NULL,
  `rank` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `wwii` varchar(45) DEFAULT NULL,
  `operations` varchar(45) DEFAULT NULL,
  `decoration` varchar(45) DEFAULT NULL,
  `unitlastserved` varchar(45) NOT NULL,
  `dischargereason` varchar(45) DEFAULT NULL,
  `deathdetails` varchar(45) DEFAULT NULL,
  `mcatdischarge` varchar(45) DEFAULT NULL,
  `characteratdischarge` varchar(45) DEFAULT NULL,
  `dischargebookno` varchar(45) DEFAULT NULL,
  `pponumber` varchar(45) DEFAULT NULL,
  `cda` varchar(45) DEFAULT NULL,
  `servicepension` varchar(45) DEFAULT NULL,
  `disabilitypension` varchar(45) DEFAULT NULL,
  `percentageofdisability` varchar(45) DEFAULT NULL,
  `pensionaccno` varchar(45) DEFAULT NULL,
  `bankname` varchar(45) DEFAULT NULL,
  `fathername` varchar(45) NOT NULL,
  `mothername` varchar(45) DEFAULT NULL,
  `identificationmark` varchar(45) NOT NULL,
  `religion` varchar(45) DEFAULT NULL,
  `caste` varchar(45) DEFAULT NULL,
  `birthplace` varchar(45) DEFAULT NULL,
  `birthstate` varchar(45) DEFAULT NULL,
  `birthdistrict` varchar(45) DEFAULT NULL,
  `qualificationincivil` varchar(45) DEFAULT NULL,
  `qualificationinservice` varchar(45) DEFAULT NULL,
  `reemploymentstatus` varchar(45) DEFAULT NULL,
  `employer` varchar(45) DEFAULT NULL,
  `monthlyincome` varchar(45) DEFAULT NULL,
  `department` varchar(45) DEFAULT NULL,
  `officecontactno` varchar(45) DEFAULT NULL,
  `adharcardno` varchar(45) DEFAULT NULL,
  `csdcardno` varchar(45) DEFAULT NULL,
  `echscardno` varchar(45) DEFAULT NULL,
  `afacardno` varchar(45) DEFAULT NULL,
  `permanentdoorno` varchar(45) DEFAULT NULL,
  `permanenthousename` varchar(45) DEFAULT NULL,
  `permanentstreet` varchar(45) DEFAULT NULL,
  `permanentcity` varchar(45) DEFAULT NULL,
  `permanentstate` varchar(45) DEFAULT NULL,
  `permanentdistrict` varchar(45) DEFAULT NULL,
  `permanentpolicestation` varchar(45) DEFAULT NULL,
  `permanentpincode` varchar(45) DEFAULT NULL,
  `communicationdoorno` varchar(45) DEFAULT NULL,
  `communicationhousename` varchar(45) DEFAULT NULL,
  `communicationstreet` varchar(45) NOT NULL,
  `communicationcity` varchar(45) NOT NULL,
  `communicationstate` varchar(45) NOT NULL,
  `communicationdistrict` varchar(45) DEFAULT NULL,
  `communicationpolicestation` varchar(45) DEFAULT NULL,
  `communicationpincode` varchar(45) DEFAULT NULL,
  `communicationtelephone` varchar(45) DEFAULT NULL,
  `communicationmobile` varchar(45) DEFAULT NULL,
  `communicationemail` varchar(45) DEFAULT NULL,
  `maritalstatus` varchar(45) NOT NULL,
  `spousename` varchar(45) DEFAULT NULL,
  `spouserelation` varchar(45) DEFAULT NULL,
  `spouseidentificationmark` varchar(45) DEFAULT NULL,
  `spousequalification` varchar(45) DEFAULT NULL,
  `isspouseemployed` varchar(45) DEFAULT NULL,
  `spouseprofession` varchar(45) DEFAULT NULL,
  `nextofkinname` varchar(45) DEFAULT NULL,
  `nextofkinrelation` varchar(45) DEFAULT NULL,
  `dateofbirth` date NOT NULL,
  `dateenrolled` date NOT NULL,
  `datedischarged` date NOT NULL,
  `dateofdeath` date DEFAULT NULL,
  `dateregistered` date DEFAULT NULL,
  `dateofmarriage` date DEFAULT NULL,
  `spousedateofbirth` date DEFAULT NULL,
  `spousedateofdeath` date DEFAULT NULL,
  `veteranphotopath` varchar(100) NOT NULL,
  `familyphotopath` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `veterans`
--

INSERT INTO `veterans` (`email`, `loginid`, `password`, `board`, `service`, `corps`, `group`, `trade`, `serviceno`, `registrationno`, `rank`, `name`, `gender`, `wwii`, `operations`, `decoration`, `unitlastserved`, `dischargereason`, `deathdetails`, `mcatdischarge`, `characteratdischarge`, `dischargebookno`, `pponumber`, `cda`, `servicepension`, `disabilitypension`, `percentageofdisability`, `pensionaccno`, `bankname`, `fathername`, `mothername`, `identificationmark`, `religion`, `caste`, `birthplace`, `birthstate`, `birthdistrict`, `qualificationincivil`, `qualificationinservice`, `reemploymentstatus`, `employer`, `monthlyincome`, `department`, `officecontactno`, `adharcardno`, `csdcardno`, `echscardno`, `afacardno`, `permanentdoorno`, `permanenthousename`, `permanentstreet`, `permanentcity`, `permanentstate`, `permanentdistrict`, `permanentpolicestation`, `permanentpincode`, `communicationdoorno`, `communicationhousename`, `communicationstreet`, `communicationcity`, `communicationstate`, `communicationdistrict`, `communicationpolicestation`, `communicationpincode`, `communicationtelephone`, `communicationmobile`, `communicationemail`, `maritalstatus`, `spousename`, `spouserelation`, `spouseidentificationmark`, `spousequalification`, `isspouseemployed`, `spouseprofession`, `nextofkinname`, `nextofkinrelation`, `dateofbirth`, `dateenrolled`, `datedischarged`, `dateofdeath`, `dateregistered`, `dateofmarriage`, `spousedateofbirth`, `spousedateofdeath`, `veteranphotopath`, `familyphotopath`) VALUES
(NULL, NULL, NULL, 'HNHN', 'Army', NULL, NULL, 'dsgsdfg', '1', '1', 'bddf', 'FFG', 'Male', 'No', NULL, NULL, 'sad', NULL, 'Not Applicable', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'SCZSC', NULL, 'czxc', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Employed', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'zxcx', 'cxzc', 'kerala', NULL, NULL, NULL, NULL, NULL, NULL, 'Married', NULL, 'Wife', NULL, NULL, 'Un-Employed', NULL, NULL, 'Wife', '2014-12-02', '2014-12-10', '2014-12-18', NULL, NULL, NULL, NULL, NULL, '', ''),
(NULL, NULL, NULL, 'SADS', 'Air Force', NULL, NULL, 'sss', '1', '2', 'af', 'OOLLP', 'Male', 'No', NULL, NULL, 'kjjik', NULL, 'Not Applicable', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'OLKKK', 'YFYUJGJYUI', 'juygjgji', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Retired', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'njnhgg', 'ugyfgiuf', 'sate1', NULL, NULL, NULL, NULL, NULL, NULL, 'Married', NULL, 'Wife', NULL, NULL, 'Un-Employed', NULL, NULL, 'Wife', '2014-12-11', '2014-12-23', '2014-12-16', NULL, NULL, NULL, NULL, NULL, '1_2.jpg', '1_2_family.jpg'),
(NULL, NULL, NULL, 'HNHN', 'Army', NULL, NULL, 'dsgsdfg', '1', '3', 'bddf', 'FFG', 'Male', 'No', NULL, NULL, 'sad', NULL, 'Not Applicable', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'SCZSC', NULL, 'czxc', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Un-Employed', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'zxcx', 'cxzc', 'kerala', NULL, NULL, NULL, NULL, NULL, NULL, 'Married', NULL, 'Wife', NULL, NULL, 'Un-Employed', NULL, NULL, 'Wife', '2014-12-02', '2014-12-10', '2014-12-18', NULL, NULL, NULL, NULL, NULL, '', ''),
(NULL, NULL, NULL, 'HNHN', 'Army', NULL, NULL, 'dsgsdfg', '1', '4', 'bddf', 'FFG', 'Male', 'No', NULL, NULL, 'sad', NULL, 'Not Applicable', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'SCZSC', NULL, 'czxc', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Employed', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'zxcx', 'cxzc', 'kerala', NULL, NULL, NULL, NULL, NULL, NULL, 'Married', NULL, 'Wife', NULL, NULL, 'Un-Employed', NULL, NULL, 'Wife', '2014-12-02', '2014-12-10', '2014-12-18', NULL, NULL, NULL, NULL, NULL, '', ''),
(NULL, NULL, NULL, 'HNHN', 'Army', NULL, NULL, 'dsgsdfg', '1', '5', 'bddf', 'FFG', 'Male', 'No', NULL, NULL, 'sad', NULL, 'Not Applicable', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'SCZSC', NULL, 'czxc', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Employed', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'zxcx', 'cxzc', 'kerala', NULL, NULL, NULL, NULL, NULL, NULL, 'Married', NULL, 'Wife', NULL, NULL, 'Un-Employed', NULL, NULL, 'Wife', '2014-12-02', '2014-12-10', '2014-12-18', NULL, NULL, NULL, NULL, NULL, '', ''),
(NULL, NULL, NULL, 'SADS', 'Navy', NULL, 'jhbsdjh', 'trade1', '1', '66', 'rank1', 'OOLLP', 'Male', 'No', NULL, NULL, 'kjjik', NULL, 'Not Applicable', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'OLKKK', 'YFYUJGJYUI', 'juygjgji', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Employed', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'njnhgg', 'ugyfgiuf', 'sate1', NULL, NULL, NULL, NULL, NULL, 'njnhgg', 'ugyfgiuf', 'sate1', NULL, NULL, NULL, NULL, NULL, NULL, 'Married', NULL, 'Wife', NULL, NULL, 'Un-Employed', NULL, NULL, 'Wife', '2014-12-11', '2014-12-23', '2014-12-16', NULL, NULL, NULL, NULL, NULL, '1_66.jpg', '1_66.jpg'),
(NULL, NULL, NULL, 'HNHN', 'Air Force', NULL, NULL, 'sss', '111', '222', 'af', 'TIM BERNERS LEE', 'Male', 'No', NULL, NULL, 'ssdd', NULL, 'Not Applicable', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'DFDSF', NULL, 'dsfsf', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Employed', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'asd', 'sdasd', 'kerala', NULL, NULL, NULL, NULL, NULL, 'asd', 'sdasd', 'kerala', NULL, NULL, NULL, NULL, NULL, NULL, 'Married', NULL, 'Wife', NULL, NULL, 'Un-Employed', NULL, NULL, 'Wife', '2014-12-09', '2014-12-16', '2014-12-03', NULL, NULL, NULL, NULL, NULL, '111_222.jpg', '111_222.jpg'),
(NULL, NULL, NULL, 'HNHN', 'Army', NULL, NULL, 'dsgsdfg', '111', 'dsf/56/thftu', 'bddf', 'JUJJJJ', 'Male', 'No', NULL, NULL, 'xscz', NULL, 'Not Applicable', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'ZXCXC', NULL, 'zxc', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Employed', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'c ', ' zx ', 'kerala', NULL, NULL, NULL, NULL, NULL, NULL, 'Divorced', NULL, 'Wife', NULL, NULL, 'Un-Employed', NULL, NULL, 'Wife', '2015-01-21', '2015-01-13', '2015-01-14', NULL, NULL, NULL, NULL, NULL, '111_dsf_56_thftu.jpg', '111_dsf_56_thftu_family.jpg'),
(NULL, NULL, NULL, 'ASDASD', 'Navy', NULL, NULL, 'trade1', '1222', '4565', 'rank1', 'VVFFF', 'Male', 'No', NULL, NULL, 'scs', NULL, 'Not Applicable', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'XCZC', NULL, 'zxcxzc', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Employed', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'xzczc', 'xzc', 'sate1', NULL, NULL, NULL, NULL, NULL, NULL, 'Divorced', NULL, 'Wife', NULL, NULL, 'Un-Employed', NULL, NULL, 'Wife', '2014-12-17', '2014-12-24', '2014-12-16', NULL, NULL, NULL, NULL, NULL, '', ''),
(NULL, NULL, NULL, 'ASDASD', 'Navy', NULL, NULL, 'trade1', '1222', '4569', 'rank1', 'VVFFF', 'Male', 'No', NULL, NULL, 'scs', NULL, 'Not Applicable', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'XCZC', NULL, 'zxcxzc', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Employed', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'xzczc', 'xzc', 'sate1', NULL, NULL, NULL, NULL, NULL, NULL, 'Divorced', NULL, 'Wife', NULL, NULL, 'Un-Employed', NULL, NULL, 'Wife', '2014-12-17', '2014-12-24', '2014-12-16', NULL, NULL, NULL, NULL, NULL, '1222_4569.jpg', '1222_4569_family.jpg'),
(NULL, NULL, NULL, 'ASDASD', 'Navy', NULL, NULL, 'trade1', '123', '4565', 'rank1', 'VVFFF', 'Male', 'No', NULL, NULL, 'scs', NULL, 'Not Applicable', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'XCZC', NULL, 'zxcxzc', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Employed', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'xzczc', 'xzc', 'sate1', NULL, NULL, NULL, NULL, NULL, NULL, 'Divorced', NULL, 'Wife', NULL, NULL, 'Un-Employed', NULL, NULL, 'Wife', '2014-12-17', '2014-12-24', '2014-12-16', NULL, NULL, NULL, NULL, NULL, '123_4565.jpg', '123_4565_family.jpg'),
(NULL, NULL, NULL, 'HNHN', 'Army', NULL, NULL, 'dsgsdfg', '123', 'fgfg/99/00/frt', 'bddf', 'SDFG', 'Male', 'No', NULL, NULL, 'xczxc', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'XZVZX', NULL, 'zxcxc', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Employed', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'zxc ', 'xzcxc', 'sate1', NULL, NULL, NULL, NULL, NULL, 'zxc ', 'xzcxc', 'sate1', NULL, NULL, NULL, NULL, NULL, NULL, 'Single', NULL, 'Wife', NULL, NULL, 'Un-Employed', NULL, NULL, NULL, '2015-01-21', '2015-01-06', '2015-01-16', NULL, NULL, NULL, NULL, NULL, '123_fgfg_99_00_frt.jpg', '123_fgfg_99_00_frt_family.jpg'),
(NULL, NULL, NULL, 'ASDASD', 'Navy', NULL, NULL, 'trade1', '1231', '4565', 'rank1', 'VVFFF', 'Male', 'No', NULL, NULL, 'scs', NULL, 'Not Applicable', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'XCZC', NULL, 'zxcxzc', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Employed', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'xzczc', 'xzc', 'sate1', NULL, NULL, NULL, NULL, NULL, NULL, 'Divorced', NULL, 'Wife', NULL, NULL, 'Un-Employed', NULL, NULL, 'Wife', '2014-12-17', '2014-12-24', '2014-12-16', NULL, NULL, NULL, NULL, NULL, '', ''),
(NULL, NULL, NULL, 'ASDASD', 'Navy', NULL, NULL, 'trade1', '1234', '4565', 'rank1', 'VVFFF', 'Male', 'No', NULL, 'adssdsd', 'scs', NULL, 'Not Applicable', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'XCZC', NULL, 'zxcxzc', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Employed', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'xzczc', 'xzc', 'sate1', NULL, NULL, NULL, NULL, NULL, NULL, 'Divorced', NULL, 'Wife', NULL, NULL, 'Un-Employed', NULL, NULL, 'Wife', '2014-12-17', '2014-12-24', '2014-12-16', NULL, NULL, NULL, NULL, NULL, '', ''),
(NULL, NULL, NULL, 'HNHN', 'Army', NULL, NULL, 'dsgsdfg', '1556', 'pdy/9426/army/pass', 'bddf', 'NEERAJ', 'Male', 'No', NULL, NULL, 'dvfsdfv', NULL, 'Not Applicable', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'VBSFV', NULL, 'dfsff', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Employed', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'xczc', 'zczx', 'kerala', NULL, NULL, NULL, NULL, NULL, NULL, 'Married', NULL, 'Wife', NULL, NULL, 'Un-Employed', NULL, NULL, 'Wife', '2015-01-14', '2015-01-13', '2015-01-28', NULL, NULL, NULL, NULL, NULL, '1556_pdy_9426_army_pass.jpg', '1556_pdy_9426_army_pass_family.jpg'),
(NULL, NULL, NULL, 'TTT', 'Navy', NULL, NULL, 'trade1', '2', '567', 'rank1', 'CASCS', 'Male', 'No', NULL, NULL, 'zXZ', NULL, 'Not Applicable', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'ZXZX', NULL, 'sxsax', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Employed', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'zXZX', 'zXZX', 'kerala', NULL, NULL, NULL, NULL, NULL, NULL, 'Single', NULL, 'Wife', NULL, NULL, 'Un-Employed', NULL, NULL, 'Wife', '2014-12-09', '2014-12-16', '2014-12-16', NULL, NULL, NULL, NULL, NULL, '2_567.jpg', '2_567_family.jpg'),
(NULL, NULL, NULL, 'SADS', 'Army', NULL, 'jhbsdjh', 'dsgsdfg', '2', '66', 'bddf', 'JJNNNUU', 'Male', 'No', NULL, NULL, 'kjjik', NULL, 'Not Applicable', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'OLKKK', 'YFYUJGJYUI', 'juygjgji', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Employed', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'njnhgg', 'ugyfgiuf', 'sate1', NULL, NULL, NULL, NULL, NULL, 'njnhgg', 'ugyfgiuf', 'sate1', NULL, NULL, NULL, NULL, NULL, NULL, 'Married', NULL, 'Wife', NULL, NULL, 'Un-Employed', NULL, NULL, 'Wife', '2014-12-11', '2014-12-23', '2014-12-16', NULL, NULL, NULL, NULL, NULL, '2_66.jpg', '2_66.jpg'),
(NULL, NULL, NULL, 'HNHN', 'Army', NULL, NULL, 'dsgsdfg', '3', '4', 'bddf', 'DSFDF', 'Male', 'No', NULL, NULL, 'sdfcd', NULL, 'Not Applicable', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'DFSDF', NULL, 'sdfd', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Employed', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'sdf', 'dsf', 'kerala', NULL, NULL, NULL, NULL, NULL, 'sdf', 'dsf', 'kerala', NULL, NULL, NULL, NULL, NULL, NULL, 'Married', NULL, 'Wife', NULL, NULL, 'Un-Employed', NULL, NULL, 'Wife', '2314-12-16', '2014-12-09', '2014-12-03', NULL, NULL, NULL, NULL, NULL, '', ''),
(NULL, NULL, NULL, 'SADS', 'Army', NULL, 'jhbsdjh', 'dsgsdfg', '3', '66', 'bddf', 'JJNNNUU', 'Male', 'No', NULL, NULL, 'kjjik', NULL, 'Not Applicable', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'OLKKK', 'YFYUJGJYUI', 'juygjgji', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Employed', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'njnhgg', 'ugyfgiuf', 'sate1', NULL, NULL, NULL, NULL, NULL, 'njnhgg', 'ugyfgiuf', 'sate1', NULL, NULL, NULL, NULL, NULL, NULL, 'Married', NULL, 'Wife', NULL, NULL, 'Un-Employed', NULL, NULL, 'Wife', '2014-12-11', '2014-12-23', '2014-12-16', NULL, NULL, NULL, NULL, NULL, '3_66.jpg', '3_66.jpg'),
(NULL, NULL, NULL, 'SADS', 'Army', NULL, 'jhbsdjh', 'dsgsdfg', '31', '66', 'bddf', 'JJNNNUU', 'Male', 'No', NULL, NULL, 'kjjik', NULL, 'Not Applicable', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'OLKKK', 'YFYUJGJYUI', 'juygjgji', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Employed', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'njnhgg', 'ugyfgiuf', 'sate1', NULL, NULL, NULL, NULL, NULL, 'njnhgg', 'ugyfgiuf', 'sate1', NULL, NULL, NULL, NULL, NULL, NULL, 'Married', NULL, 'Wife', NULL, NULL, 'Un-Employed', NULL, NULL, 'Wife', '2014-12-11', '2014-12-23', '2014-12-16', NULL, NULL, NULL, NULL, NULL, '31_66.jpg', '31_66_family.jpg'),
(NULL, NULL, NULL, 'SADS', 'Army', NULL, 'jhbsdjh', 'dsgsdfg', '31', '67', 'bddf', 'JJNNNUU', 'Male', 'No', NULL, NULL, 'kjjik', NULL, 'Not Applicable', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'OLKKK', 'YFYUJGJYUI', 'juygjgji', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Employed', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'njnhgg', 'ugyfgiuf', 'sate1', NULL, NULL, NULL, NULL, NULL, 'njnhgg', 'ugyfgiuf', 'sate1', NULL, NULL, NULL, NULL, NULL, NULL, 'Married', NULL, 'Wife', NULL, NULL, 'Un-Employed', NULL, NULL, 'Wife', '2014-12-11', '2014-12-23', '2014-12-16', NULL, NULL, NULL, NULL, NULL, '31_67.jpg', '31_67_family.jpg'),
(NULL, NULL, NULL, 'SADS', 'Army', NULL, 'jhbsdjh', 'dsgsdfg', '31', '68', 'bddf', 'DDDDD', 'Male', 'No', NULL, NULL, 'kjjik', NULL, 'Not Applicable', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'OLKKK', 'YFYUJGJYUI', 'juygjgji', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Employed', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'njnhgg', 'ugyfgiuf', 'sate1', NULL, NULL, NULL, NULL, NULL, 'njnhgg', 'ugyfgiuf', 'sate1', NULL, NULL, NULL, NULL, NULL, NULL, 'Married', NULL, 'Wife', NULL, NULL, 'Un-Employed', NULL, NULL, 'Wife', '2014-12-11', '2014-12-23', '2014-12-16', NULL, NULL, NULL, NULL, NULL, '31_68.jpg', '31_68_family.jpg'),
(NULL, NULL, NULL, 'ASDASD', 'Army', NULL, NULL, 'dsgsdfg', '44', '55', 'bddf', 'SADSD', 'Male', 'No', NULL, NULL, 'sadc', NULL, 'Not Applicable', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'SCAS', NULL, 'scac', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Employed', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'csa', 'cc', 'kerala', NULL, NULL, NULL, NULL, NULL, 'csa', 'cc', 'kerala', NULL, NULL, NULL, NULL, NULL, NULL, 'Married', NULL, 'Wife', NULL, NULL, 'Un-Employed', NULL, NULL, 'Wife', '2014-12-02', '2014-12-02', '2014-12-17', NULL, NULL, NULL, NULL, NULL, '', ''),
(NULL, NULL, NULL, 'ASDASD', 'Army', NULL, NULL, 'dsgsdfg', '44', '551', 'bddf', 'SADSD', 'Male', 'No', NULL, NULL, 'sadc', NULL, 'Not Applicable', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'SCAS', NULL, 'scac', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Employed', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'csa', 'cc', 'kerala', NULL, NULL, NULL, NULL, NULL, 'csa', 'cc', 'kerala', NULL, NULL, NULL, NULL, NULL, NULL, 'Married', NULL, 'Wife', NULL, NULL, 'Un-Employed', NULL, NULL, 'Wife', '2014-12-02', '2014-12-02', '2014-12-17', NULL, NULL, NULL, NULL, NULL, 'Army_551.jpg', 'Army_551.jpg'),
(NULL, NULL, NULL, 'ASDASD', 'Army', NULL, NULL, 'dsgsdfg', '44', '566', 'bddf', 'SADSD', 'Male', 'No', NULL, NULL, 'sadc', NULL, 'Not Applicable', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'SCAS', NULL, 'scac', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Employed', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'csa', 'cc', 'kerala', NULL, NULL, NULL, NULL, NULL, 'csa', 'cc', 'kerala', NULL, NULL, NULL, NULL, NULL, NULL, 'Married', NULL, 'Wife', NULL, NULL, 'Un-Employed', NULL, NULL, 'Wife', '2014-12-02', '2014-12-02', '2014-12-17', NULL, NULL, NULL, NULL, NULL, '', ''),
(NULL, NULL, NULL, 'SADS', 'Army', 'dsads', NULL, 'dsgsdfg', '445577', '342', 'bddf', 'QWEHH', 'Male', 'No', NULL, NULL, 'cxv', NULL, 'Not Applicable', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'FHDFJHGJ', NULL, 'szdfxfgc', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Employed', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'zDZ', 'DZD', 'sate1', NULL, NULL, NULL, NULL, NULL, 'zDZ', 'DZD', 'sate1', NULL, NULL, NULL, NULL, NULL, NULL, 'Single', NULL, 'Wife', NULL, NULL, 'Un-Employed', NULL, NULL, 'Wife', '2014-12-09', '2014-12-09', '2014-12-11', NULL, NULL, NULL, NULL, NULL, '', ''),
(NULL, NULL, NULL, 'SADS', 'Navy', NULL, NULL, 'trade1', '45', '6779', 'rank1', 'PLOLLLL', 'Male', 'No', NULL, NULL, 'casc', NULL, 'Not Applicable', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'CASSC', NULL, 'scasc', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Employed', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'xczc', 'zxc', 'kerala', NULL, NULL, NULL, NULL, NULL, NULL, 'Married', NULL, 'Wife', NULL, NULL, 'Un-Employed', NULL, NULL, 'Wife', '2015-01-19', '2015-01-21', '2015-01-21', NULL, NULL, NULL, NULL, NULL, '45_6779.jpg', '45_6779_family.jpg'),
(NULL, NULL, NULL, 'TTT', 'Navy', NULL, NULL, 'trade1', '45678', '45678', 'rank1', 'QQQ', 'Male', 'No', NULL, NULL, 'xczc', NULL, 'Not Applicable', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'ZXCXC', NULL, 'zczx', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Employed', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'xc', 'SZXZ', 'kerala', NULL, NULL, NULL, NULL, NULL, 'xc', 'SZXZ', 'kerala', NULL, NULL, NULL, NULL, NULL, NULL, 'Single', NULL, 'Wife', NULL, NULL, 'Un-Employed', NULL, NULL, 'Wife', '2014-12-17', '2014-12-09', '2014-12-11', NULL, NULL, NULL, NULL, NULL, '45678_45678.jpg', '45678_45678_family.jpg'),
(NULL, NULL, NULL, 'ASDASD', 'Army', 'adsdsd', NULL, 'dsgsdfg', '5', '67', 'bddf', 'DSFDSFDSF', 'Male', 'No', NULL, NULL, 'xcx', NULL, 'Not Applicable', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'ZXC', NULL, 'xcz', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Employed', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'sd', 'sad', 'kerala', NULL, NULL, NULL, NULL, NULL, 'sd', 'sad', 'kerala', NULL, NULL, NULL, NULL, NULL, NULL, 'Married', NULL, 'Wife', NULL, NULL, 'Un-Employed', NULL, NULL, 'Wife', '2014-12-08', '2014-12-09', '2014-12-02', NULL, NULL, NULL, NULL, NULL, '5_67.jpg', '5_67_family.jpg'),
(NULL, NULL, NULL, 'HNHN', 'Air Force', NULL, NULL, 'sss', '777', 'gg/99/sdas/2010', 'af', 'BOSS', 'Male', 'No', NULL, NULL, 'xczc', NULL, 'Not Applicable', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'XZVZX', NULL, 'zxxczxc', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Employed', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'xzcz ', 'zvddcf', 'sate1', NULL, NULL, NULL, NULL, NULL, NULL, 'Single', NULL, 'Wife', NULL, NULL, 'Un-Employed', NULL, NULL, 'Wife', '1999-01-14', '2015-01-20', '2015-01-14', NULL, NULL, '2015-01-14', NULL, NULL, '777_gg_99_sdas_2010.jpg', '777_gg_99_sdas_2010_family.jpg'),
(NULL, NULL, NULL, 'HNHN', 'Army', NULL, NULL, 'dsgsdfg', '778', 'CGF/55/FDFS/D', 'bddf', 'NITHING', 'Male', 'No', NULL, NULL, 'SSAD', NULL, 'Not Applicable', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'DCVCXV ', NULL, 'cvcxvc', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Employed', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'zxcxzc', 'zxczxc', 'kerala', NULL, NULL, NULL, NULL, NULL, NULL, 'Married', NULL, 'Wife', NULL, NULL, 'Un-Employed', NULL, NULL, 'Wife', '2015-01-14', '2015-01-14', '2015-01-14', NULL, NULL, NULL, NULL, NULL, '778_CGF_55_FDFS_D.jpg', '778_CGF_55_FDFS_D_family.jpg'),
(NULL, NULL, NULL, 'TTT', 'Navy', NULL, NULL, 'trade1', '9', '0', 'rank1', 'NAVY CADET', 'Male', 'No', NULL, 'saddasd', 'scscd', NULL, 'Not Applicable', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'CAS', NULL, 'mole', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Employed', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'cc', 'xzczx', 'kerala', NULL, NULL, NULL, NULL, NULL, NULL, 'Single', NULL, 'Wife', NULL, NULL, 'Un-Employed', NULL, NULL, 'Wife', '2014-12-31', '2014-12-09', '2014-12-09', NULL, NULL, NULL, NULL, NULL, '9_0.jpg', '9_0_family.jpg'),
(NULL, NULL, NULL, 'TTT', 'Navy', NULL, NULL, 'trade1', '9', '1', 'rank1', 'NAVY CADET', 'Male', 'No', NULL, NULL, 'scscd', NULL, 'Not Applicable', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'CAS', NULL, 'mole', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Employed', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'cc', 'xzczx', 'kerala', NULL, NULL, NULL, NULL, NULL, NULL, 'Single', NULL, 'Wife', NULL, NULL, 'Un-Employed', NULL, NULL, 'Wife', '2014-12-31', '2014-12-09', '2014-12-09', NULL, NULL, NULL, NULL, NULL, '9_1.jpg', '9_1_family.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `boards`
--
ALTER TABLE `boards`
 ADD PRIMARY KEY (`boardname`);

--
-- Indexes for table `corps`
--
ALTER TABLE `corps`
 ADD PRIMARY KEY (`name`);

--
-- Indexes for table `deathdetails`
--
ALTER TABLE `deathdetails`
 ADD PRIMARY KEY (`deathdetails`);

--
-- Indexes for table `dependents`
--
ALTER TABLE `dependents`
 ADD PRIMARY KEY (`name`,`serviceno`,`registrationno`), ADD KEY `fk_dep_vet` (`serviceno`,`registrationno`);

--
-- Indexes for table `dischargecharacter`
--
ALTER TABLE `dischargecharacter`
 ADD PRIMARY KEY (`character`);

--
-- Indexes for table `dischargereason`
--
ALTER TABLE `dischargereason`
 ADD PRIMARY KEY (`reason`);

--
-- Indexes for table `district`
--
ALTER TABLE `district`
 ADD PRIMARY KEY (`name`), ADD KEY `statedistrict` (`state`);

--
-- Indexes for table `group`
--
ALTER TABLE `group`
 ADD PRIMARY KEY (`name`);

--
-- Indexes for table `medicalcategory`
--
ALTER TABLE `medicalcategory`
 ADD PRIMARY KEY (`medicalcategory`);

--
-- Indexes for table `qualification`
--
ALTER TABLE `qualification`
 ADD PRIMARY KEY (`qualification`);

--
-- Indexes for table `rank`
--
ALTER TABLE `rank`
 ADD PRIMARY KEY (`name`);

--
-- Indexes for table `states`
--
ALTER TABLE `states`
 ADD PRIMARY KEY (`name`);

--
-- Indexes for table `trade`
--
ALTER TABLE `trade`
 ADD PRIMARY KEY (`name`), ADD KEY `tradegroup` (`group`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
 ADD PRIMARY KEY (`userid`);

--
-- Indexes for table `veterans`
--
ALTER TABLE `veterans`
 ADD PRIMARY KEY (`serviceno`,`registrationno`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `dependents`
--
ALTER TABLE `dependents`
ADD CONSTRAINT `fk_dep_vet` FOREIGN KEY (`serviceno`, `registrationno`) REFERENCES `veterans` (`serviceno`, `registrationno`);

--
-- Constraints for table `district`
--
ALTER TABLE `district`
ADD CONSTRAINT `statedistrict` FOREIGN KEY (`state`) REFERENCES `states` (`name`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `trade`
--
ALTER TABLE `trade`
ADD CONSTRAINT `tradegroup` FOREIGN KEY (`group`) REFERENCES `group` (`name`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
