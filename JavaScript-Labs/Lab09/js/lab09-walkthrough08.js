/* Thiết lập các trình lắng nghe sự kiện trên trang */
function init() {
    document.getElementById("sampleForm").addEventListener("submit", checkForEmptyFields);
}

/* Khởi tạo trình xử lý sau khi trang đã tải xong */
window.addEventListener("load", init);

/* Kiểm tra các trường nhập liệu không được để trống */
function checkForEmptyFields(e) {
    // Ẩn vùng thông báo lỗi trước khi kiểm tra lại
    var errorArea = document.getElementById("errors");
    errorArea.className = "hidden";

    var cssSelector = "input[type=text], input[type=password]";
    var fields = document.querySelectorAll(cssSelector);

    // Duyệt qua các ô input để tìm ô bị bỏ trống
    var fieldList = [];
    for (var i = 0; i < fields.length; i++) {
        if (fields[i].value == null || fields[i].value == "") {
            // Ngăn chặn gửi form nếu có trường bị trống
            e.preventDefault();
            fieldList.push(fields[i]);
        }
    }

    // Tạo và hiển thị thông báo lỗi ra vùng #errors
    var msg = "The following fields can't be empty: ";
    if (fieldList.length > 0) {
        for (var i = 0; i < fieldList.length; i++) {
            msg += fieldList[i].id + ",";
        }
        errorArea.innerHTML = "<p>" + msg + "</p>";
        errorArea.className = "visible";
    }
}