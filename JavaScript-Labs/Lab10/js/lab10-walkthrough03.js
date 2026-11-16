/* try the different advanced selection calls here */
/* Bước 2 & 3: Chọn ô password (đã comment lại theo yêu cầu bước 3) */
// $(':password').css('background-color', 'yellow');

/* Bước 4: Chọn phần tử con thứ 4n bên trong thẻ <form> và tô nền vàng */
$('form :nth-child(4n)').css('background-color', 'yellow');

/* Bước 5: Chọn các thẻ <label> có chứa từ "word" và đổi màu chữ sang đen */
$('label:contains("word")').css("color", "black");
