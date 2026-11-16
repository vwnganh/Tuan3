
/* add code here */
var daysOfWeek = new Array("Mon", "Tues", "Wed", "Thur", "Fri");
daysOfWeek.push("Sat");
daysOfWeek.unshift("Sun");

// Đã comment dòng in mảng thô theo yêu cầu bước 5
// document.write(daysOfWeek + "<br/>");

document.write("<table border=1>");
document.write("<tr>");
for (var i = 0; i < daysOfWeek.length; i++) {
   var day;
   if (daysOfWeek[i].length < 4)
      day = daysOfWeek[i];
   else
      day = "<em>" + daysOfWeek[i] + "</em>";
   document.write("<th>" + day + "</th>");
}
document.write("</tr>");

// Bước 8: Vòng lặp in các ngày từ 1 đến 30 (7 ngày xuống dòng 1 lần)
for (var d = 1; d <= 30; d++) {
   if (d % 7 == 1) {
      document.write("<tr>");
   }
   document.write("<td>" + d + "</td>");
   if (d % 7 == 0) {
      document.write("</tr>");
   }
}
document.write("</tr>");
document.write("</table>");
