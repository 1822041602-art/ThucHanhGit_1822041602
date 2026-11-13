
// Lấy phần tử nút chào mừng
const welcomeButton = document.getElementById("welcomeButton");

// Xử lý sự kiện khi nhấn nút
welcomeButton.addEventListener("click", function () {
    alert("Xin chào! Tôi là Nguyễn Hồng Phúc - MSSV 1822041602");
});

// Hiển thị năm hiện tại ở cuối trang
document.getElementById("year").textContent = new Date().getFullYear();
