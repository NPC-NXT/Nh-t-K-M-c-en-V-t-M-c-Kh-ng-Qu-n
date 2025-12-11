const clues = [
    "Một mảnh ảnh rách dính mực.",
    "Tiếng thì thầm trong máy ghi âm.",
    "Dấu chân nhỏ in trên nền xi măng ướt.",
    "Cuốn sổ mất 3 trang cuối.",
    "Ánh đèn le lói từ căn nhà hoang lúc 3 giờ sáng."
];

const twists = [
    "Ký ức của nhân vật chính không phải của chính anh.",
    "Kẻ tình nghi là người đã báo án.",
    "Cuốn sổ tự viết thêm dòng mới mỗi đêm.",
    "Nhân vật chính quên chính tội lỗi của mình.",
    "Một nhân chứng thực ra không tồn tại."
];

function showClue() {
    const clue = clues[Math.floor(Math.random() * clues.length)];
    document.getElementById("output").innerText = "Manh mối: " + clue;
}

function showTwist() {
    const twist = twists[Math.floor(Math.random() * twists.length)];
    document.getElementById("output").innerText = "Twist: " + twist;
}
