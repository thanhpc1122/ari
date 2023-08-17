var UserName = "Nguyễn Tấn Thành";
var NumberPhone = "0366304131";
var tp = "Bình Phước";

document.getElementById("hover1-loc").onclick = function (event) {
    event.preventDefault();
  let City = document.getElementById("gender");
  let checkInput = document.getElementsByClassName("custom-checkbox")[0].checked; // Chỉ lấy phần tử đầu tiên vì hàm trả về mảng các phần tử

  let inputText = document.getElementById("tell").value;

  if (City.value === tp && inputText === NumberPhone && checkInput) {
    document.getElementById("js-dan").innerHTML = UserName ;
    document.getElementById("js-copy").innerHTML = " 11A7 (Năm học: 2023-2024), Trường THPT TX Phước Long - Thị xã Phước Long - Bình Phước";
    } else {
    // Xử lý logic khi không thỏa mãn điều kiện
    // Ví dụ: Hiển thị thông báo lỗi
    document.getElementById("js-dan").innerHTML = "Á á..";
    document.getElementById("js-copy").innerHTML = "";
  }
};


