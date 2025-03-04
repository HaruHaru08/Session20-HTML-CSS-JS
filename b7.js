let number = +prompt("Nhập một số nguyên bất kỳ:");
let result="";
if (number < 0 || isNaN(number)) {
    alert("Không hợp lệ");
} else {
    let f1 = 1;
    let f2 = 1;
    let fN;
    result += f1
    if (number > 1) {
        result += f2
    }
    for (let i = 2; i < number; i++) {
        fN = f1 + f2;
        result += fN;
        f1 = f2;
        f2 = fN;
    }
}
alert(result);