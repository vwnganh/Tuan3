/* code goes here */
/* Bước 2 - 4: Truy xuất theo ID và thay đổi nội dung */
var msg = document.getElementById("msgArea");
msg.value = "here is some text";

var title = document.getElementById("pageTitle");
title.innerHTML = "New Title";
document.getElementById("pageTitle").innerHTML = "Even newer title";

/* Bước 5 - 7: innerHTML, innerText và getAttribute */
msg.value = document.getElementById("first").innerHTML;
msg.value = document.getElementById("first").innerText;
msg.value = "My class is " + msg.getAttribute("class");

/* Bước 8 - 9: Truy xuất theo tên thẻ (TagName) */
var elem = document.getElementsByTagName("textarea");
elem[0].value = "selected by tag name";

elem = document.getElementsByTagName("span");
for (var i = 0; i < elem.length; i++) {
    document.getElementById("msgArea").value += "\n" + elem[i].innerText;
}

/* Bước 10: Truy xuất theo tên lớp (ClassName) */
document.getElementById("msgArea").value = "";
var counts = document.getElementsByClassName("count-number");
for (var i = 0; i < counts.length; i++) {
    document.getElementById("msgArea").value += "\n" + counts[i].innerText;
}

/* Bước 11 - 12: querySelector và querySelectorAll */
var ps = document.querySelector("#first p");
document.getElementById("msgArea").value = ps.innerHTML;

ps = document.querySelectorAll("#first p");
for (var i = 0; i < ps.length; i++) {
    document.getElementById("msgArea").value += ps[i].innerHTML + "\n";
}

/* Bước 13 - 14: Thay đổi thuộc tính class và style trực tiếp */
document.getElementById("msgArea").setAttribute("class", "hidden");
document.getElementById("features").style.backgroundColor = "green";
