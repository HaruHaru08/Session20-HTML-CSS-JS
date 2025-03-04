let number=+prompt("Nhập một số nguyên bất kỳ:");
let result="";
if (number<0|| isNaN(number)===true) {
    alert("Dữ liệu nhập vào không hợp lệ");
}else{
    for (let i = 1; i <=number; i++) {
        if (i%5===0) {
            result+=i;
            result+=",";
        }
    }
    if (result.length > 0) {
        result = result.slice(0, -1);
    }
    alert(`Các số chia hết cho 5 từ 1 đến ${number} là : ${result}`);
}
