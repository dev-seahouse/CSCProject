﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="task4ajax.aspx.cs" Inherits="Task3.task4ajax" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>CTC Travel - Keep Travelling -  Free & Easy Search</title>
    <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />

    <meta name="robots" content="INDEX, FOLLOW">
    <meta name="google-site-verification" content="yi3Q6-lOew5Zuk6O1HwNU7efH8lJuZ6PLQIw1ERq8Hc" />
    <link href='css_new/style.css' rel='stylesheet' type='text/css' />
    <link href='css_new/tour.css' rel='stylesheet' type='text/css' />
    <!--	temporary -->
    <link href='css_new/menu_style.css' rel='stylesheet' type='text/css' />
    <link href='css_new/print_style.css' rel='stylesheet' type='text/css' media="print" />
    <link type="text/css" href="css_new/custom-theme/jquery-ui-1.8.custom.css" rel="stylesheet" />
    <link type="text/css" href="css_new/selectbox.css" rel="stylesheet" />
    <link type="text/css" href="css_new/radiobox.css" rel="stylesheet" />
    <link href='css_new/colorbox.css' rel='stylesheet' type='text/css' />
    <!--link rel="stylesheet" href="css/slider.css" type="text/css" media="screen" /-->
    <link rel="stylesheet" href="css_new/anythingslider.css" type="text/css" media="screen" />
    <link href='css_new/tourlist.css' rel='stylesheet' type='text/css' />
    <link href='css_new/ezmark.css' rel='stylesheet' type='text/css' />
    <link href='css_new/bx_styles.css' rel='stylesheet' type='text/css' />
    <link href="css_new/jquery.lightbox.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="css_new/ckeditor.css" media="screen" rel="stylesheet" type="text/css" />
    <script type='text/javascript' src='js/jquery-1.4.1.min.js'></script>
    <script type='text/javascript' src='js/jquery.qtip-1.0.0-rc3.min.js'></script>
    <script type="text/javascript" src="js/jquery-ui-1.8.custom.min.js"></script>
    <script type="text/javascript" src="js/jquery.selectbox-0.5.js"></script>
    <script type="text/javascript" src="js/jquery.custom_radio_checkbox.js"></script>
    <script type="text/javascript" src="js/jquery.colorbox-min.js"></script>
    <script type='text/javascript' src='js/forecepts.functions.js'></script>
    <script type='text/javascript' src='js/jquery-ilc-tabs.js'></script>
    <!--	corner	-->
    <script type='text/javascript' src='js/jquery.corner.js'></script>
    <!--script type='text/javascript' src='js/curvycorners.src.js'></script-->
    <!--	/corner	-->
    <script type="text/javascript" src="js/sliderjs/jquery.easing.1.2.js"></script>
    <!--script src="js/jquery.anythingslider.min.js" type="text/javascript" charset="utf-8"></script-->
    <script src="js/sliderjs/jquery.anythingslider.js" type="text/javascript"></script>
    <script type="text/javascript" src="js/jquery.ezmark.min.js"></script>
    <!--	replace radio with image -->
    <script type="text/javascript" src="js/jquery.bxSlider.min.js"></script>
    <!--	images slider -->
    <script type="text/javascript" src="js/jquery.lightbox.js"></script>
    <script type="text/javascript" src="js/jquery.scrollTo-1.4.2-min.js"></script>

</head>
<body>
    <script type="text/javascript">
        $(document).ready(function () {
            $('.mailing_link').corner("bottom 5px cc:#b9db82");
            $('.memberLogin_link').corner("bottom 5px cc:#b9db82");
            $('.memberArea_link').corner("bottom 5px cc:#b9db82");

        });
</script>
    <form id="form1">


        <!--  PopCalendar(tag name and id must match) Tags should sit at the page bottom -->
        <iframe width="174" height="189"
            name="gToday:normal:agenda.js" id="gToday:normal:agenda.js"
            src="js/OLD_JS/PopCalendarEN/ipopthai.htm"
            scrolling="no" frameborder="0"
            style="z-index: 999; left: -500px; visibility: visible; position: absolute; top: 0px"></iframe>
        <div id='dlgBox' style='display: none'></div>

        <div class='globalContainer' style="background: url(img/pic-header.jpg) no-repeat;">

            <div id='logoWrapper'>
                <a href='index-2.html'>
                    <img src='img/ctc-logo2.png'></a>
            </div>

            <div id='loginMenuWrapper' style=''>
                &nbsp;<a href='https://www.facebook.com/CTCTravel.sg' target='_blank'><img src='img/icons/FaceBook-icon.png' alt='Like CTC Travel on Facebook' /></a>&nbsp;
		
                <a href='https://twitter.com/CTCTravelsg' target='_blank'>
                    <img src='img/icons/Twitter-icon.png' alt='Follow CTC Travel at Twitter' /></a>
                <div style="float: left; margin: 2px -45px 0 0; width: 52px; overflow: hidden;">
                    <script src="../connect.facebook.net/en_US/all.js#xfbml=1"></script>
                    <fb:like href="https://www.facebook.com/CTCTravel.sg" layout="button_count" show_faces="true" width="100" height='20px' font="arial"></fb:like>
                </div>
                <!--<a href='javascript:void(0)' class='mailing_link'>JOIN OUR MAILING LIST</a>-->
                <a href='signup_email.html' class='mailing_link'>JOIN OUR MAILING LIST</a>
                <div class='join_mail_list_wrapper' style='display: none'>
                    <div class='closeBtn'><a class='underline closebtnA' href='javascript:void(0)'>close</a></div>
                    <form name='frmMainNewsletter' id='frmMainNewsletter' method='post' action='http://www.ctc.com.sg/form-process.php'>
                        <input type='hidden' name='update_type' value="NEWSLETTER_P">
                        <input type='hidden' name='subscribe_type' value='IN' />
                        <input type='hidden' name='check_time' value='1387677314' />
                        <input type='hidden' name='check_token' value='23328966e3f362042da1022944563766' />

                        <div class='floatLeft' style='width: 100%; height: 300px;'>
                        </div>
                        <!-- Subscribe to us --------------------------->
                        <div class='clearBoth'></div>
                    </form>
                </div>
                <a href='javascript:void(0)' class='memberLogin_link'>MEMBER'S LOGIN</a>
                <div class='member_login_wrapper' style='display: none'>

                    <div class='closeBtn'><a class='underline closebtnA' href='javascript:void(0)'>close</a></div>
                    <form name='frmlogin' id='frmlogin' method='POST' action='http://www.ctc.com.sg/member-login-process.php'>
                        <div class='floatLeft' style='width: 125px;'>
                            Check out the
                            <br />
                            <a href='tc_privilege.html' class='underline'>Member Privileges</a>
                        </div>
                        <div class='floatleft'>
                            <img src='img/travelclub.png'>
                        </div>

                        <div class='clearBoth'></div>
                        <div class='inputBoxWrapper'>
                            Login ID:<br />
                            <input type='text' name='loginid' class='textBox alignCenter required' style='width: 100%' value='' /><br />
                            Password:<br />
                            <input type='password' name='password' class='textBox alignCenter required password_r' style='width: 100%' /><br />
                        </div>
                        <div class='floatRight' style='margin-top: 6px;'><a href='javascript:void(0)' class='basicbtn blueGraBg_old roundedBtn' id='loginBtn'>Login</a></div>
                        <div class='floatRight' style='margin: 6px 3px 0 0;'><a href='signup_main.html' class='basicbtn greenGraBg roundedBtn'>Sign-Up</a></div>
                        <div class='clearBoth'></div>
                        <div style='font-size: 11px; margin-top: 5px'>
                            <a href='javascript:void(0)' class='floatRight underline' id='lostPwdBtn'>Lost Password</a>
                            <br />
                            <a href='javascript:void(0)' class='floatRight underline' id='retrieveLoginBtn' style='margin-top: 3px;'>Retrieve Login ID</a>
                            <!--<a href='signup_main.php' class='underline'>Sign-Up</a> !-->
                        </div>
                    </form>

                    <div class='forgotPwd extraWrapper' style='display: none'>
                        Please fill you your email. Our system will reset and email you the new password.<br />
                        <div class='inputBoxWrapper'>
                            ID/ Email:<br />
                            <input type='text' name='forgotPwd_email' id='forgotPwd_email' class='textBox alignCenter required' style='width: 95%' />
                        </div>
                        <div class='alignCenter' style='margin-top: 6px;'><a href='javascript:void(0)' class='basicbtn blueGraBg_old roundedBtn' id='forgotPwd_btn'>Reset My Password Now!</a></div>
                    </div>
                    <div class='retrieveLoginWrapper extraWrapper' style='display: none'>
                        Please fill in the following fields. Our system will reset the password and show you your login information.
                        <br />

                        <div class='inputBoxWrapper'>
                            NRIC:<br />
                            <input type='text' name='retrieveLogin_nric' id='retrieveLogin_nric' class='textBox alignCenter required' style='width: 95%' value='' /><br />
                            Fullname:<br />
                            <input type='text' name='retrieveLogin_fullname' id='retrieveLogin_fullname' class='textBox alignCenter required' style='width: 95%' /><br />
                            <!--DOB:<br />
							<input type='text' name='retrieveLogin_dob' id='retrieveLogin_dob' class='textBox alignCenter required' style='width:95%' /><br />!-->
                        </div>
                        <div class='alignCenter' style='margin-top: 6px;'><a href='javascript:void(0)' class='basicbtn blueGraBg_old roundedBtn' id='retrieveLogin_btn'>Retrieve Login Info</a></div>
                    </div>
                </div>

                <div class='clearBoth'></div>

            </div>

            <div class='clearBoth'></div>

            <div id='menuWrapper' style=''>
                <div class='floatLeft'>
                    <img src='img/menu-cor-left.png'>
                </div>
                <div class='body floatLeft'>
                    <ul id='menu'>
                        <li style='width: 70px'><a href='index-2.html' class='menu1row '>Home</a></li>
                        <li style='width: 70px'><a href='group-tours.html' class='menu2row '>Group Tours</a></li>
                        <li style='width: 70px'><a href='free-easy.html' class='menu2row '>Free &amp; Easy</a></li>
                        <li style='width: 70px'><a href='muslim-tours.html' class=' menu2row'>Muslim Tours</a></li>
                        <li style='width: 70px'><a href='edufun-tours.html' class='menu1row '>Edu-Fun</a></li>
                        <li style='width: 70px'><a href='inbound.html' class='menu1row '>Inbound</a></li>
                        <!-- <li style='width:70px'><a href='http://www.ctc.com.sg/accommodations-main.php' class='menu1row ' target='_blank'>Hotels</a></li>
				<li style='width:70px'><a href='http://www.ctc.com.sg/airfares-main.php' class='menu1row '>Airfares</a></li>-->
                        <li style='width: 70px'><a href='cruises.html' class='menu1row '>Cruise</a></li>
                        <li style='width: 70px'><a href='mice.html' class='menu1row '>M.I.C.E.</a></li>
                        <!--  <li style='width:70px'> <a href='http://www.ctc.com.sg/korean.php' class='menu2row '>Korea Center</a></li> -->
                    </ul>
                </div>
                <div class='floatLeft'>
                    <img src='img/menu-cor-right.png'>
                </div>
                <div class='clearBoth'></div>
            </div>
            <script type="text/javascript">
                $(document).ready(function () {

                    $('.roundedBtn').corner("3px");
                    $('.mainContentWrapper').corner("5px");
                    $('.join_mail_list_wrapper').corner("bottom 5px left 5px");
                    $('.member_login_wrapper').corner("bottom 5px left 5px");
                    $('#languageSwitchWrapper').corner("bottom 5px");
                    $('.fullpage').corner("5px");

                    /*$('.mailing_link').click(function(){
                        if($(this).hasClass('mailing_link_hover')){
                            $(this).removeClass('mailing_link_hover');
                            $('.join_mail_list_wrapper').fadeOut('fast');
                        }else{
                            $(this).addClass('mailing_link_hover');
                            //close other popup..
                            $('.member_login_wrapper').hide();
                            $('.memberLogin_link').removeClass('memberLogin_link_hover');
                            
                            $('.join_mail_list_wrapper').fadeIn('fast');
                        }
                    })*/
                    $('.memberLogin_link, .memberArea_link').click(function () {
                        if ($(this).hasClass('memberLogin_link_hover')) {
                            $(this).removeClass('memberLogin_link_hover');
                            $('.member_login_wrapper').fadeOut('fast');
                        } else {
                            $(this).addClass('memberLogin_link_hover');
                            //close other popup..
                            $('.join_mail_list_wrapper').hide();
                            $('.mailing_link').removeClass('mailing_link_hover');

                            $('.member_login_wrapper').fadeIn('fast');
                        }
                    })

                    $('.closebtnA').click(function () {
                        $(this).parent().parent().hide();
                        $(this).parent().parent().parent().find('a').removeClass('memberLogin_link_hover').removeClass('mailing_link_hover').removeClass('memberArea_link_hover');
                    })

                    $('#loginBtn').click(function () {
                        validate_submit('#frmlogin', 'NO_SCROLL');
                        //$('#frmlogin').submit();
                    });


                    $('#lostPwdBtn').click(function () {
                        hideAllExtraWrapper();
                        $('.forgotPwd').fadeIn();
                    });
                    $('#retrieveLoginBtn').click(function () {
                        hideAllExtraWrapper();
                        $('.retrieveLoginWrapper').fadeIn();
                    });

                });

                function hideAllExtraWrapper() {
                    $('.extraWrapper').hide();
                }
                function mainNewsletterSubscribe(sType) {
                    validate_submit('#frmMainNewsletter', 'NO_SCROLL');
                }
</script>
            <div id='leftColumn'>

                <div class='frame2'>
                    <h2 class='leftSMenuTitle'>&nbsp;----  <span class='fontlightBlue'>book your trip now!</span> ----</h2>
                    <div id="block">
                        <ul class="htabs" style='height: 28px;'>
                            <li><a href="#grouptours" class='BGlightGreen_s smaller' style='padding-top: 8px; height: 25px; line-height: 1em; text-decoration: none' onclick='chBorderColor("tours");'>tours</a></li>
                            <!--
						<li><a href="#hotel" class='BGlightBlue_s smaller' style='padding-top:8px;height:25px;text-decoration:none'onclick='chBorderColor("hotels");'>hotels</a></li>
												<li><a href="#flight" class='BGlightOrange_s smaller' style='padding-top:8px;height:25px;text-decoration:none' onclick='chBorderColor("flights");'>flights</a></li>
												-->
                        </ul>
                        <div class="tabs tabContentBox2">
                            <div class='tab' id='grouptours'>
                                <div class='content'>
                                    <form name='homeSearchGrouptour' id='homeSearchGrouptour' method='post' action='http://www.ctc.com.sg/group-tour-search.php'>
                                        <table cellspacing='0' cellpadding='0' style='width: 100%' class='formTable'>
                                            <tr>
                                                <div style='text-transform: uppercase; font-size: 12px; margin-top: 5px; border-bottom: 1px dotted #000; margin-bottom: 6px'>
                                                    <div class='floatLeft' style='margin-top: 2px'>
                                                        <input type='radio' id='group_tour_search' name='tour_search' checked value='1' style='border: 0' />
                                                    </div>
                                                    <div class='floatLeft' style='margin-left: 3px'>
                                                        <label for='group_tour_search'>Group Tour</label>
                                                    </div>
                                                    <div class='clearBoth'></div>
                                                    <div class='floatLeft' style='margin-top: 2px;'>
                                                        <input type='radio' id='fit_search' name='tour_search' value='2' style='border: 0' />
                                                    </div>
                                                    <div class='floatLeft' style='margin-left: 3px'>
                                                        <label for='fit_search'>Free &amp; Easy</label>
                                                    </div>
                                                    <div class='clearBoth'></div>
                                                </div>
                                            </tr>
                                            <tr>
                                                <th style='width: 90px'>Country : </th>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <select style='width: 170px' class=''>
                                                        <option value=''>- All Countries -</option>
                                                        <option value='6'>America / Canada</option>
                                                        <option value='8'>Australia</option>
                                                        <option value='98'>Cambodia</option>
                                                        <option value='1'>China</option>
                                                        <option value='136'>Club Med</option>
                                                        <option value='137'>CRUISES</option>
                                                        <option value='5'>Europe</option>
                                                        <option value='68'>Exotic Destinations</option>
                                                        <option value='10'>Hong Kong</option>
                                                        <option value='129'>India</option>
                                                        <option value='103'>Indonesia</option>
                                                        <option value='2'>Japan</option>
                                                        <option value='7'>Korea</option>
                                                        <option value='92'>Macau</option>
                                                        <option value='110'>Malaysia</option>
                                                        <option value='134'>Maldives</option>
                                                        <option value='135'>Mauritius</option>
                                                        <option value='115'>Myanmar</option>
                                                        <option value='50'>New Zealand</option>
                                                        <option value='117'>Philippines</option>
                                                        <option value='22'>Taiwan</option>
                                                        <option value='24'>Thailand</option>
                                                        <option value='93'>Vietnam</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Destination : </th>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <select name='destination' id='destination' class='' style='width: 170px'>
                                                        <option value=''>- All Destinations -</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Departure : </th>

                                            </tr>
                                            <tr>
                                                <td colspan='2'>
                                                    <input type='text' name='gt_from' id='gt_from' class='inputBox dateInput' style='width: 110px' />
                                                    <br />
                                                    -To-
								
                                                    <br />
                                                    <input type='text' name='gt_to' id='gt_to' class='inputBox dateInput' style='width: 110px' />
                                                </td>
                                            </tr>
                                        </table>
                                    </form>
                                </div>
                                <div class='alignRight'>
                                    <a href='javascript:homeSearchGroupTourSubmit()' class='basicbtn blueGraBg roundedBtn floatRight' id='tourSearchBtn' style='width: 60px;'>Search</a><div class='clearBoth'></div>
                                </div>
                            </div>
                            <div class='tab' id='hotel'>
                                <div class='content'>
                                    <!--div style='text-transform:normal;font-size:11px;margin-top:5px;border-bottom:1px dotted #000;margin-bottom:6px'>
								<div class='floatLeft' style='margin-top:2px'><input type='radio' id='hotelSearchType1' name='hotelType' checked value='1' onclick='hotelTypeChange(this)' style='border:0' /></div><div class='floatLeft' style='margin-left:3px'><label for='hotelSearchType1'>Instant Confirmation Hotels</label></div><div class='clearBoth' style='height:3px'>&nbsp;</div>
								<div class='floatLeft' style='margin-top:2px'><input type='radio' id='hotelSearchType2' name='hotelType' value='2' onclick='hotelTypeChange(this)' style='border:0' /></div> <div class='floatLeft' style='margin-left:3px'><label for='hotelSearchType2'>CTC Worldwide Hotels</label></div>
								<div class='clearBoth'></div>
							</div-->
                                    <div id='hotelSearchInstant'>
                                        <script type='text/javascript' src='sys/js/accommodation-searchbox.js'></script>
                                        <form name='frmAccommodationHotel' method='get' action='http://www.ctc.com.sg/sys/hotel-dosearch.php' target='_blank'>
                                            <table cellspacing='0' cellpadding='0' class='formTable'>
                                                <tr>
                                                    <th colspan='2'>Country : </th>
                                                </tr>
                                                <tr>
                                                    <td colspan='2'>
                                                        <select class='' style='width: 180px' name='country' id='country' onchange='refreshAccHotelCity(this.value)'>
                                                            <option value=''>- Select Country -</option>
                                                            <option value='AU'>Australia</option>
                                                            <option value='CN'>China</option>
                                                            <option value='FR'>France</option>
                                                            <option value='HK'>Hong Kong</option>
                                                            <option value='ID'>Indonesia</option>
                                                            <option value='IT'>Italy</option>
                                                            <option value='JP'>Japan</option>
                                                            <option value='MO'>Macao</option>
                                                            <option value='SG'>Singapore</option>
                                                            <option value='TH'>Thailand</option>
                                                            <option value='GB'>United Kingdom</option>
                                                            <option value='US'>United States</option>
                                                            <option value=''>---------------------</option>
                                                            <option value='AL'>Albania</option>
                                                            <option value='AD'>Andorra</option>
                                                            <option value='AG'>Antigua And Barbuda</option>
                                                            <option value='AR'>Argentina</option>
                                                            <option value='AM'>Armenia</option>
                                                            <option value='AW'>Aruba</option>
                                                            <option value='AU'>Australia</option>
                                                            <option value='AT'>Austria</option>
                                                            <option value='AZ'>Azerbaijan</option>
                                                            <option value='BS'>Bahamas</option>
                                                            <option value='BH'>Bahrain</option>
                                                            <option value='BY'>Belarus</option>
                                                            <option value='BE'>Belgium</option>
                                                            <option value='BZ'>Belize</option>
                                                            <option value='BO'>Bolivia</option>
                                                            <option value='BA'>Bosnia And Herzegovina</option>
                                                            <option value='BR'>Brazil</option>
                                                            <option value='BN'>Brunei Darussalam</option>
                                                            <option value='BG'>Bulgaria</option>
                                                            <option value='KH'>Cambodia</option>
                                                            <option value='CM'>Cameroon</option>
                                                            <option value='CA'>Canada</option>
                                                            <option value='CN'>China</option>
                                                            <option value='CO'>Colombia</option>
                                                            <option value='CR'>Costa Rica</option>
                                                            <option value='CY'>Cyprus</option>
                                                            <option value='DK'>Denmark</option>
                                                            <option value='DO'>Dominican Republic</option>
                                                            <option value='EC'>Ecuador</option>
                                                            <option value='EG'>Egypt</option>
                                                            <option value='SV'>El Salvador</option>
                                                            <option value='EE'>Estonia</option>
                                                            <option value='FI'>Finland</option>
                                                            <option value='FR'>France</option>
                                                            <option value='GE'>Georgia</option>
                                                            <option value='DE'>Germany</option>
                                                            <option value='GR'>Greece</option>
                                                            <option value='HN'>Honduras</option>
                                                            <option value='HK'>Hong Kong</option>
                                                            <option value='HU'>Hungary</option>
                                                            <option value='IS'>Iceland</option>
                                                            <option value='IN'>India</option>
                                                            <option value='ID'>Indonesia</option>
                                                            <option value='IE'>Ireland</option>
                                                            <option value='IL'>Israel</option>
                                                            <option value='IT'>Italy</option>
                                                            <option value='JP'>Japan</option>
                                                            <option value='KE'>Kenya</option>
                                                            <option value='KR'>Korea, Republic Of</option>
                                                            <option value='LB'>Lebanon</option>
                                                            <option value='MO'>Macao</option>
                                                            <option value='MY'>Malaysia</option>
                                                            <option value='MV'>Maldives</option>
                                                            <option value='MU'>Mauritius</option>
                                                            <option value='MX'>Mexico</option>
                                                            <option value='MA'>Morocco</option>
                                                            <option value='MM'>Myanmar</option>
                                                            <option value='NL'>Netherlands</option>
                                                            <option value='NZ'>New Zealand</option>
                                                            <option value='NO'>Norway</option>
                                                            <option value='PA'>Panama</option>
                                                            <option value='PH'>Philippines</option>
                                                            <option value='PL'>Poland</option>
                                                            <option value='PT'>Portugal</option>
                                                            <option value='PR'>Puerto Rico</option>
                                                            <option value='QA'>Qatar</option>
                                                            <option value='RO'>Romania</option>
                                                            <option value='RU'>Russian Federation</option>
                                                            <option value='SA'>Saudi Arabia</option>
                                                            <option value='SG'>Singapore</option>
                                                            <option value='SK'>Slovakia</option>
                                                            <option value='ZA'>South Africa</option>
                                                            <option value='ES'>Spain</option>
                                                            <option value='SZ'>Swaziland</option>
                                                            <option value='SE'>Sweden</option>
                                                            <option value='CH'>Switzerland</option>
                                                            <option value='TW'>Taiwan, Province Of China</option>
                                                            <option value='TH'>Thailand</option>
                                                            <option value='TR'>Turkey</option>
                                                            <option value='AE'>United Arab Emirates</option>
                                                            <option value='GB'>United Kingdom</option>
                                                            <option value='US'>United States</option>
                                                            <option value='VN'>Viet Nam</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th colspan='2'>City : </th>
                                                </tr>
                                                <tr>
                                                    <td colspan='2'>
                                                        <select class='' style='width: 180px' name='city' id='city'>
                                                            <option value=''>- Select City -</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th colspan='2'>Check-In : </th>
                                                </tr>
                                                <tr>
                                                    <td colspan='2'>
                                                        <div class='floatLeft'>
                                                            <!--select class='selectbox4' name='checkin1' id='checkin1' onchange='changeAccHotelSearchCheckin()'-->
                                                            <select class='' name='checkin1' id='checkin1' onchange='changeAccHotelSearchCheckin()'>
                                                                <option value='01'>1</option>
                                                                <option value='02'>2</option>
                                                                <option value='03'>3</option>
                                                                <option value='04'>4</option>
                                                                <option value='05'>5</option>
                                                                <option value='06'>6</option>
                                                                <option value='07'>7</option>
                                                                <option value='08'>8</option>
                                                                <option value='09'>9</option>
                                                                <option value='10'>10</option>
                                                                <option value='11'>11</option>
                                                                <option value='12'>12</option>
                                                                <option value='13'>13</option>
                                                                <option value='14'>14</option>
                                                                <option value='15'>15</option>
                                                                <option value='16'>16</option>
                                                                <option value='17'>17</option>
                                                                <option value='18'>18</option>
                                                                <option value='19'>19</option>
                                                                <option value='20'>20</option>
                                                                <option value='21'>21</option>
                                                                <option value='22'>22</option>
                                                                <option value='23'>23</option>
                                                                <option value='24'>24</option>
                                                                <option value='25'>25</option>
                                                                <option value='26'>26</option>
                                                                <option value='27' selected>27</option>
                                                                <option value='28'>28</option>
                                                                <option value='29'>29</option>
                                                                <option value='30'>30</option>
                                                                <option value='31'>31</option>
                                                            </select>
                                                        </div>
                                                        <div class='floatLeft' style='margin-left: 5px'>
                                                            <!--select class='selectbox3' name='checkin2' id='checkin2' onchange='changeAccHotelSearchCheckin()'-->
                                                            <select class='' name='checkin2' id='checkin2' onchange='changeAccHotelSearchCheckin()'>
                                                                <option value='2013-12' selected>Dec, 2013</option>
                                                                <option value='2014-01'>Jan, 2014</option>
                                                                <option value='2014-02'>Feb, 2014</option>
                                                                <option value='2014-03'>Mar, 2014</option>
                                                                <option value='2014-04'>Apr, 2014</option>
                                                                <option value='2014-05'>May, 2014</option>
                                                                <option value='2014-06'>Jun, 2014</option>
                                                                <option value='2014-07'>Jul, 2014</option>
                                                                <option value='2014-08'>Aug, 2014</option>
                                                                <option value='2014-09'>Sep, 2014</option>
                                                                <option value='2014-10'>Oct, 2014</option>
                                                                <option value='2014-11'>Nov, 2014</option>
                                                                <option value='2014-12'>Dec, 2014</option>
                                                            </select>
                                                        </div>
                                                        <div class='clearBoth'></div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th colspan='2'>Check-Out : </th>
                                                </tr>
                                                <tr>
                                                    <td colspan='2'>
                                                        <div class='floatLeft'>
                                                            <!--select class='selectbox4' name='checkout1' id='checkout1' onchange='changeAccHotelSearchCheckout()'-->
                                                            <select class='' name='checkout1' id='checkout1' onchange='changeAccHotelSearchCheckout()'>
                                                                <option value='01'>1</option>
                                                                <option value='02'>2</option>
                                                                <option value='03'>3</option>
                                                                <option value='04'>4</option>
                                                                <option value='05'>5</option>
                                                                <option value='06'>6</option>
                                                                <option value='07'>7</option>
                                                                <option value='08'>8</option>
                                                                <option value='09'>9</option>
                                                                <option value='10'>10</option>
                                                                <option value='11'>11</option>
                                                                <option value='12'>12</option>
                                                                <option value='13'>13</option>
                                                                <option value='14'>14</option>
                                                                <option value='15'>15</option>
                                                                <option value='16'>16</option>
                                                                <option value='17'>17</option>
                                                                <option value='18'>18</option>
                                                                <option value='19'>19</option>
                                                                <option value='20'>20</option>
                                                                <option value='21'>21</option>
                                                                <option value='22'>22</option>
                                                                <option value='23'>23</option>
                                                                <option value='24'>24</option>
                                                                <option value='25'>25</option>
                                                                <option value='26'>26</option>
                                                                <option value='27'>27</option>
                                                                <option value='28' selected>28</option>
                                                                <option value='29'>29</option>
                                                                <option value='30'>30</option>
                                                                <option value='31'>31</option>
                                                            </select>
                                                        </div>
                                                        <div class='floatLeft' style='margin-left: 5px'>
                                                            <!--select class='selectbox3' name='checkout2' id='checkout2' onchange='changeAccHotelSearchCheckout()'-->
                                                            <select class='' name='checkout2' id='checkout2' onchange='changeAccHotelSearchCheckout()'>
                                                                <option value='2013-12' selected>Dec, 2013</option>
                                                                <option value='2014-01'>Jan, 2014</option>
                                                                <option value='2014-02'>Feb, 2014</option>
                                                                <option value='2014-03'>Mar, 2014</option>
                                                                <option value='2014-04'>Apr, 2014</option>
                                                                <option value='2014-05'>May, 2014</option>
                                                                <option value='2014-06'>Jun, 2014</option>
                                                                <option value='2014-07'>Jul, 2014</option>
                                                                <option value='2014-08'>Aug, 2014</option>
                                                                <option value='2014-09'>Sep, 2014</option>
                                                                <option value='2014-10'>Oct, 2014</option>
                                                                <option value='2014-11'>Nov, 2014</option>
                                                                <option value='2014-12'>Dec, 2014</option>
                                                                <option value='2015-01'>Jan, 2015</option>
                                                            </select>
                                                        </div>
                                                        <input type='hidden' name='nights' id='nights' value='1' />
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th>Rooms: </th>
                                                    <td>
                                                        <!--select class='selectbox4' name='rooms' id='rooms' onchange='changeAccHotelSearchRooms()'-->
                                                        <select class='' name='rooms' id='rooms' onchange='changeAccHotelSearchRooms()'>
                                                            <option value='1'>1</option>
                                                            <option value='2'>2</option>
                                                            <option value='3'>3</option>
                                                        </select>
                                                    </td>

                                                </tr>
                                                <tr id='trAccHotelSearchRoom1' style='display: none'>
                                                    <th>Room #1 : </th>
                                                    <td>
                                                        <select name='room_1' id='room_1' class='' style='width: 120px'>
                                                            <option value='2'>Twin/Double (Sleep 2)</option>
                                                            <option value='1'>Single (Sleep 1)</option>
                                                            <option value='3'>Triple (Sleep 3)</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr id='trAccHotelSearchRoom2' style='display: none'>
                                                    <th>Room #2 : </th>
                                                    <td>
                                                        <select name='room_2' id='room_2' class='' style='width: 120px'>
                                                            <option value='2'>Twin/Double (Sleep 2)</option>
                                                            <option value='1'>Single (Sleep 1)</option>
                                                            <option value='3'>Triple (Sleep 3)</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr id='trAccHotelSearchRoom3' style='display: none'>
                                                    <th>Room #3 : </th>
                                                    <td>
                                                        <select name='room_3' id='room_3' class='' style='width: 120px'>
                                                            <option value='2'>Twin/Double (Sleep 2)</option>
                                                            <option value='1'>Single (Sleep 1)</option>
                                                            <option value='3'>Triple (Sleep 3)</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                            </table>
                                        </form>
                                    </div>

                                    <div id='hotelSearchCTC' style='display: none'>
                                        <form name='homeSearchHotel' method='post' action='http://www.ctc.com.sg/hotel-search.php'>
                                            <table cellspacing='0' style='width: 100%' class='formTable'>
                                                <tr>
                                                    <th>Country : </th>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <select name='country' id='country' class='' style='width: 180px' onchange='homeSearchHotelsRefreshCity(this.value)'>
                                                            <option value=''>- All Countries -</option>
                                                            <option value='67'>AUSTRALIA</option>
                                                            <option value='439'>Brazil</option>
                                                            <option value='187'>CAMBODIA</option>
                                                            <option value='431'>CANADA</option>
                                                            <option value='7'>CHINA</option>
                                                            <option value='414'>CZECH REPUBLIC</option>
                                                            <option value='401'>DUBAI</option>
                                                            <option value='408'>EGYPT</option>
                                                            <option value='384'>FRANCE</option>
                                                            <option value='426'>Germany</option>
                                                            <option value='16'>HONG KONG</option>
                                                            <option value='404'>INDIA</option>
                                                            <option value='68'>INDONESIA</option>
                                                            <option value='386'>Italy</option>
                                                            <option value='22'>JAPAN</option>
                                                            <option value='406'>KINGDOM OF BAHRAIN</option>
                                                            <option value='44'>KOREA</option>
                                                            <option value='189'>LAOS</option>
                                                            <option value='191'>MACAU</option>
                                                            <option value='194'>MALAYSIA</option>
                                                            <option value='402'>MALDIVES</option>
                                                            <option value='180'>MYANMAR</option>
                                                            <option value='440'>Nepal</option>
                                                            <option value='160'>NEW ZEALAND</option>
                                                            <option value='200'>PHILIPPINES</option>
                                                            <option value='419'>QATAR</option>
                                                            <option value='197'>SINGAPORE</option>
                                                            <option value='412'>South Africa</option>
                                                            <option value='395'>Spain</option>
                                                            <option value='416'>SWITZERLAND</option>
                                                            <option value='13'>TAIWAN</option>
                                                            <option value='100'>THAILAND</option>
                                                            <option value='424'>TURKEY</option>
                                                            <option value='178'>UNITED KINGDOM</option>
                                                            <option value='128'>UNITED STATES OF AMERICA</option>
                                                            <option value='241'>VIETNAM</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>City : </th>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <select name='destination' id='destination' class='' style='width: 180px'>
                                                            <option value=''>- All Cities -</option>
                                                        </select></td>
                                                </tr>
                                                <tr>
                                                    <th>Check-In : </th>
                                                </tr>
                                                <tr>
                                                    <td class='white'>
                                                        <input type='text' name='ht_checkin' id='ht_checkin' class='inputBox dateInput' style='width: 120px' />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Check-Out : </th>
                                                </tr>
                                                <tr>
                                                    <td class='white'>
                                                        <input type='text' name='ht_checkout' id='ht_checkout' class='inputBox dateInput' style='width: 120px' />
                                                    </td>
                                                </tr>

                                            </table>
                                        </form>
                                    </div>
                                    <script type='text/javascript'>
                                        function hotelTypeChange(elem) {
                                            if (elem.value == 1) {
                                                //document.getElementById('hotelSearchInstant').style.display = 'block';
                                                //document.getElementById('hotelSearchCTC').style.display = 'none';
                                                $('#hotelSearchCTC').slideUp('fast', function () {
                                                    $('#hotelSearchInstant').slideDown();
                                                    $('#hotelBtn1').show();
                                                    $('#hotelBtn2').hide();
                                                });
                                            }
                                            else {
                                                //document.getElementById('hotelSearchInstant').style.display = 'none';
                                                //document.getElementById('hotelSearchCTC').style.display = 'block';
                                                $('#hotelSearchInstant').slideUp('fast', function () {
                                                    $('#hotelSearchCTC').slideDown();
                                                    $('#hotelBtn2').show();
                                                    $('#hotelBtn1').hide();
                                                });
                                            }
                                        }
                                        changeAccHotelSearchRooms();
							  </script>

                                </div>
                                <div class='alignRight' id='hotelBtn1'>
                                    <a href='javascript:validateAccHotelSearch()' class='basicbtn blueGraBg roundedBtn floatRight' id='hotelSearchBtn' style='width: 60px'>Search</a><div class='clearBoth'></div>
                                </div>
                                <div class='alignRight' style='display: none' id='hotelBtn2'>
                                    <a href='javascript:homeSearchHotelSubmit()' class='basicbtn blueGraBg roundedBtn floatRight' id='hotelSearchBtn' style='width: 80px'>Search</a><div class='clearBoth'></div>
                                </div>
    </form>
    </div>
						
											

    <div class='tab' id='flight'>
        <br />
        Book Your Flights <a href="airfares-main.html" style="text-decoration: underline">Here</a>
        <!--form name='AirSearchForm' method='post' action='http://www.ctc.com.sg/flight-search.php'>
							<div class='content'>
							<input type="hidden" name="LANG" value="en"/>
							<input type="hidden" name="FLOW_NAME" value="AIRSEARCH"/>
							<input type="hidden" name="SEARCHTYPE" value="1">
							<input type="hidden" name="TODAY" value="22/12/2013">
							<input type="hidden" name="TODAYADD9MONTH" value="22/09/2014">
							<input type="hidden" name="START_DEPART_DATE" value="28/12/2013">
							<input type="hidden" name="AN_OPTIONINFO_1" value="SEV">
							<input type="hidden" name="AN_OPTIONINFO_2" value="FLO,OL">
							<input type="hidden" name="FQD_FARETYPE1" value="NL">
							<input type="hidden" name="FQD_FARETYPE2" value="">

							<input type="hidden" name="FQD_FARETYPE3" value="">
							<input type="hidden" name="FQD_EXPANDEDPARAM1" value="NDA">
							<input type="hidden" name="FQD_EXPANDEDPARAM2" value="">
							<input type="hidden" name="FQD_EXPANDEDPARAM3" value="">
							<input type="hidden" name="FQD_PRICINGTICKETINGINDICATOR" value="RU,RP">
							<input type="hidden" name="RBD" value="">
							<input type="hidden" name="SEARCHMETHOD" value="7">

							  <table cellspacing='0' cellpadding='0' style='width:100%' class='formTable'>
								<tr>
									<th colspan='2'>Type:</th>
								</tr>
								<tr>
									<td colspan='2'>
										<div class='floatLeft' style='margin-top:1px'><input name="TYPEOFTRIP" id="TYPEOFTRIP_R" type="radio" value="R" checked /></div>
										<div class='floatLeft'><label for="TYPEOFTRIP_R">Return</label></div>
										<div class='floatLeft' style='margin-left:20px;margin-top:1px'><input name="TYPEOFTRIP" id="TYPEOFTRIP_O" type="radio" value="O" /></div>
										<div class='floatLeft'><label for="TYPEOFTRIP_O">One Way</label></div>
										<div class='clearBoth'></div>
									</td>
								</tr>
								<tr>
									<th colspan='2'>From: </th>
								</tr>
								<tr>
									<td colspan='2'>
										<input name="DEPARTCITY" class="inputBox" id="DEPARTCITY" maxlength="100" onFocus="this.select();" style="width:150px;" value="Singapore" readonly="readonly" />
									</td>
								</tr>
								<tr>
									<th colspan='2'>To:</th>
								</tr>
								<tr>
									<td colspan='2'>
										<input name="RETURNCITY" class="inputBox" id="RETURNCITY" maxlength="100" onFocus="this.select();" style="width:150px;">
									</td>
								</tr>
								</table>
								<table cellspacing='0' cellpadding='0' style='width:100%' class='formTable'>
								<tr>
									<th style='width:100px' colspan='2'>Depart Date: </th>
								</tr>
								<tr>
									<td colspan='2'>
										<input type="text" name="DEPARTDATE" id="DEPARTDATE" class="inputBox dateInput" maxlength="10" style="width:157px;" onclick="gfPop.fBetweenPop(document.AirSearchForm.DEPARTDATE, document.AirSearchForm.START_DEPART_DATE, document.AirSearchForm.TODAYADD9MONTH);return false;">
									</td>
								</tr>
								<tr>	
									<td colspan='2'>		
								  <!--
								  <a href='javascript:winpopup3("calendar.html?obj=DEPARTDATE", 240, 240)'><img src='images/calendar.gif' style='border:0px' /></a>
											-->
        <!--
								  <select id="DEPARTTIME" name="DEPARTTIME" class='selectbox'>
										<option value="00:00">-Anytime-</option>
										<option value="06:00">Morning</option>
										<option value="13:00">Afternoon</option>
										<option value="18:00">Evening</option>

										<option value="01:00" >01:00</option>
										<option value="02:00" >02:00</option>
										<option value="03:00" >03:00</option>
										<option value="04:00" >04:00</option>
										<option value="05:00" >05:00</option>
										<option value="06:00" >06:00</option>

										<option value="07:00" >07:00</option>
										<option value="08:00" >08:00</option>
										<option value="09:00" >09:00</option>
										<option value="10:00" >10:00</option>
										<option value="11:00" >11:00</option>
										<option value="12:00" >12:00</option>

										<option value="13:00" >13:00</option>
										<option value="14:00" >14:00</option>
										<option value="15:00" >15:00</option>
										<option value="16:00" >16:00</option>
										<option value="17:00" >17:00</option>
										<option value="18:00" >18:00</option>

										<option value="19:00" >19:00</option>
										<option value="20:00" >20:00</option>
										<option value="21:00" >21:00</option>
										<option value="22:00" >22:00</option>
										<option value="23:00" >23:00</option>
									</select>
								</td>
								</tr>
								<tr>
									<th colspan='2'>Return Date: </th>
								</tr>
								<tr>
									<td colspan='2'>
										<INPUT type="text" name="RETURNDATE" class="inputBox dateInput" id="RETURNDATE" maxLength="10" style="width:157px;" onclick="gfPop.fBetweenPop(document.AirSearchForm.RETURNDATE, document.AirSearchForm.DEPARTDATE, document.AirSearchForm.TODAYADD9MONTH);return false;">
									</td>
								</tr>
								<tr>	
									<td colspan='2'>
										<select id="RETURNTIME" name="RETURNTIME" class='selectbox'>
										<option value="00:00">-Anytime-</option>
										<option value="06:00">Morning</option>
										<option value="13:00">Afternoon</option>
										<option value="18:00">Evening</option>

										<option value="01:00" >01:00</option>
										<option value="02:00" >02:00</option>
										<option value="03:00" >03:00</option>
										<option value="04:00" >04:00</option>
										<option value="05:00" >05:00</option>
										<option value="06:00" >06:00</option>

										<option value="07:00" >07:00</option>
										<option value="08:00" >08:00</option>
										<option value="09:00" >09:00</option>
										<option value="10:00" >10:00</option>
										<option value="11:00" >11:00</option>
										<option value="12:00" >12:00</option>

										<option value="13:00" >13:00</option>
										<option value="14:00" >14:00</option>
										<option value="15:00" >15:00</option>
										<option value="16:00" >16:00</option>
										<option value="17:00" >17:00</option>
										<option value="18:00" >18:00</option>

										<option value="19:00" >19:00</option>
										<option value="20:00" >20:00</option>
										<option value="21:00" >21:00</option>
										<option value="22:00" >22:00</option>
										<option value="23:00" >23:00</option>
										</select>
									</td>
								</tr>
								<tr>
									<th colspan='2'>Passengers</th>
								</tr>
								<tr>
									<td class='alignLeft'>
										<div class='floatLeft'>Adults&nbsp;</div>
										<div class='floatLeft'>
										<select id="ADULTS" name="ADULTS" onChange="ADULTS_setOptions(this.form, this.form.ADULTS, this.form.CHILDS, this.form.INFANTS);" class='selectbox2' style='width:40px'>
											<option value="1" selected>1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
											<option value="5">5</option>
											<option value="6">6</option>
											<option value="7">7</option>
											<option value="8">8</option>
											<option value="9">9</option>
										</select>
										</div>
									</td>
									<td>
										<div class='floatLeft'>2 - 11y&nbsp;</div>
										<div class='floatLeft'>
										<select id="CHILDS" name="CHILDS" class='selectbox2' style='width:40px'>
											<option value="0" selected>0</option>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
											<option value="5">5</option>
											<option value="6">6</option>
											<option value="7">7</option>
											<option value="8">8</option>
										</select>
										</div>
									</td>
									</tr>
									<tr>

										<td colspan='2'>
											<div class='floatLeft'>&nbsp;&nbsp;&lt; 2y&nbsp;</div>
											<div class='floatLeft'>
											<select id="INFANTS" name="INFANTS" class='selectbox2' style='width:40px'>
												<option value="0" selected>0</option>
												<option value="1">1</option>
											</select>
											</div>
										</td>
									</tr>
									<tr>
										<th colspan='2'>
											<div class='floatLeft' style='margin-right:5px'>Class:</div> 
											<select class="selectbox3" id="CABINCLASS" name="CABINCLASS" style='width:110px'>
												<option value="3" selected>Economy</option>
												<option value="2">Business</option>
												<option value="1">First</option>
											</select>
											<div class='clearBoth'>
										</td>
									</tr>
	
							  </table>
							  </div>
								<div class='alignRight'><a href='javascript:void(0)' class='basicbtn blueGraBg roundedBtn floatRight' id='flightSearchBtn' style='width:60px' onclick='SEARCH_onClick(document.AirSearchForm); return false;'>Search</a><div class='clearBoth'></div></div>
							 </form-->
    </div>
    <!-- endof flight tab -->
    </div>
					
				</div>
				
		

    <div class='clearBoth'></div>
    </div>
    <script type='text/javascript'>
        $(document).ready(function () {

            $('.frame2').corner("6px");

            tabs({
                block: "#block"
            });

            $('#gt_from, #gt_to').datepicker({ dateFormat: 'dd/mm/yy', changeMonth: true, changeYear: true });
            $('#ht_checkin, #ht_checkout').datepicker({ dateFormat: 'dd/mm/yy', changeMonth: true, changeYear: true });
            $('#DEPARTDATE, #RETURNDATE').datepicker({ dateFormat: 'dd/mm/yy', changeMonth: true, changeYear: true, minDate: 0, maxDate: '9m' });
        });

        function chBorderColor(type) {

            if (type == "tours") {
                $('.tabContentBox2').css('border', '7px solid #94c51c');
            } else if (type == "hotels") {
                $('.tabContentBox2').css('border', '7px solid #34b3ac');
            } else if (type == "flights") {
                $('.tabContentBox2').css('border', '7px solid #f98b1c');
            }
        }
</script>
    <div class='frame10 floatLeft' style='margin-right: 4px; margin-top: 10px'>
        <!--<a href='http://www.myjapanvacation.com' target='_blank' style='float:left'><img src='img/leftBanner/mjv2-s.gif'></a>
		<a href='#' target='_blank' style='float:left;margin-top:7px'><img src='img/leftBanner/mtv2-s.gif'></a>
		<a href='http://www.findmerooms.com' target='_blank' style='float:left;margin-top:7px'><img src='img/leftBanner/fmr2-s.gif'></a>
		
		<div class='clearBoth' style='height:5px;'></div>
		<a href='#' target='_blank' style='float:left;margin-left:1px'><img src='img/leftBanner/tour-me2.gif'></a>
		<a href='#' target='_blank' style='float:left;margin-left:8px'><img src='img/leftBanner/travel-blog2.gif'></a>
		<div class='clearBoth' style='height:5px;'></div>
		<a href='#' target='_blank' style='float:left;margin-left:1px'><img src='img/leftBanner/around-cities2.gif'></a>
		<a href='#' target='_blank' style='float:left;margin-left:8px'><img src='img/leftBanner/back-packers2.gif'></a>
		<div class='clearBoth'></div>
		
		<a href='http://www.myjapanvacation.com' target='_blank' style='margin-left:-32px;'><img src='img/homebanner2/myjapanvacation.jpg'></a>
		<img src='img/homebanner2/mytaiwanvacation.jpg'>
		<a href='http://www.findmerooms.com' target='_blank' style='margin-left:10px'><img src='img/homebanner2/findmeroom.jpg'></a>
		<img src='img/homebanner2/privateCollection.jpg'>!-->
        <a href='edufun-tours.html' target='_blank' style='margin-left: 10px'>
            <img src='img/homebanner2/educationalTour.jpg'></a>
        <a href='mice.html' target='_blank' style='margin-left: 10px'>
            <img src='img/homebanner2/mice.jpg'></a>
        <a href='muslim-tours.html' target='_blank' style='margin-left: 10px'>
            <img src='img/homebanner2/muslimTour.jpg'></a>
        <div class='clearBoth'></div>

    </div>
    <!--div class='frame3 marginTop10'>
		<a href='#' target='_blank'><img src='img/leftBanner/private-collection.png'></a>
		<a href='#' target='_blank'><img src='img/leftBanner/harmoni-holidays.png'></a>
		<a href='#' target='_blank'><img src='img/leftBanner/education-tour.png'></a>
		<a href='#' target='_blank'><img src='img/leftBanner/mice.png'></a>
	</div-->

    <!--div class='frame4 marginTop10'>
		Traveller's Corner
		<a href='http://flightinfo.asia1.com.sg/' target='_blank'><img src='img/leftMenu/flight-schedule.gif'></a>
		<a href='http://www.natas.travel/cms_data.aspx?id=19' target='_blank'><img src='img/leftMenu/travel-tips.gif'></a>
		<a href='http://finance.yahoo.com/currency/convert?amt=1&from=SGD&to=USD&submit=Convert' target='_blank'><img src='img/leftMenu/currency-converter.gif'></a>
		<a href='http://app.mfa.gov.sg/2006/idx_consularvisa.asp?web_id=0' target='_blank'><img src='img/leftMenu/visa-info.gif'></a>
		<a href='http://www.worldweather.org/' target='_blank'><img src='img/leftMenu/world-weather.gif'></a>
		<a href='http://www.timeanddate.com/worldclock/' target='_blank'><img src='img/leftMenu/world-clock.gif'></a>
	</div-->
    </div>
	


    <div id='rightColumn'>

        <h1>Free &amp; Easy</h1>

        <div class='mainContentWrapper'>
            <div class='top'></div>
            <div class='body'>
                <div class='divGroupTourSearchMsg'>
                    Search Free & Easy Tours in Australia			
                    <br />
                    <!-- Asp.net form -->
                    <form runat="server">
                        <asp:ScriptManager ID="ScriptManager" runat="server" />
                         <asp:UpdatePanel ID="upSetSession" runat="server">
                         <ContentTemplate>
                        <table cellspacing='8' class='formTable2'>
                            <tr>
                                <td class='label'>Country : </td>
                                <td>                                     
                                    <asp:DropDownList ID="DropDownList1" runat="server" AutoPostBack="true" OnSelectedIndexChanged="DropDownList1_SelectedIndexChanged">
                                        <asp:ListItem Value="0">----Select a country ---</asp:ListItem>
                                        <asp:ListItem Value="America">America</asp:ListItem>
                                        <asp:ListItem>Canada</asp:ListItem>
                                        <asp:ListItem>Cambodia</asp:ListItem>
                                        <asp:ListItem>China</asp:ListItem>
                                        <asp:ListItem Value="0">---Club Med---</asp:ListItem>
                                        <asp:ListItem Value="0">---CRUISES---</asp:ListItem>
                                        <asp:ListItem Value="0">---Exotic Destinations---</asp:ListItem>
                                        <asp:ListItem>Europe</asp:ListItem>
                                        <asp:ListItem>Hong Kong</asp:ListItem>
                                        <asp:ListItem>India</asp:ListItem>
                                        <asp:ListItem>Indonesia</asp:ListItem>
                                        <asp:ListItem>Japan</asp:ListItem>
                                        <asp:ListItem>Korea</asp:ListItem>
                                        <asp:ListItem>Macau</asp:ListItem>
                                        <asp:ListItem>Malaysia</asp:ListItem>
                                        <asp:ListItem>Maldives</asp:ListItem>
                                        <asp:ListItem>Mauritius</asp:ListItem>
                                        <asp:ListItem>Myanmar</asp:ListItem>
                                        <asp:ListItem>New Zealand</asp:ListItem>
                                        <asp:ListItem>Philippines</asp:ListItem>
                                        <asp:ListItem>Taiwan</asp:ListItem>
                                        <asp:ListItem>Thailand</asp:ListItem>
                                        <asp:ListItem>Vietnam</asp:ListItem>
                                    </asp:DropDownList> 
                                                                    
                                </td>
                                <td class='label'>Destination : </td>
                                <td>
                                    <asp:DropDownList runat="server" name='destination' id='DropDownCities' class='selectBox' style='width: 220px'>
                                        <asp:ListItem value=''>- All Destinations -</asp:ListItem>
                                    </asp:DropDownList></td>
                            </tr>
                            <tr>
                                <td class='label'>Departure : </td>
                                <td colspan='2'>
                                    <input type='text' name='gt_from' id='gt_from' class='dateInput2' style='width: 120px' />
                                    &nbsp;to&nbsp;
					 
                                    <input type='text' name='gt_to' id='gt_to' class='dateInput2' style='width: 120px' />
                                </td>
                                <td style='text-align: right'>
                                    <a href='javascript:homeSearchGroupTourSubmit2()' class='basicbtn blueGraBg roundedBtn floatRight' id='saveProfileBtn' style='width: 170px'>Search Again</a>
                                    <div class='clearBoth'></div>
                                </td>

                            </tr>
                            <tr><td colspan="2"><asp:Label runat="server" ID="Label1"></asp:Label></td></tr>
                        </table>
                         </ContentTemplate>
                              <Triggers>
                <asp:AsyncPostBackTrigger ControlID="DropDownList1" 
                    EventName="SelectedIndexChanged" />
            </Triggers> 
                        </asp:UpdatePanel> 
                    </form> <!-- End of asp.net form -->
                </div>
                <!-- endof divGroupTourSearchBox -->
                <div class='tourListWrapper'>
                    <a class='singleWrapper alt' href='tourdf11.html?tourcode=AUDQLD'>
                        <div class='picFrame'>
                            <img src='imagelib/Australia/GOLD%20COAST/fraser-island.jpg' width='81' height='69'>
                        </div>
                        <div class='content'>6D5N The Great Sunshine Way</div>
                        <br />
                        <div class='subtitle'>BRISBANE → FRASER ISLAND → SUNSHINE COAST (CALOUNDRA) → LAMINGTON NP →BRISBANE</div>
                    </a>
                    <a class='singleWrapper ' href='tourc2c6.html?tourcode=AUDRSA'>
                        <div class='picFrame'>
                            <img src='imagelib/Australia/ADELAIDE/kingsten-se-big-lobster-larry.jpg' width='81' height='69'>
                        </div>
                        <div class='content'>6D5N Adelaide & The Limestone Coast</div>
                        <br />
                        <div class='subtitle'>ADELAIDE → ROBE → MT GAMBIER → PENOLA → ADELAIDE</div>
                    </a>
                    <a class='singleWrapper ' href='tour2612.html?tourcode=AUDTAS'>
                        <div class='picFrame'>
                            <img src='imagelib/Australia/Tasmania/Tasmanian%20Devil.jpg' width='81' height='69'>
                        </div>
                        <div class='content'>9D8N Tasmanian Rhapsody</div>
                        <br />
                        <div class='subtitle'>Launceston-Stanley-Cradle Mountain-Launceston - Hamilton-Hobart-Huon Valley-Tasman Peninsula</div>
                    </a>
                    <a class='singleWrapper alt' href='tour2efd.html?tourcode=AUDVIC'>
                        <div class='picFrame'>
                            <img src='imagelib/Australia/MELBOURNE/grampians-national-park.jpg' width='81' height='69'>
                        </div>
                        <div class='content'>6D5N The Great Southern Touring Route</div>
                        <br />
                        <div class='subtitle'>Melbourne-Great Ocean Road Drive-The Grampians-Ballarat</div>
                    </a>
                    <a class='singleWrapper alt' href='tour01be.html?tourcode=AUDRNT'>
                        <div class='picFrame'>
                            <img src='imagelib/Australia/DARWIN/Holiday%20Inn%20Gagudju%20Crocodile%20Hotel.jpg' width='81' height='69'>
                        </div>
                        <div class='content'>5D4N Top End Nature’s Way</div>
                        <br />
                        <div class='subtitle'>Darwin-Kakadu-Katherine-Litchfield-Darwin</div>
                    </a>
                    <a class='singleWrapper ' href='tourc723.html?tourcode=AUDRWA'>
                        <div class='picFrame'>
                            <img src='imagelib/Australia/PERTH/tin-horse-highway.jpg' width='81' height='69'>
                        </div>
                        <div class='content'>6D5N PERTH & THE GOLDEN OUTBACKS</div>
                        <br />
                        <div class='subtitle'>Perth – Margaret River – Albany – Wave Rock - York</div>
                    </a>
                    <a class='singleWrapper ' href='tour08d4.html?tourcode=AUDNSW'>
                        <div class='picFrame'>
                            <img src='imagelib/Australia/SYDNEY/Storybook%20Garden%20Hunter%20Valley.jpg' width='81' height='69'>
                        </div>
                        <div class='content'>6D5N The Legendary Pacific Coast Route</div>
                        <br />
                        <div class='subtitle'>Sydney – Hunter Valley – Port Stephens – Coffs Harbour – Kingscliff – Gold Coast</div>
                    </a>
                    <div class='clearBoth'></div>
                </div>
                <div class='clearBoth'></div>
            </div>

            <div class='bottom'></div>
        </div>


    </div>
    <div class='clearBoth marginTop10' style='height: 11px'></div>
    <script type='text/javascript'>
        $(document).ready(function () {
            $('#gt_from, #gt_to').datepicker({ dateFormat: 'dd-mm-yy', changeMonth: true, changeYear: true });
            $('.divGroupTourSearchMsg').corner("5px");
            homeSearchGrouptoursRefreshCity2(8);
        });
</script>

    <div class='clearBoth' style='height: 11px'>&nbsp;</div>

    <div id='tcWrapper'>
        <a href='http://flightinfo.asia1.com.sg/' target='_blank'>
            <img src='img/leftMenu/flight-schedule-hp.gif'></a>
        <a href='http://www.natastravel.com/traveltips.aspx' target='_blank'>
            <img src='img/leftMenu/travel-tips-hp.gif'></a>
        <a href='http://finance.yahoo.com/currency/convert?amt=1&amp;from=SGD&amp;to=USD&amp;submit=Convert' target='_blank'>
            <img src='img/leftMenu/currency-converter-hp.gif'></a>
        <a href='http://www.mfa.gov.sg/content/mfa/consular_information/for_singapore_citizens/visa_information.html' target='_blank'>
            <img src='img/leftMenu/visa-info-hp.gif'></a>
        <a href='http://www.worldweather.org/' target='_blank'>
            <img src='img/leftMenu/world-weather-hp.gif'></a>
        <a href='http://www.timeanddate.com/worldclock/' target='_blank'>
            <img src='img/leftMenu/world-clock-hp.gif'></a>
    </div>

    <div class='clearBoth' style='height: 11px'>&nbsp;</div>

    <div class='frameWhyCtc'>
        <div class=''>

            <div class='floatLeft'>
                <h2 class='orangeTitle' style='margin-top: 25px;'>Why CTC Travel?</h2>
                Jointly accredited with: &nbsp;&nbsp;
		
            </div>
            <a href='#' class='displayBlock floatLeft' style='margin-top: 25px; margin-left: 20px;'>
                <img src='img/whyctc/natas.gif'></a>
            <!--<a href='#' class='displayBlock' style='margin-top:5px'><img src='img/whyctc/casetrust.gif'></a>-->
            <a href='#' class='displayBlock floatLeft' style='margin-left: 25px; margin-top: 19px'>
                <img src='img/sac2.gif'></a>
            <a href='#' class='displayBlock floatLeft' style='margin-left: 25px; margin-top: 19px'>
                <img src='img/singapore-logo2.gif'></a>


            <a href='http://www.hitwise.com/sg/resources/top-ten-award?action=pickupcode&amp;market=sg&amp;sDomain=www.ctc.com.sg&amp;iDate=201002&amp;iCatnum=373&amp;iImageID=white&amp;iType=10&amp;Cal=&amp;semi=1' class='displayBlock floatLeft' style='margin-left: 5px; margin-top: 9px; margin-left: 30px;' target='_blank'>
                <img src='img/whyctc/hitwise.png'></a>
            <a href='../www.superbrands.com/sg/pdfs/CSB_SG_FA_CTC.pdf' class='displayBlock floatLeft' style='margin-left: 5px; margin-top: 9px; margin-left: 30px;' target='_blank'>
                <img src='img/whyctc/sb_sg11.png'></a>

            <div class='clearBoth'></div>
        </div>

        <div>
            <span style='color: #000'><b>Commitment</b></span><br />
            We follow through promises we make to our people, our clients and our partners<br />
            <span style='color: #000'><b>Trust</b></span><br />
            We encourage constructive identification of problems and maintain confidentiality of 
			sensitive information<br />
            <span style='color: #000'><b>Customer Service</b></span><br />
            Customer Service is the focal point of our organization. We relentlessly search for 
			and create new ways to improve our products and services to clients 
	
        </div>

    </div>

    <!--div class='bottomMicrositeBannerWrapper'>
		<div class='frameMicrosite floatLeft'><a href='#' target='_blank'><img src='img/microsite-bottom-banner/routes-of-aus.jpg'></a></div>
		<div class='frameMicrosite floatLeft' style='margin-left:14px'><a href='#' target='_blank'><img src='img/microsite-bottom-banner/fly-free-for-health.jpg'></a></div>
		<div class='frameMicrosite floatLeft' style='margin-left:14px'><a href='#' target='_blank'><img src='img/microsite-bottom-banner/asian-cities.jpg'></a></div>
		<div class='clearBoth'></div>
	</div-->
    <!--
	<div class='bottomBannerWrapper'>
		<div class='frameBottomBanner floatLeft'><a href='http://www.artgalleryhotels.com/' target='_blank'><img src='img/bottom-banner/gallery-suite.gif'></a></div>
		-->
    <!--div class='frameBottomBanner floatLeft' style='margin-left:11px'><a href='http://www.connectstourism.com/' target='_blank'><img src='img/bottom-banner/c1.gif'></a></div>
		<div class='frameBottomBanner floatLeft' style='margin-left:11px'><a href='http://www.connectshotel.com/' target='_blank'><img src='img/bottom-banner/c2.gif'></a></div>
		<div class='frameBottomBanner floatLeft' style='margin-left:11px'><a href='#' target='_blank'><img src='img/bottom-banner/c3.gif'></a></div-->
    <!--div class='frameBottomBanner floatLeft' style='margin-left:11px'><img src='img/bottom-banner/c1.gif'></div>
		<div class='frameBottomBanner floatLeft' style='margin-left:11px'><img src='img/bottom-banner/c2.gif'></div>
		<div class='frameBottomBanner floatLeft' style='margin-left:11px'><img src='img/bottom-banner/c3.gif'></div>
		<div class='clearBoth'></div>
	</div-->
    <br />
    <br />
    </div>
	</div>
	

    <div id='footerWrapper'>
        <div class='content'>
            <div class='floatLeft'>
                <img src='img/footer-rounded-frame-left.gif'>
            </div>
            <div class='floatLeft' style='width: 954px; padding-top: 8px; line-height: 1.1em'>
                <a href='index.html'>Home</a>
                &nbsp;&nbsp;|&nbsp;&nbsp;
			 
                <a href='about.html'>About Us</a>
                &nbsp;&nbsp;|&nbsp;&nbsp;
			 
                <!--a href='http://www.ctc.com.sg/press.php'>Media Advisory</a>
			  &nbsp;&nbsp;|&nbsp;&nbsp;-->
                <a href='career.html'>Careers</a>
                &nbsp;&nbsp;|&nbsp;&nbsp;
			 
                <a href='contact.html'>Contact Us</a>
                &nbsp;&nbsp;|&nbsp;&nbsp;
			 
                <a href='tnc.html'>Terms &amp; Conditions</a>

                <br />

                &copy; Copyright 2011. Commonwealth Travel Service Corporation Pte Ltd. All Rights Reserved.<br />
                Wholly Owned by CTC Tourism Holdings<br />


            </div>
            <div class='floatLeft'>
                <img src='img/footer-rounded-frame-right.gif'>
            </div>
            <div class='clearBoth'></div>
        </div>
    </div>
    </form>
</body>
</html>
