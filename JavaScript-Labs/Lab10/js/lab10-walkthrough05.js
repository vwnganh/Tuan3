/* put your DOM code here */
$(function () {
    // Tạo một phần tử DOM <img> mới bằng jQuery
    var img = $('<img src="images/art/thumbs/13030.jpg" >');

    // Truy xuất khung .panel
    var panel = $('.panel');

    // Chèn phần tử ảnh mới vào phía trước khung .panel (Bước 8)
    img.insertBefore(panel);
});
