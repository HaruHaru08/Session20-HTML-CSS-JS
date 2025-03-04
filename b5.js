let firstNumber=+prompt("Nhập số thứ nhất");
let secondNumber=+prompt("Nhập số thứ hai")
let exponential=1;
if (isNaN(firstNumber)===true ||isNaN(secondNumber)) {
    alert("Dữ liệu nhập vào không hợp lệ");
}else{
    for (let i = 0; i <secondNumber; i++) {
        exponential*=firstNumber;
    }
    alert(exponential);
}
