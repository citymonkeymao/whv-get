

var passportNumber = 'E9090980'; //passport number
var cboTitle = 3; //MR = 1 MRS = 2 MS =3
var FName = 'Jinun';
var LName = 'Kim';
var mobileNumber = '189xxxxxx';
var email = 'KimJinun@nuclear.com';
var city = 3; //2 = shanghai , 1 = beijeng ,3 = guangzhou , 4 = chengdu
var w = new Array();
var windowNum = 10;
var whv = 0;
window.onload = function () {
  //who am i
  //im a deamo
  if (window.location.href == 'https://www.visaservices.org.in/')
  {
    //initial
    for (i = 0; i < windowNum; i++)
    {
      w[i] = window.open('https://www.visaservices.org.in/DIAC-China-Appointment/AppScheduling/AppWelcome.aspx?p=Gta39GFZnstZVCxNVy83zTlkvzrXE95fkjmft28XjNg%3d');
    }
    //run deamo function in interval time

    setInterval(deamo, 5000)
  }
  //im a monitor
   else
  {
    //where im i?
    monitor();
  }
}
function deamo()
{
  //see if any window dead
  for (i = 0; i < windowNum; i++)
  {
    //is closed?
    if (w[i].closed)
    {
      w[i] = window.open('https://www.visaservices.org.in/DIAC-China-Appointment/AppScheduling/AppWelcome.aspx?p=Gta39GFZnstZVCxNVy83zTlkvzrXE95fkjmft28XjNg%3d');
    }
    //is connection failed?

    try {
      var href = w[i].location.href;
    } 
    catch (err)
    {
      w[i].close();
      w[i] = window.open('https://www.visaservices.org.in/DIAC-China-Appointment/AppScheduling/AppWelcome.aspx?p=Gta39GFZnstZVCxNVy83zTlkvzrXE95fkjmft28XjNg%3d');
    }
  }
}
function monitor()
{
  //page one
  var yy = document.getElementById('ctl00_plhMain_lnkSchApp');
  if (yy != null)
  {
    setTimeout(function () {
      window.close();
    }, 100000);
    yy.click();
  }
  //page two , select position                            

  var vac = document.getElementById('ctl00_plhMain_cboVAC');
  if (vac != null)
  {
    if (vac.options.length < 1)
    {
      //alert(vac.options.length);
      window.close();
    }
    vac.selectedIndex = city; //3 = guangzhou
    document.getElementById('ctl00_plhMain_btnSubmit').click();
  }
  //page three , select catagory

  var catagory = document.getElementById('ctl00_plhMain_cboVisaCategory');
  if (catagory != null)
  {
    // catagory.selectedIndex = 1;
    // document.getElementById('ctl00_plhMain_btnSubmit').click();
    if (catagory.options.length > 0)
    {
      for (i = 1; i < catagory.options.length; i++)
      {
        if (catagory.options[i].text.indexOf('work') > - 1 || catagory.options[i].text.indexOf('whv') > - 1 || catagory.options[i].text.indexOf('WHV') > - 1 || catagory.options[i].text.indexOf('Work') > - 1)
        {
          catagory.selectedIndex = i;
          whv = 1;
          //window.open('http://blog.ilc.edu.tw/blog/gallery/6557/6557-1013015.mp3');
          document.getElementById('ctl00_plhMain_btnSubmit').click();
          setInterval(function () {
            if (document.getElementById('ctl00_plhMain_lblMsg').textContent.charAt(0) == '无')
            {
              //alert('no date');
              window.close();
            }
          }, 3000);
        }
      }
     if(whv == 0)
       {
         //alert('whv = 0');
        window.close();
       }
    } 
    else
    {
      //alert('no whv');
      window.close();
      //no whv , refresh
      //window.location.href = 'https://www.visaservices.org.in/DIAC-China-Appointment/AppScheduling/AppWelcome.aspx?p=Gta39GFZnstZVCxNVy83zTlkvzrXE95fkjmft28XjNg%3d';
      //redirectToPage(“https://www.visaservices.org.in/DIAC-China-Appointment/AppScheduling/AppWelcome.aspx?p=Gta39GFZnstZVCxNVy83zTlkvzrXE95fkjmft28XjNg%3d”);
    }
  }
  //page four , input profile

  var passportNo = document.getElementById('ctl00_plhMain_repAppVisaDetails_ctl01_tbxPassportNo');
  if (passportNo != null)
  {
    //window.open('http://blog.ilc.edu.tw/blog/gallery/6557/6557-1013015.mp3');
    passportNo.value = passportNumber;
    document.getElementById('ctl00_plhMain_repAppVisaDetails_ctl01_cboTitle').selectedIndex = cboTitle;
    document.getElementById('ctl00_plhMain_repAppVisaDetails_ctl01_tbxFName').value = FName;
    document.getElementById('ctl00_plhMain_repAppVisaDetails_ctl01_tbxLName').value = LName;
    document.getElementById('ctl00_plhMain_repAppVisaDetails_ctl01_tbxMobileNumber').value = mobileNumber;
    document.getElementById('ctl00_plhMain_repAppVisaDetails_ctl01_tbxEmailAddress').value = email;
    document.getElementById('ctl00_plhMain_repAppVisaDetails_ctl01_tbxSTDCode').value = '86';
    document.getElementById('ctl00_plhMain_btnSubmit').click();
  }
  //page five , choosing a date

  // var sign = document.getElementById('ctl00_plhMain_cldAppointment');
  // if (sign != null)
  // {
  //   var tds = document.querySelectorAll('#ctl00_plhMain_cldAppointment tbody td a');
  //   window.location.href = tds[tds.length - 1].href;
  // }
  // //page six , choosing a time

  // s = document.getElementById('ctl00_plhMain_gvSlot');
  // if (s != null)
  // {
  //   var t = document.querySelectorAll('#ctl00_plhMain_gvSlot tbody td a');
  //   // alert(t[t.length - 1].href);
  //   window.location.href = t[t.length - 1].href;
  // }
  // //page se7en , alert!

  // if (document.title.charAt(0) == '打')
  // {
  //   window.open('http://blog.ilc.edu.tw/blog/gallery/6557/6557-1013015.mp3');
  // }
}
