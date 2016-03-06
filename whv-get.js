var passportNumber = 'E9090980'; //passport number
var cboTitle = 3; //MR = 1 MRS = 2 MS =3
var FName = 'Jinun';
var LName = 'Kim';
var mobileNumber = '1899090980';
var email = 'wrgupb89307@chacuo.net';
var city = 2; //2 = shanghai , 1 = beijeng ,3 = guangzhou , 4 = chengdu
var password = 'fdsfads324789470fas6';



var w = new Array();
var windowNum = 10;
var whv = 0;


//recognize captcha
var ocrRequest = function(imageUrl, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://lab.ocrking.com/json?url=" + imageUrl + "&service=OcrKingForPhoneNumber&language=eng&charset=7&apiKey=e9df62584330aacf33jL6PpxzfKH7VFrLAiIqIn8AXi5TzuBy6QPUhQE5PIgmTVb2GuI0t2HO7&type=", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      // JSON.parse 将不会执行攻击者的脚本。
      var resp = JSON.parse(xhr.responseText);
      callback(resp.ResultList.Item.Result);
    }
  }
  xhr.send();
}

var killCaptcha = function(callback) {
  var c = $('#ctl00_plhMain_trMyCaptcha');
  var imageName = c.children(1).children(1).children(0).children(2).children(0).attr('src');
  if (imageName == undefined) {
    callback();
  }
  imageUrl = "https://www.visaservices.org.in/DIAC-China-Appointment/AppScheduling/" + imageName;
  var enterCaptcha = function(result) {
    c.children(1).children(1).children(0).children(3).children(0).val(result);
    callback();
  }
  ocrRequest(imageUrl, enterCaptcha);
}



var whv_get = function() {
  //who am i
  //im a deamo
  if (window.location.href == 'https://www.visaservices.org.in/') {
    //insert email box
    $("body").append("这里输入你邮件里收到的连接：<input id='vaddress'></input>");
      //initial
    if ($("#vaddress").val().length > 0)
    {
        for (i = 0; i < windowNum; i++) {
            w[i] = window.open($("#vaddress").val());
        }
    }
    else {
        for (i = 0; i < windowNum; i++) {
            w[i] = window.open('https://www.visaservices.org.in/DIAC-China-Appointment/AppScheduling/AppWelcome.aspx?p=Gta39GFZnstZVCxNVy83zTlkvzrXE95fkjmft28XjNg%3d');
        }
    }
    //run deamo function in interval time

    setInterval(deamo, 5000)
  }
  //im a monitor
  else {
    //where im i?
    monitor();
  }
}

function deamo() {
  //see if any window dead
  for (i = 0; i < windowNum; i++) {
    try {
      //is closed?
      if (w[i].closed) {
          console.log("window " + i + " closed");
          if ($("#vaddress").val().length > 0) {
              w[i] = window.open($("#vaddress").val());
          }
          else {
              w[i] = window.open('https://www.visaservices.org.in/DIAC-China-Appointment/AppScheduling/AppWelcome.aspx?p=Gta39GFZnstZVCxNVy83zTlkvzrXE95fkjmft28XjNg%3d');
          }
      }
      //is connection failed?
      var href = w[i].location.href;
    } catch (err) {
      console.log("window href error");
      try {
        w[i].close();
      } catch (error) {}
      console.log("window " + i + " closed on href error");
      if ($("#vaddress").val().length > 0) {
          w[i] = window.open($("#vaddress").val());
      }
      else {
          w[i] = window.open('https://www.visaservices.org.in/DIAC-China-Appointment/AppScheduling/AppWelcome.aspx?p=Gta39GFZnstZVCxNVy83zTlkvzrXE95fkjmft28XjNg%3d');
      }
    }
  }
}

function monitor() {
  //page one
  var yy = document.getElementById('ctl00_plhMain_lnkSchApp');
  if (yy != null) {
    setTimeout(function() {
      window.close();
    }, 100000);
    yy.click();
  }
  //page two , select position                            

  var vac = document.getElementById('ctl00_plhMain_cboVAC');
  if (vac != null) {
    if (vac.options.length < 1) {
      //alert(vac.options.length);
      window.close();
    }
    vac.selectedIndex = city; //3 = guangzhou
    setInterval(function() {
      killCaptcha(function(){document.getElementById('ctl00_plhMain_btnSubmit').click()})
    }, 2000);
  }
  //page three , select catagory

  var catagory = document.getElementById('ctl00_plhMain_cboVisaCategory');
  if (catagory != null) {

    //select general for test
    //catagory.selectedindex = 1;
    //setinterval(function() {
    //    killcaptcha(function(){document.getelementbyid('ctl00_plhmain_btnsubmit').click()})
    //}, 2000);


      // //find whv
      if (catagory.options.length > 0) {
          for (i = 1; i < catagory.options.length; i++) {
              if (catagory.options[i].text.indexOf('work') > -1 || catagory.options[i].text.indexOf('whv') > -1 || catagory.options[i].text.indexOf('WHV') > -1 || catagory.options[i].text.indexOf('Work') > -1) {
                  catagory.selectedIndex = i;
                  whv = 1;
                  //window.open('http://blog.ilc.edu.tw/blog/gallery/6557/6557-1013015.mp3');
                  setInterval(function () {
                      killCaptcha(function () {
                          document.getElementById('ctl00_plhMain_btnSubmit').click()
                      })
                  }, 2000);
                  setInterval(function () {
                      if (document.getElementById('ctl00_plhMain_lblMsg').textContent.charAt(0) == '无') {
                          //alert('no date');
                          window.close();
                      }
                  }, 3000);
              }
          }
          if (whv == 0) {
              //alert('whv = 0');
              window.close();
          }
      } else {
          //alert('no whv');
       window.close();
       //no whv , refresh
       //window.location.href = 'https://www.visaservices.org.in/DIAC-China-Appointment/AppScheduling/AppWelcome.aspx?p=Gta39GFZnstZVCxNVy83zTlkvzrXE95fkjmft28XjNg%3d';
       //redirectToPage(“https://www.visaservices.org.in/DIAC-China-Appointment/AppScheduling/AppWelcome.aspx?p=Gta39GFZnstZVCxNVy83zTlkvzrXE95fkjmft28XjNg%3d”);
     }
  }

    //page new, input email and password
  if (document.getElementById('ctl00_plhMain_txtEmailID') != null) {
      document.getElementById('ctl00_plhMain_txtEmailID').value = email;
      document.getElementById('ctl00_plhMain_txtPassword').value = password;
      document.getElementById('ctl00_plhMain_txtCnfPassword').value = password;
      setInterval(function () {
          killCaptcha(function () { document.getElementById('ctl00_plhMain_ImageButton1').click() })
      }, 4000);
  }



  //page four , input profile
  var passportNo = document.getElementById('ctl00_plhMain_repAppVisaDetails_ctl01_tbxPassportNo');
  if (passportNo != null) {
    //window.open('http://blog.ilc.edu.tw/blog/gallery/6557/6557-1013015.mp3');
    passportNo.value = passportNumber;
    document.getElementById('ctl00_plhMain_repAppVisaDetails_ctl01_cboTitle').selectedIndex = cboTitle;
    document.getElementById('ctl00_plhMain_repAppVisaDetails_ctl01_tbxFName').value = FName;
    document.getElementById('ctl00_plhMain_repAppVisaDetails_ctl01_tbxLName').value = LName;
    document.getElementById('ctl00_plhMain_repAppVisaDetails_ctl01_tbxMobileNumber').value = mobileNumber;
    document.getElementById('ctl00_plhMain_repAppVisaDetails_ctl01_tbxEmailAddress').value = email;
    document.getElementById('ctl00_plhMain_repAppVisaDetails_ctl01_tbxSTDCode').value = '86';
    setInterval(function () {
        imgUrl = $("img")[0].currentSrc;
        ocrRequest(imgUrl, function (result) {
            $("[name='ctl00$plhMain$mycaptchacontrol1']").val(result);
            document.getElementById('ctl00_plhMain_btnSubmit').click();
        });
      //killCaptcha(function(){document.getElementById('ctl00_plhMain_btnSubmit').click()});
    }, 2000);
  }
  //page five , choosing a date

   var sign = document.getElementById('ctl00_plhMain_cldAppointment');
   if (sign != null)
   {
       killCaptcha(function () { });
   }
  // //page six , choosing a time

   s = document.getElementById('ctl00_plhMain_gvSlot');
  if (s != null)
  {
      killCaptcha(function () { });
    // var t = document.querySelectorAll('#ctl00_plhMain_gvSlot tbody td a');
     // alert(t[t.length - 1].href);
  //   window.location.href = t[t.length - 1].href;
   }
  // //page se7en , alert!

  // if (document.title.charAt(0) == '打')
  // {
  //   window.open('http://blog.ilc.edu.tw/blog/gallery/6557/6557-1013015.mp3');
  // }
}

window.onload = whv_get;