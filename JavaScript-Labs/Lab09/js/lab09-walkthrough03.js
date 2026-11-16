/* code goes here */
/* Tạo phần tử <p> mới và chèn vào cuối div#first */
var first = document.getElementById("first");
var text = document.createTextNode("this is programmatically created");
var p = document.createElement("p");
p.appendChild(text);
first.appendChild(p);

/* Xóa phần tử li#deleteThisOne khỏi danh sách ul#iconList */
var icons = document.getElementById("iconList");
icons.removeChild(document.getElementById("deleteThisOne"));