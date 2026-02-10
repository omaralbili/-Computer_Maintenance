function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Vd5SRUEL1P":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var points = player.GetVar("MyPoints"); 
var subject = "نتيجة الاختبار";
var body = "الدرجات اللي حصلت عليها: " + points + " نقطة" 
var email = "prof.wessam2015@gmail.com";
window.location.href = "mailto:" + email + 
    "?subject=" + encodeURIComponent(subject) + 
    "&body=" + encodeURIComponent(body);

}

