/* code goes here */
function simpleHandler(event) {
    var content = document.getElementById("content");
    if (btn.innerHTML == "Hide") {
        btn.innerHTML = "Show";
        content.className = "makeItDisappear";
        // Ẩn hẳn phần tử sau 1000 millisecond (1 giây)
        setTimeout(function() {
            content.style.display = "none";
        }, 1000);
    } else {
        btn.innerHTML = "Hide";
        content.style.display = "block";
        // Khôi phục hiệu ứng hiển thị sau 500 millisecond
        setTimeout(function() {
            content.className = "makeItNormal";
        }, 500);
    }
}

var btn = document.getElementById("testButton");
btn.addEventListener("click", simpleHandler);

var img = document.getElementById("mainImage");
/* Đổi ảnh sang thang độ xám khi di chuột vào */
img.addEventListener("mouseover", function(event) {
    img.className = "makeItGray";
});

/* Trả ảnh về màu gốc khi rời chuột ra */
img.addEventListener("mouseout", function(event) {
    img.className = "makeItNormal";
});
