// define functions in this file
// Biến toàn cục (global scope) theo bước 8
var boxClass = 'movingDiv';

function outputBox(num) {
   // Giữ từ khóa var để biến box có phạm vi cục bộ (bước 9)
   // (Nếu thử bước 10 thì xóa tạm chữ var trước box rồi phục hồi lại)
   var box = "<div class='" + boxClass + "' id='div" + num + "'>";
   box += "This is div " + num;
   box += "</div>";
   return box;
}
