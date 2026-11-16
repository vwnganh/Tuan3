/* try the different selection calls here */
/* Bước 2 - 4: Truy xuất ID, thay đổi giá trị, HTML và thuộc tính */
var msg = $('#msgArea');
msg.val("here is some new text");

$('#first').html("new Title");
$('#msgArea').val("My class is " + $('#msgArea').attr("class"));

/* Bước 5 - 6: Thay đổi CSS cho nhóm thẻ <button> và thẻ <body> */
var buttons = $('button');
buttons.css('background-color', 'red');

var temp = $('body');
temp.css("background-color", "ivory");

/* Bước 7: Thêm class CSS bằng method chaining */
$('.center-icons').addClass('selected');

